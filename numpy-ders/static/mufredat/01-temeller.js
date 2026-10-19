// Bölüm 1 — Week2_1.md: Python Basics (71 slayt)
UNITELER.push({
  id: "u-temel", renk: "mavi", baslik: "Python Temelleri", kaynak: "Week2_1", slaytSayisi: 71,
  altBaslik: "Week 2 · Sözdizimi, veri tipleri, değişkenler, operatörler",
  dersler: [
    {
      id: "temel-giris", baslik: "Python'u kullanmak", slayt: [1, 8],
      adimlar: [
        O("Hoş geldin! 👋", [1, 4], `
          <p>Bu uygulama <b>SE 422 – Introduction to Data Science</b> dersinin 14 slayt destesini bölüm bölüm öğretir. İlk bölüm Python'un temelleri: <b>girdi, işleme, çıktı</b>, değişkenler, operatörler ve karar yapıları.</p>
          <ul><li>Her derste önce kısa <b>anlatım kartları</b>, ardından <b>sorular</b> gelir.</li>
          <li>Yanlış yaptığın soru, ders bitmeden <b>tekrar karşına çıkar</b>; ilk denemede bilemediklerin <b>Pekiştir</b> bölümünde seni bekler.</li>
          <li>Sağ üstteki <b>&gt;_</b> düğmesi gerçek bir Python terminali açar; anlatımdaki örnekleri orada deneyebilirsin.</li></ul>
          <p>Bölümün konuları: Python'u kullanmak, print, yorumlar, değişkenler, klavyeden girdi, hesaplamalar, string birleştirme, f-string, sabitler, if / if-else, string karşılaştırma, mantıksal operatörler ve Boolean değişkenler.</p>`),
        O("Yorumlayıcı: iki çalışma modu", [5, 6], `
          <p>Python kullanılmadan önce bilgisayara <b>kurulmalı ve yapılandırılmalıdır</b>. Kurulan parçalardan biri <b>Python yorumlayıcısıdır (interpreter)</b>; Python kodunu okuyup çalıştıran programdır.</p>
          <p>Yorumlayıcı iki modda kullanılır:</p>
          <ul><li><b>Etkileşimli mod (interactive mode):</b> Komutları klavyeden tek tek yazarsın. Ekranda bir <b>istem (prompt)</b>, yani <code>&gt;&gt;&gt;</code> görünür; yorumlayıcının senden bir komut beklediğini gösterir. Komut çalıştıktan sonra istem yeniden belirir. Hatalı bir komut yazarsan <b>hata mesajı</b> gösterilir. Yeni şeyler öğrenmek için çok iyi bir yoldur.</li>
          <li><b>Betik modu (script mode):</b> Komutlar bir dosyaya kaydedilir ve dosya bir program olarak çalıştırılır.</li></ul>
          <p>Bu uygulamadaki terminal, etkileşimli moddur.</p>`, { kod: "print('Merhaba!')\n2 + 3" }),
        O("Betik modu ve IDLE", [7, 8], `
          <p>Etkileşimli modda yazılanlar <b>program olarak kaydedilmez</b>. Kalıcı bir program için betik modu kullanılır:</p>
          <ul><li>Python komutları bir dosyaya kaydedilir; dosya adı <b>.py</b> uzantılı olmalıdır.</li>
          <li>Dosyayı (betiği) çalıştırmak için işletim sistemi komut satırına <code>python dosyaadi</code> yazılır.</li></ul>
          <p><b>IDLE</b> (Integrated Development Program): program yazmak, çalıştırmak ve test etmek için araçları bir araya getiren tek bir programdır.</p>
          <ul><li>Python kurulunca <b>otomatik olarak</b> kurulur.</li><li><b>Etkileşimli modda</b> çalışır.</li>
          <li>Python programı yazmaya yardımcı özellikleri olan <b>yerleşik bir metin editörü</b> vardır.</li></ul>`),
        S("Komutları klavyeden tek tek yazıp hemen sonucunu gördüğün mod hangisidir?", ["Etkileşimli mod (interactive mode)", "Betik modu (script mode)", "Derleme modu", "Dosya modu"],
          "Etkileşimli modda >>> istemine komut yazılır ve hemen çalışır."),
        S("Python betik dosyalarının uzantısı nedir?", [".py", ".txt", ".ipynb", ".exe"], "Betik dosyası .py uzantılı olmalıdır."),
        DY("Etkileşimli modda yazılan komutlar otomatik olarak program dosyası olarak kaydedilir.", false,
          "Etkileşimli modda yazılanlar kaydedilmez; kalıcı program için betik modu kullanılır."),
        DY("IDLE, Python kurulduğunda otomatik olarak kurulur ve yerleşik bir metin editörü içerir.", true, "Slayt 8: automatically installed, built-in text editor."),
        B("Bir betiği komut satırından çalıştır", "___ program.py", ["python"], ["python", "run", "open", "idle"], "Format: python filename"),
        E(["Interpreter", "kodu okuyup çalıştırır"], ["Prompt (>>>)", "komut bekleniyor"], ["Script mode", "komutlar dosyaya kaydedilir"], ["IDLE", "yaz, çalıştır, test et"]),
      ],
    },
    {
      id: "temel-degisken", baslik: "String, yorum ve değişkenler", slayt: [9, 17],
      adimlar: [
        O("String'ler ve yorumlar", [9, 10], `
          <p><b>String:</b> veri olarak kullanılan karakter dizisi. Kodun içinde doğrudan yazılan string'e <b>string literal</b> denir.</p>
          <ul><li>Tek (<code>'</code>) veya çift (<code>"</code>) tırnak içine alınmalıdır.</li>
          <li>Üç tırnakla (<code>'''</code> veya <code>"""</code>) da yazılabilir: bu durumda içinde hem tek hem çift tırnak olabilir ve <b>birden çok satıra</b> yayılabilir.</li></ul>
          <p><b>Yorum (comment):</b> kodu okuyan <b>insan için</b> yazılmış açıklama notudur. <code>#</code> ile başlar ve yorumlayıcı tarafından <b>yok sayılır</b>. Kod satırının sonuna yazılan yoruma <b>satır sonu yorumu</b> denir; genellikle o satırın amacını açıklar.</p>`,
          { kod: "print(\"Kate'in kitabı\")  # içinde tek tırnak var\nprint('''Birinci satır\nİkinci satır''')" }),
        O("Değişkenler ve atama", [11, 12], `
          <p><b>Değişken:</b> bilgisayar belleğinde saklanan bir değeri temsil eden <b>isim</b>. Bellekteki veriye erişmek ve onu değiştirmek için kullanılır; değişken temsil ettiği değeri <b>referans eder</b>.</p>
          <p><b>Atama ifadesi (assignment statement)</b> değişken oluşturur: <code>degisken = ifade</code>, örn. <code>age = 29</code>. Buradaki <code>=</code> <b>atama operatörüdür</b>.</p>
          <ul><li>Değeri alan değişken <b>solda</b> olmalıdır (<code>29 = age</code> hatadır).</li>
          <li>Değişken bir fonksiyona <b>argüman</b> olarak verilebilir: <code>print(age)</code>.</li>
          <li>Değişken adı <b>tırnak içine yazılmaz</b>; <code>print('age')</code> sadece "age" kelimesini yazar.</li>
          <li>Bir değişkeni ancak ona <b>değer atandıktan sonra</b> kullanabilirsin.</li></ul>`, { kod: "age = 29\nprint(age)\nprint('age')" }),
        O("İsimlendirme kuralları", [13, 13], `
          <ul><li>Python <b>anahtar kelimesi</b> olamaz (<code>if</code>, <code>for</code>, <code>class</code>...).</li>
          <li><b>Boşluk</b> içeremez.</li>
          <li>İlk karakter <b>harf veya alt çizgi (_)</b> olmalıdır.</li>
          <li>İlk karakterden sonra harf, rakam veya alt çizgi kullanılabilir.</li>
          <li><b>Büyük/küçük harfe duyarlıdır</b>: <code>sayi</code> ile <code>Sayi</code> farklı değişkenlerdir.</li>
          <li>Ad, değişkenin <b>ne için kullanıldığını yansıtmalıdır</b> (<code>x</code> yerine <code>saatlik_ucret</code>).</li></ul>` ),
        O("print ile birden çok öğe, yeniden atama", [14, 15], `
          <p><code>print</code> tek çağrıda <b>birden çok öğe</b> gösterebilir: öğeler <b>virgülle</b> ayrılarak verilir, verildikleri sırayla yazılır ve ekranda aralarına <b>otomatik bir boşluk</b> konur.</p>
          <p>Değişkenler program çalışırken <b>farklı değerleri referans edebilir</b>. Artık hiçbir değişkenin referans etmediği değerler yorumlayıcı tarafından bellekten silinir: buna <b>çöp toplama (garbage collection)</b> denir.</p>`,
          { kod: "fiyat = 10\nprint('Fiyat:', fiyat, 'TL')\nfiyat = 12\nprint('Yeni fiyat:', fiyat)" }),
        O("Veri tipleri", [16, 17], `
          <p><b>Veri tipleri</b> bellekteki değerleri sınıflandırır: tam sayı için <b>int</b>, gerçek (ondalıklı) sayı için <b>float</b>, metin için <b>str</b>.</p>
          <ul><li><b>Sayısal literal:</b> programda yazılan sayı. <b>Ondalık noktası yoksa int</b>, varsa <b>float</b> kabul edilir (<code>7</code> int, <code>7.0</code> float).</li>
          <li>Bazı işlemler veri tipine göre farklı davranır.</li>
          <li>Python'da bir değişken <b>her tipten</b> değeri referans edebilir; int atanmış bir değişkene sonra string atanabilir (x önce 99'u, sonra "Take me to your leader" metnini gösterir).</li></ul>`,
          { kod: "x = 99\nprint(type(x))\nx = 'Take me to your leader'\nprint(type(x))" }),
        C("print('Toplam:', 5, 'adet')", ["Toplam: 5 adet", "Toplam:5adet", "'Toplam:', 5, 'adet'", "Toplam: 5, adet"], "Virgülle verilen öğeler aralarına birer boşluk konarak yazılır."),
        S("Hangisi geçerli bir değişken adıdır?", ["_toplam2", "2toplam", "toplam deger", "for"], "İlk karakter harf veya _ olmalı, boşluk olamaz, anahtar kelime olamaz."),
        C("x = 5\nx = 'beş'\nprint(x)", ["beş", "5", "5 beş", "Hata verir"], "Değişken başka tipten bir değerle yeniden atanabilir; son atanan değer geçerlidir."),
        S("7.0 literal'inin veri tipi nedir?", ["float", "int", "str", "bool"], "Ondalık noktası olan sayı literal'i float'tır."),
        DY("Python'da # ile başlayan satırlar yorumlayıcı tarafından çalıştırılır.", false, "Yorumlar yok sayılır; yalnızca kodu okuyan insan içindir."),
        DY("Değişken adları büyük/küçük harfe duyarlıdır; Sayi ve sayi farklı değişkenlerdir.", true, "Variable names are case sensitive."),
        Y("age = 29\nprint('age')", "age", "Tırnak içindeki age bir string'dir; değişkenin değeri değil, 'age' kelimesi yazılır."),
        E(["int", "tam sayı"], ["float", "ondalıklı sayı"], ["str", "metin"], ["#", "yorum başlatır"]),
      ],
    },
    {
      id: "temel-hesap", baslik: "Girdi ve hesaplamalar", slayt: [18, 26],
      adimlar: [
        O("Klavyeden girdi: input", [18, 19], `
          <p>Çoğu program kullanıcıdan girdi okur. Yerleşik <code>input</code> fonksiyonu klavyeden okur ve veriyi <b>her zaman string olarak döndürür</b>.</p>
          <p>Format: <code>degisken = input(istem)</code>. İstem (prompt) genellikle kullanıcıya ne gireceğini söyleyen bir string'dir; istemin sonuna <b>otomatik boşluk eklenmez</b>.</p>
          <p>Sayı okumak için tip dönüştürme gerekir:</p>
          <ul><li><code>int(item)</code> → int'e çevirir · <code>float(item)</code> → float'a çevirir</li>
          <li>Dönüştürme yalnızca öğe <b>geçerli bir sayısal değerse</b> çalışır; değilse <b>istisna (exception)</b> fırlatılır.</li></ul>
          <p class="not">Not: Bu uygulamanın terminalinde <code>input()</code> kullanılamaz, ama dönüştürmeyi deneyebilirsin.</p>`,
          { kod: "metin = '42'\nsayi = int(metin)\nprint(sayi + 8)\nprint(float('3.5') * 2)" }),
        O("Matematik operatörleri", [20, 20], `
          <p><b>Matematik ifadesi</b> bir hesap yapıp değer üretir. <b>Operatör</b> hesabı yapan semboldür, çevresindeki değerler <b>operand</b>dır; değişkenler de operand olabilir ve sonuç genellikle bir değişkene atanır.</p>
          <p>İki tür bölme vardır:</p>
          <ul><li><code>/</code> → <b>ondalıklı bölme</b>: <code>7 / 2</code> = 3.5</li>
          <li><code>//</code> → <b>tam sayı bölmesi</b>: <code>7 // 2</code> = 3. Pozitif sonuçlar <b>kesilir</b>, negatif sonuçlar <b>sıfırdan uzağa yuvarlanır</b>: <code>-7 // 2</code> = -4.</li></ul>`,
          { kod: "print(7 / 2)\nprint(7 // 2)\nprint(-7 // 2)" }),
        O("Öncelik, üs ve kalan", [21, 23], `
          <p>Operatör önceliği (yüksekten düşüğe):</p>
          <ol><li><b>Parantez içindeki işlemler</b> (önce yapılmaya zorlar)</li><li><b>Üs</b> <code>**</code></li><li><b>Çarpma</b> <code>*</code>, <b>bölme</b> <code>/ //</code>, <b>kalan</b> <code>%</code></li><li><b>Toplama</b> <code>+</code>, <b>çıkarma</b> <code>-</code></li></ol>
          <p>Aynı önceliktekiler <b>soldan sağa</b> yapılır.</p>
          <ul><li><code>x ** y</code> → x üzeri y</li>
          <li><code>%</code> (modulus) → bölümden kalan: <code>4 % 2 = 0</code>, <code>5 % 2 = 1</code>. Zaman/mesafe dönüştürmede ve <b>tek/çift</b> sayı bulmada kullanılır.</li></ul>
          <p>Matematik formülünü koda çevirirken <b>çarpma operatörü eklemek</b> (2xy → <code>2 * x * y</code>) ve <b>parantez</b> eklemek gerekebilir.</p>`,
          { kod: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(2 ** 3)\nprint(17 % 5)" }),
        O("Karışık tipler ve uzun satırlar", [24, 26], `
          <p>Sonucun tipi operandların tipine bağlıdır:</p>
          <ul><li>İki int → <b>int</b> · İki float → <b>float</b></li><li>int ve float (<b>karışık tipli ifade</b>) → int geçici olarak float'a çevrilir, sonuç <b>float</b></li>
          <li>float'ı int'e çevirmek ondalık kısmı <b>keser</b>: <code>int(3.9)</code> = 3</li></ul>
          <p>Uzun ifadeler <b>satır devam karakteri</b> <code>\\</code> ile birden çok satıra bölünebilir. <b>Parantez içindeki</b> her kısım ise <code>\\</code> olmadan bölünebilir.</p>`,
          { kod: "print(5 + 2.0)\nprint(int(3.9))\ntoplam = (1 + 2 +\n          3 + 4)\nprint(toplam)" }),
        S("input fonksiyonu kullanıcının girdiği veriyi hangi tipte döndürür?", ["Her zaman string (str)", "Her zaman int", "Girilen değere göre int veya float", "bool"], "input her zaman string döndürür; sayı için int() veya float() gerekir."),
        Y("print(7 // 2)", "3", "// tam sayı bölmesidir; pozitif sonuçta ondalık kısım kesilir."),
        Y("print(17 % 5)", "2", "17 = 5 × 3 + 2 → kalan 2."),
        C("print(2 + 3 * 4)", ["14", "20", "24", "9"], "Çarpma toplamadan önce yapılır: 3 × 4 = 12, sonra + 2."),
        C("print(5 + 2.0)", ["7.0", "7", "52.0", "Hata verir"], "int ve float karışık ifadede sonuç float olur."),
        Y("print(2 ** 3 ** 2 // 100)", "5", "Önce üs (sağdan sola): 3**2 = 9, 2**9 = 512; sonra 512 // 100 = 5."),
        S("int('abc') çalıştırılırsa ne olur?", ["İstisna (exception) fırlatılır", "0 döner", "'abc' döner", "None döner"], "Geçerli bir sayı olmayan değer dönüştürülemez; istisna oluşur."),
        DY("int(3.9) ifadesinin sonucu 4'tür.", false, "float'tan int'e dönüşüm ondalık kısmı keser: 3."),
        E(["/", "ondalıklı bölme"], ["//", "tam sayı bölmesi"], ["%", "kalan"], ["**", "üs alma"]),
        K("girdi-hesap", [19, 24]),
      ],
    },
    {
      id: "temel-fstring", baslik: "String birleştirme, print ve f-string", slayt: [27, 40],
      adimlar: [
        O("String birleştirme", [27, 30], `
          <p><b>Birleştirme (concatenation):</b> bir string'i diğerinin sonuna eklemek. <code>+</code> operatörü kullanılır: <code>'Hello ' + 'world'</code> → <code>Hello world</code>.</p>
          <p>Uzun bir string literal'i birden çok satıra bölmek için de <code>+</code> kullanılabilir.</p>
          <p><b>Örtük birleştirme:</b> Yan yana yazılan iki veya daha fazla string literal otomatik olarak tek string'e birleşir: <code>'one' 'two' 'three'</code> → <code>onetwothree</code>. Parantez içinde satırlara bölerek uzun mesajlar yazmak için kullanışlıdır.</p>`,
          { kod: "message = 'Hello ' + 'world'\nprint(message)\nmy_str = 'one' 'two' 'three'\nprint(my_str)" }),
        O("print fonksiyonu hakkında daha fazlası", [31, 32], `
          <ul><li><code>print</code> bir satır çıktı gösterir ve sonuna <b>yeni satır karakteri</b> koyar. <code>end='ayraç'</code> özel argümanı, yeni satır yerine bu ayracı koydurur.</li>
          <li><code>print</code> öğeleri <b>boşlukla</b> ayırır. <code>sep='ayraç'</code> argümanı ayırıcıyı değiştirir.</li>
          <li>String içinde <b>ters eğik çizgiyle</b> (<code>\\</code>) başlayan özel karakterler komut gibi davranır: <code>\\n</code> yeni satır, <code>\\t</code> yatay sekme.</li></ul>`,
          { kod: "print('A', 'B', 'C', sep='-')\nprint('Bir', end=' ')\nprint('İki')\nprint('Satır1\\nSatır2')" }),
        O("f-string ile biçimli çıktı", [33, 35], `
          <p><b>f-string</b>, başına <code>f</code> harfi konan özel bir string literal'idir ve değişkenler için <b>yer tutucular</b> <code>{ }</code> destekler.</p>
          <ul><li><code>name = 'Johnny'</code> → <code>f'Hello {name}.'</code> → <code>Hello Johnny.</code></li>
          <li>Yer tutucuya <b>ifade</b> de yazılabilir, hesaplanır: <code>f'The value is {10 + 2}.'</code> → <code>The value is 12.</code></li>
          <li><b>Biçim belirteci (format specifier)</b> iki noktadan sonra yazılır: <code>{num:.2f}</code> → değeri <b>2 ondalığa yuvarla</b> ve ondalıklı sayı olarak göster: 123.456789 → <code>123.46</code></li></ul>`,
          { kod: "name = 'Johnny'\nprint(f'Hello {name}.')\nval = 10\nprint(f'The value is {val + 2}.')\nnum = 123.456789\nprint(f'{num:.2f}')" }),
        O("Diğer biçim belirteçleri", [36, 40], `
          <ul><li><code>{num:,.2f}</code> → binlik ayırıcı virgül: 1000000.00 → <code>1,000,000.00</code></li>
          <li><code>{discount:.0%}</code> → yüzde: 0.5 → <code>50%</code></li>
          <li><code>{num:,d}</code> → tam sayı, binlik ayırıcılı: 123456789 → <code>123,456,789</code></li>
          <li><code>{num:.2e}</code> → bilimsel gösterim: 12345.6789 → <code>1.23e+04</code></li>
          <li><b>Minimum alan genişliği:</b> <code>{num:12,.2f}</code> → değer 12 karakterlik alana yazılır</li>
          <li><b>Hizalama:</b> <code>&lt;</code> sola, <code>&gt;</code> sağa, <code>^</code> ortaya: <code>{num:^20.2f}</code></li></ul>
          <p>Birden çok belirteç bu <b>sırayla</b> yazılır: <code>[hizalama][genişlik][,][.hassasiyet][tip]</code> → <code>{number:^10,.2f}</code></p>`,
          { kod: "num = 12345.6789\nprint(f'{num:,.2f}')\nprint(f'{0.5:.0%}')\nprint(f'{num:.2e}')\nprint(f'[{num:>12,.2f}]')" }),
        C("print('A', 'B', 'C', sep='-')", ["A-B-C", "A B C", "A-B-C-", "ABC"], "sep öğeler arasına konacak ayırıcıyı belirler."),
        C("my_str = 'one' 'two'\nprint(my_str)", ["onetwo", "one two", "'one' 'two'", "Hata verir"], "Yan yana yazılan string literal'ler örtük olarak birleştirilir."),
        C("num = 123.456789\nprint(f'{num:.2f}')", ["123.46", "123.45", "123.456789", "1.23e+02"], ".2f iki ondalığa yuvarlar: 123.456... → 123.46"),
        C("discount = 0.5\nprint(f'{discount:.0%}')", ["50%", "0.5%", "5%", "50.0%"], ".0% değeri 100 ile çarpıp yüzde olarak gösterir."),
        C("num = 1000000.00\nprint(f'{num:,.2f}')", ["1,000,000.00", "1000000.00", "1.000.000,00", "1,000,000"], "Virgül binlik ayırıcı ekler, .2f iki ondalık gösterir."),
        Y("val = 10\nprint(f'The value is {val + 2}.')", "The value is 12.", "Yer tutucudaki ifade hesaplanır: 10 + 2 = 12."),
        SR("Biçim belirteçlerinin doğru sırasını kur", ["hizalama", "genişlik", ",", ".hassasiyet", "tip"], [], " → ", "Sıra: [alignment][width][,][.precision][type]"),
        B("Değeri 2 ondalıkla göster", "print(f'{fiyat:___}')", [".2f"], [".2f", ",d", ".0%", ".2e"], "Ondalıklı sayı, 2 ondalık: .2f"),
        DY("print fonksiyonunda end='' yazılırsa çıktının sonuna yeni satır karakteri konmaz.", true, "end argümanı yeni satır yerine verilen ayracı koyar."),
        E(["\\n", "yeni satır"], ["\\t", "yatay sekme"], ["sep=", "öğe ayırıcısı"], ["end=", "satır sonu"]),
        K("fstring-bicim", [33, 40]),
      ],
    },
    {
      id: "temel-if", baslik: "Sabitler ve if yapısı", slayt: [41, 57],
      adimlar: [
        O("Sihirli sayılar ve isimli sabitler", [41, 44], `
          <p><b>Sihirli sayı (magic number):</b> kodda açıklaması olmadan geçen sayısal değer. <code>amount = balance * 0.069</code> — 0.069 faiz mi, ücret mi? Bunu sadece yazan bilir.</p>
          <p>Sorunları: amacını anlamak zordur; birçok yerde geçiyorsa değiştirmek zahmetlidir; her yazışta hata riski vardır (0.069 yerine .0069 yazmak gibi, bulması zor hatalar).</p>
          <p>Çözüm: <b>isimli sabit (named constant)</b> — program çalışırken <b>değişmeyen</b> bir değeri temsil eden isim: <code>INTEREST_RATE = 0.069</code>, sonra <code>amount = balance * INTEREST_RATE</code>.</p>
          <p>Avantajları: kod <b>kendini açıklar</b>, <b>bakımı kolaydır</b> (değer tek yerde değişir), <b>yazım hatalarını önler</b>.</p>`),
        O("if ifadesi", [45, 48], `
          <p><b>Kontrol yapısı:</b> ifadelerin hangi sırayla çalışacağını belirleyen mantıksal tasarım.</p>
          <ul><li><b>Sıra yapısı (sequence):</b> ifadeler yazıldıkları sırayla çalışır.</li>
          <li><b>Karar yapısı (decision / selection):</b> belirli eylemler <b>yalnızca bir koşul varsa</b> yapılır.</li></ul>
          <p>Akış şemasında <b>elmas</b> şekli doğru/yanlış koşulunu gösterir. "Dışarısı soğuk mu? → Evet: mont giy". Tek seçenekli karar yapısında koşul doğru değilse yapıdan çıkılır.</p>
          <p>Python sözdizimi: ilk satır <b>if cümlesidir</b>: <code>if</code> + koşul + <code>:</code>. Altındaki <b>girintili blok</b>, koşul <b>True</b> ise çalışır, değilse atlanır.</p>`,
          { kod: "sales = 60000\nbonus = 0\nif sales > 50000:\n    bonus = 500.0\nprint(bonus)" }),
        O("İlişkisel operatörler", [49, 54], `
          <p><b>Boolean ifade:</b> if tarafından test edilen, doğru veya yanlış olan ifade. <b>İlişkisel operatör</b> iki değer arasında belirli bir ilişki olup olmadığını belirler.</p>
          <table><tr><th>İfade</th><th>Anlamı</th></tr><tr><td><code>x &gt; y</code></td><td>x, y'den büyük mü?</td></tr><tr><td><code>x &lt; y</code></td><td>x, y'den küçük mü?</td></tr>
          <tr><td><code>x &gt;= y</code></td><td>büyük veya eşit mi?</td></tr><tr><td><code>x &lt;= y</code></td><td>küçük veya eşit mi?</td></tr><tr><td><code>x == y</code></td><td>eşit mi?</td></tr><tr><td><code>x != y</code></td><td>eşit değil mi?</td></tr></table>
          <ul><li><code>&gt;=</code> ve <code>&lt;=</code> iki ilişkiyi birden test eder; biri yeterlidir.</li>
          <li><code>==</code> eşitlik testidir, <b>atama operatörü <code>=</code> ile karıştırma</b>.</li>
          <li>Bir blok başka bir bloğun içinde olabilir; içteki blok dıştakine göre <b>girintili</b> yazılır.</li></ul>`,
          { kod: "print(5 == 5)\nprint(5 != 5)\nprint(4 <= 5)\nprint(4 <= 5 < 3 < 1)" }),
        O("if-else", [55, 57], `
          <p><b>Çift seçenekli karar yapısı</b>: iki olası yol vardır; koşul doğruysa biri, yanlışsa diğeri çalışır.</p>
          <p><code>if kosul:</code> blok · <code>else:</code> diğer blok. <code>if</code> ve <code>else</code> cümleleri <b>aynı hizada</b> olmalı, bloklar <b>tutarlı girintilenmeli</b>.</p>
          <p>Örnek: sıcaklık 40'ın altındaysa "A little cold, isn't it?", değilse "Nice weather we're having."</p>`,
          { kod: "temperature = 35\nif temperature < 40:\n    print(\"A little cold, isn't it?\")\nelse:\n    print(\"Nice weather we're having.\")" }),
        S("INTEREST_RATE = 0.069 gibi isimli sabit kullanmanın avantajı hangisi DEĞİLDİR?", ["Programı daha hızlı çalıştırır", "Kodu kendini açıklar hale getirir", "Değeri tek yerden değiştirmeyi sağlar", "Yazım hatalarını önler"], "Slayt 44: self-documenting, easier to maintain, prevents typographical errors."),
        C("print(5 != 5)", ["False", "True", "5", "Hata verir"], "5, 5'e eşit olduğu için 'eşit değil mi?' sorusunun cevabı False."),
        C("print(4 >= 5)", ["False", "True", "4", "5"], "4 ne büyük ne de eşit → False."),
        C("print(4 <= 5 < 3 < 1)", ["False", "True", "Hata verir", "4"], "Zincirleme karşılaştırma: 4 <= 5 doğru ama 5 < 3 yanlış → tümü False."),
        C("sales = 40000\nbonus = 0\nif sales > 50000:\n    bonus = 500.0\nprint(bonus)", ["0", "500.0", "40000", "Hata verir"], "Koşul yanlış olduğu için blok atlanır; bonus 0 kalır."),
        C("t = 45\nif t < 40:\n    print('soğuk')\nelse:\n    print('güzel')", ["güzel", "soğuk", "soğuk\ngüzel", "Hiçbir şey"], "t < 40 yanlış → else bloğu çalışır."),
        S("Eşitlik testi için hangi operatör kullanılır?", ["==", "=", "!=", "=>"], "== eşitliği test eder; = atamadır."),
        B("Koşul doğru değilse diğer bloğu çalıştır", "if puan >= 50:\n    print('Geçti')\n___:\n    print('Kaldı')", ["else"], ["else", "elif", "if", "then"], "Çift seçenekli yapı: if-else."),
        DY("Akış şemasında doğru/yanlış koşulu elmas şekliyle gösterilir.", true, "Slayt 46: diamond represents true/false condition."),
        E(["Sequence structure", "sırayla çalışır"], ["Decision structure", "koşula göre çalışır"], ["Magic number", "açıklamasız sayı"], ["Named constant", "değişmeyen isimli değer"]),
      ],
    },
    {
      id: "temel-mantik", baslik: "String karşılaştırma ve mantıksal operatörler", slayt: [58, 71],
      adimlar: [
        O("String'leri karşılaştırmak", [58, 59], `
          <ul><li>String'ler <code>==</code> ve <code>!=</code> ile karşılaştırılabilir. Karşılaştırma <b>büyük/küçük harfe duyarlıdır</b>.</li>
          <li><code>&gt;, &lt;, &gt;=, &lt;=</code> ile de karşılaştırılabilir: karakterler <b>tek tek, ASCII kodlarına göre</b> karşılaştırılır. "Mary" ile "Mark": ilk üç harf aynı, sonra 'y' (121) &gt; 'k' (107) → "Mary" &gt; "Mark".</li>
          <li>Kısa kelime uzun kelimenin başıysa, <b>uzun kelime daha büyüktür</b>.</li></ul>`,
          { kod: "print('Mary' > 'Mark')\nprint('a' == 'A')\nprint('Ali' < 'Alice')" }),
        O("and, or, not", [60, 64], `
          <p><b>Mantıksal operatörler</b> karmaşık Boolean ifadeler kurar. <code>and</code> ve <code>or</code> iki ifadeyi bağlar (ikili), <code>not</code> tek ifadeyi ters çevirir (tekli).</p>
          <table><tr><th>İfade</th><th>and</th><th>or</th></tr><tr><td>False · False</td><td>False</td><td>False</td></tr><tr><td>False · True</td><td>False</td><td>True</td></tr><tr><td>True · False</td><td>False</td><td>True</td></tr><tr><td>True · True</td><td>True</td><td>True</td></tr></table>
          <ul><li><code>and</code>: <b>ikisi de</b> doğruysa True.</li><li><code>or</code>: <b>herhangi biri</b> doğruysa True.</li><li>İkisi de iç içe karar yapılarını sadeleştirmek için kullanılabilir.</li></ul>`,
          { kod: "un = 'arda'\npwd = '12345'\nprint(un == 'arda' and pwd == '12345')\nhour = 14\ntemp = 28\nprint(hour < 15 or temp >= 28)" }),
        O("Kısa devre değerlendirme ve not", [65, 68], `
          <p><b>Kısa devre (short-circuit):</b> bileşik ifadenin değerine tek bir alt ifadeye bakarak karar vermek.</p>
          <ul><li><code>or</code>: sol taraf True ise sonuç True; sağ taraf <b>hiç değerlendirilmez</b>.</li>
          <li><code>and</code>: sol taraf False ise sonuç False; sağ taraf değerlendirilmez.</li></ul>
          <p><code>not</code> tek bir ifadenin değerini <b>ters çevirir</b>; neye uygulandığını netleştirmek için parantez gerekebilir: <code>not(hour &lt;= 14)</code>.</p>
          <p><b>Boolean değişken:</b> <code>True</code> veya <code>False</code> değerini tutar (<b>bool</b> tipi). Genellikle <b>bayrak (flag)</b> olarak kullanılır: bir koşulun varlığını işaretler (False → yok, True → var).</p>`,
          { kod: "a, b = True, False\nprint(not a, not b)\nhour = 14\nprint(not(hour <= 14))" }),
        O("Aralık kontrolü, in ve not in", [69, 71], `
          <ul><li>Bir değerin aralık <b>içinde</b> olup olmadığı <code>and</code> ile: <code>x &gt;= 10 and x &lt;= 20</code></li>
          <li>Aralık <b>dışında</b> olup olmadığı <code>or</code> ile: <code>x &lt; 10 or x &gt; 20</code></li>
          <li><code>in</code> operatörü bir değerin bir dizinin (ör. string) <b>öğesi olup olmadığını</b> belirler: <code>"s" in "sebastian"</code> → True</li>
          <li><code>not in</code> bulamazsa True, bulursa False verir.</li></ul>`,
          { kod: "print('s' in 'sebastian')\nprint('sss' in 'sebastian')\nprint('123' in 'Password: Trial1234')\nprint('123' not in 'Password:12345')" }),
        C("print('Mary' > 'Mark')", ["True", "False", "Mary", "Hata verir"], "İlk farklı karakter: 'y' (121) > 'k' (107)."),
        C("print('a' == 'A')", ["False", "True", "a", "Hata verir"], "String karşılaştırması büyük/küçük harfe duyarlıdır."),
        C("hour = 14\ntemp = 28\nprint(hour < 15 or temp >= 28)", ["True", "False", "14", "Hata verir"], "or: herhangi biri doğruysa True; 14 < 15 zaten doğru."),
        C("a, b = True, False\nprint(not a, not b)", ["False True", "True False", "False False", "True True"], "not değeri ters çevirir."),
        C("print('sss' in 'sebastian')", ["False", "True", "sss", "Hata verir"], "'sebastian' içinde art arda üç s yok."),
        C("print('123' not in 'Password:12345')", ["False", "True", "123", "Hata verir"], "'123' metinde var; not in False döner."),
        S("x'in 10 ile 20 arasında (dahil) olduğunu hangi ifade kontrol eder?", ["x >= 10 and x <= 20", "x >= 10 or x <= 20", "x < 10 or x > 20", "not x in 10"], "Aralık içi kontrolü and ile yapılır."),
        S("and operatöründe sol taraf False ise ne olur?", ["Sonuç False olur, sağ taraf değerlendirilmez", "Sağ taraf da değerlendirilir", "Hata oluşur", "Sonuç True olur"], "Kısa devre değerlendirme."),
        DY("'Ali' < 'Alice' ifadesi True'dur.", true, "Kısa kelime uzun kelimenin başıysa uzun kelime daha büyüktür."),
        DY("Bayrak (flag) değişkeni True ise ilgili koşulun var olmadığını gösterir.", false, "Flag True → koşul var; False → yok."),
        E(["and", "ikisi de doğruysa True"], ["or", "biri doğruysa True"], ["not", "değeri ters çevirir"], ["in", "öğe var mı?"]),
      ],
    },
  ],
});
