"""Benzer soru (varyant) üreticisi.

Pekiştirmede aynı soruyu tekrar sormak yerine, aynı dersten yeni üretilmiş sorular sorulur.
Kaynaklar:
  • sinav.py / sinav_python.py hesaplama şablonları (gerçek kodla cevaplanır)
  • kavram bankası → doğru/yanlış, "hangisi doğru", "hangisi yanlış", "hepsini seç" (çoklu)
  • hata bulma   → hatalı kod gerçekten çalıştırılır, hatanın satırı Python'dan alınır
  • kod tamamlama → boşluğa doğru cevap konup çalıştırılarak hedef çıktı doğrulanır
  • satır sıralama (Parsons) → doğru sıra çalıştırılıp hedef çıktı doğrulanır

    python varyant.py  <<< '{"konular": ["temel-hesap"], "adet": 6, "gorulen": []}'
"""

import contextlib
import hashlib
import io
import random
import sys
import traceback

import numpy as np

import kavramlar
import sinav

DOSYA = "<kod>"


def iz(*parcalar):
    return hashlib.md5("|".join(map(str, parcalar)).encode()).hexdigest()[:12]


def calistir(kod):
    """(çıktı, istisna, hata_satırı) döndürür. Satır 0'dan sayılır."""
    tampon = io.StringIO()
    try:
        derlenmis = compile(kod, DOSYA, "exec")
    except SyntaxError as e:
        return "", e, (e.lineno or 1) - 1
    try:
        with contextlib.redirect_stdout(tampon):
            exec(derlenmis, {"np": np, "__name__": "__main__"})
    except BaseException as e:  # noqa: BLE001
        satir = None
        for cerceve in traceback.extract_tb(e.__traceback__):
            if cerceve.filename == DOSYA:
                satir = cerceve.lineno - 1
        return tampon.getvalue().strip(), e, satir
    return tampon.getvalue().strip(), None, None


# ============================ Kavram bankası ============================

BANKA = {}
for _konu, _d, _y in sinav.KAVRAMLAR:
    BANKA.setdefault(_konu, []).append((_d, _y))
for _konu, _ciftler in kavramlar.EK_KAVRAMLAR.items():
    BANKA.setdefault(_konu, []).extend(_ciftler)


def kavram_dy(konu):
    ciftler = BANKA.get(konu, [])
    if not ciftler:
        return None
    i = random.randrange(len(ciftler))
    dogru = random.random() < 0.5
    d, y = ciftler[i]
    return {"tip": "dogruyanlis", "ifade": d if dogru else y, "dogru": dogru,
            "aciklama": "Bu ifade doğru." if dogru else f"Doğrusu: {d}", "konu": konu, "parmak": f"kdy:{iz(d, dogru)}"}


def kavram_hangisi(konu, dogru_aranan=True):
    ciftler = BANKA.get(konu, [])
    if len(ciftler) < 4:
        return None
    secilen = random.sample(range(len(ciftler)), 4)
    hedef = secilen[0]
    secenekler = []
    for i in secilen:
        d, y = ciftler[i]
        if i == hedef:
            secenekler.append(d if dogru_aranan else y)
        else:
            secenekler.append(y if dogru_aranan else d)
    cevap = secenekler[0]
    random.shuffle(secenekler)
    d, _ = ciftler[hedef]
    return {"tip": "secmeli", "soru": "Hangisi doğrudur?" if dogru_aranan else "Hangisi YANLIŞTIR?",
            "secenekler": secenekler, "dogru": secenekler.index(cevap),
            "aciklama": f"Doğru ifade: {d}" if dogru_aranan else f"Yanlış olan ifadenin doğrusu: {d}",
            "konu": konu, "parmak": f"kh{int(dogru_aranan)}:{iz(*secilen)}"}


def kavram_coklu(konu):
    ciftler = BANKA.get(konu, [])
    if len(ciftler) < 3:
        return None
    secilen = random.sample(range(len(ciftler)), min(4, len(ciftler)))
    dogrular = [random.random() < 0.5 for _ in secilen]
    if not any(dogrular):
        dogrular[random.randrange(len(dogrular))] = True
    secenekler = [ciftler[i][0] if t else ciftler[i][1] for i, t in zip(secilen, dogrular)]
    yanlislar = [ciftler[i][0] for i, t in zip(secilen, dogrular) if not t]
    return {"tip": "coklu", "soru": "Doğru olanların hepsini seç", "secenekler": secenekler,
            "dogrular": [i for i, t in enumerate(dogrular) if t],
            "aciklama": ("Yanlış olanların doğrusu: " + " · ".join(yanlislar)) if yanlislar else "Hepsi doğru.",
            "konu": konu, "parmak": f"kc:{iz(secilen, dogrular)}"}


