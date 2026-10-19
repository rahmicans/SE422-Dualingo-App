// Bölüm 3 — week3_part2_Functions.md: Fonksiyonlar (56 slayt)
UNITELER.push({
  id: "u-fonk", renk: "mor", baslik: "Fonksiyonlar", kaynak: "week3_part2_Functions", slaytSayisi: 56,
  altBaslik: "Week 3 · def, argümanlar, kapsam, return, modüller",
  dersler: [
    {
      id: "fonk-giris", baslik: "Fonksiyon tanımlama ve çağırma", slayt: [1, 13],
      adimlar: [
        O("Fonksiyon nedir?", [1, 6], `
          <p><b>Fonksiyon:</b> programın içinde <b>belirli bir görevi</b> yerine getiren ifadeler grubu; genellikle büyük bir programın tek bir görevidir. Görevi küçük parçalara bölüp her birini bir fonksiyona vermeye <b>böl ve yönet (divide and conquer)</b> denir. Her görevi kendi fonksiyonunda olan programa <b>modüler program</b> denir.</p>
          <p>İki tür fonksiyon vardır:</p>
          <ul><li><b>Void fonksiyon:</b> içindeki ifadeleri çalıştırır ve sonlanır.</li>
          <li><b>Değer döndüren fonksiyon:</b> ifadeleri çalıştırır ve kendisini çağıran ifadeye <b>bir değer geri döndürür</b>. <code>input</code>, <code>int</code>, <code>float</code> bu türdendir.</li></ul>`),
        O("Tanımlama: def", [7, 9], `
          <p>Fonksiyon adı kuralları değişkenlerle aynıdır: anahtar kelime olamaz, boşluk içeremez, ilk karakter harf veya _, gerisi harf/rakam/_; büyük-küçük harf farklıdır. Ad, görevi <b>açıklamalı</b>, genellikle bir <b>fiil</b> içermelidir.</p>
          <p><b>Fonksiyon tanımı</b> fonksiyonun ne yaptığını belirtir:</p>
          <ul><li><b>Fonksiyon başlığı:</b> ilk satır; <code>def</code> anahtar kelimesi, fonksiyon adı, parantezler ve iki nokta.</li>
          <li><b>Blok:</b> birlikte bir grup oluşturan ifadeler, yani fonksiyonun gövdesi.</li></ul>`,
          { kod: "def message():\n    print('I am Arthur,')\n    print('King of the Britons.')\n\nmessage()" }),
        O("Çağırma ve main fonksiyonu", [10, 11], `
          <p>Fonksiyonu çalıştırmak için onu <b>çağırırsın</b>. Çağrıldığında:</p>
          <ol><li>Yorumlayıcı fonksiyona <b>atlar</b> ve bloktaki ifadeleri çalıştırır.</li><li>Sonra programın onu çağıran kısmına <b>geri döner</b> (function return).</li></ol>
          <p><b>main fonksiyonu:</b> program başladığında çağrılır, gerektiğinde diğer fonksiyonları çağırır ve programın <b>ana mantığını</b> tanımlar.</p>`,
          { kod: "def main():\n    print('Başla')\n    selamla()\n    print('Bitir')\n\ndef selamla():\n    print('Merhaba!')\n\nmain()" }),
        O("Girinti ve pass", [12, 13], `
          <ul><li>Her blok <b>girintili</b> olmalı; bloktaki satırlar <b>aynı sayıda boşlukla</b> başlamalı.</li>
          <li>Girinti için tab veya boşluk kullanılabilir ama <b>ikisi bir arada değil</b>; yorumlayıcıyı karıştırır.</li>
          <li>IDLE blok satırlarını otomatik girintiler; bloktaki boş satırlar yok sayılır.</li></ul>
          <p><code>pass</code> anahtar kelimesiyle <b>boş fonksiyonlar</b> oluşturulabilir; yorumlayıcı pass'i yok sayar. Program tasarlarken iskelet kurmak için kullanışlıdır.</p>`,
          { kod: "def step1():\n    pass\n\ndef step2():\n    pass\n\nstep1()\nprint('çalıştı')" }),
        C("def message():\n    print('A')\n    print('B')\n\nprint('C')\nmessage()", ["C\nA\nB", "A\nB\nC", "C", "A\nB"], "Tanım sadece fonksiyonu oluşturur; ifadeler çağrılınca çalışır."),
        C("def selamla():\n    print('Merhaba')\n\nselamla()\nselamla()", ["Merhaba\nMerhaba", "Merhaba", "selamla\nselamla", "Hiçbir şey"], "Her çağrıda gövde yeniden çalışır."),
        S("input, int ve float hangi tür fonksiyonlardır?", ["Değer döndüren fonksiyonlar", "Void fonksiyonlar", "Sınıflar", "Modüller"], "Slayt 6: examples of value-returning functions."),
        S("Fonksiyon başlığında hangisi BULUNMAZ?", ["return anahtar kelimesi", "def anahtar kelimesi", "Fonksiyon adı", "Parantez ve iki nokta"], "Başlık: def + ad + () + :"),
        SR("Fonksiyon başlığını kur", ["def", "hesapla", "():"], ["return", "print"], " ", "def hesapla():"),
        DY("Bir bloğu girintilerken tab ve boşluk karışık kullanılması önerilir.", false, "İkisini birlikte kullanmak yorumlayıcıyı karıştırır."),
        E(["Void function", "değer döndürmez"], ["Value-returning", "değer döndürür"], ["Modularized program", "her görev kendi fonksiyonunda"], ["pass", "boş fonksiyon"]),
      ],
    },
    {
      id: "fonk-arguman", baslik: "Yerel değişkenler ve argümanlar", slayt: [14, 25],
      adimlar: [
        O("Yerel değişkenler ve kapsam", [14, 15], `
          <p><b>Yerel (local) değişken:</b> bir fonksiyonun içinde değer atanan değişken. Onu oluşturan fonksiyona <b>aittir</b>; yalnızca o fonksiyondaki ifadeler erişebilir, başka fonksiyon erişmeye çalışırsa <b>hata</b> oluşur.</p>
          <ul><li><b>Kapsam (scope):</b> programın bir değişkene erişilebilen kısmı. Yerel değişkenin kapsamı oluşturulduğu fonksiyondur.</li>
          <li>Yerel değişkene, fonksiyonda <b>oluşturulmasından önceki</b> satırlardan erişilemez.</li>
          <li>Farklı fonksiyonlar <b>aynı isimde</b> yerel değişkenlere sahip olabilir; birbirlerininkini görmedikleri için karışıklık olmaz.</li></ul>`),
        O("Argüman ve parametre", [16, 21], `
          <p><b>Argüman:</b> fonksiyona gönderilen veri; çağrıda fonksiyon adından sonraki parantezin içine yazılır.</p>
          <p><b>Parametre değişkeni:</b> fonksiyon çağrıldığında argümanın değeri atanan değişken. Argüman ve parametre <b>aynı değeri referans eder</b>. Format: <code>def fonksiyon_adi(parametre):</code>. Parametrenin kapsamı içinde kullanıldığı fonksiyondur.</p>
          <p><b>Birden çok argüman:</b> parametre listesi virgülle ayrılır. Argümanlar <b>sırayla (pozisyonel)</b> eşleşir: ilk parametre ilk argümanı, ikinci parametre ikinciyi alır.</p>`,
          { kod: "def show_double(number):\n    result = number * 2\n    print(result)\n\nvalue = 5\nshow_double(value)\n\ndef show_sum(num1, num2):\n    print(num1 + num2)\n\nshow_sum(12, 45)" }),
        O("Parametreyi değiştirmek ve anahtar kelimeli argümanlar", [22, 25], `
          <p>Fonksiyon içinde parametreye yapılan değişiklik <b>argümanı etkilemez</b>. Buna <b>değerle aktarım (pass by value)</b> denir; çağıran fonksiyondan çağrılan fonksiyona <b>tek yönlü</b> iletişim sağlar.</p>
          <p><b>Anahtar kelimeli argüman (keyword argument):</b> değerin <b>hangi parametreye</b> gideceğini belirtir: <code>fonksiyon(parametre=deger)</code>. Bu durumda çağrıdaki sıra önemli değildir.</p>
          <ul><li>Anahtar kelimeli ve pozisyonel argümanlar birlikte kullanılabilir, ama <b>pozisyonel argümanlar önce</b> gelmelidir.</li></ul>`,
          { kod: "def change_me(arg):\n    arg = 0\n    print('içeride:', arg)\n\nvalue = 99\nchange_me(value)\nprint('dışarıda:', value)\n\ndef show_interest(principal, rate, periods):\n    print(principal * rate * periods)\n\nshow_interest(rate=0.01, periods=10, principal=10000.0)" }),
        C("def show_double(number):\n    print(number * 2)\n\nshow_double(5)", ["10", "5", "number * 2", "25"], "Parametre number argümanın değerini (5) alır."),
        C("def change_me(arg):\n    arg = 0\n\nvalue = 99\nchange_me(value)\nprint(value)", ["99", "0", "None", "Hata verir"], "Pass by value: parametreyi değiştirmek argümanı etkilemez."),
        C("def fark(a, b):\n    print(a - b)\n\nfark(b=3, a=10)", ["7", "-7", "3", "Hata verir"], "Anahtar kelimeli argümanlarda sıra önemsizdir: a = 10, b = 3."),
        C("def f(x, y):\n    print(x, y)\n\nf(1, 2)", ["1 2", "2 1", "x y", "3"], "Argümanlar pozisyona göre eşleşir."),
        C("def a():\n    sayi = 5\n\ndef b():\n    sayi = 7\n    print(sayi)\n\na()\nb()", ["7", "5", "5\n7", "Hata verir"], "Farklı fonksiyonlar aynı adlı yerel değişkenlere sahip olabilir; birbirini görmezler."),
        S("Yerel değişkenin kapsamı nedir?", ["Oluşturulduğu fonksiyon", "Tüm program", "Sadece main", "Modül dosyası"], "Slayt 14."),
        DY("Bir çağrıda pozisyonel argümanlar anahtar kelimeli argümanlardan sonra yazılmalıdır.", false, "Pozisyonel argümanlar önce gelmelidir."),
        E(["Argument", "fonksiyona gönderilen veri"], ["Parameter", "argümanı alan değişken"], ["Scope", "erişilebilen bölge"], ["Pass by value", "argüman değişmez"]),
      ],
    },
    {
      id: "fonk-global", baslik: "Global değişkenler ve rastgele sayılar", slayt: [26, 38],
      adimlar: [
        O("Global değişkenler ve sabitler", [26, 28], `
          <p><b>Global değişken:</b> tüm fonksiyonların <b>dışında</b> yazılan atama ile oluşturulur; dosyadaki her ifade (fonksiyonlar dahil) erişebilir. Fonksiyon global değişkene <b>değer atamak</b> istiyorsa içinde yeniden bildirmelidir: <code>global degisken_adi</code>.</p>
          <p>Global değişkenlerden kaçınma nedenleri:</p>
          <ul><li><b>Hata ayıklamayı zorlaştırır</b>: yanlış değere kodda birçok yer sebep olabilir.</li>
          <li>Onları kullanan fonksiyonlar bu değişkenlere <b>bağımlı</b> olur; başka programa taşımak zorlaşır.</li><li>Programı <b>anlamayı zorlaştırır</b>.</li></ul>
          <p><b>Global sabit:</b> değiştirilemeyen global isim; kullanılması uygundur. Python'da global değişken oluşturup fonksiyonlarda <b>yeniden bildirmeyerek</b> taklit edilir.</p>`,
          { kod: "my_value = 10\n\ndef show_value():\n    print(my_value)\n\ndef change():\n    global my_value\n    my_value = 50\n\nshow_value()\nchange()\nshow_value()" }),
        O("Standart kütüphane ve import", [29, 32], `
          <p><b>Değer döndüren fonksiyon</b> void fonksiyona benzer ama bitince çağrıldığı yere bir <b>değer döndürür</b>.</p>
          <p><b>Standart kütüphane:</b> Python ile gelen, önceden yazılmış fonksiyonlar (<code>print</code>, <code>input</code>, <code>range</code>). Programcılar bunları <b>kara kutu</b> gibi görür: girdi verilir, çıktı alınır, içi bilinmese de olur.</p>
          <p>Bazıları yorumlayıcıya gömülüdür, doğrudan çağrılır. Diğerleri <b>modüllerde</b> saklanır: Python ile kurulan, fonksiyonları düzenleyen dosyalar. Modüldeki fonksiyonu çağırmak için programın başına <code>import modul_adi</code> yazılır.</p>`),
        O("random modülü", [33, 38], `
          <p><code>random</code> modülü rastgele sayılarla çalışan fonksiyonlar içerir. Modüle ait fonksiyon <b>nokta gösterimi</b> ile çağrılır: <code>modul_adi.fonksiyon_adi()</code>.</p>
          <ul><li><code>random.randint(1, 100)</code> → 1 ile 100 arasında (ikisi dahil) rastgele tam sayı döndürür.</li>
          <li><code>random.randrange(...)</code> → range ile aynı argümanları alır, oluşan diziden rastgele bir tam sayı seçer.</li>
          <li><code>random.random()</code> → 0.0 ile 1.0 arasında rastgele float; argüman almaz.</li>
          <li><code>random.uniform(a, b)</code> → belirtilen aralıkta rastgele float.</li></ul>
          <p>Bu sayılar aslında <b>sözde rastgeledir (pseudo-random)</b>. <b>Tohum (seed)</b> değeri onları üreten formülü başlatır; varsayılan olarak sistem saati kullanılır. <code>random.seed(10)</code> ile aynı tohum verilirse <b>aynı sayı serisi</b> üretilir.</p>`,
          { kod: "import random\nrandom.seed(10)\nprint(random.randint(1, 100))\nprint(random.randrange(0, 10, 2))\nprint(random.random())\nprint(random.uniform(1, 5))" }),
        C("x = 10\n\ndef goster():\n    print(x)\n\ngoster()", ["10", "Hata verir", "None", "x"], "Global değişkene fonksiyon içinden okuma amacıyla erişilebilir."),
        C("x = 10\n\ndef degistir():\n    global x\n    x = 50\n\ndegistir()\nprint(x)", ["50", "10", "Hata verir", "None"], "global bildirimiyle fonksiyon global değişkene atama yapabilir."),
        S("random.randint(1, 6) hangi değerleri döndürebilir?", ["1, 2, 3, 4, 5 veya 6", "1–5 arası", "0–6 arası", "0.0–1.0 arası ondalıklı"], "randint iki ucu da dahil eder."),
        S("Argüman almayan ve 0.0 ile 1.0 arasında float döndüren fonksiyon hangisi?", ["random.random()", "random.randint()", "random.uniform()", "random.seed()"], "Slayt 37."),
        S("Global değişkenlerden kaçınmak için gösterilen neden hangisi DEĞİLDİR?", ["Programı yavaşlatırlar", "Hata ayıklamayı zorlaştırırlar", "Fonksiyonları başka programa taşımayı zorlaştırırlar", "Programı anlamayı zorlaştırırlar"], "Slayt 27."),
        DY("Aynı tohum (seed) verilirse random modülü aynı sayı serisini üretir.", true, "Sayılar sözde rastgeledir; tohum formülü başlatır."),
        B("Rastgele sayı için modülü yükle", "___ random\nsayi = random.randint(1, 10)", ["import"], ["import", "global", "def", "from"], "Modül import ile yüklenir."),
        E(["randint", "aralıkta tam sayı"], ["random", "0.0–1.0 float"], ["uniform", "aralıkta float"], ["seed", "tohum belirler"]),
      ],
    },
    {
      id: "fonk-donus", baslik: "Değer döndüren fonksiyonlar ve modüller", slayt: [39, 56],
      adimlar: [
        O("return ifadesi", [39, 41], `
          <p>Değer döndüren fonksiyon yazmak için fonksiyona bir veya daha fazla <code>return</code> ifadesi eklenir: <code>return ifade</code>. İfadenin değeri, fonksiyonu çağıran yere döndürülür; iki değişkenin toplamı veya başka bir fonksiyonun sonucu gibi <b>karmaşık bir ifade</b> de olabilir.</p>
          <p>Kullanım alanları: kullanıcıdan girdi alıp döndürmek, matematik ifadelerini sadeleştirmek, programda tekrar eden karmaşık hesaplar. Dönen değer bir değişkene atanabilir veya başka fonksiyona argüman verilebilir.</p>`,
          { kod: "def sum(num1, num2):\n    result = num1 + num2\n    return result\n\ntotal = sum(12, 45)\nprint(total)" }),
        O("String, Boolean, çoklu değer ve None döndürmek", [42, 45], `
          <ul><li>Fonksiyonlar <b>string</b> döndürebilir (ör. kullanıcının adını alıp döndüren <code>get_name</code>).</li>
          <li><b>Boolean fonksiyon</b> True veya False döndürür; karar ve tekrar yapılarındaki koşulları test etmek (sayı çift mi?) ve girdi doğrulama kodunu sadeleştirmek için kullanılır.</li>
          <li>Python'da fonksiyon <b>birden çok değer</b> döndürebilir: <code>return ifade1, ifade2</code>. Çağrıda <code>=</code>'in solunda her değer için ayrı değişken olmalıdır.</li>
          <li><code>None</code> özel değeri "değer yok" demektir; bir hata oluştuğunu göstermek için döndürülebilir (sıfıra bölme gibi).</li></ul>`,
          { kod: "def is_even(n):\n    return n % 2 == 0\n\ndef divide(num1, num2):\n    if num2 == 0:\n        result = None\n    else:\n        result = num1 / num2\n    return result\n\ndef get_name():\n    return 'Ada', 'Lovelace'\n\nprint(is_even(4))\nprint(divide(10, 0))\nfirst, last = get_name()\nprint(last)" }),
        O("math modülü", [46, 48], `
          <p><code>math</code> modülü matematiksel hesaplar için fonksiyonlar içerir; kullanmak için <code>import math</code> gerekir.</p>
          <table><tr><th>Fonksiyon</th><th>Ne döndürür?</th></tr>
          <tr><td><code>sqrt(x)</code></td><td>karekök</td></tr><tr><td><code>ceil(x)</code> / <code>floor(x)</code></td><td>x'ten büyük-eşit en küçük / küçük-eşit en büyük tam sayı</td></tr>
          <tr><td><code>exp(x)</code>, <code>log(x)</code>, <code>log10(x)</code></td><td>e<sup>x</sup>, doğal log, 10 tabanında log</td></tr>
          <tr><td><code>sin, cos, tan, asin, acos, atan</code></td><td>trigonometri (radyan)</td></tr>
          <tr><td><code>degrees(x)</code> / <code>radians(x)</code></td><td>radyan → derece / derece → radyan</td></tr><tr><td><code>hypot(x, y)</code></td><td>(0,0)'dan (x,y)'ye hipotenüs</td></tr></table>
          <p>Modül ayrıca <code>math.pi</code> ve <code>math.e</code> değişkenlerini tanımlar: <code>circle_area = math.pi * radius**2</code>.</p>`,
          { kod: "import math\nprint(math.sqrt(16))\nprint(math.ceil(4.2), math.floor(4.8))\nprint(math.hypot(3, 4))\nprint(round(math.pi * 2 ** 2, 2))" }),
        O("Kendi modüllerin ve main'i koşullu çalıştırmak", [49, 56], `
          <p><b>Modülerleştirme:</b> ilgili fonksiyonları modüllerde gruplamak. Programı anlamayı, test etmeyi, bakımını kolaylaştırır ve kodu başka programlarda <b>yeniden kullanmayı</b> sağlar.</p>
          <ul><li>Modül Python kodu içeren bir dosyadır: fonksiyon tanımlarını içerir ama <b>çağrılarını içermez</b>. Adı <b>.py</b> ile bitmeli, anahtar kelime olmamalı; <code>import</code> ile yüklenir.</li>
          <li><b>Menü güdümlü program:</b> ekranda işlemler listesi (menü) gösterir, karar yapısıyla seçilen işlemi yapar, genellikle kullanıcı çıkana kadar tekrar eder.</li></ul>
          <p>Bir dosya yorumlayıcıya yüklendiğinde <code>__name__</code> özel değişkeni oluşur: dosya <b>modül olarak import edildiyse</b> modülün adı, <b>ana program olarak çalıştırıldıysa</b> <code>'__main__'</code> olur. Import edilince main'in çalışmaması için:</p>`,
          { kod: "def main():\n    print('Ana program çalıştı')\n\nif __name__ == '__main__':\n    main()" }),
        C("def sum(a, b):\n    return a + b\n\nprint(sum(12, 45))", ["57", "1245", "None", "12 45"], "return a + b değeri çağrıya döndürülür."),
        C("def f():\n    print('merhaba')\n\nsonuc = f()\nprint(sonuc)", ["merhaba\nNone", "merhaba", "None", "merhaba\nmerhaba"], "return'ü olmayan fonksiyon None döndürür."),
        C("def get_name():\n    return 'Ada', 'Lovelace'\n\nfirst, last = get_name()\nprint(last)", ["Lovelace", "Ada", "('Ada', 'Lovelace')", "Hata verir"], "Birden çok dönen değer, soldaki değişkenlere sırayla atanır."),
        Y("def divide(a, b):\n    if b == 0:\n        return None\n    return a / b\n\nprint(divide(10, 0))", "None", "Sıfıra bölmede hata yerine None döndürülür."),
        Y("import math\nprint(math.ceil(4.2))", "5", "ceil: x'ten büyük veya eşit en küçük tam sayı."),
        Y("import math\nprint(math.hypot(3, 4))", "5.0", "√(3² + 4²) = 5.0"),
        S("Bir dosya ana program olarak çalıştırıldığında __name__ değişkeninin değeri nedir?", ["'__main__'", "Dosyanın adı", "None", "'main'"], "Import edilirse modül adı, doğrudan çalıştırılırsa '__main__'."),
        DY("Bir modül dosyası, içindeki fonksiyonların çağrılarını içermelidir.", false, "Slayt 50: contains function definition but does not contain calls."),
        B("Fonksiyondan sonucu geri gönder", "def kare(x):\n    ___ x * x", ["return"], ["return", "print", "global", "pass"], "Değer return ile döndürülür."),
        E(["return", "değer döndürür"], ["None", "değer yok"], ["math.pi", "π sabiti"], ["__name__", "modül adı veya '__main__'"]),
        K("daire-alani", [39, 48]),
      ],
    },
  ],
});
