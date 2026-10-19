"""SE 422 Python & Veri Bilimi ders uygulaması — sunucu

Sadece Python standart kütüphanesi ile çalışır. Kodlar ise NumPy kurulu olan
.venv içindeki Python ile ayrı bir süreçte çalıştırılır.

Çalıştırmak için:
    python3 app.py
Sonra tarayıcıda http://localhost:8001 adresini açın.
"""

import json
import mimetypes
import select
import subprocess
import sys
import tempfile
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import alistirmalar

PORT = 8001
ZAMAN_ASIMI = 10  # saniye
KLASOR = Path(__file__).resolve().parent
STATIC = KLASOR / "static"
CALISTIRICI = str(KLASOR / "calistirici.py")
SINAV = str(KLASOR / "sinav.py")
VARYANT = str(KLASOR / "varyant.py")

# Kullanıcı kodu (dosya örnekleri dahil) proje klasörünü kirletmesin diye geçici klasörde çalışır
CALISMA = Path(tempfile.gettempdir()) / "se422-calisma"
CALISMA.mkdir(exist_ok=True)

VENV_PYTHON = KLASOR / ".venv" / "bin" / "python"
PYTHON = str(VENV_PYTHON) if VENV_PYTHON.exists() else sys.executable


class Terminal:
    """Değişkenleri komutlar arasında koruyan kalıcı Python oturumu."""

    def __init__(self):
        self.kilit = threading.Lock()
        self.surec = None

    def _baslat(self):
        self.surec = subprocess.Popen(
            [PYTHON, CALISTIRICI, "repl"],
            stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True, bufsize=1, cwd=CALISMA,
        )

    def _durdur(self):
        if self.surec is not None:
            self.surec.kill()
            self.surec.wait()
            self.surec = None

    def gonder(self, istek):
        with self.kilit:
            if self.surec is None or self.surec.poll() is not None:
                self._baslat()
            self.surec.stdin.write(json.dumps(istek) + "\n")
            self.surec.stdin.flush()
            hazir, _, _ = select.select([self.surec.stdout], [], [], ZAMAN_ASIMI)
            satir = self.surec.stdout.readline() if hazir else ""
            if not satir:
                self._durdur()
                return {"cikti": "", "hata": f"Kod {ZAMAN_ASIMI} saniyede bitmedi (sonsuz döngü olabilir). "
                                             "Terminal yeniden başlatıldı, değişkenler silindi."}
            return json.loads(satir)


TERMINAL = Terminal()


def kontrol_et(kod, cozum, kontroller):
    istek = json.dumps({"kod": kod, "cozum": cozum, "kontroller": kontroller})
    try:
        sonuc = subprocess.run([PYTHON, CALISTIRICI, "kontrol"], input=istek,
                               capture_output=True, text=True, timeout=ZAMAN_ASIMI, cwd=CALISMA)
    except subprocess.TimeoutExpired:
        return {"hata": f"Kod {ZAMAN_ASIMI} saniyede bitmedi (sonsuz döngü olabilir).",
                "cikti": "", "beklenen_cikti": "", "kontroller": [], "basarili": False}
    if sonuc.returncode != 0:
        return {"hata": sonuc.stderr or "Kod çalıştırılamadı.",
                "cikti": "", "beklenen_cikti": "", "kontroller": [], "basarili": False}
    return json.loads(sonuc.stdout)


def sinav_uret(gorulen):
    sonuc = subprocess.run([PYTHON, SINAV], input=json.dumps({"gorulen": gorulen}),
                           capture_output=True, text=True, timeout=30, cwd=CALISMA)
    if sonuc.returncode != 0:
        return {"hata": sonuc.stderr or "Sınav oluşturulamadı."}
    return {"sorular": json.loads(sonuc.stdout)}


def varyant_uret(konular, adet, gorulen):
    """Pekiştirme için aynı derslerden yeni (benzer) sorular üretir."""
    istek = json.dumps({"konular": konular, "adet": adet, "gorulen": gorulen})
    sonuc = subprocess.run([PYTHON, VARYANT], input=istek, capture_output=True, text=True, timeout=30, cwd=CALISMA)
    if sonuc.returncode != 0:
        return {"hata": sonuc.stderr or "Sorular üretilemedi."}
    return {"sorular": json.loads(sonuc.stdout)}


class Handler(BaseHTTPRequestHandler):
    def _json(self, veri, kod=200):
        govde = json.dumps(veri, ensure_ascii=False).encode("utf-8")
        self.send_response(kod)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(govde)))
        self.end_headers()
        self.wfile.write(govde)

    def _istek_govdesi(self):
        uzunluk = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(uzunluk) or b"{}")

    def do_GET(self):
        if self.path == "/api/alistirmalar":
            self._json(alistirmalar.istemci_icin())
            return

        ad = "index.html" if self.path == "/" else self.path.lstrip("/").removeprefix("static/")
        dosya = (STATIC / ad).resolve()
        if STATIC not in dosya.parents or not dosya.is_file():
            self.send_error(404)
            return
        govde = dosya.read_bytes()
        tur = mimetypes.guess_type(dosya.name)[0] or "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", f"{tur}; charset=utf-8")
        self.send_header("Content-Length", str(len(govde)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(govde)

    def do_POST(self):
        istek = self._istek_govdesi()

        if self.path == "/api/terminal":
            self._json(TERMINAL.gonder({"kod": istek.get("kod", "")}))
        elif self.path == "/api/terminal/sifirla":
            self._json(TERMINAL.gonder({"sifirla": True}))
        elif self.path == "/api/calistir":
            self._json(kontrol_et(istek.get("kod", ""), "", []))
        elif self.path == "/api/varyant":
            konular = [k for k in istek.get("konular", []) if isinstance(k, str)][:40]
            adet = max(1, min(int(istek.get("adet", 6)), 40))
            self._json(varyant_uret(konular, adet, istek.get("gorulen", [])[-4000:]))
        elif self.path == "/api/sinav":
            self._json(sinav_uret(istek.get("gorulen", [])))
        elif self.path == "/api/kontrol":
            alistirma = alistirmalar.bul(istek.get("id"))
            if alistirma is None:
                self._json({"hata": "Alıştırma bulunamadı."}, 404)
                return
            self._json(kontrol_et(istek.get("kod", ""), alistirma["cozum"], alistirma["kontroller"]))
        else:
            self.send_error(404)

    def log_message(self, *_):
        pass


if __name__ == "__main__":
    # Sadece bu bilgisayardan erişilebilir: kullanıcı kodu çalıştırdığı için dışarı açılmamalı
    sunucu = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"SE 422 ders uygulaması çalışıyor: http://localhost:{PORT}")
    print(f"Kodlar şu Python ile çalıştırılıyor: {PYTHON}")
    print("Durdurmak için Ctrl+C")
    try:
        sunucu.serve_forever()
    except KeyboardInterrupt:
        print("\nSunucu durduruldu.")
    finally:
        TERMINAL._durdur()