# ============================ Hata bulma ============================
# Her üretici (satırlar, açıklama) döndürür; hatanın satırı kod çalıştırılarak bulunur.

def _dolgu():
    return random.choice(["toplam = 0", "sayac = 1", "isim = 'Ada'", "x = 5", "liste = [1, 2, 3]", "mesaj = 'Merhaba'"])


def _karistir_dolgu(satirlar, adet=None):
    """Hatanın yerini değiştirmek için başa rastgele zararsız satırlar ekler."""
    return [_dolgu() for _ in range(adet if adet is not None else random.randint(0, 2))] + satirlar


HATALAR = {
    "temel-degisken": [
        lambda: (_karistir_dolgu([f"fiyat = {random.randint(5, 50)}", "toplam = fiyat * adet", f"adet = {random.randint(2, 9)}", "print(toplam)"]),
                 "Bir değişkeni ancak ona değer atandıktan sonra kullanabilirsin; adet tanımlanmadan kullanıldı (NameError)."),
        lambda: (_karistir_dolgu([f"age = {random.randint(18, 60)}", "print(Age)"]), "Değişken adları büyük/küçük harfe duyarlıdır: age ile Age farklıdır."),
    ],
    "temel-hesap": [
        lambda: (_karistir_dolgu([f"metin = '{random.choice(['on', 'abc', '12a', 'yirmi'])}'", "sayi = int(metin)", "print(sayi + 1)"]),
                 "int() yalnızca geçerli sayısal metni çevirebilir; aksi halde ValueError."),
        lambda: (_karistir_dolgu([f"a = {random.randint(1, 9)}", "b = 0", "print(a / b)"]), "Sıfıra bölme ZeroDivisionError fırlatır."),
    ],
    "temel-fstring": [
        lambda: (_karistir_dolgu([f"yas = {random.randint(10, 80)}", "print('Yaşın: ' + yas)"]),
                 "+ ile string'e sayı eklenemez; str(yas) veya f-string kullanılmalı (TypeError)."),
    ],
    "temel-if": [
        lambda: (_karistir_dolgu([f"puan = {random.randint(0, 100)}", "if puan >= 50", "    print('Geçti')"]), "if satırının sonunda iki nokta (:) eksik."),
        lambda: (_karistir_dolgu([f"x = {random.randint(1, 9)}", f"if x = {random.randint(1, 9)}:", "    print('eşit')"]),
                 "Koşulda eşitlik testi == ile yapılır; = atama operatörüdür (SyntaxError)."),
    ],
    "temel-mantik": [
        lambda: (_karistir_dolgu([f"x = {random.randint(1, 30)}", "if x >= 10 and <= 20:", "    print('aralıkta')"]),
                 "and'in iki tarafı da tam bir Boolean ifade olmalı: x >= 10 and x <= 20."),
    ],
    "kontrol-for": [
        lambda: (_karistir_dolgu([f"for i in range({random.randint(3, 9)})", "    print(i)"]), "for satırının sonunda iki nokta (:) eksik."),
        lambda: (_karistir_dolgu([f"n = {random.randint(3, 9)}", "for i in n:", "    print(i)"]),
                 "for bir dizi üzerinde döner; tam sayı üzerinde dönmek için range(n) gerekir (TypeError)."),
    ],
    "kontrol-while": [
        lambda: (_karistir_dolgu(["i = 0", f"while i < {random.randint(3, 9)}", "    i += 1"]), "while satırının sonunda iki nokta (:) eksik."),
    ],
    "kontrol-elif": [
        lambda: (_karistir_dolgu([f"t = {random.randint(-10, 120)}", "if t > 99:", "    print('boiling')", "else t > 0:", "    print('normal')"]),
                 "Ek koşul elif ile yazılır; else koşul almaz."),
    ],
    "kontrol-toplam": [
        lambda: (_karistir_dolgu(["for n in [1, 2, 3]:", "    toplam_deger += n", "print(toplam_deger)"], 0),
                 "Biriktirici değişken döngüden önce 0 ile başlatılmalı; aksi halde += NameError verir."),
    ],
    "fonk-giris": [
        lambda: (_karistir_dolgu(["selamla()", "def selamla():", "    print('Merhaba')"]),
                 "Fonksiyon tanımlanmadan önce çağrıldı (NameError); def satırı çağrıdan önce gelmeli."),
        lambda: (_karistir_dolgu(["def hesapla()", "    return 5", "print(hesapla())"]), "Fonksiyon başlığının sonunda iki nokta (:) eksik."),
    ],
    "fonk-arguman": [
        lambda: (_karistir_dolgu(["def topla(a, b):", "    return a + b", f"print(topla({random.randint(1, 9)}))"]),
                 "topla iki argüman bekliyor ama tek argümanla çağrıldı (TypeError)."),
        lambda: (_karistir_dolgu(["def f():", f"    yerel = {random.randint(1, 9)}", "f()", "print(yerel)"]),
                 "Yerel değişkene tanımlandığı fonksiyonun dışından erişilemez (NameError)."),
    ],
    "fonk-donus": [
        lambda: (_karistir_dolgu([f"r = {random.randint(2, 9)}", "alan = math.pi * r ** 2", "print(alan)"]),
                 "math modülü import edilmeden kullanıldı; önce import math yazılmalı."),
    ],
    "fonk-global": [
        lambda: (_karistir_dolgu(["sayac = 0", "def artir():", "    sayac += 1", "artir()"]),
                 "Fonksiyon global değişkene atama yapacaksa içinde global sayac bildirimi gerekir (UnboundLocalError)."),
    ],
    "dosya-io": [
        lambda: (_karistir_dolgu([f"f = open('yok_{random.randint(1000, 9999)}.txt', 'r')", "print(f.read())"]),
                 "Okuma modunda var olmayan bir dosya açılamaz (FileNotFoundError)."),
        lambda: (_karistir_dolgu(["f = open('rapor.txt', 'w')", f"f.write({random.randint(1, 99)})", "f.close()"]),
                 "write yalnızca string yazar; sayı önce str() ile çevrilmeli (TypeError)."),
    ],
    "dosya-istisna": [
        lambda: (_karistir_dolgu(["try:", "    x = int('abc')", "except ValueError", "    print('hata')"]), "except satırının sonunda iki nokta (:) eksik."),
        lambda: (_karistir_dolgu(["try:", "    x = 10 / 0", "except ValueError:", "    print('hata')"]),
                 "10 / 0 ZeroDivisionError fırlatır ama yalnızca ValueError yakalanıyor; istisna işlenmez."),
    ],
    "liste-giris": [
        lambda: (_karistir_dolgu([f"l = {random.sample(range(1, 50), 3)}", "print(l[3])"]), "3 elemanlı listede geçerli indeksler 0–2'dir (IndexError)."),
        lambda: (_karistir_dolgu([f"l = {random.sample(range(1, 50), 3)}", "print(l + 5)"]), "Liste bir sayıyla birleştirilemez (TypeError)."),
    ],
    "liste-metot": [
        lambda: (_karistir_dolgu([f"l = {random.sample(range(1, 9), 3)}", "l.remove(99)", "print(l)"]), "remove listede olmayan öğe için ValueError fırlatır."),
        lambda: (_karistir_dolgu([f"l = {random.sample(range(1, 9), 3)}", "print(l.index(42))"]), "index, listede olmayan öğe için ValueError fırlatır."),
    ],
    "liste-comp": [
        lambda: (_karistir_dolgu([f"t = {tuple(random.sample(range(1, 9), 3))}", "t.append(4)", "print(t)"]), "Tuple değiştirilemez; append metodu yoktur (AttributeError)."),
    ],
    "str-temel": [
        lambda: (_karistir_dolgu([f"s = '{random.choice(['python', 'ankara', 'pandas'])}'", "s[0] = 'P'", "print(s)"]),
                 "String'ler değiştirilemez; indeksle atama TypeError verir."),
    ],
    "str-metot": [
        lambda: (_karistir_dolgu([f"s = '{random.choice(['python', 'ankara'])}'", "print(s.reverse())"]), "String'lerin reverse metodu yoktur (AttributeError)."),
    ],
    "str-split": [
        lambda: (_karistir_dolgu(["veri = '17;92;x;12'", "parcalar = veri.split(';')", "toplam = int(parcalar[2])"]),
                 "'x' token'ı sayıya çevrilemez (ValueError)."),
    ],
    "sozluk-giris": [
        lambda: (_karistir_dolgu([f"d = {{'elma': {random.randint(1, 9)}, 'armut': {random.randint(1, 9)}}}", "print(d['kiraz'])"]),
                 "Olmayan anahtar d[...] ile istenince KeyError oluşur; d.get('kiraz', 0) kullanılabilir."),
        lambda: (_karistir_dolgu(["d = {[1, 2]: 'liste'}"]), "Sözlük anahtarı değiştirilemez olmalı; liste anahtar olamaz (TypeError)."),
    ],
    "sozluk-kume": [
        lambda: (_karistir_dolgu([f"s = {set(random.sample(range(1, 9), 3))}", "s.remove(99)"]), "remove kümede olmayan öğe için KeyError fırlatır; discard fırlatmaz."),
        lambda: (_karistir_dolgu([f"s = {set(random.sample(range(1, 9), 3))}", "print(s[0])"]), "Kümeler sırasızdır, indekslenemez (TypeError)."),
    ],
    "sinif-tanim": [
        lambda: (["class Sayac:", "    def __init__(self):", "        self.n = 0", "    def artir():", "        self.n += 1", "s = Sayac()", "s.artir()"],
                 "Her metodun ilk parametresi self olmalı; artir() self almadığı için çağrı TypeError verir."),
        lambda: (["class Hesap:", "    def __init__(self, b):", "        self.__bakiye = b", f"h = Hesap({random.randint(10, 999)})", "print(h.__bakiye)"],
                 "İki alt çizgiyle başlayan öznitelik dışarıdan erişilemez (AttributeError)."),
    ],
    "kalitim-giris": [
        lambda: (["class Hayvan:", "    def ses(self):", "        return '...'", "class Kopek(Hayvan):", "    pass", "print(Kopek().havla())"],
                 "Ne Kopek'te ne Hayvan'da havla metodu var (AttributeError)."),
    ],
    "ozyineleme-giris": [
        lambda: (["def geri_say(n):", "    return geri_say(n - 1)", f"geri_say({random.randint(3, 9)})"],
                 "Temel durum (ör. if n == 0: return) yok; fonksiyon kendini sonsuza kadar çağırır (RecursionError)."),
    ],
    "vt-select": [
        lambda: (["import sqlite3", "cur = sqlite3.connect(':memory:').cursor()", "cur.execute('CREATE TABLE Products (Name TEXT)')",
                  "cur.execute('SELECT * FROM Urunler')"], "Urunler adlı tablo yok; tablo Products adıyla oluşturuldu (OperationalError)."),
    ],
    "vt-tablo": [
        lambda: (["import sqlite3", "cur = sqlite3.connect(':memory:').cursor()", "cur.execute('CREATE TABLE T (ID INTEGER PRIMARY KEY, Ad TEXT)')",
                  "cur.execute(\"INSERT INTO T VALUES (1, 'a')\")", "cur.execute(\"INSERT INTO T VALUES (1, 'b')\")"],
                 "Birincil anahtar benzersiz olmalı; aynı ID ikinci kez eklenemez (IntegrityError)."),
    ],
    "i-reshape": [
        lambda: ([f"a = np.arange({random.choice([10, 11, 13, 14])})", "m = a.reshape(3, 4)", "print(m)"], "Eleman sayısı 3 × 4 = 12 olmadığı için reshape ValueError verir."),
    ],
    "i-2d": [
        lambda: (["m = np.arange(6).reshape(2, 3)", "print(m[0, 1])", "print(m[2, 0])"], "m'nin yalnızca 0 ve 1 numaralı satırları var (IndexError)."),
    ],
    "np2-maske": [
        lambda: ([f"data = np.array({random.sample(range(0, 20), 6)})", "secilen = data[data > 3 and data < 15]"],
                 "NumPy dizilerinde and yerine & kullanılmalı: (data > 3) & (data < 15) (ValueError)."),
    ],
    "np2-birlestir": [
        lambda: (["a = np.zeros((2, 3))", "b = np.ones((2, 4))", "c = np.vstack((a, b))"], "vstack için sütun sayıları eşit olmalı (3 ≠ 4)."),
        lambda: ([f"x = np.arange({random.choice([7, 9, 11])})", "parcalar = np.split(x, 2)"], "Dizi 2 eşit parçaya bölünemiyor (ValueError)."),
    ],
    "np2-ufunc": [
        lambda: (["a = np.ones((3, 4))", "b = np.arange(3)", "print(a + b)"], "Sondaki boyutlar 4 ve 3; ikisi de 1 değil, broadcasting yapılamaz (ValueError)."),
    ],
}


