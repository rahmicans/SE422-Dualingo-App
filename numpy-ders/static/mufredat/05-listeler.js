// Bölüm 5 — week4_Lists_and_Tuples.md: Listeler ve demetler (57 slayt)
UNITELER.push({
  id: "u-liste", renk: "pembe", baslik: "Listeler ve Demetler", kaynak: "week4_Lists_and_Tuples", slaytSayisi: 57,
  altBaslik: "Week 4 · Liste, dilimleme, metotlar, comprehension, tuple, matplotlib",
  dersler: [
    {
      id: "liste-giris", baslik: "Listelere giriş", slayt: [1, 11],
      adimlar: [
        O("Diziler (sequences)", [1, 4], `
          <p>Bu bölümün konuları: diziler, listeler, dilimleme, <code>in</code> operatörü, liste metotları, kopyalama, listeleri işleme, liste üreteçleri, iki boyutlu listeler, tuple'lar ve matplotlib ile grafik.</p>
          <p><b>Dizi (sequence):</b> birden çok veri öğesi içeren nesne; öğeler <b>art arda</b> saklanır. Python'da liste ve tuple gibi dizi türleri vardır.</p>
          <p>Aralarındaki fark: <b>liste değiştirilebilir (mutable)</b>, <b>tuple değiştirilemez (immutable)</b>.</p>`),
        O("Liste oluşturma", [5, 7], `
          <p><b>Liste:</b> birden çok veri öğesi içeren nesne; her öğeye <b>eleman</b> denir. Format: <code>liste = [oge1, oge2, ...]</code></p>
          <ul><li>Farklı tiplerde öğeler tutabilir: <code>['Alicia', 27, 1550.87]</code></li>
          <li><code>print</code> ile listenin tamamı gösterilebilir.</li>
          <li><code>list()</code> fonksiyonu bazı nesneleri (ör. <code>range</code>) listeye çevirir.</li>
          <li><b>Tekrar operatörü</b> <code>*</code>: liste ve tam sayıyla kullanılınca listenin kopyalarını birleştirir: <code>liste * n</code>.</li>
          <li>Liste üzerinde for ile dolaşılır: <code>for x in liste:</code></li></ul>`,
          { kod: "even_numbers = [2, 4, 6, 8, 10]\ninfo = ['Alicia', 27, 1550.87]\nprint(info)\nprint(list(range(5)))\nprint([0] * 5)\nfor n in even_numbers:\n    print(n, end=' ')" }),
        O("İndeksleme ve len", [8, 9], `
          <p><b>İndeks:</b> elemanın listedeki konumunu belirten sayı. İlk elemanın indeksi <b>0</b>, ikincinin 1, n'inci elemanın <b>n-1</b>'dir.</p>
          <p><b>Negatif indeksler</b> sondan sayar: <code>-1</code> son eleman, <code>-2</code> sondan bir önceki.</p>
          <p>Geçersiz indeks kullanılırsa <b>IndexError</b> istisnası fırlatılır. <code>len(liste)</code> eleman sayısını döndürür; son elemanın indeksi <code>len(liste) - 1</code>'dir. Döngüde IndexError'ı önlemek için kullanılır.</p>`,
          { kod: "my_list = [10, 20, 30, 40]\nprint(my_list[0], my_list[-1])\nprint(len(my_list))\nindex = 0\nwhile index < len(my_list):\n    print(my_list[index])\n    index += 1" }),
        O("Listeler değiştirilebilir, birleştirilebilir", [10, 11], `
          <p>Listeler <b>mutable</b>'dır: elemanları değiştirilebilir. <code>liste[1] = yeni_deger</code> ile bir elemana yeni değer atanır; geçerli indeks kullanılmalıdır.</p>
          <p><b>Birleştirme:</b> <code>+</code> iki listeyi birleştirir; liste bir sayı gibi başka tiple birleştirilemez. <code>+=</code> de listeleri birleştirmek için kullanılabilir.</p>`,
          { kod: "numbers = [1, 2, 3]\nnumbers[1] = 99\nprint(numbers)\nlist1 = [1, 2]\nlist2 = [3, 4]\nprint(list1 + list2)\nlist1 += list2\nprint(list1)" }),
        C("numbers = [1, 2, 3] * 2\nprint(numbers)", ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2]", "[[1, 2, 3], [1, 2, 3]]"], "* tekrar operatörü listenin kopyalarını birleştirir."),
        C("my_list = [10, 20, 30, 40]\nprint(my_list[-2])", ["30", "20", "40", "Hata verir"], "-2 sondan ikinci eleman."),
        Y("my_list = [10, 20, 30, 40]\nprint(len(my_list) - 1)", "3", "len 4; son indeks 3."),
        C("n = [1, 2, 3]\nn[1] = 99\nprint(n)", ["[1, 99, 3]", "[99, 2, 3]", "[1, 2, 99]", "Hata verir"], "Listeler mutable'dır; indeks 1'deki eleman değişir."),
        S("my_list = [10, 20, 30] için my_list[3] ne olur?", ["IndexError istisnası", "30", "None", "0"], "Geçerli indeksler 0–2'dir."),
        DY("Liste ile tuple arasındaki fark: liste değiştirilebilir, tuple değiştirilemez.", true, "Slayt 4."),
        E(["Element", "listedeki öğe"], ["Index", "elemanın konumu"], ["-1", "son eleman"], ["IndexError", "geçersiz indeks"]),
      ],
    },
    {
      id: "liste-metot", baslik: "Dilimleme ve liste metotları", slayt: [12, 21],
      adimlar: [
        O("Liste dilimleme ve in", [12, 13], `
          <p><b>Dilim (slice):</b> diziden alınan öğe aralığı. Format: <code>liste[start : end]</code> → start'tan end'e kadar (<b>end dahil değil</b>) öğelerin <b>kopyalarını</b> içeren liste.</p>
          <ul><li>start yazılmazsa 0, end yazılmazsa <code>len(liste)</code> kullanılır.</li>
          <li>Dilim <b>adım</b> değeri ve sondan sayan <b>negatif indeksler</b> içerebilir: <code>liste[::2]</code>, <code>liste[-3:]</code></li></ul>
          <p><code>oge in liste</code> öğe listede varsa True döndürür; <code>not in</code> tersini yapar.</p>`,
          { kod: "days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum']\nprint(days[1:3])\nprint(days[:2])\nprint(days[::2])\nprint(days[-2:])\nprint('Cum' in days)" }),
        O("Liste metotları", [14, 17], `
          <table><tr><th>Metot</th><th>Ne yapar?</th></tr>
          <tr><td><code>append(item)</code></td><td>öğeyi listenin <b>sonuna</b> ekler</td></tr>
          <tr><td><code>index(item)</code></td><td>öğenin ilk geçtiği indeksi döndürür; yoksa <b>ValueError</b></td></tr>
          <tr><td><code>insert(index, item)</code></td><td>öğeyi verilen indekse ekler; sonrakiler bir kayar. Geçersiz indeks hata vermez: sondan ötesi → sona, geçersiz negatif → başa</td></tr>
          <tr><td><code>sort()</code></td><td>artan sırada sıralar</td></tr>
          <tr><td><code>remove(item)</code></td><td>öğenin <b>ilk</b> geçtiği yeri siler; yoksa ValueError</td></tr>
          <tr><td><code>reverse()</code></td><td>sırayı ters çevirir</td></tr></table>
          <p><code>del liste[i]</code> belirli indeksteki öğeyi siler. Yerleşik <code>min</code> ve <code>max</code> dizideki en küçük/en büyük değeri döndürür.</p>`,
          { kod: "names = ['Ali', 'Can']\nnames.append('Ece')\nnames.insert(0, 'Zeynep')\nprint(names)\nnames.sort()\nprint(names)\nnames.remove('Can')\ndel names[0]\nprint(names, names.index('Zeynep'))\nprint(min([4, 1, 7]), max([4, 1, 7]))" }),
        O("Listeleri kopyalamak ve işlemek", [18, 21], `
          <p><code>list2 = list1</code> bir kopya <b>oluşturmaz</b>: iki değişken <b>aynı listeyi</b> referans eder. Kopya için her elemanın kopyalanması gerekir:</p>
          <ul><li>Boş liste oluşturup for döngüsüyle her elemanı eklemek, veya</li><li>Boş listeye eski listeyi birleştirmek: <code>list2 = [] + list1</code></li></ul>
          <p>Listeleri işlemek: elemanlar hesaplarda kullanılır; <b>toplam</b> için biriktirici değişkenli döngü, <b>ortalama</b> için toplam / <code>len(liste)</code>. Liste fonksiyona argüman verilebilir ve fonksiyon liste döndürebilir.</p>
          <p>Dosyaya kaydetmek için <code>writelines</code> (sonlara <code>\\n</code> eklemez; bu yüzden genellikle for ile her eleman + <code>\\n</code> yazılır), okumak için <code>readlines</code> kullanılır.</p>`,
          { kod: "list1 = [1, 2, 3, 4]\nayni = list1\nkopya = [] + list1\nlist1[0] = 99\nprint(ayni)\nprint(kopya)\nscores = [2.5, 7.3, 6.5]\nprint(sum(scores) / len(scores))" }),
        C("days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum']\nprint(days[1:3])", ["['Sal', 'Çar']", "['Sal', 'Çar', 'Per']", "['Pzt', 'Sal', 'Çar']", "['Sal']"], "1'den başlar, 3 dahil değil."),
        C("n = [1, 2, 3, 4, 5, 6]\nprint(n[::2])", ["[1, 3, 5]", "[2, 4, 6]", "[1, 2]", "[1, 2, 3, 4, 5, 6]"], "Adım 2: her ikinci eleman."),
        C("n = [3, 1, 2]\nn.append(0)\nn.sort()\nprint(n)", ["[0, 1, 2, 3]", "[3, 1, 2, 0]", "[0, 3, 1, 2]", "[1, 2, 3]"], "append sona ekler, sort artan sıralar."),
        C("n = ['a', 'b', 'c']\nn.insert(1, 'X')\nprint(n)", ["['a', 'X', 'b', 'c']", "['X', 'a', 'b', 'c']", "['a', 'b', 'X', 'c']", "['a', 'X', 'c']"], "insert(1, ...) öğeyi indeks 1'e koyar, diğerleri kayar."),
        C("list1 = [1, 2, 3]\nlist2 = list1\nlist1[0] = 99\nprint(list2)", ["[99, 2, 3]", "[1, 2, 3]", "[99]", "Hata verir"], "list2 = list1 kopya değildir; ikisi aynı listeyi referans eder."),
        S("Listede olmayan bir öğe remove() ile silinmeye çalışılırsa ne olur?", ["ValueError istisnası fırlatılır", "Hiçbir şey olmaz", "Son eleman silinir", "IndexError"], "Slayt 16."),
        DY("liste[start:end] dilimi end indeksindeki elemanı da içerir.", false, "end dahil değildir."),
        E(["append", "sona ekler"], ["insert", "verilen indekse ekler"], ["remove", "ilk geçtiği yeri siler"], ["del", "indeksteki öğeyi siler"]),
      ],
    },
    {
      id: "liste-comp", baslik: "Liste üreteçleri, 2B listeler ve tuple", slayt: [22, 34],
      adimlar: [
        O("Liste üreteci (list comprehension)", [22, 28], `
          <p><b>Liste üreteci:</b> var olan bir listenin elemanları üzerinde dolaşarak <b>yeni liste oluşturan kısa ifade</b>.</p>
          <p><code>list2 = [item for item in list1]</code></p>
          <ul><li>Baştaki <code>item</code> → <b>sonuç ifadesi</b>; <code>for item in list1</code> → <b>iterasyon ifadesi</b>.</li>
          <li>İterasyon ifadesi for döngüsü gibi çalışır; her iterasyonda hedef değişkene bir eleman atanır ve sonuç ifadesinin değeri yeni listeye eklenir.</li>
          <li>Sonuç ifadesi hesap içerebilir: <code>[item**2 for item in list1]</code> → [1, 4, 9, 16]; <code>[len(s) for s in str_list]</code></li>
          <li><b>if</b> cümlesi ile yalnızca bazı elemanlar seçilir: <code>[item for item in list1 if item &lt; 10]</code></li></ul>`,
          { kod: "list1 = [1, 2, 3, 4]\nprint([item**2 for item in list1])\nstr_list = ['Winken', 'Blinken', 'Nod']\nprint([len(s) for s in str_list])\nlist1 = [1, 12, 2, 20, 3, 15, 4]\nprint([item for item in list1 if item < 10])" }),
        O("İki boyutlu listeler", [29, 31], `
          <p><b>İki boyutlu (iç içe) liste:</b> elemanları başka listeler olan liste. Genellikle <b>satır ve sütunlar</b> olarak düşünülür; birden çok veri kümesiyle çalışmak için kullanışlıdır.</p>
          <p>Elemanlara <b>iki indeksle</b> erişilir: <code>scores[satir][sutun]</code>. İşlemek için genellikle <b>iç içe döngüler</b> kullanılır.</p>`,
          { kod: "scores = [[70, 80, 90],\n          [85, 95, 75]]\nprint(scores[1][0])\nfor row in scores:\n    for value in row:\n        print(value, end=' ')\n    print()" }),
        O("Tuple'lar", [32, 34], `
          <p><b>Tuple:</b> değiştirilemeyen (immutable) dizi; listeye çok benzer ama <b>oluşturulduktan sonra değiştirilemez</b>. Format: <code>tuple_adi = (oge1, oge2)</code></p>
          <p>Listelerle ortak işlemler: indeksleme, <code>index</code> metodu, <code>len, min, max</code>, dilimleme, <code>in, +, *</code> operatörleri.</p>
          <p>Desteklemedikleri metotlar: <b>append, remove, insert, reverse, sort</b>.</p>
          <p>Tuple'ın avantajları: <b>işlemek listelerden hızlıdır</b>, <b>güvenlidir</b> (değişmez), bazı işlemler tuple gerektirir. <code>list()</code> tuple'ı listeye, <code>tuple()</code> listeyi tuple'a çevirir.</p>`,
          { kod: "my_tuple = (1, 2, 3, 4, 5)\nprint(my_tuple[0], len(my_tuple), max(my_tuple))\nprint(my_tuple[1:3])\nprint(list(my_tuple))\nprint(tuple([7, 8]))" }),
        C("list1 = [1, 2, 3, 4]\nprint([item * 10 for item in list1])", ["[10, 20, 30, 40]", "[1, 2, 3, 4]", "[100]", "[10]"], "Sonuç ifadesi her eleman için hesaplanır."),
        C("list1 = [1, 12, 2, 20, 3, 15, 4]\nprint([x for x in list1 if x < 10])", ["[1, 2, 3, 4]", "[12, 20, 15]", "[1, 12, 2, 20, 3, 15, 4]", "[]"], "if yalnızca koşulu sağlayan elemanları seçer."),
        C("str_list = ['Winken', 'Blinken', 'Nod']\nprint([len(s) for s in str_list])", ["[6, 7, 3]", "[3, 7, 6]", "16", "['Winken', 'Blinken', 'Nod']"], "Her string'in uzunluğu."),
        Y("scores = [[70, 80, 90], [85, 95, 75]]\nprint(scores[1][2])", "75", "Satır 1, sütun 2."),
        S("t = (1, 2, 3) için hangisi hata verir?", ["t.append(4)", "len(t)", "t[0]", "t[1:]"], "Tuple'lar append'i desteklemez."),
        S("Tuple kullanmanın avantajı hangisi DEĞİLDİR?", ["Eleman eklenip silinebilmesi", "İşlemenin listelerden hızlı olması", "Güvenli olması", "Bazı işlemlerin tuple gerektirmesi"], "Tuple değiştirilemez."),
        B("Liste üretecini tamamla", "kareler = [x**2 ___ x in sayilar]", ["for"], ["for", "if", "in", "while"], "[sonuç for hedef in liste]"),
        DY("İki boyutlu listedeki bir elemana iki indeksle erişilir: liste[satir][sutun].", true, "Slayt 29."),
        E(["List comprehension", "kısa yoldan yeni liste"], ["Nested list", "iki boyutlu liste"], ["Tuple", "değiştirilemez dizi"], ["tuple()", "listeyi tuple'a çevirir"]),
        K("liste-uretec", [22, 28]),
      ],
    },
    {
      id: "liste-grafik", baslik: "matplotlib ile grafik çizmek", slayt: [35, 57],
      adimlar: [
        O("matplotlib paketi", [35, 38], `
          <p><b>matplotlib</b> iki boyutlu grafik ve çizelgeler oluşturmak için bir kütüphanedir. Standart kütüphanenin parçası <b>değildir</b>; ayrıca kurulmalıdır:</p>
          <ul><li>Windows: <code>pip install matplotlib</code> · Mac/Linux: <code>sudo pip3 install matplotlib</code></li>
          <li>Kurulumu doğrulamak için IDLE'da <code>import matplotlib</code>; hata yoksa kurulmuştur.</li></ul>
          <p>Paketteki <b>pyplot</b> modülü kullanılır ve <code>plt</code> takma adıyla içe aktarılır: <code>import matplotlib.pyplot as plt</code></p>`),
        O("Çizgi grafiği: plot", [39, 45], `
          <p><code>plt.plot(x_listesi, y_listesi)</code> noktaları düz çizgilerle birleştiren <b>çizgi grafiği</b> oluşturur; yatay X ve dikey Y ekseni vardır, her nokta bir (X, Y) koordinatındadır. <code>plt.show()</code> grafiği gösterir.</p>
          <ul><li><code>plt.title()</code> başlık, <code>plt.xlabel()</code> / <code>plt.ylabel()</code> eksen etiketleri</li>
          <li><code>plt.xlim(xmin=1, xmax=100)</code>, <code>plt.ylim(...)</code> eksen sınırları</li>
          <li><code>plt.xticks(konumlar, etiketler)</code>, <code>plt.yticks(...)</code> işaret etiketleri (iki liste alır)</li>
          <li><code>marker='o'</code> noktaları işaretler, <code>plt.grid(True)</code> ızgara ekler</li></ul>
          <pre class="kod-blok soru-kod">import matplotlib.pyplot as plt
x_coords = [0, 1, 2, 3, 4]
y_coords = [0, 3, 1, 5, 2]
plt.plot(x_coords, y_coords, marker='o')
plt.title('Sales by Year')
plt.xlabel('Year')
plt.ylabel('Sales')
plt.xticks([0, 1, 2, 3, 4], ['2016', '2017', '2018', '2019', '2020'])
plt.grid(True)
plt.show()</pre>`),
        O("Çubuk grafiği: bar", [46, 51], `
          <p><code>plt.bar(sol_kenarlar, yukseklikler)</code> çubuk grafiği çizer: bir liste her çubuğun sol kenarının X koordinatı, diğeri çubukların yüksekliği.</p>
          <ul><li>Varsayılan çubuk genişliği X ekseninde <b>0.8</b>'dir; üçüncü argümanla değiştirilebilir: <code>plt.bar(left_edges, heights, 5)</code></li>
          <li><code>color</code> parametresine renk kodlarından oluşan bir <b>tuple</b> verilir: <code>color=('r', 'g', 'b', 'w', 'k')</code></li>
          <li>Renk kodları: 'b' mavi, 'g' yeşil, 'r' kırmızı, 'c' camgöbeği, 'm' eflatun, 'y' sarı, 'k' siyah, 'w' beyaz</li>
          <li>Eksen etiketleri ve işaretler için yine xlabel, ylabel, xticks, yticks kullanılır.</li></ul>`),
        O("Pasta grafiği: pie", [52, 57], `
          <p><code>plt.pie(degerler)</code> pasta grafiği çizer: değerlerin <b>toplamı bütünü</b> oluşturur, her eleman bir <b>dilim</b> olur ve dilimin büyüklüğü değerin bütüne oranını gösterir.</p>
          <ul><li><code>labels</code> parametresi dilim etiketlerini (string listesi) verir: <code>plt.pie(sales, labels=slice_labels)</code></li>
          <li>Renkler varsayılan olarak sırayla değişir (mavi, yeşil, kırmızı, camgöbeği, eflatun, sarı, siyah, beyaz); <code>colors=('r', 'g', 'b', 'w', 'k')</code> ile değiştirilebilir.</li></ul>
          <p>Bölüm özeti: tekrar ve birleştirme operatörleri, indeksleme, listeleri işleme, dilimleme ve kopyalama, metotlar, iki boyutlu listeler, tuple'ların değiştirilemezliği ve matplotlib.</p>`),
        S("matplotlib'in pyplot modülü genellikle nasıl içe aktarılır?", ["import matplotlib.pyplot as plt", "import plt", "from pyplot import matplotlib", "import matplotlib as pyplot"], "Slayt 38."),
        S("plt.bar fonksiyonunda varsayılan çubuk genişliği nedir?", ["0.8", "1", "5", "0.5"], "Slayt 48."),
        S("Pasta grafiğinde bir dilimin büyüklüğü neyi gösterir?", ["Değerin tüm değerlerin toplamına oranını", "Değerin indeksini", "Değerin rengini", "Değerin karesini"], "Slayt 52."),
        S("Bar grafiğinde 'k' renk kodu hangi rengi temsil eder?", ["Siyah", "Kırmızı", "Mavi", "Beyaz"], "Slayt 49: 'k' black."),
        DY("matplotlib, Python'un standart kütüphanesinin bir parçasıdır ve ayrıca kurulması gerekmez.", false, "Ayrıca pip ile kurulmalıdır."),
        E(["plot", "çizgi grafiği"], ["bar", "çubuk grafiği"], ["pie", "pasta grafiği"], ["xticks", "işaret etiketleri"]),
        B("Grafiği ekranda göster", "plt.plot(x, y)\nplt.___()", ["show"], ["show", "print", "draw", "open"], "Grafik plt.show() ile gösterilir."),
      ],
    },
  ],
});
