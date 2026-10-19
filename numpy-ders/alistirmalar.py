"""Kod alıştırmaları ve otomatik kontrol kuralları.

Her kontrol bir (ifade, açıklama) çiftidir. İfade şu adlarla değerlendirilir:
    u              -> kullanıcının kodu çalıştıktan sonraki değişkenler (dict)
    r              -> örnek çözüm çalıştıktan sonraki değişkenler (dict)
    cikti          -> kullanıcının ekrana yazdırdıkları
    beklenen_cikti -> örnek çözümün ekrana yazdırdıkları
    np             -> numpy
"""


def dizi_mi(ad):
    return f"isinstance(u.get('{ad}'), np.ndarray)", f"`{ad}` adında bir NumPy dizisi (ndarray) tanımlanmış"


def ayni_mi(ad):
    return f"np.array_equal(u['{ad}'], r['{ad}'])", f"`{ad}` dizisinin değerleri beklenenle aynı"


def ayni_deger(ad):
    return f"u.get('{ad}') == r['{ad}']", f"`{ad}` değeri doğru"


ALISTIRMALAR = [
    # ---------- Bölüm 1: Dizi oluşturma (Slayt 18'deki alıştırmalar) ----------
    {
        "id": "dizi-olustur",
        "bolum": "Dizi Oluşturma",
        "baslik": "1. Sayı dizisi oluştur",
        "soru": "10'dan 50'ye kadar (50 dahil) tüm tam sayıları içeren 1 boyutlu bir NumPy dizisi oluştur "
                "ve `arr` değişkenine ata.",
        "ipucu": "np.arange(start, stop, step) fonksiyonunda stop değeri diziye dahil edilmez.",
        "baslangic": "import numpy as np\n\narr = \n",
        "cozum": "import numpy as np\n\narr = np.arange(10, 51)\nprint(arr)\n",
        "kontroller": [
            dizi_mi("arr"),
            ("u['arr'].ndim == 1", "Dizi 1 boyutlu (ndim == 1)"),
            ("u['arr'][0] == 10", "İlk eleman 10"),
            ("u['arr'][-1] == 50", "Son eleman 50 (50 dahil edilmiş)"),
            ayni_mi("arr"),
        ],
    },
    {
        "id": "sifir-matris",
        "bolum": "Dizi Oluşturma",
        "baslik": "2. Sıfır matrisi",
        "soru": "Tüm elemanları sıfır olan 3x3 bir NumPy dizisi oluştur ve `z` değişkenine ata. "
                "Ardından dizinin shape ve dtype değerlerini print ile yazdır.",
        "ipucu": "np.zeros(shape) fonksiyonu shape olarak bir tuple alır: (3, 3). Varsayılan dtype float64'tür.",
        "baslangic": "import numpy as np\n\nz = \n\n# shape ve dtype değerlerini yazdır\n",
        "cozum": "import numpy as np\n\nz = np.zeros((3, 3))\nprint(z.shape)\nprint(z.dtype)\n",
        "kontroller": [
            dizi_mi("z"),
            ("u['z'].shape == (3, 3)", "Shape (3, 3)"),
            ("(u['z'] == 0).all()", "Tüm elemanlar sıfır"),
            ("'(3, 3)' in cikti", "Shape ekrana yazdırılmış"),
            ("str(u['z'].dtype) in cikti", "dtype ekrana yazdırılmış"),
        ],
    },
    {
        "id": "birim-matris",
        "bolum": "Dizi Oluşturma",
        "baslik": "3. Birim matris",
        "soru": "5x5 bir birim matris (identity matrix) oluştur ve `I` değişkenine ata. Birim matris, ana "
                "köşegeninde 1'ler, diğer her yerde 0'lar bulunan dizidir.",
        "ipucu": "Slayttaki ipucu: bunun için özel bir fonksiyon var. np.eye(n) fonksiyonunu dene.",
        "baslangic": "import numpy as np\n\nI = \nprint(I)\n",
        "cozum": "import numpy as np\n\nI = np.eye(5)\nprint(I)\n",
        "kontroller": [
            dizi_mi("I"),
            ("u['I'].shape == (5, 5)", "Shape (5, 5)"),
            ("(np.diag(u['I']) == 1).all()", "Ana köşegendeki tüm elemanlar 1"),
            ("u['I'].sum() == 5", "Köşegen dışındaki elemanlar 0"),
        ],
    },
    {
        "id": "linspace",
        "bolum": "Dizi Oluşturma",
        "baslik": "4. Linspace dizisi",
        "soru": "np.linspace kullanarak 0 ile 1 arasında eşit aralıklı, tam olarak 10 ondalıklı sayı içeren "
                "1 boyutlu bir dizi oluştur ve `lin` değişkenine ata.",
        "ipucu": "np.linspace(start, stop, num) — start ve stop değerlerinin ikisi de diziye dahildir.",
        "baslangic": "import numpy as np\n\nlin = \nprint(lin)\n",
        "cozum": "import numpy as np\n\nlin = np.linspace(0, 1, 10)\nprint(lin)\n",
        "kontroller": [
            dizi_mi("lin"),
            ("u['lin'].size == 10", "Tam olarak 10 eleman var"),
            ("u['lin'].dtype.kind == 'f'", "Elemanlar ondalıklı sayı (float)"),
            ("u['lin'][0] == 0 and u['lin'][-1] == 1", "0 ile başlıyor, 1 ile bitiyor (ikisi de dahil)"),
            ("np.allclose(u['lin'], r['lin'])", "Değerler eşit aralıklı ve beklenenle aynı"),
        ],
    },
    {
        "id": "listeden-diziye",
        "bolum": "Dizi Oluşturma",
        "baslik": "5. Listeyi diziye dönüştür",
        "soru": "Verilen `data` Python listesini bir NumPy dizisine dönüştür ve `arr` değişkenine ata. "
                "Ardından dizinin shape, ndim ve dtype değerlerini yazdır.",
        "ipucu": "np.array() fonksiyonu listeyi diziye çevirir ve veri tipini elemanlardan otomatik çıkarır.",
        "baslangic": "import numpy as np\n\ndata = [[1, 2, 3], [4, 5, 6]]\n\narr = \n\n"
                     "# shape, ndim ve dtype değerlerini yazdır\n",
        "cozum": "import numpy as np\n\ndata = [[1, 2, 3], [4, 5, 6]]\n\narr = np.array(data)\n"
                 "print(arr.shape)\nprint(arr.ndim)\nprint(arr.dtype)\n",
        "kontroller": [
            dizi_mi("arr"),
            ayni_mi("arr"),
            ("'(2, 3)' in cikti", "shape yazdırılmış"),
            ("'2' in cikti.replace('(2, 3)', '')", "ndim yazdırılmış"),
            ("str(r['arr'].dtype) in cikti", "dtype yazdırılmış"),
        ],
    },
    {
        "id": "rastgele",
        "bolum": "Dizi Oluşturma",
        "baslik": "6. Rastgele dizi",
        "soru": "0 ile 1 arasında rastgele ondalıklı sayılarla dolu 4x4 bir dizi oluştur ve `rnd` değişkenine ata.",
        "ipucu": "Slayttaki ipucu: NumPy'da random.rand() → np.random.rand(satır, sütun)",
        "baslangic": "import numpy as np\n\nrnd = \nprint(rnd)\n",
        "cozum": "import numpy as np\n\nrnd = np.random.rand(4, 4)\nprint(rnd)\n",
        "kontroller": [
            dizi_mi("rnd"),
            ("u['rnd'].shape == (4, 4)", "Shape (4, 4)"),
            ("u['rnd'].dtype.kind == 'f'", "Elemanlar ondalıklı sayı (float)"),
            ("((u['rnd'] >= 0) & (u['rnd'] < 1)).all()", "Tüm değerler 0 ile 1 arasında"),
            ("len(np.unique(u['rnd'])) > 1", "Değerler rastgele (hepsi aynı değil)"),
        ],
    },
    {
        "id": "dtype-belirt",
        "bolum": "Dizi Oluşturma",
        "baslik": "7. dtype'ı açıkça belirt",
        "soru": "[1, 2, 3] listesinden, veri tipi açıkça float32 olan bir dizi oluştur ve `a` değişkenine ata. "
                "Ardından itemsize değerini yazdır.",
        "ipucu": "np.array(liste, dtype=np.float32). float32 → 32 bit = 4 bayt.",
        "baslangic": "import numpy as np\n\na = \n\n# itemsize değerini yazdır\n",
        "cozum": "import numpy as np\n\na = np.array([1, 2, 3], dtype=np.float32)\nprint(a.itemsize)\n",
        "kontroller": [
            dizi_mi("a"),
            ("u['a'].dtype == np.float32", "dtype float32"),
            ("np.array_equal(u['a'], [1, 2, 3])", "Değerler 1, 2, 3"),
            ("'4' in cikti", "itemsize (4) yazdırılmış"),
        ],
    },

    # ---------- Bölüm 2: ndarray özellikleri ----------
    {
        "id": "ozellikler",
        "bolum": "ndarray Özellikleri",
        "baslik": "8. Dizinin özelliklerini oku",
        "soru": "Verilen `m` dizisinin özelliklerini değişkenlere ata:\n"
                "• `boyut_sayisi` → eksen sayısı\n• `sekil` → her eksendeki boyut (tuple)\n"
                "• `eleman_sayisi` → toplam eleman sayısı\n• `bayt` → her elemanın bayt cinsinden boyutu",
        "ipucu": "ndarray.ndim, ndarray.shape, ndarray.size, ndarray.itemsize",
        "baslangic": "import numpy as np\n\nm = np.array([[1.5, 2.0, 3.0], [4.0, 5.0, 6.0]])\n\n"
                     "boyut_sayisi = \nsekil = \neleman_sayisi = \nbayt = \n",
        "cozum": "import numpy as np\n\nm = np.array([[1.5, 2.0, 3.0], [4.0, 5.0, 6.0]])\n\n"
                 "boyut_sayisi = m.ndim\nsekil = m.shape\neleman_sayisi = m.size\nbayt = m.itemsize\n"
                 "print(boyut_sayisi, sekil, eleman_sayisi, bayt)\n",
        "kontroller": [
            ayni_deger("boyut_sayisi"),
            ayni_deger("sekil"),
            ayni_deger("eleman_sayisi"),
            ayni_deger("bayt"),
        ],
    },

    # ---------- Bölüm 3: İndeksleme ve dilimleme ----------
    {
        "id": "indeks-1d",
        "bolum": "İndeksleme ve Dilimleme",
        "baslik": "9. 1 boyutlu indeksleme",
        "soru": "Verilen `a` dizisinden:\n• `ilk` → ilk eleman\n• `son` → son eleman\n"
                "• `dilim` → 2. indeksten 5. indekse kadar (5 dahil) olan elemanlar",
        "ipucu": "NumPy dizileri 0'dan başlayarak indekslenir. Sözdizimi Python listeleriyle aynıdır: a[0], a[-1], a[başlangıç:bitiş]",
        "baslangic": "import numpy as np\n\na = np.arange(10, 20)\n\nilk = \nson = \ndilim = \n",
        "cozum": "import numpy as np\n\na = np.arange(10, 20)\n\nilk = a[0]\nson = a[-1]\ndilim = a[2:6]\n"
                 "print(ilk, son, dilim)\n",
        "kontroller": [
            ayni_deger("ilk"),
            ayni_deger("son"),
            ("np.array_equal(u['dilim'], r['dilim'])", "`dilim` doğru elemanları içeriyor"),
        ],
    },
    {
        "id": "indeks-2d",
        "bolum": "İndeksleme ve Dilimleme",
        "baslik": "10. 2 boyutlu indeksleme",
        "soru": "Verilen 3x4'lük `m` dizisinden:\n• `eleman` → 1. satır, 2. sütundaki eleman (0'dan sayarak)\n"
                "• `satir` → 0. satırın tamamı\n• `sutun` → son sütunun tamamı",
        "ipucu": "Çok boyutlu dizilerde tek köşeli parantez içinde virgülle ayır: m[satır, sütun]. "
                 "Bir eksenin tamamı için `:` kullan.",
        "baslangic": "import numpy as np\n\nm = np.arange(12).reshape(3, 4)\nprint(m)\n\n"
                     "eleman = \nsatir = \nsutun = \n",
        "cozum": "import numpy as np\n\nm = np.arange(12).reshape(3, 4)\nprint(m)\n\n"
                 "eleman = m[1, 2]\nsatir = m[0, :]\nsutun = m[:, -1]\n",
        "kontroller": [
            ayni_deger("eleman"),
            ("np.array_equal(u['satir'], r['satir'])", "`satir` doğru"),
            ("np.array_equal(u['sutun'], r['sutun'])", "`sutun` doğru"),
        ],
    },
    {
        "id": "reshape",
        "bolum": "İndeksleme ve Dilimleme",
        "baslik": "11. Reshape",
        "soru": "0'dan 11'e kadar sayıları içeren 1 boyutlu bir dizi oluştur, reshape ile 3 satır ve "
                "4 sütunlu bir matrise dönüştür ve `r2` değişkenine ata.",
        "ipucu": "np.arange(12).reshape(satır, sütun). Yeni şeklin size değeri (3*4=12) eski diziyle aynı olmalı.",
        "baslangic": "import numpy as np\n\nr2 = \nprint(r2)\n",
        "cozum": "import numpy as np\n\nr2 = np.arange(12).reshape(3, 4)\nprint(r2)\n",
        "kontroller": [
            dizi_mi("r2"),
            ("u['r2'].shape == (3, 4)", "Shape (3, 4)"),
            ayni_mi("r2"),
        ],
    },
    {
        "id": "dilim-3d",
        "bolum": "İndeksleme ve Dilimleme",
        "baslik": "12. 3 boyutlu dilimleme",
        "soru": "Verilen (2, 3, 4) şeklindeki `t` dizisinden 0. bloğun tüm satırlarını ve ilk 2 sütununu al, "
                "`parca` değişkenine ata. Sonuç (3, 2) şeklinde olmalı.",
        "ipucu": "Her eksen için virgülle ayrılmış bir indeks/dilim yaz: t[blok, satırlar, sütunlar]",
        "baslangic": "import numpy as np\n\nt = np.arange(24).reshape(2, 3, 4)\nprint(t)\n\nparca = \n",
        "cozum": "import numpy as np\n\nt = np.arange(24).reshape(2, 3, 4)\nprint(t)\n\nparca = t[0, :, :2]\n"
                 "print(parca)\n",
        "kontroller": [
            dizi_mi("parca"),
            ("u['parca'].shape == (3, 2)", "Shape (3, 2)"),
            ayni_mi("parca"),
        ],
    },

    # ---------- Bölüm 4: View ve Copy ----------
    {
        "id": "view",
        "bolum": "View ve Copy",
        "baslik": "13. View'ı değiştir",
        "soru": "Verilen `a` dizisinden 1. ile 3. indeksler arasını (3 dahil) dilimleyerek `v` adında bir view "
                "oluştur. Sonra `v`'nin ilk elemanını 99 yap ve `a`'yı yazdır. Orijinal dizi değişti mi?",
        "ipucu": "Basit dilimleme kopya değil view oluşturur. View aynı veri tamponuna (data buffer) bakar.",
        "baslangic": "import numpy as np\n\na = np.arange(5)\n\nv = \n\n# v'nin ilk elemanını 99 yap\n\nprint(a)\n",
        "cozum": "import numpy as np\n\na = np.arange(5)\n\nv = a[1:4]\nv[0] = 99\n\nprint(a)\n",
        "kontroller": [
            dizi_mi("v"),
            ("np.shares_memory(u['v'], u['a'])", "`v` bir view: `a` ile aynı belleği paylaşıyor"),
            ("u['v'][0] == 99", "`v`'nin ilk elemanı 99"),
            ("np.array_equal(u['a'], [0, 99, 2, 3, 4])", "Değişiklik orijinal `a` dizisine yansımış"),
        ],
    },
    {
        "id": "copy",
        "bolum": "View ve Copy",
        "baslik": "14. Deep copy",
        "soru": "Verilen `a` dizisinin 1. ile 3. indeksleri arasını (3 dahil), orijinalden tamamen bağımsız olacak "
                "şekilde `c` değişkenine kopyala. Sonra `c`'nin ilk elemanını 99 yap. `a` değişmemeli.",
        "ipucu": "Tamamen bağımsız bir kopya için .copy() metodunu açıkça kullanmalısın (deep copy).",
        "baslangic": "import numpy as np\n\na = np.arange(5)\n\nc = \n\n# c'nin ilk elemanını 99 yap\n\nprint(a)\nprint(c)\n",
        "cozum": "import numpy as np\n\na = np.arange(5)\n\nc = a[1:4].copy()\nc[0] = 99\n\nprint(a)\nprint(c)\n",
        "kontroller": [
            dizi_mi("c"),
            ("not np.shares_memory(u['c'], u['a'])", "`c` bağımsız bir kopya (bellek paylaşmıyor)"),
            ("np.array_equal(u['c'], [99, 2, 3])", "`c` = [99, 2, 3]"),
            ("np.array_equal(u['a'], [0, 1, 2, 3, 4])", "Orijinal `a` dizisi değişmemiş"),
        ],
    },
]