def hata_bul(konu):
    ureticiler = HATALAR.get(konu)
    if not ureticiler:
        return None
    satirlar, aciklama = random.choice(ureticiler)()
    _, hata, satir = calistir("\n".join(satirlar))
    if hata is None or satir is None or not 0 <= satir < len(satirlar):
        return None
    return {"tip": "hatabul", "soru": "Bu kod hangi satırda hata verir?", "satirlar": satirlar, "dogru": satir,
            "aciklama": f"{type(hata).__name__}: {aciklama}", "konu": konu, "parmak": f"hb:{iz(*satirlar)}"}


# ============================ Kod tamamlama ============================
# Her üretici (kod "___" ile, doğru cevaplar) döndürür; hedef çıktı doğru cevapla çalıştırılarak bulunur.

def _l(n=3):
    return random.sample(range(1, 30), n)


TAMAMLAMALAR = {
    "temel-degisken": [lambda: (f"x = {random.randint(1, 99)}\n___(x)", ["print"])],
    "temel-hesap": [
        lambda: (lambda a, b: (f"print({a} ___ {b})", ["%"]))(random.randint(10, 60), random.randint(3, 9)),
        lambda: (lambda a, b: (f"print({a} ___ {b})", ["//"]))(random.randint(10, 60), random.randint(3, 9)),
        lambda: (lambda a, b: (f"print({a} ___ {b})", ["**"]))(random.randint(2, 5), random.randint(2, 4)),
    ],
    "temel-fstring": [
        lambda: (f"num = {round(random.uniform(10, 9999), 4)}\nprint(f'{{num:___}}')", [".2f"]),
        lambda: (f"oran = {random.choice([0.25, 0.5, 0.75, 0.1])}\nprint(f'{{oran:___}}')", [".0%"]),
        lambda: ("print('A', 'B', 'C', ___='-')", ["sep"]),
    ],
    "temel-if": [
        lambda: (f"puan = {random.randint(0, 49)}\nif puan >= 50:\n    print('Geçti')\n___:\n    print('Kaldı')", ["else"]),
        lambda: (f"x = {random.randint(1, 9)}\nif x ___ {random.randint(1, 9)}:\n    print('eşit')\nelse:\n    print('farklı')", ["==", "!="]),
    ],
    "temel-mantik": [lambda: (f"print('{random.choice(['py', 'on', 'ab'])}' ___ 'python')", ["in", "not in"])],
    "kontrol-elif": [lambda: (f"t = {random.randint(1, 99)}\nif t > 99:\n    print('boiling')\n___ t >= 1:\n    print('normal')\nelse:\n    print('freezing')", ["elif"])],
    "kontrol-for": [lambda: (f"for i in ___({random.randint(2, 6)}):\n    print(i, end=' ')", ["range"])],
    "kontrol-while": [lambda: (f"i = 0\n___ i < {random.randint(2, 6)}:\n    print(i, end=' ')\n    i += 1", ["while"])],
    "kontrol-toplam": [lambda: (f"toplam = 0\nfor n in {_l(4)}:\n    toplam ___ n\nprint(toplam)", ["+="])],
    "kontrol-break": [
        lambda: (f"for i in range(10):\n    if i == {random.randint(2, 7)}:\n        ___\n    print(i, end=' ')", ["break"]),
        lambda: ("for i in range(8):\n    if i % 2 == 0:\n        ___\n    print(i, end=' ')", ["continue"]),
    ],
    "fonk-giris": [lambda: (f"___ selamla():\n    print('Merhaba')\n\nselamla()", ["def"])],
    "fonk-donus": [lambda: (f"def kare(x):\n    ___ x * x\n\nprint(kare({random.randint(2, 12)}))", ["return"])],
    "fonk-global": [lambda: (f"x = {random.randint(1, 9)}\ndef f():\n    ___ x\n    x = x * 10\nf()\nprint(x)", ["global"])],
    "fonk-arguman": [lambda: (f"def fark(a, b):\n    print(a - b)\n\nfark(b={random.randint(1, 5)}, ___={random.randint(10, 20)})", ["a"])],
    "dosya-io": [lambda: (lambda ad: (f"f = open('n.txt', 'w')\nf.write('{ad}\\n')\nf.close()\nf = open('n.txt', ___)\nf.write('X\\n')\nf.close()\nprint(open('n.txt').read().split())", ["'a'", '"a"']))(random.choice(["Ada", "Can"]))],
    "dosya-istisna": [
        lambda: ("try:\n    int('abc')\n___ ValueError:\n    print('sayı değil')", ["except"]),
        lambda: ("try:\n    x = 1\nexcept ValueError:\n    print('hata')\n___:\n    print('temizlik')", ["finally"]),
    ],
    "dosya-dongu": [lambda: ("f = open('s.txt', 'w')\nf.write('1\\n2\\n3\\n')\nf.close()\ntoplam = 0\n___ line in open('s.txt'):\n    toplam += int(line)\nprint(toplam)", ["for"])],
    "liste-giris": [lambda: (lambda l: (f"l = {l}\nprint(l[___])", ["-1", str(len(l) - 1)]))(_l(4))],
    "liste-metot": [
        lambda: (lambda l, v: (f"l = {l}\nl.___({v})\nprint(l)", ["append"]))(_l(3), random.randint(30, 40)),
        lambda: (f"l = {_l(4)}\nl.___()\nprint(l)", ["sort"]),
        lambda: (f"l = {_l(4)}\nl.___()\nprint(l)", ["reverse"]),
    ],
    "liste-comp": [lambda: (f"l = {_l(5)}\nprint([x * 2 ___ x in l])", ["for"])],
    "str-temel": [lambda: (f"print(___('{random.choice(['python', 'veri', 'istanbul'])}'))", ["len"])],
    "str-metot": [
        lambda: (f"print('{random.choice(['python', 'ankara'])}'.___())", ["upper"]),
        lambda: (f"print('   {random.choice(['evet', 'hayır'])}   '.___())", ["strip"]),
        lambda: (f"print('{random.choice(['banana', 'ankara'])}'.___('a'))", ["find", "index"]),
    ],
    "str-split": [lambda: (f"print('{';'.join(map(str, _l(4)))}'.___(';'))", ["split"])],
    "sozluk-giris": [lambda: ("d = {'a': 1}\nd['b'] = 2\n___ d['a']\nprint(d)", ["del"])],
    "sozluk-metot": [
        lambda: (f"d = {{'a': {random.randint(1, 9)}}}\nprint(d.___('z', 0))", ["get"]),
        lambda: (f"d = {{'a': {random.randint(1, 9)}, 'b': 2}}\nfor k, v in d.___():\n    print(k, v)", ["items"]),
    ],
    "sozluk-kume": [lambda: (lambda op: (f"a = {{1, 2, 3}}\nb = {{2, 3, 4}}\nprint(sorted(a ___ b))", [op]))(random.choice(["&", "|", "-", "^"]))],
    "sinif-tanim": [lambda: (f"class Kedi:\n    def ___(self, ad):\n        self.ad = ad\n\nprint(Kedi('{random.choice(['Tekir', 'Pamuk'])}').ad)", ["__init__"])],
    "kalitim-giris": [lambda: ("class Hayvan:\n    def ses(self):\n        return 'Grr'\n\nclass Kopek(___):\n    pass\n\nprint(Kopek().ses())", ["Hayvan"])],
    "ozyineleme-giris": [lambda: (f"def fact(n):\n    if n == 0:\n        return ___\n    return n * fact(n - 1)\n\nprint(fact({random.randint(3, 7)}))", ["1"])],
    "vt-select": [lambda: ("import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE P (Ad TEXT, F REAL)')\n"
                           f"cur.execute(\"INSERT INTO P VALUES ('a', 5), ('b', 15), ('c', {random.randint(11, 30)})\")\n"
                           "cur.execute('SELECT Ad FROM P ___ F > 10')\nprint(cur.fetchall())", ["WHERE"])],
    "vt-tablo": [lambda: ("import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.___()\ncur.execute('CREATE TABLE T (x INTEGER)')\nprint('tamam')", ["cursor"])],
    "o-dizi": [lambda: (f"print(np.___(0, {random.choice([10, 12, 20])}, 2))", ["arange"])],
    "o-yertutucu": [lambda: (f"print(np.___(({random.randint(2, 3)}, {random.randint(2, 3)})))", ["zeros"])],
    "i-reshape": [lambda: ("print(np.arange(12).___(3, 4))", ["reshape"])],
    "v-copy": [lambda: ("a = np.arange(5)\nc = a[1:4].___()\nc[0] = 99\nprint(a)", ["copy"])],
    "np2-maske": [lambda: (f"data = np.array({_l(6)})\nprint(data[(data > 5) ___ (data < 20)])", ["&"])],
    "np2-toplama": [lambda: (lambda e: (f"m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.sum(axis=___))", [str(e)]))(random.choice([0, 1]))],
    "np2-reshape": [lambda: (f"print(np.arange({random.choice([12, 24])}).reshape(4, ___).shape)", ["-1"])],
    "np2-birlestir": [lambda: ("a = np.zeros((2, 3))\nb = np.ones((1, 3))\nprint(np.___((a, b)).shape)", ["vstack"])],
}


