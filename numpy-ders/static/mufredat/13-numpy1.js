// Bölüm 13 — NumPy_part1.md: NumPy for Data Science (29 slayt)
UNITELER.push({
  "id": "u-np1",
  "renk": "yesil",
  "baslik": "NumPy Bölüm 1",
  "kaynak": "NumPy_part1",
  "slaytSayisi": 29,
  "altBaslik": "NumPy for Data Science · ndarray, dizi oluşturma, indeksleme, view/copy",
  "dersler": [
    {
      "id": "n-liste",
      "baslik": "Python listesinin sorunu",
      "slayt": [
        1,
        3
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            1,
            1
          ],
          "baslik": "NumPy for Data Science",
          "metin": "<p>Bu bölüm <b>Dr. Gökçen Tonbul</b>'un <b>\"NumPy for Data Science\"</b> sunumunu (29 slayt) adım adım işler: Python listelerinin sayısal hesaplamadaki sorunu, NumPy dizisi (ndarray), vektörleştirme, ndarray özellikleri, dizi oluşturma, indeksleme/dilimleme ve view–copy ayrımı.</p><p>Önceki bölümlerde öğrendiğin <b>liste, indeks, dilimleme, for döngüsü ve fonksiyon çağırma</b> bilgileri burada çok işine yarayacak. Terminalde <code>np</code> zaten yüklü.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            2
          ],
          "baslik": "Liste veriyi nasıl saklar?",
          "metin": "<p>Python listesi <b>esnek</b> bir kaptır: tam sayı, metin, nesne gibi <b>farklı veri tiplerini</b> (heterojen) bir arada tutabilir.</p>\n            <p>Ama içeride <b>verinin kendisini saklamaz</b>. Bellekte <b>dağınık yerlerde duran Python nesnelerini gösteren bir pointer (işaretçi/adres) dizisi</b> saklar.</p>",
          "cizim": "listePointer"
        },
        {
          "tip": "ogren",
          "slayt": [
            2
          ],
          "baslik": "for döngüsünde ne olur?",
          "metin": "<p>Liste üzerinde <code>for</code> döngüsü kurunca Python <b>her eleman için</b> şunları yapar:</p>\n            <ol><li><b>Pointer'ı takip eder</b> (dereference) ve nesneyi bulur</li><li>Nesnenin <b>tipini belirler</b></li><li>Ancak ondan sonra <b>işlemi yapar</b></li></ol>\n            <p>Bu her eleman için tekrar edilir. Sonuç: sayısal hesaplamalarda <b>ek yük (overhead)</b> oluşur ve iş <b>hesaplama açısından pahalı</b> hale gelir.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            3
          ],
          "baslik": "Veri biliminin beklentisi",
          "metin": "<p>Veri biliminde beklenti <b>optimize edilmiş bir veri yapısıdır</b>.</p>\n            <p>Python listesinin bellek mimarisi <b>büyük ölçekli ve tekrarlı sayısal işlemler</b> için optimize değildir.</p>\n            <p><b>NumPy bu boşluğu doldurmak için yaratıldı.</b> Bu işler için çok daha <b>hızlı</b> ve <b>bellek açısından verimli</b> bir dizi nesnesi sunar.</p>"
        },
        {
          "tip": "secmeli",
          "soru": "Python listesi verileri bellekte nasıl tutar?",
          "secenekler": [
            "Dağınık yerlerdeki nesneleri gösteren pointer'lar olarak",
            "Tek ve bitişik bir bellek bloğunda",
            "Sadece sayıları tutan sabit bir tablo olarak",
            "Derlenmiş C dizisi olarak"
          ],
          "dogru": 0,
          "aciklama": "Liste verinin kendisini değil, dağınık nesnelere işaret eden pointer'ları saklar."
        },
        {
          "tip": "sirala",
          "soru": "Listede for döngüsü sırasında her eleman için olanları sırala",
          "parcalar": [
            "Pointer takip edilir",
            "Nesnenin tipi belirlenir",
            "İşlem yapılır"
          ],
          "ekstra": [
            "Dizi C'ye gönderilir"
          ],
          "ayrac": " → ",
          "aciklama": "Önce pointer takip edilip nesne bulunur, sonra tipi belirlenir, en son işlem yapılır."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Python listesi farklı veri tiplerini bir arada tutabilir.",
          "dogru": true,
          "aciklama": "Liste heterojen veri tutabilen esnek bir kaptır."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Python listesi verinin kendisini tek bir bitişik bellek bloğunda saklar.",
          "dogru": false,
          "aciklama": "Liste dağınık nesnelere pointer saklar. Bitişik blok NumPy'ın özelliğidir."
        },
        {
          "tip": "secmeli",
          "soru": "NumPy neden yaratıldı?",
          "secenekler": [
            "Listenin bellek mimarisi büyük ölçekli sayısal işlemler için optimize olmadığı için",
            "Python'da liste olmadığı için",
            "Metin işlemek için",
            "Web sitesi yapmak için"
          ],
          "dogru": 0,
          "aciklama": "NumPy, listelerin büyük ölçekli sayısal işlemlerdeki eksikliğini doldurmak için yaratıldı."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "Pointer",
              "nesnenin adresi"
            ],
            [
              "Overhead",
              "ek yük"
            ],
            [
              "Heterojen",
              "farklı tipler bir arada"
            ]
          ]
        }
      ]
    },
    {
      "id": "n-ndarray",
      "baslik": "ndarray'in farkı",
      "slayt": [
        4
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            4
          ],
          "baslik": "NumPy dizisi: ndarray",
          "metin": "<p>NumPy optimize edilmiş bir veri yapısı sunar: <b>NumPy dizisi (ndarray)</b>.</p>\n            <ul><li><b>Homojendir</b>: tüm elemanlar <b>aynı veri tipindedir</b>, yani her eleman bellekte <b>aynı miktarda yer kaplar</b>.</li>\n            <li><b>Tek, bitişik (contiguous) bir bellek bloğunda</b> saklanır.</li></ul>",
          "cizim": "bitisik"
        },
        {
          "tip": "ogren",
          "slayt": [
            4
          ],
          "baslik": "Hızın anahtarı",
          "metin": "<p>Bu yoğun ve düzenli bellek yerleşimi NumPy'ın performansının <b>anahtarıdır</b>:</p>\n            <ul><li>Listelerdeki <b>pointer takibi ve tip kontrolü yükünü ortadan kaldırır</b>.</li>\n            <li>Daha da önemlisi, hesaplamaları <b>C veya Fortran</b> ile yazılmış, <b>önceden derlenmiş</b> optimize koda devretmeyi sağlar.</li></ul>",
          "kod": "a = np.array([1, 2, 3])\nprint(a.dtype)"
        },
        {
          "tip": "secmeli",
          "soru": "ndarray'i listeden ayıran bellek özelliği nedir?",
          "secenekler": [
            "Homojen olması ve tek, bitişik bir bellek bloğunda saklanması",
            "Farklı tipleri bir arada tutabilmesi",
            "Her elemanın ayrı bir nesne olması",
            "Boyutunun dinamik büyüyebilmesi"
          ],
          "dogru": 0,
          "aciklama": "ndarray homojendir ve tek bitişik bellek bloğunda saklanır."
        },
        {
          "tip": "secmeli",
          "soru": "Bitişik bellek modeli NumPy'a ne sağlar?",
          "secenekler": [
            "Hesaplamaları önceden derlenmiş C/Fortran koduna devretmeyi",
            "Farklı tipleri karıştırabilmeyi",
            "append ile eleman eklemeyi",
            "Metinleri hızlı okumayı"
          ],
          "dogru": 0,
          "aciklama": "Bitişik bellek, işlerin derlenmiş C veya Fortran koduna devredilmesini sağlar."
        },
        {
          "tip": "bosluk",
          "soru": "Cümleyi tamamla",
          "metin": "NumPy dizisi ___ bir veri kabıdır ve ___ bir bellek bloğunda saklanır.",
          "bosluklar": [
            "homojen",
            "bitişik"
          ],
          "kelimeler": [
            "homojen",
            "heterojen",
            "bitişik",
            "dağınık"
          ],
          "kodDegil": true,
          "aciklama": "ndarray homojendir (tek tip) ve bitişik bellek bloğunda saklanır."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "ndarray'de her eleman bellekte aynı miktarda yer kaplar.",
          "dogru": true,
          "aciklama": "Tüm elemanlar aynı tipte olduğu için hepsi aynı boyuttadır."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "ndarray'de de her eleman için pointer takibi ve tip kontrolü yapılır.",
          "dogru": false,
          "aciklama": "Bitişik ve düzenli yerleşim bu yükü ortadan kaldırır."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "Python listesi",
              "dağınık nesnelere pointer"
            ],
            [
              "ndarray",
              "tek bitişik bellek bloğu"
            ],
            [
              "Homojen",
              "tüm elemanlar aynı tip"
            ],
            [
              "C / Fortran",
              "önceden derlenmiş hızlı kod"
            ]
          ]
        }
      ]
    },
    {
      "id": "n-vektor",
      "baslik": "Vektörleştirme ve SIMD",
      "slayt": [
        5,
        6
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            5
          ],
          "baslik": "Vektörleştirme (Vectorization)",
          "metin": "<p>Elemanları tek tek dolaşan <code>for</code> döngüleri yazmak yerine işlemi <b>dizinin tamamı üzerinde</b> yazarsın.</p>\n            <p>Örneğin iki diziyi toplamak için sadece <code>+</code> kullanılır. NumPy elemanları <b>karşılıklı</b> toplar.</p>",
          "kod": "a = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(a + b)"
        },
        {
          "tip": "ogren",
          "slayt": [
            5
          ],
          "baslik": "Sadece kısa yazım değil",
          "metin": "<p>Vektörleştirilmiş kod NumPy'ın hızlı, <b>derlenmiş altyapısını tetikler</b>.</p>\n            <p>Bu altyapı <b>SIMD (Single Instruction, Multiple Data)</b> kullanabilir: <b>tek bir komut birden çok veriye aynı anda (paralel)</b> uygulanır.</p>\n            <p>Sonuç: Python yorumlayıcısının yükü büyük ölçüde azalır, hesaplama hızı <b>muazzam</b> artar.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            6
          ],
          "baslik": "Performanstan fazlası",
          "metin": "<ul><li>Vektörleştirilmiş kod çoğu zaman <b>standart matematiksel gösterime</b> benzer.</li>\n            <li>Daha <b>kısa ve okunması kolaydır</b>.</li>\n            <li>Daha az satır → <b>daha az hata (bug)</b> ihtimali.</li></ul>"
        },
        {
          "tip": "secmeli",
          "soru": "Vektörleştirme nedir?",
          "secenekler": [
            "İşlemi for döngüsü yerine dizinin tamamı üzerinde yazmak",
            "Diziyi listeye çevirmek",
            "Elemanları tek tek dolaşmak",
            "Diziyi ikiye bölmek"
          ],
          "dogru": 0,
          "aciklama": "Vektörleştirmede işlem tüm dizi üzerinde ifade edilir; örn. a + b."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a + b)",
          "secenekler": [
            "[5 7 9]",
            "[1 2 3 4 5 6]",
            "21",
            "[[1 2 3] [4 5 6]]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Elemanlar karşılıklı toplanır: 1+4, 2+5, 3+6. NumPy dizileri virgülsüz yazdırılır."
        },
        {
          "tip": "secmeli",
          "soru": "SIMD ne demektir?",
          "secenekler": [
            "Tek bir komutun birden çok veriye aynı anda uygulanması",
            "Her veri için ayrı komut çalıştırılması",
            "Verinin tek tipte saklanması",
            "Python'un tek satırda çalışması"
          ],
          "dogru": 0,
          "aciklama": "Single Instruction, Multiple Data: tek komut, çok veri, paralel."
        },
        {
          "tip": "bosluk",
          "soru": "İki diziyi döngüsüz topla",
          "metin": "toplam = a ___ b",
          "bosluklar": [
            "+"
          ],
          "kelimeler": [
            "+",
            "for",
            "in",
            "print"
          ],
          "aciklama": "Vektörleştirmede iki dizi doğrudan + ile toplanır."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Vektörleştirme sadece yazım kolaylığıdır, hıza etkisi yoktur.",
          "dogru": false,
          "aciklama": "Vektörleştirme NumPy'ın hızlı derlenmiş altyapısını tetikler."
        },
        {
          "tip": "secmeli",
          "soru": "Hangisi vektörleştirmenin performans DIŞI faydalarından biri DEĞİLDİR?",
          "secenekler": [
            "Dizinin boyutunu dinamik büyütebilmek",
            "Matematiksel gösterime benzemesi",
            "Kısa ve okunaklı kod",
            "Daha az hata ihtimali"
          ],
          "dogru": 0,
          "aciklama": "Diğer üçü slayt 6'daki faydalardır. ndarray'in boyutu sabittir."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "SIMD",
              "tek komut, çok veri"
            ],
            [
              "Vektörleştirme",
              "işlemi tüm diziye yazmak"
            ],
            [
              "for döngüsü",
              "elemanları tek tek dolaşmak"
            ]
          ]
        }
      ]
    },
    {
      "id": "n-performans",
      "baslik": "Ne kadar hızlı? Ne zaman değil?",
      "slayt": [
        7,
        8
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            7
          ],
          "baslik": "Benchmark",
          "metin": "<p>Farkı ölçmek için derste <b>10 milyon sayı</b> üzerinde eleman bazlı işlemler karşılaştırılır. (Örnek amaçlıdır, sonuçlar değişebilir.)</p>\n            <p>Aşağıdaki kodla kendi bilgisayarında 1 milyon sayı ile dene.</p>",
          "kod": "import time\nliste = list(range(1_000_000))\ndizi = np.arange(1_000_000)\nt = time.time(); s1 = [x * 2 for x in liste]; liste_sure = time.time() - t\nt = time.time(); s2 = dizi * 2; numpy_sure = time.time() - t\nprint(f\"Liste: {liste_sure:.4f} sn | NumPy: {numpy_sure:.4f} sn\")"
        },
        {
          "tip": "ogren",
          "slayt": [
            8
          ],
          "baslik": "Temel paket",
          "metin": "<p>NumPy biraz değil, <b>kat kat (orders of magnitude)</b> daha hızlıdır.</p>\n            <p>Bu yüzden <b>temel bir pakettir</b>: Pandas, Scikit-learn ve tüm bilimsel Python ekosistemi NumPy'ı temel alır.</p>\n            <p><b>En iyi uygulama:</b> Büyük veri setleri üzerindeki açık döngüleri NumPy ile değiştir.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            8
          ],
          "baslik": "Her zaman NumPy kullanma!",
          "metin": "<p>NumPy her zaman en hızlı çözüm değildir:</p>\n            <ul><li><b>tek skaler değerlerde</b> (tek bir sayı)</li><li><b>çok küçük listelerde</b></li></ul>\n            <p>NumPy dizisi oluşturmanın <b>ek yükü</b>, işlemi saf Python'dan <b>daha yavaş</b> yapabilir.</p>"
        },
        {
          "tip": "secmeli",
          "soru": "Slayt 7'deki benchmark kaç sayı üzerinde yapılır?",
          "secenekler": [
            "10 milyon",
            "10 bin",
            "100",
            "1 milyar"
          ],
          "dogru": 0,
          "aciklama": "Benchmark 10 milyon sayılık bir veri seti üzerinde yapılır."
        },
        {
          "tip": "secmeli",
          "soru": "NumPy hangi durumda saf Python'dan YAVAŞ olabilir?",
          "secenekler": [
            "Tek skaler değerlerde veya çok küçük listelerde",
            "10 milyon sayı üzerinde işlemde",
            "Büyük matris işlemlerinde",
            "Vektörleştirilmiş işlemlerde"
          ],
          "dogru": 0,
          "aciklama": "Küçük işlerde dizi oluşturmanın ek yükü kazancı geçer."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Pandas ve Scikit-learn, NumPy'ı temel paket olarak kullanır.",
          "dogru": true,
          "aciklama": "Tüm bilimsel Python ekosistemi NumPy üzerine kuruludur."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "NumPy her durumda saf Python'dan hızlıdır.",
          "dogru": false,
          "aciklama": "Tek skaler değerlerde ve çok küçük listelerde daha yavaş olabilir."
        },
        {
          "tip": "secmeli",
          "soru": "Derse göre en iyi uygulama hangisi?",
          "secenekler": [
            "Büyük veri setlerindeki açık döngüleri NumPy ile değiştirmek",
            "Her işlemde mutlaka NumPy kullanmak",
            "NumPy dizilerini for ile dolaşmak",
            "Sadece küçük listelerde NumPy kullanmak"
          ],
          "dogru": 0,
          "aciklama": "Best practice: büyük veri setlerinde döngü yerine NumPy."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "Büyük veri seti",
              "NumPy kullan"
            ],
            [
              "Tek skaler değer",
              "saf Python yeterli"
            ],
            [
              "Çok küçük liste",
              "dizi oluşturma yükü yavaşlatabilir"
            ]
          ]
        }
      ]
    },
    {
      "id": "d-eksen",
      "baslik": "N boyutlu dizi ve eksenler",
      "slayt": [
        9
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            9
          ],
          "baslik": "ndarray nedir?",
          "metin": "<p>NumPy'daki temel nesne <b>N boyutlu dizi</b>, yani <b>ndarray</b>'dir. ndarray:</p>\n            <ul><li>genellikle sayılardan oluşan bir <b>eleman tablosudur</b>,</li><li>tüm elemanları <b>aynı veri tipindedir</b>,</li>\n            <li><b>negatif olmayan tam sayılardan oluşan bir tuple</b> ile indekslenir (ör. <code>(1, 2)</code>).</li></ul>"
        },
        {
          "tip": "ogren",
          "slayt": [
            9
          ],
          "baslik": "Eksenler (axes)",
          "metin": "<p>NumPy'da boyutlara <b>eksen (axis)</b> denir.</p>\n            <p>2 boyutlu bir dizinin (matris) iki ekseni vardır: <b>axis 0 satırları</b>, <b>axis 1 sütunları</b> temsil eder.</p>",
          "cizim": "eksenler",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m)"
        },
        {
          "tip": "secmeli",
          "soru": "2 boyutlu bir dizide axis 0 neyi temsil eder?",
          "secenekler": [
            "Satırları",
            "Sütunları",
            "Veri tipini",
            "Eleman sayısını"
          ],
          "dogru": 0,
          "aciklama": "axis 0 satırlar, axis 1 sütunlardır."
        },
        {
          "tip": "secmeli",
          "soru": "2 boyutlu bir dizide axis 1 neyi temsil eder?",
          "secenekler": [
            "Sütunları",
            "Satırları",
            "Veri tipini",
            "Bellek adresini"
          ],
          "dogru": 0,
          "aciklama": "axis 1 sütunları temsil eder."
        },
        {
          "tip": "secmeli",
          "soru": "Bu dizide axis 0 boyunca kaç eleman (satır) var?",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6]])",
          "secenekler": [
            "2",
            "3",
            "6",
            "1"
          ],
          "dogru": 0,
          "aciklama": "İki iç liste var → 2 satır. axis 0 satırlardır."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "ndarray, negatif olmayan tam sayılardan oluşan bir tuple ile indekslenir.",
          "dogru": true,
          "aciklama": "Slayt 9: indexed by a tuple of non-negative integers."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Bir ndarray'in elemanları farklı veri tiplerinde olabilir.",
          "dogru": false,
          "aciklama": "ndarray'in tüm elemanları aynı veri tipindedir."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "axis 0",
              "satırlar"
            ],
            [
              "axis 1",
              "sütunlar"
            ],
            [
              "ndarray",
              "N boyutlu dizi"
            ]
          ]
        }
      ]
    },
    {
      "id": "d-kisit",
      "baslik": "ndarray'in kısıtlamaları",
      "slayt": [
        10
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            10
          ],
          "baslik": "Üç kısıtlama",
          "metin": "<ul><li><b>Homojenlik</b>: tek veri tipi</li><li><b>Sabit boyut</b></li><li><b>Dikdörtgen şekil</b>: her satır aynı uzunlukta</li></ul>\n            <p>Bunlar sınırlama mı? Hayır: <b>yüksek performans için bilinçli tasarım tercihleri</b>.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            10
          ],
          "baslik": "Neden böyle?",
          "metin": "<ul><li>Bitişik bellek bloğu için her elemanın boyutu <b>bilinmeli ve aynı olmalı</b> → bunun için tek, düzenli bir veri tipi (<b>homojenlik</b>) gerekir.</li>\n            <li>Bitişik bloğu korumak için dizinin toplam boyutu <b>oluşturulurken sabitlenir</b>.</li>\n            <li>Listedeki gibi dinamik büyütme (<code>list.append</code>) <b>yeni bellek ayırma</b> gerektirirdi; NumPy bu yükten kaçınmak için tasarlanmıştır.</li></ul>",
          "kod": "x = np.array([1, 2.5, 3])\nprint(x)\nprint(x.dtype)"
        },
        {
          "tip": "secmeli",
          "soru": "Hangisi ndarray'in bir kısıtlaması DEĞİLDİR?",
          "secenekler": [
            "append ile dinamik büyüyebilme",
            "Homojenlik",
            "Sabit boyut",
            "Dikdörtgen şekil"
          ],
          "dogru": 0,
          "aciklama": "Kısıtlamalar: homojenlik, sabit boyut, dikdörtgen şekil. Dinamik büyütme ndarray'de yoktur."
        },
        {
          "tip": "secmeli",
          "soru": "ndarray'in boyutu neden oluşturulurken sabitlenir?",
          "secenekler": [
            "Bitişik bellek bloğunu korumak ve yeniden bellek ayırma yükünden kaçınmak için",
            "Python buna izin vermediği için",
            "Farklı tipler saklanabilsin diye",
            "İndeksleme 0'dan başlasın diye"
          ],
          "dogru": 0,
          "aciklama": "Boyut değişseydi yeni bellek ayırmak gerekirdi; NumPy bundan kaçınır."
        },
        {
          "tip": "secmeli",
          "soru": "np.array([1, 2.5, 3]) dizisinin elemanları hangi tiptedir?",
          "secenekler": [
            "Hepsi float (ondalıklı)",
            "1 ve 3 int, 2.5 float",
            "Hepsi int",
            "Hepsi metin"
          ],
          "dogru": 0,
          "aciklama": "ndarray homojendir: tek tip olmak zorunda olduğu için hepsi float olur."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "ndarray'in kısıtlamaları yüksek performans için bilinçli tasarım tercihleridir.",
          "dogru": true,
          "aciklama": "Slayt 10: these are fundamental design choices to achieve high performance."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "ndarray'e list.append gibi eleman ekleyerek büyütmek NumPy'ın tasarım amacına uygundur.",
          "dogru": false,
          "aciklama": "Dinamik büyütme yeni bellek ayırma gerektirir; NumPy bundan kaçınır."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "Homojenlik",
              "tek veri tipi"
            ],
            [
              "Sabit boyut",
              "oluştururken belirlenir"
            ],
            [
              "Dikdörtgen şekil",
              "her satır aynı uzunlukta"
            ]
          ]
        }
      ]
    },
    {
      "id": "d-boyut",
      "baslik": "ndim, shape, size",
      "slayt": [
        11
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            11
          ],
          "baslik": "ndim: eksen sayısı",
          "metin": "<p><code>ndarray.ndim</code> → dizinin <b>eksen (boyut) sayısı</b>.</p><p>Vektörün ndim değeri <b>1</b>, matrisinki <b>2</b>'dir.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            11
          ],
          "baslik": "shape ve size",
          "metin": "<ul><li><code>ndarray.shape</code> → her boyuttaki uzunluğu veren <b>tuple</b>. n satır, m sütunlu matris için <code>(n, m)</code>. Tuple'ın uzunluğu <b>ndim'e eşittir</b>.</li>\n            <li><code>ndarray.size</code> → <b>toplam eleman sayısı</b>. Her zaman shape elemanlarının <b>çarpımına</b> eşittir.</li></ul>",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.ndim)\nprint(m.shape)\nprint(m.size)"
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2], [3, 4], [5, 6]])\nprint(m.ndim)",
          "cevaplar": [
            "2"
          ],
          "cikti": true,
          "aciklama": "Satır ve sütun var → 2 eksen → ndim = 2."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2], [3, 4], [5, 6]])\nprint(m.shape)",
          "secenekler": [
            "(3, 2)",
            "(2, 3)",
            "6",
            "2"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "3 satır, 2 sütun → (3, 2)."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2], [3, 4], [5, 6]])\nprint(m.size)",
          "cevaplar": [
            "6"
          ],
          "cikti": true,
          "aciklama": "size = 3 × 2 = 6."
        },
        {
          "tip": "secmeli",
          "soru": "shape değeri (3, 4) olan bir dizinin size değeri kaçtır?",
          "secenekler": [
            "12",
            "7",
            "2",
            "34"
          ],
          "dogru": 0,
          "aciklama": "size, shape elemanlarının çarpımıdır: 3 × 4 = 12."
        },
        {
          "tip": "secmeli",
          "soru": "shape tuple'ının uzunluğu hangi özelliğe eşittir?",
          "secenekler": [
            "ndim",
            "size",
            "itemsize",
            "dtype"
          ],
          "dogru": 0,
          "aciklama": "shape'in uzunluğu eksen sayısına, yani ndim'e eşittir."
        },
        {
          "tip": "bosluk",
          "soru": "Toplam eleman sayısını al",
          "metin": "toplam = m.___",
          "bosluklar": [
            "size"
          ],
          "kelimeler": [
            "size",
            "shape",
            "ndim",
            "dtype"
          ],
          "aciklama": "Toplam eleman sayısı size özelliğindedir."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "ndim",
              "eksen sayısı"
            ],
            [
              "shape",
              "her eksendeki uzunluk"
            ],
            [
              "size",
              "toplam eleman sayısı"
            ]
          ]
        }
      ]
    },
    {
      "id": "d-dtype",
      "baslik": "dtype ve itemsize",
      "slayt": [
        12,
        13
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            12
          ],
          "baslik": "dtype: veri tipi",
          "metin": "<p><code>ndarray.dtype</code> → elemanların <b>veri tipini</b> tanımlayan nesne.</p>\n            <p>NumPy pek çok sayısal tip destekler: <code>numpy.int32</code>, <code>numpy.int64</code>, <code>numpy.float32</code>, <code>numpy.float64</code>.</p>\n            <p>Bunlar <b>bellek ve hassasiyet</b> üzerinde standart Python tiplerinden <b>daha ince kontrol</b> sağlar.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            12
          ],
          "baslik": "itemsize: eleman başına bayt",
          "metin": "<p><code>ndarray.itemsize</code> → her elemanın <b>bayt</b> cinsinden boyutu.</p>\n            <p>Tipteki sayı <b>bit</b> sayısıdır ve 8 bit = 1 bayt: <code>float64</code> → 64 bit = <b>8 bayt</b>, <code>int32</code> → 32 bit = <b>4 bayt</b>.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            13
          ],
          "baslik": "Örnek kullanım (Slayt 13)",
          "metin": "<p>1. NumPy'ı içe aktar: <code>import numpy as np</code></p><p>2. İç içe Python listesinden 2 boyutlu bir dizi (matris) oluştur ve özelliklerine bak.</p>",
          "kod": "import numpy as np\nm = np.array([[1.5, 2.0, 3.0], [4.0, 5.0, 6.0]])\nprint('ndim:', m.ndim)\nprint('shape:', m.shape)\nprint('size:', m.size)\nprint('dtype:', m.dtype)\nprint('itemsize:', m.itemsize)"
        },
        {
          "tip": "secmeli",
          "soru": "dtype'ı float64 olan dizinin itemsize değeri kaçtır?",
          "secenekler": [
            "8",
            "4",
            "64",
            "16"
          ],
          "dogru": 0,
          "aciklama": "64 bit = 8 bayt."
        },
        {
          "tip": "secmeli",
          "soru": "dtype'ı int32 olan dizinin itemsize değeri kaçtır?",
          "secenekler": [
            "4",
            "32",
            "8",
            "2"
          ],
          "dogru": 0,
          "aciklama": "32 bit = 4 bayt."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.array([1.5, 2.5])\nprint(a.itemsize)",
          "cevaplar": [
            "8"
          ],
          "cikti": true,
          "aciklama": "Ondalıklı sayılar varsayılan olarak float64 → 8 bayt."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "dtype, bellek ve hassasiyet üzerinde standart Python tiplerinden daha ince kontrol sağlar.",
          "dogru": true,
          "aciklama": "Slayt 12: more fine-grained control over memory and precision."
        },
        {
          "tip": "sirala",
          "soru": "İç içe listeden 2 boyutlu dizi oluşturan satırı kur",
          "parcalar": [
            "m = ",
            "np.array(",
            "[[1, 2], [3, 4]]",
            ")"
          ],
          "ekstra": [
            "np.list(",
            "[1, 2], [3, 4]"
          ],
          "ayrac": "",
          "aciklama": "Doğrusu: m = np.array([[1, 2], [3, 4]])"
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "dtype",
              "veri tipi"
            ],
            [
              "itemsize",
              "eleman başına bayt"
            ],
            [
              "float64",
              "8 bayt"
            ],
            [
              "int32",
              "4 bayt"
            ]
          ]
        },
        {
          "tip": "kod",
          "alistirma": "ozellikler",
          "slayt": [
            11,
            12,
            13
          ]
        }
      ]
    },
    {
      "id": "o-array",
      "baslik": "np.array ile mevcut veriden",
      "slayt": [
        14
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            14
          ],
          "baslik": "Üç yol",
          "metin": "<p>ndarray oluşturmanın yolu, dizinin nereden geldiğine göre değişir:</p>\n            <ol><li><b>Mevcut veriden</b></li><li><b>Belirli boyutta yer tutucu</b> olarak</li><li><b>Sayı dizisi</b> olarak</li></ol>"
        },
        {
          "tip": "ogren",
          "slayt": [
            14
          ],
          "baslik": "1. Mevcut veriden: np.array()",
          "metin": "<p>En yaygın yol: Python listesini veya tuple'ı <code>numpy.array()</code> ile dönüştürmek.</p>\n            <ul><li>Fonksiyon en uygun veri tipini elemanlardan <b>otomatik çıkarır</b>.</li>\n            <li>Veri tipi <code>dtype</code> argümanıyla <b>açıkça belirtilebilir</b>.</li></ul>",
          "kod": "a = np.array([1, 2, 3])\nb = np.array([1, 2, 3], dtype=np.float64)\nprint(a, a.dtype)\nprint(b, b.dtype)"
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.array([1, 2, 3])\nprint(a.dtype)",
          "secenekler": [
            "int64",
            "float64",
            "str",
            "list"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Tüm elemanlar tam sayı → NumPy tipi otomatik int64 olarak çıkarır."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "b = np.array([1, 2, 3], dtype=np.float64)\nprint(b)",
          "secenekler": [
            "[1. 2. 3.]",
            "[1 2 3]",
            "[1.0, 2.0, 3.0]",
            "Hata verir"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "dtype float64 verildi. NumPy ondalıklıları kısaca \"1.\" şeklinde yazar."
        },
        {
          "tip": "bosluk",
          "soru": "Veri tipini açıkça float32 yap",
          "metin": "b = np.array([1, 2, 3], ___=np.float32)",
          "bosluklar": [
            "dtype"
          ],
          "kelimeler": [
            "dtype",
            "type",
            "shape",
            "size"
          ],
          "aciklama": "Veri tipi dtype argümanıyla belirtilir."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "np.array() bir tuple'dan da dizi oluşturabilir.",
          "dogru": true,
          "aciklama": "np.array() liste veya tuple alır."
        },
        {
          "tip": "sirala",
          "soru": "[4, 5, 6] listesinden NumPy dizisi oluştur",
          "parcalar": [
            "np.array(",
            "[4, 5, 6]",
            ")"
          ],
          "ekstra": [
            "np.zeros(",
            "(4, 5, 6"
          ],
          "ayrac": "",
          "aciklama": "Doğrusu: np.array([4, 5, 6])"
        },
        {
          "tip": "kod",
          "alistirma": "listeden-diziye",
          "slayt": [
            14,
            18
          ]
        },
        {
          "tip": "kod",
          "alistirma": "dtype-belirt",
          "slayt": [
            12,
            14
          ]
        }
      ]
    },
    {
      "id": "o-yertutucu",
      "baslik": "Yer tutucular: zeros, ones, empty",
      "slayt": [
        15
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            15
          ],
          "baslik": "2. Yer tutucu içerikle",
          "metin": "<p>Dizinin <b>boyutu önceden biliniyor ama içeriği bilinmiyorsa</b>, diziyi sonradan büyütmek yerine bir <b>yer tutucu</b> dizi oluşturmak daha verimlidir.</p>\n            <ul><li><code>np.zeros(shape)</code> → tamamen <b>sıfırlarla</b> dolu</li><li><code>np.ones(shape)</code> → tamamen <b>birlerle</b> dolu</li></ul>\n            <p>İkisinin de varsayılan dtype'ı <b>float64</b>. Şekil tuple olarak verilir: <code>(2, 3)</code></p>",
          "kod": "print(np.zeros((2, 3)))\nprint(np.ones((3, 3)))"
        },
        {
          "tip": "ogren",
          "slayt": [
            15
          ],
          "baslik": "np.empty: dikkatli kullan",
          "metin": "<p><code>np.empty(shape)</code> elemanları <b>başlatmaz</b>. İçerik o anki <b>bellek durumuna bağlı, rastgeledir</b>.</p>\n            <p>Değer atama adımını atladığı için zeros/ones'tan <b>biraz daha hızlıdır</b>. Ama her elemana sonradan mutlaka değer atanmalıdır.</p>",
          "kod": "print(np.empty((2, 2)))"
        },
        {
          "tip": "secmeli",
          "soru": "np.zeros((2, 3)) ile oluşan dizinin varsayılan dtype'ı nedir?",
          "secenekler": [
            "float64",
            "int64",
            "int32",
            "str"
          ],
          "dogru": 0,
          "aciklama": "zeros ve ones varsayılan olarak float64 kullanır."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "print(np.ones((2, 2)))",
          "secenekler": [
            "[[1. 1.]\n [1. 1.]]",
            "[1 1 1 1]",
            "[[0. 0.]\n [0. 0.]]",
            "[[2. 2.]]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "(2, 2) şeklinde, birlerle dolu, float64 dizi."
        },
        {
          "tip": "secmeli",
          "soru": "np.empty(shape) için hangisi doğrudur?",
          "secenekler": [
            "Elemanları başlatmaz; içerik rastgeledir ve biraz daha hızlıdır",
            "Diziyi sıfırlarla doldurur",
            "Boş bir liste döndürür",
            "Boyutu 0 olan dizi oluşturur"
          ],
          "dogru": 0,
          "aciklama": "empty değer atamayı atlar; içerik bellekte ne varsa odur."
        },
        {
          "tip": "bosluk",
          "soru": "3x3 sıfır matrisi oluştur",
          "metin": "z = np.___((3, 3))",
          "bosluklar": [
            "zeros"
          ],
          "kelimeler": [
            "zeros",
            "ones",
            "empty",
            "array"
          ],
          "aciklama": "Sıfırlarla dolu dizi: np.zeros."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "np.empty ile oluşturulan dizinin içi her zaman sıfırdır.",
          "dogru": false,
          "aciklama": "empty başlatmaz; içerik rastgele/bellekte kalandır."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "np.zeros",
              "sıfırlarla dolu"
            ],
            [
              "np.ones",
              "birlerle dolu"
            ],
            [
              "np.empty",
              "başlatılmamış"
            ]
          ]
        },
        {
          "tip": "kod",
          "alistirma": "sifir-matris",
          "slayt": [
            15,
            18
          ]
        }
      ]
    },
    {
      "id": "o-dizi",
      "baslik": "Sayı dizileri: arange, linspace",
      "slayt": [
        16,
        17
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            16
          ],
          "baslik": "3. Sayı dizileri: np.arange",
          "metin": "<p><code>np.arange(start, stop, step)</code> → Python'daki <code>range</code>'e benzer ama <b>NumPy dizisi</b> döndürür. Ondalıklı argüman da alabilir.</p>\n            <p><b>stop dahil değildir!</b> <code>np.arange(0, 10, 2)</code> → 0'dan başla, 2'şer artır, 10'a gelmeden dur.</p>",
          "kod": "print(np.arange(0, 10, 2))\nprint(np.arange(5))"
        },
        {
          "tip": "ogren",
          "slayt": [
            16
          ],
          "baslik": "np.linspace",
          "metin": "<p><code>np.linspace(start, stop, num)</code> → [start, stop] aralığında <b>num adet eşit aralıklı</b> değer. <b>start ve stop ikisi de dahildir.</b></p>\n            <p>Ondalıklı sayılarda genellikle arange yerine bu tercih edilir. Çıktı sayısını <b>doğrudan kontrol</b> ettirir ve step belirtirken oluşabilecek <b>kayan nokta hassasiyeti sorunlarını</b> önler.</p>",
          "kod": "print(np.linspace(0, 1, 5))"
        },
        {
          "tip": "ogren",
          "slayt": [
            17
          ],
          "baslik": "Özet tablo (Slayt 17)",
          "metin": "<table><tr><th>Fonksiyon</th><th>Ne yapar?</th><th>Örnek</th></tr>\n            <tr><td><code>np.array(object)</code></td><td>Liste/tuple'dan dizi</td><td><code>np.array([1, 2, 3])</code></td></tr>\n            <tr><td><code>np.arange(start, stop, step)</code></td><td>Aralıkta düzenli adımlı değerler</td><td><code>np.arange(0, 10, 2)</code></td></tr>\n            <tr><td><code>np.linspace(start, stop, num)</code></td><td>Belirli sayıda eşit aralıklı değer</td><td><code>np.linspace(0, 1, 5)</code></td></tr>\n            <tr><td><code>np.zeros(shape)</code></td><td>Sıfırlarla dolu</td><td><code>np.zeros((2, 3))</code></td></tr>\n            <tr><td><code>np.ones(shape)</code></td><td>Birlerle dolu</td><td><code>np.ones((3, 3))</code></td></tr>\n            <tr><td><code>np.empty(shape)</code></td><td>Başlatılmamış dizi</td><td><code>np.empty((2, 2))</code></td></tr></table>"
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "print(np.arange(0, 10, 2))",
          "secenekler": [
            "[0 2 4 6 8]",
            "[0 2 4 6 8 10]",
            "[2 4 6 8 10]",
            "[0 1 2 3 4]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "stop (10) dahil değildir."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.arange(5)\nprint(a)",
          "cevaplar": [
            "[0 1 2 3 4]"
          ],
          "cikti": true,
          "aciklama": "Tek argüman stop'tur: 0'dan başlar, 5 dahil değil. NumPy virgülsüz yazar: [0 1 2 3 4]"
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "print(np.linspace(0, 1, 5))",
          "secenekler": [
            "[0.   0.25 0.5  0.75 1.  ]",
            "[0.  0.2 0.4 0.6 0.8]",
            "[0 1 2 3 4]",
            "[0.2 0.4 0.6 0.8 1. ]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "start ve stop dahil, 5 eşit aralıklı değer: 0, 0.25, 0.5, 0.75, 1."
        },
        {
          "tip": "secmeli",
          "soru": "Ondalıklı sayılarda neden genellikle linspace tercih edilir?",
          "secenekler": [
            "Çıktı sayısını doğrudan kontrol ettiği ve kayan nokta hassasiyeti sorunlarını önlediği için",
            "Daha az bellek kullandığı için",
            "arange ondalık kabul etmediği için",
            "Tam sayı ürettiği için"
          ],
          "dogru": 0,
          "aciklama": "linspace kaç değer üretileceğini doğrudan belirler; step hassasiyet sorunlarından kaçınır."
        },
        {
          "tip": "secmeli",
          "soru": "10'dan 50'ye kadar (50 dahil) tam sayılar için hangisi doğru?",
          "secenekler": [
            "np.arange(10, 51)",
            "np.arange(10, 50)",
            "np.arange(50, 10)",
            "np.zeros(10, 50)"
          ],
          "dogru": 0,
          "aciklama": "stop dahil olmadığı için 51 yazılır."
        },
        {
          "tip": "bosluk",
          "soru": "0 ile 1 arasında 5 eşit aralıklı sayı",
          "metin": "x = np.___(0, 1, 5)",
          "bosluklar": [
            "linspace"
          ],
          "kelimeler": [
            "linspace",
            "arange",
            "zeros",
            "range"
          ],
          "aciklama": "Belirli sayıda eşit aralıklı değer: linspace."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "np.arange(0, 10, 2)",
              "adımlı değerler"
            ],
            [
              "np.linspace(0, 1, 5)",
              "5 eşit aralıklı değer"
            ],
            [
              "np.zeros((2, 3))",
              "sıfırlarla dolu"
            ],
            [
              "np.ones((3, 3))",
              "birlerle dolu"
            ]
          ]
        },
        {
          "tip": "kod",
          "alistirma": "dizi-olustur",
          "slayt": [
            16,
            18
          ]
        },
        {
          "tip": "kod",
          "alistirma": "linspace",
          "slayt": [
            16,
            18
          ]
        }
      ]
    },
    {
      "id": "o-alistirma",
      "baslik": "Slayt 18: kalan alıştırmalar",
      "slayt": [
        18
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            18
          ],
          "baslik": "Slayt 18'deki 6 alıştırma",
          "metin": "<p>Slayt 18'de 6 alıştırma var. 1 (sayı dizisi), 2 (sıfır matrisi), 4 (linspace) ve 5 (listeden diziye) alıştırmalarını önceki derslerde çözdün.</p>\n            <p>Kalan ikisi için slayt \"özel bir fonksiyon bul\" diye ipucu veriyor:</p>\n            <ul><li><b>3. Birim matris</b> → <code>np.eye(n)</code></li><li><b>6. Rastgele dizi</b> → <code>np.random.rand(satır, sütun)</code>: 0 ile 1 arasında rastgele ondalıklı sayılar</li></ul>"
        },
        {
          "tip": "ogren",
          "slayt": [
            18
          ],
          "baslik": "Birim matris (identity matrix)",
          "metin": "<p><b>Ana köşegeninde 1</b>'ler, diğer her yerde <b>0</b>'lar olan kare dizidir.</p>",
          "cizim": "birim",
          "kod": "print(np.eye(3))\nprint(np.random.rand(2, 2))"
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "print(np.eye(3))",
          "secenekler": [
            "[[1. 0. 0.]\n [0. 1. 0.]\n [0. 0. 1.]]",
            "[[1. 1. 1.]\n [1. 1. 1.]\n [1. 1. 1.]]",
            "[1. 1. 1.]",
            "[[0. 0. 1.]\n [0. 1. 0.]\n [1. 0. 0.]]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "np.eye(3): ana köşegende 1, diğerleri 0 olan 3x3 matris."
        },
        {
          "tip": "bosluk",
          "soru": "5x5 birim matris oluştur",
          "metin": "I = np.___(5)",
          "bosluklar": [
            "eye"
          ],
          "kelimeler": [
            "eye",
            "ones",
            "zeros",
            "linspace"
          ],
          "aciklama": "Birim matris: np.eye."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "np.random.rand(4, 4), 0 ile 1 arasında rastgele sayılardan oluşan 4x4'lük bir dizi üretir.",
          "dogru": true,
          "aciklama": "random.rand(satır, sütun) 0-1 arası rastgele ondalıklı sayılar üretir."
        },
        {
          "tip": "kod",
          "alistirma": "birim-matris",
          "slayt": [
            18
          ]
        },
        {
          "tip": "kod",
          "alistirma": "rastgele",
          "slayt": [
            18
          ]
        }
      ]
    },
    {
      "id": "i-1d",
      "baslik": "1 boyutlu indeksleme",
      "slayt": [
        19,
        20
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            19
          ],
          "baslik": "Bu bölüm neden önemli?",
          "metin": "<p>Bu bölüm ndarray içindeki <b>veri alt kümelerine erişmek ve onları değiştirmekle</b> ilgilidir.</p>\n            <p>Bu teknikler <b>veri filtreleme</b>, <b>özellik mühendisliği (feature engineering)</b> ve <b>veri işleme</b> için temeldir.</p>\n            <p>Ayrıca \"view\" ve \"copy\" arasında kritik bir ayrım var. Sık bir hata kaynağıdır ama verimli, belleğe duyarlı kod için şarttır (bu bölümün son dersleri).</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            20
          ],
          "baslik": "Temel indeksleme",
          "metin": "<p>NumPy, Python'un tanıdık indeksleme ve dilimleme sözdizimini <b>N boyutlu dizilere</b> genişletir.</p>\n            <p>Listeler gibi NumPy dizileri de <b>0'dan</b> indekslenir. 1 boyutlu dizilerde sözdizimi listelerle <b>aynıdır</b>.</p>",
          "kod": "a = np.arange(10)\nprint(a[0], a[-1])\nprint(a[2:5])"
        },
        {
          "tip": "secmeli",
          "soru": "NumPy dizilerinde ilk elemanın indeksi kaçtır?",
          "secenekler": [
            "0",
            "1",
            "-1",
            "Diziye göre değişir"
          ],
          "dogru": 0,
          "aciklama": "NumPy dizileri listeler gibi 0'dan indekslenir."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.array([7, 3, 9, 1])\nprint(a[2])",
          "cevaplar": [
            "9"
          ],
          "cikti": true,
          "aciklama": "İndeks 0 → 7, 1 → 3, 2 → 9."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.array([7, 3, 9, 1])\nprint(a[-1])",
          "cevaplar": [
            "1"
          ],
          "cikti": true,
          "aciklama": "-1 son eleman: 1."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.arange(10)\nprint(a[2:5])",
          "secenekler": [
            "[2 3 4]",
            "[2 3 4 5]",
            "[3 4 5]",
            "[2 5]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "2'den başlar, 5 dahil değildir."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.arange(10)\nprint(a[:3])",
          "secenekler": [
            "[0 1 2]",
            "[0 1 2 3]",
            "[1 2 3]",
            "[3]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Baştan 3'e kadar (3 dahil değil)."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "İndeksleme ve dilimleme, veri filtreleme ve feature engineering için temeldir.",
          "dogru": true,
          "aciklama": "Slayt 19: fundamental for data filtering, feature engineering, and data manipulation."
        },
        {
          "tip": "kod",
          "alistirma": "indeks-1d",
          "slayt": [
            20
          ]
        }
      ]
    },
    {
      "id": "i-2d",
      "baslik": "Çok boyutlu diziler",
      "slayt": [
        21,
        22
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            21
          ],
          "baslik": "Virgülle ayır",
          "metin": "<p>NumPy indekslemenin gücü çok boyutlu dizilerde ortaya çıkar.</p>\n            <p>Alt kümelere <b>tek bir köşeli parantez çifti içinde, virgülle ayrılmış</b> indeks veya dilimlerle erişilir:</p>\n            <p><code>array[satir, sutun, ...]</code></p>",
          "cizim": "indeks2d"
        },
        {
          "tip": "ogren",
          "slayt": [
            22
          ],
          "baslik": "2 boyutlu dizilerde dilimleme",
          "metin": "<p><code>:</code> tek başına \"o eksenin <b>tamamı</b>\" demektir.</p>\n            <ul><li><code>m[0, :]</code> → 0. satırın tamamı</li><li><code>m[:, 1]</code> → 1. sütunun tamamı</li><li><code>m[:2, 1:]</code> → ilk 2 satır, 1. sütundan sona</li></ul>",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(m[1, 2])\nprint(m[0, :])\nprint(m[:, 1])\nprint(m[:2, 1:])"
        },
        {
          "tip": "secmeli",
          "soru": "2 boyutlu dizide 1. satır, 2. sütundaki elemana nasıl erişilir?",
          "secenekler": [
            "arr[1, 2]",
            "arr(1, 2)",
            "arr{1}{2}",
            "arr.get(1, 2)"
          ],
          "dogru": 0,
          "aciklama": "Tek köşeli parantez içinde virgülle: arr[satır, sütun]."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(m[1, 2])",
          "secenekler": [
            "6",
            "8",
            "2",
            "5"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "1. satır [4 5 6], 2. sütun → 6."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(m[2, 0])",
          "cevaplar": [
            "7"
          ],
          "cikti": true,
          "aciklama": "2. satır [7 8 9], 0. sütun → 7."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(m[0, :])",
          "secenekler": [
            "[1 2 3]",
            "[1 4 7]",
            "1",
            "[[1 2 3]\n [4 5 6]]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "0. satırın tamamı."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(m[:, 1])",
          "secenekler": [
            "[2 5 8]",
            "[4 5 6]",
            "[1 2 3]",
            "5"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Tüm satırların 1. sütunu: 2, 5, 8."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(m[:2, 1:])",
          "secenekler": [
            "[[2 3]\n [5 6]]",
            "[[1 2]\n [4 5]]",
            "[[5 6]\n [8 9]]",
            "[2 3 5 6]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "İlk 2 satır (0, 1), sütun 1'den sona (1, 2)."
        },
        {
          "tip": "bosluk",
          "soru": "1. satır, 0. sütundaki elemanı al (0'dan sayarak)",
          "metin": "eleman = m[___, ___]",
          "bosluklar": [
            "1",
            "0"
          ],
          "kelimeler": [
            "0",
            "1",
            "2",
            ":"
          ],
          "aciklama": "Önce satır, sonra sütun: m[1, 0]."
        },
        {
          "tip": "kod",
          "alistirma": "indeks-2d",
          "slayt": [
            21,
            22
          ]
        }
      ]
    },
    {
      "id": "i-reshape",
      "baslik": "reshape ve 3 boyut",
      "slayt": [
        23,
        24
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            23
          ],
          "baslik": "reshape: şekil değiştir",
          "metin": "<p><code>reshape</code> elemanları değiştirmeden dizinin <b>şeklini</b> değiştirir.</p>\n            <p><code>np.arange(12).reshape(3, 4)</code> → 12 sayıyı 3 satır, 4 sütuna dizer.</p>\n            <p>Yeni şeklin toplam eleman sayısı eskisiyle <b>aynı olmalı</b> (3 × 4 = 12).</p>",
          "kod": "r = np.arange(12).reshape(3, 4)\nprint(r)"
        },
        {
          "tip": "ogren",
          "slayt": [
            24
          ],
          "baslik": "3 boyutlu dizide dilimleme",
          "metin": "<p><code>np.arange(24).reshape(2, 3, 4)</code> → <b>2 blok</b>, her blokta <b>3 satır</b> ve <b>4 sütun</b>.</p>\n            <p>Her eksen için virgülle ayrılmış bir indeks/dilim yazılır: <code>t[blok, satır, sütun]</code></p>\n            <p><code>t[0, :, :2]</code> → 0. blok, tüm satırlar, ilk 2 sütun.</p>",
          "kod": "t = np.arange(24).reshape(2, 3, 4)\nprint(t)\nprint(t[0, :, :2])"
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "print(np.arange(6).reshape(2, 3))",
          "secenekler": [
            "[[0 1 2]\n [3 4 5]]",
            "[[0 1]\n [2 3]\n [4 5]]",
            "[0 1 2 3 4 5]",
            "[[0 3]\n [1 4]\n [2 5]]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "6 sayı 2 satır, 3 sütuna sırayla dizilir."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "print(np.arange(12).reshape(3, 4).shape)",
          "secenekler": [
            "(3, 4)",
            "(4, 3)",
            "(12,)",
            "12"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "reshape(3, 4) → shape (3, 4)."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "np.arange(10).reshape(3, 4) hatasız çalışır.",
          "dogru": false,
          "aciklama": "10 eleman 3 × 4 = 12'lik şekle sığmaz; eleman sayısı aynı olmalı."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "t = np.arange(24).reshape(2, 3, 4)\nprint(t.ndim)",
          "secenekler": [
            "3",
            "2",
            "24",
            "4"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Şekil (2, 3, 4) → 3 eksen."
        },
        {
          "tip": "yaz",
          "soru": "Bu kod ne yazdırır?",
          "kod": "t = np.arange(24).reshape(2, 3, 4)\nprint(t[1, 0, 0])",
          "cevaplar": [
            "12"
          ],
          "cikti": true,
          "aciklama": "0. blokta 12 sayı (0–11) var; 1. bloğun ilk elemanı 12."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "t = np.arange(24).reshape(2, 3, 4)\nprint(t[0, :, :2].shape)",
          "secenekler": [
            "(3, 2)",
            "(2, 3)",
            "(2, 2)",
            "(3, 4)"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Tüm satırlar (3) ve ilk 2 sütun → (3, 2)."
        },
        {
          "tip": "kod",
          "alistirma": "reshape",
          "slayt": [
            23
          ]
        },
        {
          "tip": "kod",
          "alistirma": "dilim-3d",
          "slayt": [
            24
          ]
        }
      ]
    },
    {
      "id": "v-view",
      "baslik": "View nedir?",
      "slayt": [
        25,
        26
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            25
          ],
          "baslik": "Listede dilim = kopya",
          "metin": "<p>Standart bir <b>Python listesi dilimlendiğinde</b>, istenen elemanların <b>kopyasını</b> içeren yeni bir liste elde edilir.</p>\n            <p>Yeni listeyi değiştirmek <b>orijinali etkilemez</b>.</p>",
          "kod": "liste = [0, 1, 2, 3, 4, 5]\nparca = liste[1:4]\nparca[0] = 9\nprint('parca:', parca)\nprint('liste:', liste)"
        },
        {
          "tip": "ogren",
          "slayt": [
            25
          ],
          "baslik": "NumPy'da dilim = view",
          "metin": "<p>NumPy'da <b>basit dilimleme kopya değil, orijinalin bir view'ını oluşturur</b>.</p>\n            <p><b>View</b>, orijinal diziyle <b>aynı veri tamponuna (data buffer)</b> bakan bir nesnedir. <b>Kendi verisi yoktur.</b></p>\n            <p>Bu yüzden view değiştirilirse <b>değişiklik orijinal diziye de yansır</b>.</p>",
          "cizim": "view"
        },
        {
          "tip": "ogren",
          "slayt": [
            26
          ],
          "baslik": "View'ı değiştirmek",
          "metin": "<p>Aşağıdaki kodda sadece <code>v</code>'yi değiştiriyoruz, ama <code>a</code> da değişiyor!</p>",
          "kod": "a = np.arange(6)\nv = a[1:4]\nv[0] = 9\nprint('v:', v)\nprint('a:', a)"
        },
        {
          "tip": "secmeli",
          "soru": "NumPy'da basit dilimleme (ör. a[1:4]) ne döndürür?",
          "secenekler": [
            "Orijinal dizinin bir view'ını",
            "Bağımsız bir kopya",
            "Bir Python listesi",
            "Bir tuple"
          ],
          "dogru": 0,
          "aciklama": "Basit dilimleme, aynı veri tamponuna bakan bir view döndürür."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.array([1, 2, 3, 4])\nv = a[0:2]\nv[0] = 9\nprint(a)",
          "secenekler": [
            "[9 2 3 4]",
            "[1 2 3 4]",
            "[9 2]",
            "[1 9 3 4]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "v bir view: v[0], a[0] ile aynı bellek. a da değişir."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "liste = [1, 2, 3, 4]\np = liste[0:2]\np[0] = 9\nprint(liste)",
          "secenekler": [
            "[1, 2, 3, 4]",
            "[9, 2, 3, 4]",
            "[9, 2]",
            "Hata verir"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "Liste dilimi kopyadır; orijinal liste değişmez."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "View'ın kendi verisi yoktur.",
          "dogru": true,
          "aciklama": "View, orijinalin veri tamponuna bakar; kendi verisi yoktur."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Python listesini dilimleyip yeni listeyi değiştirmek orijinal listeyi de değiştirir.",
          "dogru": false,
          "aciklama": "Liste dilimi kopyadır; orijinal etkilenmez."
        },
        {
          "tip": "kod",
          "alistirma": "view",
          "slayt": [
            25,
            26
          ]
        }
      ]
    },
    {
      "id": "v-neden",
      "baslik": "View: mimari bir tercih",
      "slayt": [
        27
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            27
          ],
          "baslik": "Neden view?",
          "metin": "<p>View davranışı bir <b>performans optimizasyonudur</b>.</p>\n            <p>Veri bilimi ve bilimsel hesaplamada diziler <b>gigabaytlarca</b> büyüklükte olabilir.</p>\n            <p>Her dilimleme tam kopya oluştursaydı <b>bellek kullanımı patlar</b>, bellek ayırma ve kopyalama yükü yüzünden <b>performans çökerdi</b>.</p>"
        },
        {
          "tip": "ogren",
          "slayt": [
            27
          ],
          "baslik": "Güvenli mi, hızlı mı?",
          "metin": "<p>View döndürerek NumPy, tüm veriyi çoğaltmadan dizinin alt parçalarına <b>bellek açısından verimli</b> erişim ve değişiklik sağlar.</p>\n            <p>Bu tasarım, Python listelerinin <b>daha güvenli ama daha yavaş \"varsayılan olarak kopyala\"</b> davranışı yerine <b>performansı ve bellek verimliliğini</b> önceliklendirir.</p>"
        },
        {
          "tip": "secmeli",
          "soru": "NumPy dilimlemede neden varsayılan olarak view döndürür?",
          "secenekler": [
            "Büyük dizilerde bellek ve performans verimliliği için",
            "Daha güvenli olduğu için",
            "Listelerle uyumlu olmak için",
            "Kopyalama desteklenmediği için"
          ],
          "dogru": 0,
          "aciklama": "View bir performans optimizasyonudur."
        },
        {
          "tip": "secmeli",
          "soru": "Gigabaytlık bir dizide her dilim tam kopya olsaydı ne olurdu?",
          "secenekler": [
            "Bellek kullanımı patlar, performans düşerdi",
            "Hiçbir şey değişmezdi",
            "Daha hızlı olurdu",
            "Dizi silinirdi"
          ],
          "dogru": 0,
          "aciklama": "Her kopya için bellek ayırma ve kopyalama yükü oluşurdu."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "Python listelerinin varsayılan kopyalama davranışı daha güvenli ama daha yavaştır.",
          "dogru": true,
          "aciklama": "Slayt 27: the safer (but slower) copy-by-default behavior."
        },
        {
          "tip": "dogruyanlis",
          "ifade": "NumPy'ın view davranışı bellek kullanımını artırır.",
          "dogru": false,
          "aciklama": "View veriyi çoğaltmaz; bellek açısından verimlidir."
        },
        {
          "tip": "eslestir",
          "ciftler": [
            [
              "View",
              "aynı veriye bakar"
            ],
            [
              "Copy",
              "bağımsız veri"
            ],
            [
              "Liste dilimi",
              "kopya"
            ],
            [
              "NumPy basit dilimi",
              "view"
            ]
          ]
        }
      ]
    },
    {
      "id": "v-copy",
      "baslik": "Deep copy ve kaynaklar",
      "slayt": [
        28,
        29
      ],
      "adimlar": [
        {
          "tip": "ogren",
          "slayt": [
            28
          ],
          "baslik": "Deep copy: .copy()",
          "metin": "<p>Amaç orijinalden <b>tamamen bağımsız</b> yeni bir dizi oluşturmaksa, <code>.copy()</code> metodu <b>açıkça</b> kullanılmalıdır.</p>\n            <p>Buna <b>deep copy</b> denir. Kopyayı değiştirmek orijinali etkilemez.</p>",
          "kod": "a = np.arange(6)\nc = a[1:4].copy()\nc[0] = 9\nprint('c:', c)\nprint('a:', a)"
        },
        {
          "tip": "ogren",
          "slayt": [
            29
          ],
          "baslik": "Kaynaklar (Slayt 29) 🎉",
          "metin": "<p>Tebrikler, tüm slaytları bitirdin! Dersin kaynakları:</p>\n            <ul><li>NumPy User Guide, Release 2.2.0, <a href=\"https://numpy.org/doc/2.2/numpy-user.pdf\" target=\"_blank\" rel=\"noopener\">numpy.org/doc/2.2/numpy-user.pdf</a></li>\n            <li>NumPy: the absolute basics for beginners, <a href=\"https://numpy.org/doc/stable/user/absolute_beginners.html\" target=\"_blank\" rel=\"noopener\">numpy.org</a></li>\n            <li>NumPy's SIMD-Friendly Design Boosts Performance Over Python Lists, Harshil Jani, 2.7.2025</li>\n            <li>Stop Using Python Lists and Start Using These Instead, DATAQUEST, 02.07.2025</li></ul>"
        },
        {
          "tip": "secmeli",
          "soru": "Orijinalden bağımsız bir kopya nasıl oluşturulur?",
          "secenekler": [
            "b = a.copy()",
            "b = a",
            "b = a[:]",
            "b = a[0]"
          ],
          "dogru": 0,
          "aciklama": "Bağımsız kopya için .copy() açıkça kullanılır. a[:] basit dilim olduğu için view'dır."
        },
        {
          "tip": "secmeli",
          "soru": "Bu kod ne yazdırır?",
          "kod": "a = np.arange(5)\nc = a[1:4].copy()\nc[0] = 9\nprint(a)",
          "secenekler": [
            "[0 1 2 3 4]",
            "[0 9 2 3 4]",
            "[9 2 3]",
            "[9 1 2 3 4]"
          ],
          "dogru": 0,
          "cikti": true,
          "aciklama": "c bağımsız bir kopya; a değişmez."
        },
        {
          "tip": "bosluk",
          "soru": "Bağımsız bir kopya oluştur",
          "metin": "c = a[1:4].___()",
          "bosluklar": [
            "copy"
          ],
          "kelimeler": [
            "copy",
            "view",
            "shape",
            "print"
          ],
          "aciklama": "Deep copy: .copy()"
        },
        {
          "tip": "dogruyanlis",
          "ifade": "b = a[:] yazınca b, a'dan tamamen bağımsız bir kopya olur.",
          "dogru": false,
          "aciklama": "a[:] basit dilimlemedir → view. Bağımsız kopya için a.copy() gerekir."
        },
        {
          "tip": "kod",
          "alistirma": "copy",
          "slayt": [
            28
          ]
        }
      ]
    }
  ]
});