def fonksiyon_mu(ad):
    return f"callable(u.get('{ad}'))", f"`{ad}` adında bir fonksiyon tanımlanmış"


# ---------- Python bölümleri (Week 2–5) ----------
ALISTIRMALAR += [
    {
        "id": "girdi-hesap",
        "bolum": "Python Temelleri",
        "baslik": "Ortalama hesapla",
        "soru": "Kullanıcıdan string olarak gelmiş üç not (`n1`, `n2`, `n3`) veriliyor. Bunları sayıya çevirip "
                "ortalamasını `ortalama` değişkenine ata. Ayrıca toplamın 3'e tam sayı bölmesini `tam` değişkenine, "
                "toplamın 3'e bölümünden kalanı `kalan` değişkenine ata.",
        "ipucu": "input her zaman string döndürür; int() ile çevir. / ondalıklı bölme, // tam sayı bölmesi, % kalan.",
        "baslangic": "n1 = '70'\nn2 = '85'\nn3 = '91'\n\nortalama = \ntam = \nkalan = \nprint(ortalama, tam, kalan)\n",
        "cozum": "n1 = '70'\nn2 = '85'\nn3 = '91'\n\ntoplam = int(n1) + int(n2) + int(n3)\nortalama = toplam / 3\n"
                 "tam = toplam // 3\nkalan = toplam % 3\nprint(ortalama, tam, kalan)\n",
        "kontroller": [
            ("abs(u.get('ortalama') - r['ortalama']) < 1e-9", "`ortalama` doğru (ondalıklı bölme)"),
            ("u.get('tam') == r['tam'] and isinstance(u.get('tam'), int)", "`tam` doğru (tam sayı bölmesi)"),
            ("u.get('kalan') == r['kalan']", "`kalan` doğru"),
        ],
    },
    {
        "id": "fstring-bicim",
        "bolum": "Python Temelleri",
        "baslik": "f-string ile biçimlendir",
        "soru": "f-string kullanarak:\n• `fiyat_metni` → `fiyat` değerini binlik ayırıcılı ve 2 ondalıklı göster (1,234,567.89 gibi)\n"
                "• `oran_metni` → `oran` değerini 0 ondalıklı yüzde olarak göster (35% gibi)\n"
                "• `selam` → isim değişkeniyle 'Merhaba Ada!' metnini üret",
        "ipucu": "{fiyat:,.2f}, {oran:.0%}, f'Merhaba {isim}!'",
        "baslangic": "fiyat = 1234567.891\noran = 0.35\nisim = 'Ada'\n\nfiyat_metni = \noran_metni = \nselam = \n"
                     "print(fiyat_metni, oran_metni, selam)\n",
        "cozum": "fiyat = 1234567.891\noran = 0.35\nisim = 'Ada'\n\nfiyat_metni = f'{fiyat:,.2f}'\n"
                 "oran_metni = f'{oran:.0%}'\nselam = f'Merhaba {isim}!'\nprint(fiyat_metni, oran_metni, selam)\n",
        "kontroller": [
            ("u.get('fiyat_metni') == '1,234,567.89'", "`fiyat_metni` == '1,234,567.89'"),
            ("u.get('oran_metni') == '35%'", "`oran_metni` == '35%'"),
            ("u.get('selam') == 'Merhaba Ada!'", "`selam` == 'Merhaba Ada!'"),
        ],
    },
    {
        "id": "harf-notu",
        "bolum": "Karar ve Döngü Yapıları",
        "baslik": "if-elif-else ile harf notu",
        "soru": "`harf_notu(puan)` fonksiyonunu tamamla: puan 90 ve üstüyse 'A', 80 ve üstüyse 'B', 70 ve üstüyse 'C', "
                "diğer durumlarda 'F' döndürsün.",
        "ipucu": "if puan >= 90: ... elif puan >= 80: ... elif ... else: ... Koşullar yukarıdan aşağı denenir.",
        "baslangic": "def harf_notu(puan):\n    # if-elif-else ile yaz\n    pass\n\nprint(harf_notu(95), harf_notu(72))\n",
        "cozum": "def harf_notu(puan):\n    if puan >= 90:\n        return 'A'\n    elif puan >= 80:\n        return 'B'\n"
                 "    elif puan >= 70:\n        return 'C'\n    else:\n        return 'F'\n\nprint(harf_notu(95), harf_notu(72))\n",
        "kontroller": [
            fonksiyon_mu("harf_notu"),
            ("[u['harf_notu'](p) for p in (100, 90)] == ['A', 'A']", "90 ve üstü → 'A'"),
            ("[u['harf_notu'](p) for p in (89, 80)] == ['B', 'B']", "80–89 → 'B'"),
            ("[u['harf_notu'](p) for p in (79, 70)] == ['C', 'C']", "70–79 → 'C'"),
            ("[u['harf_notu'](p) for p in (69, 0)] == ['F', 'F']", "70'in altı → 'F'"),
        ],
    },
    {
        "id": "dongu-toplam",
        "bolum": "Karar ve Döngü Yapıları",
        "baslik": "Döngüyle birikimli toplam",
        "soru": "for döngüsü ve range kullanarak 1'den 100'e kadar (100 dahil) çift sayıların toplamını `toplam` "
                "değişkenine biriktir.",
        "ipucu": "toplam = 0 ile başla; range(2, 101, 2) ve toplam += n",
        "baslangic": "toplam = 0\n\n# for döngüsü yaz\n\nprint(toplam)\n",
        "cozum": "toplam = 0\nfor n in range(2, 101, 2):\n    toplam += n\nprint(toplam)\n",
        "kontroller": [
            ("u.get('toplam') == 2550", "`toplam` == 2550"),
            ("'2550' in cikti", "Sonuç yazdırılmış"),
        ],
    },
    {
        "id": "daire-alani",
        "bolum": "Fonksiyonlar",
        "baslik": "Değer döndüren fonksiyon",
        "soru": "math modülünü kullanarak, yarıçapı alıp dairenin alanını döndüren `daire_alani(r)` fonksiyonunu yaz. "
                "Ayrıca alan ve çevreyi birlikte döndüren `alan_cevre(r)` fonksiyonunu yaz (iki değer döndürsün).",
        "ipucu": "import math; return math.pi * r**2 · iki değer: return alan, cevre (çevre = 2 * math.pi * r)",
        "baslangic": "import math\n\ndef daire_alani(r):\n    pass\n\ndef alan_cevre(r):\n    pass\n\nprint(daire_alani(2))\n",
        "cozum": "import math\n\ndef daire_alani(r):\n    return math.pi * r**2\n\ndef alan_cevre(r):\n"
                 "    return math.pi * r**2, 2 * math.pi * r\n\nprint(daire_alani(2))\n",
        "kontroller": [
            fonksiyon_mu("daire_alani"),
            ("abs(u['daire_alani'](2) - 12.566370614359172) < 1e-9", "daire_alani(2) ≈ 12.566"),
            ("abs(u['daire_alani'](1) - 3.141592653589793) < 1e-9", "daire_alani(1) ≈ π"),
            ("np.allclose(u['alan_cevre'](3), (28.274333882308138, 18.84955592153876))", "alan_cevre(3) iki değer döndürüyor"),
        ],
    },
    {
        "id": "guvenli-bol",
        "bolum": "Dosyalar ve İstisnalar",
        "baslik": "try/except ile güvenli işlem",
        "soru": "`guvenli_bol(a, b)` fonksiyonunu yaz: a / b sonucunu döndürsün; sıfıra bölmede (ZeroDivisionError) "
                "None döndürsün. Ayrıca `sayiya_cevir(metin)` fonksiyonunu yaz: int(metin) döndürsün, çevrilemezse "
                "(ValueError) 0 döndürsün.",
        "ipucu": "try:\n    return a / b\nexcept ZeroDivisionError:\n    return None",
        "baslangic": "def guvenli_bol(a, b):\n    pass\n\ndef sayiya_cevir(metin):\n    pass\n\nprint(guvenli_bol(10, 0), sayiya_cevir('abc'))\n",
        "cozum": "def guvenli_bol(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n\n"
                 "def sayiya_cevir(metin):\n    try:\n        return int(metin)\n    except ValueError:\n        return 0\n\n"
                 "print(guvenli_bol(10, 0), sayiya_cevir('abc'))\n",
        "kontroller": [
            fonksiyon_mu("guvenli_bol"),
            ("u['guvenli_bol'](10, 4) == 2.5", "guvenli_bol(10, 4) == 2.5"),
            ("u['guvenli_bol'](10, 0) is None", "guvenli_bol(10, 0) is None (hata yerine)"),
            ("u['sayiya_cevir']('42') == 42", "sayiya_cevir('42') == 42"),
            ("u['sayiya_cevir']('abc') == 0", "sayiya_cevir('abc') == 0 (hata yerine)"),
        ],
    },
    {
        "id": "liste-uretec",
        "bolum": "Listeler ve Demetler",
        "baslik": "Liste üreteci",
        "soru": "Liste üreteci (list comprehension) kullanarak:\n• `kucukler` → `list1` içindeki 10'dan küçük sayılar\n"
                "• `kareler` → `list1` içindeki her sayının karesi\n• `uzunluklar` → `isimler` listesindeki her ismin uzunluğu",
        "ipucu": "[item for item in list1 if item < 10], [item**2 for item in list1], [len(s) for s in isimler]",
        "baslangic": "list1 = [1, 12, 2, 20, 3, 15, 4]\nisimler = ['Winken', 'Blinken', 'Nod']\n\nkucukler = \nkareler = \nuzunluklar = \n",
        "cozum": "list1 = [1, 12, 2, 20, 3, 15, 4]\nisimler = ['Winken', 'Blinken', 'Nod']\n\nkucukler = [x for x in list1 if x < 10]\n"
                 "kareler = [x**2 for x in list1]\nuzunluklar = [len(s) for s in isimler]\nprint(kucukler, kareler, uzunluklar)\n",
        "kontroller": [
            ("u.get('kucukler') == [1, 2, 3, 4]", "`kucukler` == [1, 2, 3, 4]"),
            ("u.get('kareler') == r['kareler']", "`kareler` doğru"),
            ("u.get('uzunluklar') == [6, 7, 3]", "`uzunluklar` == [6, 7, 3]"),
        ],
    },
    {
        "id": "string-islem",
        "bolum": "String'ler",
        "baslik": "String metotları ve split",
        "soru": "Verilen `adres` için:\n• `parcalar` → '.' karakterine göre token'lara ayır\n• `alan` → ortadaki token (example)\n"
                "• `buyuk` → adresin tamamen büyük harfli hali\n• `konum` → 'example' kelimesinin adres içindeki indeksi (find)\n"
                "• `yeni` → 'www' yerine 'mail' yazılmış hali",
        "ipucu": "split('.'), parcalar[1], upper(), find('example'), replace('www', 'mail')",
        "baslangic": "adres = 'www.example.com'\n\nparcalar = \nalan = \nbuyuk = \nkonum = \nyeni = \n",
        "cozum": "adres = 'www.example.com'\n\nparcalar = adres.split('.')\nalan = parcalar[1]\nbuyuk = adres.upper()\n"
                 "konum = adres.find('example')\nyeni = adres.replace('www', 'mail')\nprint(parcalar, alan, buyuk, konum, yeni)\n",
        "kontroller": [
            ("u.get('parcalar') == ['www', 'example', 'com']", "`parcalar` == ['www', 'example', 'com']"),
            ("u.get('alan') == 'example'", "`alan` == 'example'"),
            ("u.get('buyuk') == 'WWW.EXAMPLE.COM'", "`buyuk` doğru"),
            ("u.get('konum') == 4", "`konum` == 4"),
            ("u.get('yeni') == 'mail.example.com'", "`yeni` == 'mail.example.com'"),
        ],
    },
    {
        "id": "sozluk-uretec",
        "bolum": "Sözlükler ve Kümeler",
        "baslik": "Sözlük işlemleri",
        "soru": "• `uzunluklar` → sözlük üreteciyle `isimler` listesinden {isim: uzunluk} sözlüğü oluştur\n"
                "• `buyuk_sehirler` → `nufus` sözlüğünden nüfusu 2.000.000'dan büyük şehirleri seç\n"
                "• `ankara` → get metoduyla 'Ankara' anahtarının değerini al; yoksa 0 olsun",
        "ipucu": "{n: len(n) for n in isimler}, {k: v for k, v in nufus.items() if v > 2000000}, nufus.get('Ankara', 0)",
        "baslangic": "isimler = ['Jeremy', 'Kate', 'Peg']\nnufus = {'New York': 8398748, 'Chicago': 2705994, 'Phoenix': 1660272}\n\n"
                     "uzunluklar = \nbuyuk_sehirler = \nankara = \n",
        "cozum": "isimler = ['Jeremy', 'Kate', 'Peg']\nnufus = {'New York': 8398748, 'Chicago': 2705994, 'Phoenix': 1660272}\n\n"
                 "uzunluklar = {n: len(n) for n in isimler}\nbuyuk_sehirler = {k: v for k, v in nufus.items() if v > 2000000}\n"
                 "ankara = nufus.get('Ankara', 0)\nprint(uzunluklar, buyuk_sehirler, ankara)\n",
        "kontroller": [
            ("u.get('uzunluklar') == {'Jeremy': 6, 'Kate': 4, 'Peg': 3}", "`uzunluklar` doğru"),
            ("u.get('buyuk_sehirler') == {'New York': 8398748, 'Chicago': 2705994}", "`buyuk_sehirler` doğru"),
            ("u.get('ankara') == 0", "`ankara` == 0 (KeyError olmadan)"),
        ],
    },
    {
        "id": "kume-islem",
        "bolum": "Sözlükler ve Kümeler",
        "baslik": "Küme işlemleri",
        "soru": "`a` ve `b` listelerinden kümeler oluşturup:\n• `birlesim`, `kesisim`, `fark` (a'da olup b'de olmayan), "
                "`simetrik` (ortak olmayanlar) kümelerini hesapla\n• `benzersiz_sayisi` → a listesindeki benzersiz eleman sayısı",
        "ipucu": "set(a), | & - ^ operatörleri, len(set(a))",
        "baslangic": "a = [1, 2, 2, 3, 4, 4]\nb = [3, 4, 5, 6]\n\nbirlesim = \nkesisim = \nfark = \nsimetrik = \nbenzersiz_sayisi = \n",
        "cozum": "a = [1, 2, 2, 3, 4, 4]\nb = [3, 4, 5, 6]\n\nA, B = set(a), set(b)\nbirlesim = A | B\nkesisim = A & B\nfark = A - B\n"
                 "simetrik = A ^ B\nbenzersiz_sayisi = len(A)\nprint(birlesim, kesisim, fark, simetrik, benzersiz_sayisi)\n",
        "kontroller": [
            ("u.get('birlesim') == {1, 2, 3, 4, 5, 6}", "`birlesim` doğru"),
            ("u.get('kesisim') == {3, 4}", "`kesisim` doğru"),
            ("u.get('fark') == {1, 2}", "`fark` doğru"),
            ("u.get('simetrik') == {1, 2, 5, 6}", "`simetrik` doğru"),
            ("u.get('benzersiz_sayisi') == 4", "`benzersiz_sayisi` == 4"),
        ],
    },
    {
        "id": "banka-hesabi",
        "bolum": "Sınıflar ve OOP",
        "baslik": "BankAccount sınıfı",
        "soru": "`BankAccount` sınıfını yaz:\n• __init__(self, bal) → bakiyeyi private `__balance` özniteliğinde sakla\n"
                "• deposit(amount) → bakiyeye ekler\n• withdraw(amount) → bakiye yetiyorsa düşer, yetmiyorsa 'Error: Insufficient funds' yazdırır\n"
                "• get_balance() → bakiyeyi döndürür\n• __str__ → 'The balance is $1,500.00' biçiminde string döndürür",
        "ipucu": "self.__balance = bal · if self.__balance >= amount: ... · return f'The balance is ${self.__balance:,.2f}'",
        "baslangic": "class BankAccount:\n    def __init__(self, bal):\n        pass\n\n\nhesap = BankAccount(1000.0)\nhesap.deposit(500.0)\nprint(hesap)\n",
        "cozum": "class BankAccount:\n    def __init__(self, bal):\n        self.__balance = bal\n\n    def deposit(self, amount):\n"
                 "        self.__balance += amount\n\n    def withdraw(self, amount):\n        if self.__balance >= amount:\n"
                 "            self.__balance -= amount\n        else:\n            print('Error: Insufficient funds')\n\n"
                 "    def get_balance(self):\n        return self.__balance\n\n    def __str__(self):\n"
                 "        return f'The balance is ${self.__balance:,.2f}'\n\n\nhesap = BankAccount(1000.0)\nhesap.deposit(500.0)\nprint(hesap)\n",
        "kontroller": [
            ("isinstance(u.get('BankAccount'), type)", "`BankAccount` sınıfı tanımlanmış"),
            ("(lambda h: (h.deposit(50), h.get_balance())[1])(u['BankAccount'](100)) == 150", "deposit ve get_balance çalışıyor"),
            ("(lambda h: (h.withdraw(30), h.get_balance())[1])(u['BankAccount'](100)) == 70", "withdraw bakiyeyi düşürüyor"),
            ("(lambda h: (h.withdraw(500), h.get_balance())[1])(u['BankAccount'](100)) == 100", "Yetersiz bakiyede bakiye değişmiyor"),
            ("hasattr(u['BankAccount'](1), '_BankAccount__balance')", "Bakiye private `__balance` özniteliğinde"),
            ("str(u['BankAccount'](1500)) == 'The balance is $1,500.00'", "__str__ doğru biçimde"),
        ],
    },
    {
        "id": "kalitim",
        "bolum": "Kalıtım ve Çok Biçimlilik",
        "baslik": "Alt sınıf ve override",
        "soru": "Verilen `Mammal` sınıfından türeyen iki alt sınıf yaz:\n• `Dog` → __init__ üst sınıfın başlatıcısını 'Dog' ile çağırsın; "
                "make_sound() 'Woof! Woof!' döndürsün\n• `Cat` → __init__ üst sınıfı 'Cat' ile çağırsın; make_sound() 'Meow' döndürsün",
        "ipucu": "class Dog(Mammal):\n    def __init__(self):\n        Mammal.__init__(self, 'Dog')\n    def make_sound(self):\n        return 'Woof! Woof!'",
        "baslangic": "class Mammal:\n    def __init__(self, species):\n        self.species = species\n\n    def make_sound(self):\n"
                     "        return 'Grrrrr'\n\n# Dog ve Cat alt sınıflarını yaz\n\n",
        "cozum": "class Mammal:\n    def __init__(self, species):\n        self.species = species\n\n    def make_sound(self):\n"
                 "        return 'Grrrrr'\n\nclass Dog(Mammal):\n    def __init__(self):\n        Mammal.__init__(self, 'Dog')\n\n"
                 "    def make_sound(self):\n        return 'Woof! Woof!'\n\nclass Cat(Mammal):\n    def __init__(self):\n"
                 "        Mammal.__init__(self, 'Cat')\n\n    def make_sound(self):\n        return 'Meow'\n\n"
                 "for hayvan in [Mammal('x'), Dog(), Cat()]:\n    print(hayvan.species, hayvan.make_sound())\n",
        "kontroller": [
            ("issubclass(u['Dog'], u['Mammal'])", "Dog, Mammal'ın alt sınıfı"),
            ("issubclass(u['Cat'], u['Mammal'])", "Cat, Mammal'ın alt sınıfı"),
            ("u['Dog']().species == 'Dog' and u['Cat']().species == 'Cat'", "Üst sınıfın başlatıcısı çağrılıyor"),
            ("u['Dog']().make_sound() == 'Woof! Woof!'", "Dog.make_sound override edilmiş"),
            ("u['Cat']().make_sound() == 'Meow'", "Cat.make_sound override edilmiş"),
            ("isinstance(u['Dog'](), u['Mammal'])", "isinstance(Dog(), Mammal) True"),
        ],
    },
    {
        "id": "faktoriyel",
        "bolum": "Özyineleme",
        "baslik": "Özyinelemeli faktöriyel",
        "soru": "Özyineleme kullanarak `factorial(n)` fonksiyonunu yaz: n == 0 ise 1 döndürsün (temel durum), "
                "değilse n * factorial(n - 1) döndürsün (özyinelemeli durum).",
        "ipucu": "def factorial(num):\n    if num == 0:\n        return 1\n    else:\n        return num * factorial(num - 1)",
        "baslangic": "def factorial(num):\n    pass\n\nprint(factorial(5))\n",
        "cozum": "def factorial(num):\n    if num == 0:\n        return 1\n    else:\n        return num * factorial(num - 1)\n\nprint(factorial(5))\n",
        "kontroller": [
            fonksiyon_mu("factorial"),
            ("u['factorial'](0) == 1", "factorial(0) == 1 (temel durum)"),
            ("u['factorial'](5) == 120", "factorial(5) == 120"),
            ("u['factorial'](10) == 3628800", "factorial(10) == 3628800"),
        ],
    },
    {
        "id": "fibonacci",
        "bolum": "Özyineleme",
        "baslik": "Fibonacci ve EBOB",
        "soru": "Özyinelemeli iki fonksiyon yaz:\n• `fib(n)` → n == 0 ise 0, n == 1 ise 1, değilse fib(n-1) + fib(n-2)\n"
                "• `gcd(x, y)` → x % y == 0 ise y, değilse gcd(y, x % y)",
        "ipucu": "Fibonacci'nin iki temel durumu vardır.",
        "baslangic": "def fib(n):\n    pass\n\ndef gcd(x, y):\n    pass\n\nprint(fib(10), gcd(49, 28))\n",
        "cozum": "def fib(n):\n    if n == 0:\n        return 0\n    elif n == 1:\n        return 1\n    else:\n        return fib(n - 1) + fib(n - 2)\n\n"
                 "def gcd(x, y):\n    if x % y == 0:\n        return y\n    else:\n        return gcd(y, x % y)\n\nprint(fib(10), gcd(49, 28))\n",
        "kontroller": [
            ("[u['fib'](i) for i in range(8)] == [0, 1, 1, 2, 3, 5, 8, 13]", "fib(0..7) == 0, 1, 1, 2, 3, 5, 8, 13"),
            ("u['fib'](15) == 610", "fib(15) == 610"),
            ("u['gcd'](49, 28) == 7 and u['gcd'](12, 18) == 6", "gcd doğru (49, 28 → 7; 12, 18 → 6)"),
        ],
    },
    {
        "id": "sql-sorgu",
        "bolum": "Veritabanı Programlama",
        "baslik": "SQLite sorguları",
        "soru": "Hazır bellek içi veritabanında:\n• `pahalilar` → fiyatı 10'dan büyük ürünlerin adlarını, fiyata göre artan sırada liste olarak al "
                "(['Hammer', 'Vice Grips'] gibi)\n• `adet` → COUNT(*) ile toplam ürün sayısı\n"
                "• Sonra 'Wrench' ürününü 16.99 fiyatla ? yer tutucularıyla ekle",
        "ipucu": "cur.execute('SELECT ItemName FROM Inventory WHERE Price > 10 ORDER BY Price'); [row[0] for row in cur.fetchall()]",
        "baslangic": "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\n"
                     "cur.execute('CREATE TABLE Inventory (ItemID INTEGER PRIMARY KEY, ItemName TEXT, Price REAL)')\n"
                     "cur.execute(\"INSERT INTO Inventory (ItemName, Price) VALUES ('Screwdriver', 4.99), ('Vice Grips', 14.99), ('Hammer', 12.99)\")\n"
                     "conn.commit()\n\npahalilar = \nadet = \n\n# Wrench ekle\n",
        "cozum": "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\n"
                 "cur.execute('CREATE TABLE Inventory (ItemID INTEGER PRIMARY KEY, ItemName TEXT, Price REAL)')\n"
                 "cur.execute(\"INSERT INTO Inventory (ItemName, Price) VALUES ('Screwdriver', 4.99), ('Vice Grips', 14.99), ('Hammer', 12.99)\")\n"
                 "conn.commit()\n\ncur.execute('SELECT ItemName FROM Inventory WHERE Price > 10 ORDER BY Price')\n"
                 "pahalilar = [row[0] for row in cur.fetchall()]\ncur.execute('SELECT COUNT(*) FROM Inventory')\nadet = cur.fetchone()[0]\n\n"
                 "cur.execute('INSERT INTO Inventory (ItemName, Price) VALUES (?, ?)', ('Wrench', 16.99))\nconn.commit()\nprint(pahalilar, adet)\n",
        "kontroller": [
            ("list(u.get('pahalilar')) == ['Hammer', 'Vice Grips']", "`pahalilar` == ['Hammer', 'Vice Grips']"),
            ("u.get('adet') == 3", "`adet` == 3"),
            ("u['cur'].execute(\"SELECT Price FROM Inventory WHERE ItemName = 'Wrench'\").fetchone() == (16.99,)", "Wrench 16.99 fiyatla eklenmiş"),
        ],
    },
    {
        "id": "maskeleme",
        "bolum": "NumPy Bölüm 2",
        "baslik": "Boolean maskeleme",
        "soru": "Verilen `data` dizisi için:\n• `buyukler` → 4'ten büyük elemanlar\n• `aralik` → 3'ten büyük VE 7'den küçük elemanlar\n"
                "• `negatif_sayisi` → `yeni` dizisindeki tek sayıları -1 yaptıktan sonra negatif eleman sayısı",
        "ipucu": "data[data > 4] · data[(data > 3) & (data < 7)] · yeni[yeni % 2 != 0] = -1 · np.sum(yeni < 0)",
        "baslangic": "import numpy as np\n\ndata = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nyeni = np.arange(0, 20)\n\nbuyukler = \naralik = \n\n"
                     "# yeni dizisinde tek sayıları -1 yap\n\nnegatif_sayisi = \n",
        "cozum": "import numpy as np\n\ndata = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nyeni = np.arange(0, 20)\n\nbuyukler = data[data > 4]\n"
                 "aralik = data[(data > 3) & (data < 7)]\n\nyeni[yeni % 2 != 0] = -1\n\nnegatif_sayisi = np.sum(yeni < 0)\n"
                 "print(buyukler, aralik, negatif_sayisi)\n",
        "kontroller": [
            ("np.array_equal(u['buyukler'], [8, 7, 6])", "`buyukler` == [8 7 6]"),
            ("np.array_equal(u['aralik'], [6, 4])", "`aralik` == [6 4]"),
            ("np.array_equal(u['yeni'], r['yeni'])", "`yeni` dizisinde tek sayılar -1 yapılmış"),
            ("u.get('negatif_sayisi') == 10", "`negatif_sayisi` == 10"),
        ],
    },
    {
        "id": "broadcasting",
        "bolum": "NumPy Bölüm 2",
        "baslik": "Broadcasting ve ufunc",
        "soru": "• `sonuc` → (3, 4) birler matrisi ile np.arange(4) vektörünü topla (broadcasting)\n"
                "• `kok` → `sayilar` dizisinin karekökü (ufunc)\n• `sutun` → np.arange(3).reshape(3, 1) ile np.arange(4)'ü çarp; sonuç (3, 4) olmalı",
        "ipucu": "np.ones((3, 4)) + np.arange(4) · np.sqrt(sayilar) · iki dizide de 1 olan boyutlar esnetilir",
        "baslangic": "import numpy as np\n\nsayilar = np.array([1, 4, 9, 16])\n\nsonuc = \nkok = \nsutun = \n",
        "cozum": "import numpy as np\n\nsayilar = np.array([1, 4, 9, 16])\n\nsonuc = np.ones((3, 4)) + np.arange(4)\nkok = np.sqrt(sayilar)\n"
                 "sutun = np.arange(3).reshape(3, 1) * np.arange(4)\nprint(sonuc)\nprint(kok)\nprint(sutun)\n",
        "kontroller": [
            ("np.array_equal(u['sonuc'], r['sonuc'])", "`sonuc` doğru (her satır [1 2 3 4])"),
            ("np.allclose(u['kok'], [1, 2, 3, 4])", "`kok` == [1 2 3 4]"),
            ("u['sutun'].shape == (3, 4) and np.array_equal(u['sutun'], r['sutun'])", "`sutun` (3, 4) ve doğru"),
        ],
    },
    {
        "id": "axis-toplam",
        "bolum": "NumPy Bölüm 2",
        "baslik": "Toplama fonksiyonları ve axis",
        "soru": "Verilen `notlar` matrisinde (satırlar öğrenci, sütunlar sınav):\n• `genel_ortalama` → tüm notların ortalaması\n"
                "• `sinav_ortalamalari` → her sınavın (sütunun) ortalaması\n• `ogrenci_toplamlari` → her öğrencinin (satırın) toplamı\n"
                "• `en_yuksek` → en yüksek not",
        "ipucu": "np.mean(notlar), notlar.mean(axis=0), notlar.sum(axis=1), np.max(notlar)",
        "baslangic": "import numpy as np\n\nnotlar = np.array([[70, 80, 90],\n                  [60, 75, 85],\n                  [95, 65, 70]])\n\n"
                     "genel_ortalama = \nsinav_ortalamalari = \nogrenci_toplamlari = \nen_yuksek = \n",
        "cozum": "import numpy as np\n\nnotlar = np.array([[70, 80, 90],\n                  [60, 75, 85],\n                  [95, 65, 70]])\n\n"
                 "genel_ortalama = np.mean(notlar)\nsinav_ortalamalari = notlar.mean(axis=0)\nogrenci_toplamlari = notlar.sum(axis=1)\n"
                 "en_yuksek = np.max(notlar)\nprint(genel_ortalama, sinav_ortalamalari, ogrenci_toplamlari, en_yuksek)\n",
        "kontroller": [
            ("np.isclose(u['genel_ortalama'], r['genel_ortalama'])", "`genel_ortalama` doğru"),
            ("np.allclose(u['sinav_ortalamalari'], r['sinav_ortalamalari'])", "`sinav_ortalamalari` doğru (axis=0)"),
            ("np.array_equal(u['ogrenci_toplamlari'], r['ogrenci_toplamlari'])", "`ogrenci_toplamlari` doğru (axis=1)"),
            ("u.get('en_yuksek') == 95", "`en_yuksek` == 95"),
        ],
    },
]


def istemci_icin():
    """Tarayıcıya gönderilecek alıştırma listesi (kontrol ifadeleri hariç)."""
    return [
        {k: v for k, v in a.items() if k != "kontroller"}
        | {"kontroller": [aciklama for _, aciklama in a["kontroller"]]}
        for a in ALISTIRMALAR
    ]


def bul(alistirma_id):
    return next((a for a in ALISTIRMALAR if a["id"] == alistirma_id), None)