def kod_tamamla(konu):
    ureticiler = TAMAMLAMALAR.get(konu)
    if not ureticiler:
        return None
    kod, cevaplar = random.choice(ureticiler)()
    cikti, hata, _ = calistir(kod.replace("___", cevaplar[0], 1))
    if hata is not None or not cikti:
        return None
    # Diğer kabul edilen cevaplar aynı çıktıyı vermiyorsa listeden çıkar
    gecerli = [c for c in cevaplar if calistir(kod.replace("___", c, 1))[0] == cikti]
    return {"tip": "tamamla", "soru": "Boşluğu doldur: kod, hedef çıktıyı yazdırsın", "kod": kod, "hedef": cikti,
            "cevaplar": gecerli, "aciklama": f"Doğru cevap: {gecerli[0]}", "konu": konu, "parmak": f"tm:{iz(kod, cikti)}"}


# ============================ Satır sıralama (Parsons) ============================

def _p_toplam():
    l = _l(3)
    return [f"sayilar = {l}", "toplam = 0", "for n in sayilar:", "    toplam += n", "print(toplam)"]


def _p_fonk():
    a, b = random.randint(2, 9), random.randint(2, 9)
    return ["def carp(a, b):", "    sonuc = a * b", "    return sonuc", f"deger = carp({a}, {b})", "print(deger)"]


