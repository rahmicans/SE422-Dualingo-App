// Bölüm 14 — NumPy_part2.md: NumPy for Data Science Part 2 (19 slayt)
UNITELER.push({
  id: "u-np2", renk: "kirmizi", baslik: "NumPy Bölüm 2", kaynak: "NumPy_part2", slaytSayisi: 19,
  altBaslik: "Maskeleme, reshape/ravel/flatten, birleştirme, ufunc, broadcasting, axis",
  dersler: [
    {
      id: "np2-maske", baslik: "Boolean indeksleme (maskeleme)", slayt: [1, 4],
      adimlar: [
        O("Maskeleme nedir?", [1, 2], `
          <p>Bu bölüm <b>Dr. Gökçen Tonbul</b>'un "NumPy for Data Science Part 2" sunumunu işler.</p>
          <p><b>Boolean indeksleme (maskeleme):</b> bir dizideki elemanları bir <b>koşul kümesine göre seçmek</b> için güçlü bir teknik. Veri analizi süreçlerinde (veri <b>filtreleme, temizleme ve işleme</b>) önemli bir yöntemdir.</p>
          <p>İki adımlıdır:</p>
          <ol><li><b>Boolean dizi (maske) oluştur:</b> her eleman bir koşula göre True veya False olur. Bu, vektörleştirilmiş bir karşılaştırma işlemidir.</li>
          <li><b>Maskeyi orijinal dizide indeks olarak kullan:</b> True olan konumlardaki elemanlardan oluşan <b>yeni bir 1 boyutlu dizi</b> döner.</li></ol>`,
          { cizim: "maske", kod: "data = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nmask = data > 4\nprint(mask)\nprint(data[mask])" }),
        O("Bileşik koşullar: &, |, ~", [3, 3], `
          <p>Python'un <code>and</code>, <code>or</code>, <code>not</code> anahtar kelimeleri NumPy tarafından <b>aşırı yüklenmemiştir</b> (dizilerde çalışmaz). Bunların yerine <b>bit düzeyinde mantıksal operatörler</b> kullanılır:</p>
          <ul><li><code>&amp;</code> → ve (and) · <code>|</code> → veya (or) · <code>~</code> → değil (not)</li>
          <li>Her koşul <b>parantez içine</b> alınmalıdır: <code>(data &gt; 3) &amp; (data &lt; 7)</code></li></ul>
          <p>Örnekler (data = [3 8 2 7 1 6 0 4]):</p>
          <ul><li><code>data[(data &gt; 3) &amp; (data &lt; 7)]</code> → [6 4]</li>
          <li><code>data[(data == 5) | (data &lt; 5)]</code> → [3 2 1 0 4]</li>
          <li><code>data[(data == 5) | ~(data &lt; 5)]</code> → [8 7 6]</li></ul>`,
          { kod: "data = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nprint(data[(data > 3) & (data < 7)])\nprint(data[(data == 5) | (data < 5)])\nprint(data[(data == 5) | ~(data < 5)])" }),
        O("Maskeyle değer atamak ve saymak", [4, 4], `
          <p>Maske yalnızca seçmek için değil, <b>seçilen elemanlara değer atamak</b> için de kullanılır:</p>
          <ul><li><code>new_data[new_data % 2 != 0] = -1</code> → tüm tek sayıları -1 yapar.</li>
          <li><code>np.sum(new_data &lt; 0)</code> → True'lar 1, False'lar 0 sayıldığı için koşulu sağlayan eleman <b>sayısını</b> verir (burada 10 negatif değer).</li></ul>`,
          { kod: "new_data = np.arange(0, 20)\nnew_data[new_data % 2 != 0] = -1\nprint(new_data)\ncount = np.sum(new_data < 0)\nprint(f'Negatif eleman sayısı: {count}')" }),
        C("data = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nprint(data[data > 4])", ["[8 7 6]", "[3 2 1 0 4]", "[False  True False  True False  True False False]", "[8 7 6 4]"], "Maske data > 4; True olan konumlar seçilir."),
        C("data = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nprint(data[(data > 3) & (data < 7)])", ["[6 4]", "[8 7 6]", "[4 6]", "[3 6 4]"], "Hem > 3 hem < 7 olanlar, dizideki sırayla: 6, 4."),
        C("data = np.array([3, 8, 2, 7, 1, 6, 0, 4])\nprint(data[(data == 5) | ~(data < 5)])", ["[8 7 6]", "[3 2 1 0 4]", "[]", "[5 8 7 6]"], "~(data < 5) → 5'ten küçük olmayanlar; dizide 5 yok."),
        Y("a = np.arange(10)\nprint(np.sum(a % 3 == 0))", "4", "0, 3, 6, 9 → dört True."),
        C("a = np.array([1, 2, 3, 4])\na[a % 2 == 0] = 0\nprint(a)", ["[1 0 3 0]", "[0 2 0 4]", "[1 3]", "[0 0 0 0]"], "Çift sayıların olduğu konumlara 0 atanır."),
        S("NumPy dizilerinde 've' koşulu için hangi operatör kullanılır?", ["&", "and", "&&", "+"], "and/or/not NumPy tarafından aşırı yüklenmez; & | ~ kullanılır."),
        DY("Boolean indekslemenin sonucu her zaman 1 boyutlu yeni bir dizidir.", true, "Slayt 2: a new 1D array will be returned."),
        B("Maske oluştur ve filtrele", "mask = data ___ 4\nfiltreli = data[___]", [">", "mask"], [">", "mask", "and", "data"], "Önce karşılaştırmayla maske, sonra data[mask]."),
        E(["&", "ve"], ["|", "veya"], ["~", "değil"], ["np.sum(maske)", "True sayısı"]),
        K("maskeleme", [2, 4]),
      ],
    },
    {
      id: "np2-reshape", baslik: "reshape, ravel, flatten ve transpose", slayt: [5, 8],
      adimlar: [
        O("Dizileri yeniden şekillendirmek", [5, 6], `
          <p>Bu işlemler <b>veri hazırlığı</b>, verinin çeşitli algoritmalara uygun hale getirilmesi ve görselleştirme için temeldir: dizinin boyutlarını değiştirmek, eksenlerinin yerini değiştirmek, dizileri birleştirmek veya bölmek.</p>
          <p>Veriyi değiştirmeden şekli değiştiren fonksiyonlar: <b>reshape, ravel, flatten</b>.</p>
          <p><code>reshape()</code> diziye yeni bir şekil verir ve belirtilen boyutlarda <b>yeni bir dizi nesnesi</b> döndürür.</p>
          <ul><li>Yeni şekil orijinalle <b>uyumlu olmalı</b>, yani aynı toplam eleman sayısını içermelidir; değilse <b>ValueError</b>.</li>
          <li>Bellekteki veri yerleşimi izin verdiğinde <b>view</b>, vermediğinde <b>kopya</b> döndürür.</li>
          <li>Bir boyut için <b>-1</b> verilebilir: NumPy o boyutu toplam eleman sayısından <b>otomatik hesaplar</b>.</li></ul>`,
          { kod: "a = np.arange(12)\nprint(a.reshape(3, 4))\nprint(a.reshape(2, -1).shape)\nprint(a.reshape(-1, 6).shape)" }),
        O("ravel ve flatten", [7, 7], `
          <p>İkisi de çok boyutlu diziyi <b>tek boyutlu (düzleştirilmiş)</b> diziye çevirir. Fark <b>bellek yönetimindedir</b> ve view/copy kavramını pekiştirir:</p>
          <ul><li><b>ravel:</b> bellek ayırmaz, mümkünse <b>view</b> kullanır (yalnızca veri bitişik değilse kopyalar). Sonucu değiştirmek orijinali değiştirebilir.</li>
          <li><b>flatten:</b> her zaman orijinalin bir <b>kopyasını</b> döndürür.</li></ul>`,
          { kod: "m = np.array([[1, 2], [3, 4]])\nr = m.ravel()\nf = m.flatten()\nr[0] = 99\nf[1] = 77\nprint(m)\nprint(r, f)" }),
        O("Transpoz ve eksen değiştirme", [8, 8], `
          <p><b>Transpoz:</b> bir matrisin boyutlarının yerini değiştirir, yani <b>satırlarla sütunları yer değiştirir</b>. <code>.T</code> özniteliği veya <code>numpy.transpose()</code> ile yapılır.</p>
          <p>Daha yüksek boyutlu dizilerde <code>np.transpose()</code> daha fazla kontrol sağlar: eksenlerin <b>yeni sırasını</b> bir tuple olarak alır. (d1, d2, d3) şekilli bir dizi <code>axes=(2, 0, 1)</code> ile transpoz edilirse yeni şekil <b>(d3, d1, d2)</b> olur.</p>`,
          { kod: "m = np.arange(6).reshape(2, 3)\nprint(m.T)\nt = np.zeros((2, 3, 4))\nprint(np.transpose(t, axes=(2, 0, 1)).shape)" }),
        C("print(np.arange(12).reshape(3, -1).shape)", ["(3, 4)", "(3, -1)", "(4, 3)", "(3, 12)"], "-1 otomatik hesaplanır: 12 / 3 = 4."),
        DY("np.arange(10).reshape(3, 4) hatasız çalışır.", false, "10 eleman 12'lik şekle sığmaz; ValueError."),
        C("m = np.array([[1, 2], [3, 4]])\nr = m.ravel()\nr[0] = 99\nprint(m[0, 0])", ["99", "1", "Hata verir", "0"], "ravel mümkünse view döndürür; değişiklik orijinale yansır."),
        C("m = np.array([[1, 2], [3, 4]])\nf = m.flatten()\nf[0] = 99\nprint(m[0, 0])", ["1", "99", "Hata verir", "0"], "flatten her zaman kopya döndürür."),
        C("print(np.arange(6).reshape(2, 3).T.shape)", ["(3, 2)", "(2, 3)", "(6,)", "(1, 6)"], "Transpoz satır ve sütunları yer değiştirir."),
        S("(d1, d2, d3) şekilli dizi axes=(2, 0, 1) ile transpoz edilirse yeni şekil nedir?", ["(d3, d1, d2)", "(d2, d3, d1)", "(d1, d2, d3)", "(d3, d2, d1)"], "Slayt 8."),
        S("Her zaman kopya döndüren düzleştirme fonksiyonu hangisidir?", ["flatten", "ravel", "reshape", "transpose"], "Slayt 7."),
        E(["reshape", "yeni şekil (mümkünse view)"], ["ravel", "düzleştirir, mümkünse view"], ["flatten", "düzleştirir, hep kopya"], [".T", "transpoz"]),
      ],
    },
    {
      id: "np2-birlestir", baslik: "Birleştirme ve bölme", slayt: [9, 10],
      adimlar: [
        O("Dizileri birleştirmek", [9, 9], `
          <p>Birden çok diziyi tek, daha büyük bir diziye birleştiren fonksiyonlar:</p>
          <ul><li><code>np.concatenate()</code>: dizi dizisini birleştiren <b>genel amaçlı</b> fonksiyon. Birleştirilecek dizilerden oluşan bir <b>tuple</b> ve birleştirmenin hangi boyutta yapılacağını belirten <b>axis</b> argümanı alır. Diziler, birleştirme ekseni <b>dışındaki</b> boyutlarda aynı şekle sahip olmalıdır.</li>
          <li><code>np.vstack()</code> (dikey yığma): dizileri <b>satır satır</b> üst üste koyar; <code>axis=0</code> boyunca concatenate ile eşdeğerdir.</li>
          <li><code>np.hstack()</code> (yatay yığma): dizileri <b>sütun sütun</b> yan yana koyar; <code>axis=1</code> boyunca concatenate ile eşdeğerdir.</li></ul>`,
          { kod: "a = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6]])\nprint(np.concatenate((a, b), axis=0))\nprint(np.vstack((a, b)).shape)\nc = np.array([[7], [8]])\nprint(np.hstack((a, c)))" }),
        O("Dizileri bölmek", [10, 10], `
          <p>Bölme, birleştirmenin <b>ters işlemidir</b>. <code>np.split()</code> genel amaçlı bölme fonksiyonudur: bölünecek diziyi, <b>nasıl bölüneceğini gösteren bir belirteci</b> ve bölmenin yapılacağı ekseni alır.</p>
          <ul><li>Belirteç bir tam sayı <b>N</b> ise dizi <b>N eşit boyutlu</b> alt diziye bölünür; eşit bölünemezse <b>ValueError</b>.</li>
          <li>Belirteç <b>indekslerden oluşan 1 boyutlu bir dizi</b> de olabilir; bu indeksler bölme noktalarıdır.</li></ul>`,
          { kod: "x = np.arange(9)\nprint(np.split(x, 3))\nprint(np.split(x, [2, 5]))" }),
        C("a = np.zeros((2, 3))\nb = np.ones((4, 3))\nprint(np.vstack((a, b)).shape)", ["(6, 3)", "(2, 6)", "(4, 3)", "Hata verir"], "vstack axis=0 boyunca birleştirir: 2 + 4 satır."),
        C("a = np.zeros((2, 3))\nb = np.ones((2, 5))\nprint(np.hstack((a, b)).shape)", ["(2, 8)", "(4, 3)", "(2, 15)", "Hata verir"], "hstack axis=1 boyunca birleştirir: 3 + 5 sütun."),
        C("x = np.arange(6)\nprint(len(np.split(x, 3)))", ["3", "2", "6", "1"], "N = 3 → üç eşit parça."),
        C("x = np.arange(7)\nprint(np.split(x, 2))", ["Hata verir", "[array([0, 1, 2]), array([3, 4, 5, 6])]", "[array([0, 1, 2, 3]), array([4, 5, 6])]", "2"], "7 eleman 2 eşit parçaya bölünemez → ValueError."),
        S("vstack hangi concatenate çağrısına eşdeğerdir?", ["axis=0", "axis=1", "axis=2", "axis=-1"], "Slayt 9."),
        DY("np.concatenate ile birleştirilen diziler, birleştirme ekseni dışındaki boyutlarda aynı şekle sahip olmalıdır.", true, "Slayt 9."),
        E(["concatenate", "genel birleştirme"], ["vstack", "dikey, axis=0"], ["hstack", "yatay, axis=1"], ["split", "bölme"]),
      ],
    },
    {
      id: "np2-ufunc", baslik: "Ufunc'lar ve broadcasting", slayt: [11, 16],
      adimlar: [
        O("Evrensel fonksiyonlar (ufunc)", [11, 13], `
          <p>NumPy'ın hesaplama çekirdeği: <b>ufunc'lar ve broadcasting</b>.</p>
          <p><b>Ufunc (universal function):</b> ndarray nesneleri üzerinde <b>eleman eleman</b> çalışan fonksiyon; eleman bazlı işlemler için yüksek performanslı hesaplamanın motorudur. Döngü olmadan tekrarlı işlemleri çalıştıran <b>vektörleştirilmiş sarmalayıcılardır</b>.</p>
          <p>NumPy aritmetik operatörleri karşılık gelen ufunc'a göre <b>aşırı yükler</b>: <code>a + b</code> içeride <code>np.add(a, b)</code>'yi tetikler.</p>
          <table><tr><th>Kategori</th><th>Örnekler</th><th>Ne yapar?</th></tr>
          <tr><td>Aritmetik</td><td>np.add, np.subtract, np.multiply, np.divide, np.power</td><td>eleman bazlı aritmetik</td></tr>
          <tr><td>Matematiksel</td><td>np.sqrt, np.exp, np.log, np.abs</td><td>her elemana matematik fonksiyonu</td></tr>
          <tr><td>Trigonometrik</td><td>np.sin, np.cos, np.tan, np.arcsin</td><td>radyan cinsinden trigonometri</td></tr>
          <tr><td>Karşılaştırma</td><td>np.greater, np.less, np.equal, np.not_equal</td><td>eleman bazlı karşılaştırma, <b>boolean dizi</b> döner</td></tr>
          <tr><td>Mantıksal/bit</td><td>np.logical_and, np.bitwise_or (|), np.bitwise_not (~)</td><td>eleman bazlı mantıksal işlem</td></tr></table>`,
          { kod: "a = np.array([1, 4, 9])\nb = np.array([1, 2, 3])\nprint(np.add(a, b), a + b)\nprint(np.sqrt(a))\nprint(np.greater(a, 3))" }),
        O("Broadcasting: kavram", [14, 14], `
          <p><b>Broadcasting (yayılım)</b> NumPy'ın en güçlü özelliklerinden biridir: <b>farklı şekillerdeki</b> diziler arasında işlemleri verimli uygulamak için kurallar sağlar.</p>
          <p>Kavramsal olarak küçük dizinin değerlerini büyük dizi boyunca <b>"esnetir"</b> veya <b>"çoğaltır"</b>, böylece eleman bazlı işlem için şekiller uyumlu olur. Kritik nokta: bu esnetme bellekte <b>gerçekten kopya oluşturmaz</b>, bu yüzden çok verimlidir.</p>
          <p>En basit durum <b>dizi ile skaler</b> arasındaki işlemdir: skaler dizinin şekline esnetilir.</p>`,
          { cizim: "yayilim", kod: "a = np.array([1, 2, 3])\nprint(a * 10)" }),
        O("Broadcasting kuralları", [15, 16], `
          <p>İki dizi arasında NumPy şekilleri <b>boyut boyut, en sağdaki (sondaki) boyutlardan başlayarak</b> karşılaştırır:</p>
          <ul><li><b>Kural 1:</b> Boyut sayıları farklıysa, daha az boyutlu olanın şekli <b>soluna 1'ler eklenerek</b> doldurulur. (3, 4) matris ile (4,) vektörde vektör (1, 4) sayılır.</li>
          <li><b>Kural 2:</b> Bir boyutta şekiller uyuşmuyorsa, o boyutta <b>1</b> olan dizi diğerinin boyutuna <b>esnetilir</b>.</li>
          <li><b>Kural 3:</b> Bir boyutta boyutlar farklı ve <b>hiçbiri 1 değilse</b> diziler uyumsuzdur ve <b>ValueError</b> fırlatılır.</li></ul>
          <p>Örnek: <code>np.ones((3, 4)) + np.arange(4)</code> → vektör (1, 4) olur, sondaki boyutlar 4 ve 4 eşleşir, baştaki 3 ve 1'de vektör 3'e esnetilir → her satıra [0 1 2 3] eklenir.</p>`,
          { kod: "matrix = np.ones((3, 4))\nvector = np.arange(4)\nresult = matrix + vector\nprint(result)" }),
        C("print(np.add(np.array([1, 2]), np.array([10, 20])))", ["[11 22]", "[1 2 10 20]", "33", "[[11 22]]"], "a + b ile aynı: eleman eleman toplama."),
        C("print(np.greater(np.array([1, 5, 3]), 2))", ["[False  True  True]", "[5 3]", "[True False False]", "2"], "Karşılaştırma ufunc'ları boolean dizi döndürür."),
        C("print((np.ones((2, 3)) + np.arange(3)).shape)", ["(2, 3)", "(3,)", "(2, 6)", "Hata verir"], "(3,) → (1, 3) → 2 satıra esnetilir."),
        DY("np.ones((3, 4)) + np.arange(3) hatasız çalışır.", false, "Sondaki boyutlar 4 ve 3; ikisi de 1 değil → ValueError."),
        C("print(np.ones((3, 1)) + np.arange(4))", ["[[1. 2. 3. 4.]\n [1. 2. 3. 4.]\n [1. 2. 3. 4.]]", "Hata verir", "[1. 2. 3. 4.]", "[[1.]\n [2.]\n [3.]]"], "(3, 1) ve (1, 4) → ikisi de esnetilir → (3, 4)."),
        S("Broadcasting'de şekiller hangi taraftan karşılaştırılmaya başlanır?", ["Sondaki (en sağdaki) boyutlardan", "Baştaki (en soldaki) boyutlardan", "En büyük boyuttan", "Rastgele"], "Slayt 15."),
        S("Broadcasting neden verimlidir?", ["Esnetme bellekte gerçekten kopya oluşturmadığı için", "Dizileri sıraladığı için", "Döngü kullandığı için", "Veriyi diske yazdığı için"], "Slayt 14."),
        S("a ve b NumPy dizileriyse a + b içeride hangi ufunc'ı tetikler?", ["np.add(a, b)", "np.sum(a, b)", "np.concatenate((a, b))", "np.plus(a, b)"], "Slayt 12."),
        E(["Kural 1", "soldan 1'lerle doldur"], ["Kural 2", "1 olan boyutu esnet"], ["Kural 3", "uyumsuzsa ValueError"], ["ufunc", "eleman bazlı fonksiyon"]),
        K("broadcasting", [14, 16]),
      ],
    },
    {
      id: "np2-toplama", baslik: "Toplama fonksiyonları ve axis", slayt: [17, 19],
      adimlar: [
        O("Toplama (aggregation) fonksiyonları", [17, 17], `
          <p>Bu fonksiyonlar dizi üzerinde <b>özet bir hesaplama</b> yapar:</p>
          <ul><li><code>np.sum()</code> toplam · <code>np.mean()</code> ortalama · <code>np.std()</code> standart sapma</li>
          <li><code>np.min()</code> / <code>np.amin()</code> en küçük · <code>np.max()</code> / <code>np.amax()</code> en büyük</li><li><code>np.prod()</code> çarpım</li></ul>
          <p>Varsayılan olarak <b>dizinin tamamı (düzleştirilmiş hali)</b> üzerinde çalışır ve <b>tek bir skaler</b> döndürür.</p>`,
          { kod: "m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np.sum(m), np.mean(m), np.min(m), np.max(m), np.prod(m))\nprint(round(np.std(m), 3))" }),
        O("axis parametresi", [18, 19], `
          <p><b>axis</b> parametresi toplama işleminin <b>hangi boyut boyunca</b> yapılacağını kontrol eder:</p>
          <ul><li><code>axis=0</code>: işlem <b>satırlar boyunca</b> yapılır, satırlar "çökertilir" ve <b>her sütun için</b> bir sonuç hesaplanır.</li>
          <li><code>axis=1</code>: işlem <b>sütunlar boyunca</b> yapılır, sütunlar çökertilir ve <b>her satır için</b> bir sonuç hesaplanır.</li></ul>
          <p>Bölümün kaynakları (slayt 19): Boolean masking Medium yazısı, NumPy quickstart, NumPy Array Manipulation (Medium), Universal functions (NumPy v2.3), Python Data Science Handbook – Broadcasting, Broadcasting (NumPy v2.3).</p>`,
          { cizim: "eksenToplam", kod: "m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.sum(axis=0))\nprint(m.sum(axis=1))\nprint(np.max(m, axis=1))" }),
        Y("m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np.sum(m))", "21", "axis verilmezse tüm elemanlar toplanır."),
        C("m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.sum(axis=0))", ["[5 7 9]", "[ 6 15]", "21", "[1 2 3 4 5 6]"], "axis=0: her sütun için toplam."),
        C("m = np.array([[1, 2, 3], [4, 5, 6]])\nprint(m.sum(axis=1))", ["[ 6 15]", "[5 7 9]", "21", "[[ 6]\n [15]]"], "axis=1: her satır için toplam."),
        C("m = np.array([[3, 9], [7, 1]])\nprint(np.max(m, axis=0))", ["[7 9]", "[9 7]", "9", "[3 1]"], "Her sütunun en büyüğü."),
        Y("print(np.prod(np.array([2, 3, 4])))", "24", "2 × 3 × 4."),
        Y("print(np.mean(np.array([2, 4, 6, 8])))", "5.0", "(2 + 4 + 6 + 8) / 4"),
        S("axis parametresi verilmezse toplama fonksiyonları ne döndürür?", ["Tüm dizi üzerinden tek bir skaler", "Her sütun için bir değer", "Her satır için bir değer", "Diziyi değiştirmeden döndürür"], "Slayt 17."),
        DY("axis=1 ile toplam, her satır için bir sonuç üretir.", true, "Sütunlar çökertilir, her satır için sonuç."),
        E(["np.mean", "ortalama"], ["np.std", "standart sapma"], ["np.prod", "çarpım"], ["axis=0", "sütun başına sonuç"]),
        K("axis-toplam", [17, 18]),
      ],
    },
  ],
});
