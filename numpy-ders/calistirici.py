"""Kullanıcı kodunu ayrı bir süreçte çalıştıran yardımcı.

İki modu vardır:
    python calistirici.py repl     -> Kalıcı terminal oturumu (satır satır JSON alır/verir)
    python calistirici.py kontrol  -> Bir alıştırmayı tek seferde çalıştırıp kontrol eder

Kod sunucudan ayrı bir süreçte çalıştığı için sonsuz döngü gibi durumlarda
sunucu bu süreci öldürüp yeniden başlatabilir.
"""

import ast
import builtins
import contextlib
import io
import json
import sys
import traceback

import numpy as np

DOSYA_ADI = "<girdi>"


def _input_yok(*_):
    raise RuntimeError("Bu ortamda input() kullanılamaz.")


def hata_metni(hata):
    tb = hata.__traceback__
    # Bu dosyaya ait çerçeveleri atla, sadece kullanıcı kodundan itibaren göster
    while tb is not None and tb.tb_frame.f_code.co_filename != DOSYA_ADI:
        tb = tb.tb_next
    return "".join(traceback.format_exception(type(hata), hata, tb))


def calistir(kod, ad_alani, yankila=False):
    """Kodu çalıştırır, (çıktı, hata) döndürür.

    yankila=True ise Python terminali gibi son ifadenin değerini de yazdırır.
    """
    cikti = io.StringIO()
    hata = None
    with contextlib.redirect_stdout(cikti), contextlib.redirect_stderr(cikti):
        try:
            agac = ast.parse(kod, DOSYA_ADI, "exec")
            son_ifade = None
            if yankila and agac.body and isinstance(agac.body[-1], ast.Expr):
                son_ifade = ast.Expression(agac.body.pop().value)
            exec(compile(agac, DOSYA_ADI, "exec"), ad_alani)
            if son_ifade is not None:
                deger = eval(compile(son_ifade, DOSYA_ADI, "eval"), ad_alani)
                if deger is not None:
                    print(repr(deger))
        except BaseException as h:  # noqa: B036 - kullanıcı kodu her şeyi fırlatabilir
            hata = hata_metni(h)
    return cikti.getvalue(), hata


def yeni_ad_alani():
    return {"__name__": "__main__", "np": np}


def repl_modu():
    kanal = sys.stdout
    ad_alani = yeni_ad_alani()
    for satir in sys.stdin:
        istek = json.loads(satir)
        if istek.get("sifirla"):
            ad_alani = yeni_ad_alani()
            cikti, hata = "", None
        else:
            cikti, hata = calistir(istek["kod"], ad_alani, yankila=True)
        kanal.write(json.dumps({"cikti": cikti, "hata": hata}) + "\n")
        kanal.flush()


def kontrol_modu():
    istek = json.loads(sys.stdin.read())

    kullanici = yeni_ad_alani()
    cikti, hata = calistir(istek["kod"], kullanici)

    cozum = yeni_ad_alani()
    beklenen_cikti, _ = calistir(istek["cozum"], cozum)

    kapsam = {"np": np, "u": kullanici, "r": cozum,
              "cikti": cikti, "beklenen_cikti": beklenen_cikti}
    sonuclar = []
    for ifade, aciklama in istek["kontroller"]:
        # Kontroller kullanıcı fonksiyonlarını çağırabilir; yazdırdıkları JSON çıktısına karışmasın
        try:
            with contextlib.redirect_stdout(io.StringIO()):
                gecti = bool(eval(ifade, kapsam))
        except Exception:
            gecti = False
        sonuclar.append({"aciklama": aciklama, "gecti": gecti})

    json.dump({
        "cikti": cikti,
        "hata": hata,
        "beklenen_cikti": beklenen_cikti,
        "kontroller": sonuclar,
        "basarili": hata is None and all(s["gecti"] for s in sonuclar),
    }, sys.__stdout__)


if __name__ == "__main__":
    builtins.input = _input_yok
    if sys.argv[1:] == ["repl"]:
        repl_modu()
    else:
        kontrol_modu()