def _p_while():
    n = random.randint(3, 6)
    return ["i = 0", f"while i < {n}:", "    print(i, end=' ')", "    i += 1"]


def _p_dosya():
    ad = random.choice(["Ada", "Can", "Ece"])
    return ["f = open('kayit.txt', 'w')", f"f.write('{ad}\\n')", "f.close()", "f = open('kayit.txt', 'r')", "print(f.readline().rstrip())"]


def _p_sinif():
    v = random.randint(1, 9)
    return ["class Sayac:", "    def __init__(self):", "        self.n = 0", "s = Sayac()", f"s.n += {v}", "print(s.n)"]


def _p_fact():
    n = random.randint(3, 6)
    return ["def fact(n):", "    if n == 0:", "        return 1", "    return n * fact(n - 1)", f"print(fact({n}))"]


def _p_try():
    v = random.choice(["'abc'", "'0'", "'4'"])
    return ["try:", f"    n = int({v})", "    print(10 // n)", "except (ValueError, ZeroDivisionError):", "    print('geçersiz')"]


def _p_sql():
    return ["import sqlite3", "conn = sqlite3.connect(':memory:')", "cur = conn.cursor()", "cur.execute('CREATE TABLE T (x INTEGER)')",
            f"cur.execute('INSERT INTO T VALUES ({random.randint(1, 99)})')", "cur.execute('SELECT x FROM T')", "print(cur.fetchone()[0])"]


def _p_maske():
    return [f"data = np.array({_l(6)})", "mask = data > 10", "secilen = data[mask]", "print(secilen)"]


def _p_liste():
    return [f"l = {_l(3)}", f"l.append({random.randint(30, 40)})", "l.sort()", "print(l)"]


PARSONS = {"kontrol-toplam": _p_toplam, "fonk-donus": _p_fonk, "kontrol-while": _p_while, "dosya-io": _p_dosya,
           "sinif-tanim": _p_sinif, "ozyineleme-giris": _p_fact, "dosya-istisna": _p_try, "vt-tablo": _p_sql,
           "np2-maske": _p_maske, "liste-metot": _p_liste}


def satir_sirala(konu):
    uretici = PARSONS.get(konu)
    if not uretici:
        return None
    satirlar = uretici()
    cikti, hata, _ = calistir("\n".join(satirlar))
    if hata is not None or len(set(satirlar)) != len(satirlar):
        return None
    return {"tip": "sirala", "satirlar": True, "soru": "Kod satırlarını doğru sıraya diz", "hedef": cikti,
            "parcalar": satirlar, "ekstra": [], "ayrac": "\n", "aciklama": "Doğru sıra:\n" + "\n".join(satirlar),
            "konu": konu, "parmak": f"ps:{iz(*satirlar)}"}


# ============================ Konu → üretici eşlemesi ============================

def _sablon_konulari():
    """Her hesaplama şablonunun hangi derslere soru ürettiğini örnekleyerek bulur."""
    harita = {}
    for _, sablon in sinav.TUM_SABLONLAR:
        konular = set()
        for _ in range(12):
            try:
                soru = sablon()
            except Exception:  # noqa: BLE001
                soru = None
            if soru:
                konular.add(soru["konu"])
        for konu in konular:
            harita.setdefault(konu, []).append(sablon)
    return harita


_SABLONLAR = None


def bolum_of(konu):
    on = konu.split("-")[0]
    return "np1" if on in ("n", "d", "o", "i", "v") else on


def yeni_tur_ureticileri():
    """Sınav için: (bölüm, üretici) — hata bulma, kod tamamlama ve satır sıralama."""
    sonuc = []
    for konu in HATALAR:
        sonuc.append((bolum_of(konu), lambda k=konu: hata_bul(k)))
    for konu in TAMAMLAMALAR:
        sonuc.append((bolum_of(konu), lambda k=konu: kod_tamamla(k)))
    for konu in PARSONS:
        sonuc.append((bolum_of(konu), lambda k=konu: satir_sirala(k)))
    return sonuc


def kavram_karisik(konu):
    tur = random.choice(["dy", "dy", "hangisi", "yanlis", "coklu"])
    if tur == "hangisi":
        return kavram_hangisi(konu, True) or kavram_dy(konu)
    if tur == "yanlis":
        return kavram_hangisi(konu, False) or kavram_dy(konu)
    if tur == "coklu":
        return kavram_coklu(konu) or kavram_dy(konu)
    return kavram_dy(konu)


def ureticiler(konu):
    """Bir ders için tüm soru üreticileri: (tür, fonksiyon) listesi."""
    global _SABLONLAR
    if _SABLONLAR is None:
        _SABLONLAR = _sablon_konulari()
    sonuc = []
    for sablon in _SABLONLAR.get(konu, []):
        sonuc.append(("hesap", lambda s=sablon: (lambda q: q if q and q["konu"] == konu else None)(s())))
    if konu in HATALAR:
        sonuc.append(("hatabul", lambda: hata_bul(konu)))
    if konu in TAMAMLAMALAR:
        sonuc.append(("tamamla", lambda: kod_tamamla(konu)))
    if konu in PARSONS:
        sonuc.append(("parsons", lambda: satir_sirala(konu)))
    if len(BANKA.get(konu, [])) >= 4:
        sonuc += [("hangisi", lambda: kavram_hangisi(konu, True)), ("hangisi", lambda: kavram_hangisi(konu, False))]
    if len(BANKA.get(konu, [])) >= 3:
        sonuc.append(("coklu", lambda: kavram_coklu(konu)))
    if BANKA.get(konu):
        sonuc.append(("dy", lambda: kavram_dy(konu)))
    return sonuc


def varyant_uret(konular, adet, gorulen=()):
    """Verilen derslerden, daha önce görülmemiş ve tür olarak çeşitli `adet` soru üretir."""
    gorulen = set(gorulen)
    sorular, kullanilan = [], set()
    if not konular:
        return sorular
    sira = 0
    deneme = 0
    son_turler = {}
    while len(sorular) < adet and deneme < adet * 40:
        deneme += 1
        konu = konular[sira % len(konular)]
        secenekler = ureticiler(konu)
        if not secenekler:
            sira += 1
            continue
        # Aynı derste art arda aynı tür sorulmasın
        turler = [t for t, _ in secenekler if t != son_turler.get(konu)] or [t for t, _ in secenekler]
        tur = random.choice(sorted(set(turler)))
        uretici = random.choice([f for t, f in secenekler if t == tur])
        try:
            soru = uretici()
        except Exception:  # noqa: BLE001
            soru = None
        if not soru or soru["parmak"] in kullanilan:
            continue
        if soru["parmak"] in gorulen and deneme < adet * 25:
            continue
        soru["varyant"] = True
        sorular.append(soru)
        kullanilan.add(soru["parmak"])
        son_turler[konu] = tur
        sira += 1
    return sorular


if __name__ == "__main__":
    import json

    istek = json.loads(sys.stdin.read() or "{}")
    json.dump(varyant_uret(istek.get("konular", []), int(istek.get("adet", 6)), istek.get("gorulen", [])),
              sys.stdout, ensure_ascii=False)
