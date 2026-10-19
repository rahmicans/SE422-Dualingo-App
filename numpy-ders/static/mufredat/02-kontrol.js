// Bölüm 2 — week3_partI_Control.md: Karar ve tekrar yapıları (56 slayt)
UNITELER.push({
  id: "u-kontrol", renk: "yesil", baslik: "Karar ve Döngü Yapıları", kaynak: "week3_partI_Control", slaytSayisi: 56,
  altBaslik: "Week 3 · if-elif-else, while, for, döngü kontrolü",
  dersler: [
    {
      id: "kontrol-elif", baslik: "İç içe kararlar ve if-elif-else", slayt: [1, 15],
      adimlar: [
        O("Bölümün konuları ve hatırlatma", [1, 3], `
          <p>Bu bölümün ilk yarısı <b>karar yapıları</b> (if, if-else, string karşılaştırma, iç içe kararlar, if-elif-else, mantıksal operatörler, Boolean değişkenler), ikinci yarısı <b>tekrar yapıları</b>dır (while, for, toplam hesaplama, sentinel, girdi doğrulama, iç içe döngüler).</p>
          <p>Hatırlatma örneği: çalışılan saat ve saatlik ücrete göre <b>brüt maaş</b> hesaplayan program; 40 saati aşan saatler için fazla mesai ödenir. Bu bir <b>if-else</b> kararıdır.</p>`,
          { kod: "hours = 45\npay_rate = 20\nif hours > 40:\n    gross = 40 * pay_rate + (hours - 40) * pay_rate * 1.5\nelse:\n    gross = hours * pay_rate\nprint(gross)" }),
        O("İç içe karar yapıları", [4, 9], `
          <p>Bir karar yapısı <b>başka bir karar yapısının içine</b> yerleştirilebilir; programlarda sık gerekir.</p>
          <p>Örnek: Kredi alabilmek için iki koşul var: yılda <b>en az 30.000$</b> kazanmak ve <b>en az iki yıldır</b> çalışıyor olmak. Önce ilk koşul kontrol edilir, doğruysa ikinci koşul kontrol edilir.</p>
          <p>İç içe yapılarda <b>doğru girinti</b> hem yorumlayıcı hem okunabilirlik için önemlidir:</p>
          <ul><li><code>else</code> cümlesi <b>eşleştiği if</b> ile aynı hizada olmalı.</li><li>Her bloktaki ifadeler tutarlı girintilenmeli.</li></ul>
          <p>Slayt 7–9'daki örneklerde fark yaratan şey tam olarak budur: else'in hangi if'e ait olduğu girintiyle belirlenir.</p>`,
          { kod: "salary = 35000\nyears_on_job = 1\nif salary >= 30000:\n    if years_on_job >= 2:\n        print('You qualify for the loan.')\n    else:\n        print('You must have been employed for at least 2 years.')\nelse:\n    print('You must earn at least $30,000 per year.')" }),
        O("if-elif-else", [10, 13], `
          <p><b>if-elif-else</b>, iç içe karar yapılarının mantığını daha kolay yazmayı sağlayan özel bir karar yapısıdır; <b>istediğin kadar elif</b> eklenebilir.</p>
          <p>Koşullar <b>yukarıdan aşağı</b> denenir; <b>ilk doğru olan</b> bloğu çalışır, gerisi atlanır. Hiçbiri doğru değilse <code>else</code> çalışır.</p>
          <ul><li><code>if</code>, <code>elif</code> ve <code>else</code> aynı hizada; bloklar tutarlı girintili.</li>
          <li>if-elif-else hiçbir zaman <b>zorunlu değildir</b> (iç içe if-else ile de yapılır), ama mantığı izlemek kolaydır; iç içe yapıda girinti derinleşir ve satırlar uzar.</li></ul>`),
        O("Örnekler", [14, 15], `
          <p>Slayt 14: suyun sıcaklığına göre durumunu yazan program. Slayt 15: iç içe if + elif ile maaş skalası kontrolü. Değişkenlerin değerlerini değiştirip kodu test et.</p>`,
          { kod: "temp = 36\nif temp > 99:\n    print('water is at boiling temperature')\nelif temp >= 1 and temp <= 99:\n    print('water temperature is at normal level')\nelse:\n    print('water is at freezing temperature')" }),
        C("temp = 36\nif temp > 99:\n    print('boiling')\nelif temp >= 1 and temp <= 99:\n    print('normal')\nelse:\n    print('freezing')", ["normal", "boiling", "freezing", "normal\nfreezing"], "36 > 99 yanlış, 1 ≤ 36 ≤ 99 doğru → ilk doğru koşulun bloğu çalışır."),
        C("temp = 0\nif temp > 99:\n    print('boiling')\nelif temp >= 1 and temp <= 99:\n    print('normal')\nelse:\n    print('freezing')", ["freezing", "normal", "boiling", "Hiçbir şey"], "Hiçbir koşul doğru değil → else."),
        C("x = 15\nif x > 10:\n    print('A')\nelif x > 5:\n    print('B')\nelse:\n    print('C')", ["A", "B", "A\nB", "C"], "Yalnızca ilk doğru koşulun bloğu çalışır; elif'e bakılmaz bile."),
        C("salary = 35000\nyears = 1\nif salary >= 30000:\n    if years >= 2:\n        print('qualify')\n    else:\n        print('need 2 years')\nelse:\n    print('need 30000')", ["need 2 years", "qualify", "need 30000", "need 2 years\nneed 30000"], "Dış koşul doğru, iç koşul yanlış → içteki else."),
        S("if-elif-else yapısı hakkında hangisi doğrudur?", ["Hiçbir zaman zorunlu değildir; iç içe if-else ile de yazılabilir", "En fazla bir elif içerebilir", "else mutlaka yazılmalıdır", "Tüm doğru koşulların blokları çalışır"], "Slayt 11: never required, but logic easier to follow."),
        DY("İç içe karar yapılarında else, eşleştiği if ile aynı hizada yazılmalıdır.", true, "Slayt 6: else clause should align with matching if clause."),
        B("İkinci koşulu ekle", "if puan >= 90:\n    harf = 'A'\n___ puan >= 80:\n    harf = 'B'\nelse:\n    harf = 'C'", ["elif"], ["elif", "else", "if", "and"], "Ek koşullar elif ile yazılır."),
        K("harf-notu", [10, 15]),
      ],
    },
    {
      id: "kontrol-while", baslik: "while döngüsü", slayt: [16, 21],
      adimlar: [
        O("Tekrar yapıları", [16, 16], `
          <p>Çoğu zaman aynı işi defalarca yapan kod yazmak gerekir. Kodu kopyalamanın dezavantajları: program <b>büyür</b>, <b>zaman alır</b>, bir düzeltme <b>birçok yerde</b> yapılmak zorunda kalır.</p>
          <p><b>Tekrar yapısı (repetition structure)</b> bilgisayara kodu gerektiği kadar tekrarlatır. İki türü vardır: <b>koşul kontrollü</b> ve <b>sayı kontrollü</b> döngüler.</p>`),
        O("while: koşul kontrollü döngü", [17, 20], `
          <p><code>while</code>: <b>koşul doğru olduğu sürece</b> bir şey yap. İki parçası vardır: True/False test edilen <b>koşul</b> ve koşul doğru oldukça <b>tekrarlanan ifadeler</b>.</p>
          <ul><li>Döngünün durması için <b>döngü içinde</b> koşulu yanlış yapacak bir şey olmalıdır.</li>
          <li><b>Iteration:</b> döngü gövdesinin bir kez çalışması.</li>
          <li>while bir <b>ön testli (pretest)</b> döngüdür: koşulu iterasyondan <b>önce</b> test eder. Koşul baştan yanlışsa gövde <b>hiç çalışmaz</b>; bu yüzden döngüden önce bazı hazırlık adımları gerekir.</li></ul>`,
          { kod: "i = 0\nwhile i < 5:\n    print(i)\n    i += 1" }),
        O("Sonsuz döngüler", [21, 21], `
          <p>Döngüler kendi içlerinde <b>sonlanma yolu</b> içermelidir: while içinde bir şey koşulu eninde sonunda yanlış yapmalı.</p>
          <p><b>Sonsuz döngü:</b> durma yolu olmayan döngü; program kesilene kadar tekrar eder. Genellikle programcı durdurma kodunu (ör. <code>i += 1</code>) <b>unuttuğunda</b> oluşur.</p>
          <p class="not">Terminalde sonsuz döngü çalıştırırsan 10 saniye sonra oturum otomatik yeniden başlatılır.</p>`),
        C("i = 0\nwhile i < 3:\n    print(i)\n    i += 1", ["0\n1\n2", "0\n1\n2\n3", "1\n2\n3", "3"], "i 0, 1, 2 iken koşul doğru; i 3 olunca durur."),
        Y("i = 10\nsayac = 0\nwhile i > 0:\n    i -= 3\n    sayac += 1\nprint(sayac)", "4", "i: 10 → 7 → 4 → 1 → -2; dört iterasyon."),
        C("n = 5\nwhile n < 3:\n    print('içeride')\nprint('bitti')", ["bitti", "içeride\nbitti", "içeride", "Sonsuz döngü"], "while ön testlidir; koşul baştan yanlışsa gövde hiç çalışmaz."),
        S("Aşağıdaki kodun sorunu nedir?\n\ni = 0\nwhile i < 5:\n    print(i)", ["i hiç artmadığı için sonsuz döngüdür", "Hiçbir şey yazdırmaz", "Söz dizimi hatası vardır", "Sadece 0..4 yazar"], "Koşulu yanlış yapacak bir şey yok → sonsuz döngü."),
        DY("while döngüsü koşulu iterasyondan önce test eden (pretest) bir döngüdür.", true, "Slayt 18: while loop is known as a pretest loop."),
        B("Döngünün durmasını sağla", "i = 0\nwhile i < 5:\n    print(i)\n    i ___ 1", ["+="], ["+=", "==", "=", "<"], "i += 1 her iterasyonda i'yi artırır; sonunda koşul yanlış olur."),
        E(["Iteration", "gövdenin bir kez çalışması"], ["Pretest loop", "koşul önce test edilir"], ["Infinite loop", "durma yolu yok"]),
      ],
    },
    {
      id: "kontrol-for", baslik: "for döngüsü ve range", slayt: [22, 35],
      adimlar: [
        O("for: sayı kontrollü döngü", [22, 27], `
          <p><b>Sayı kontrollü döngü</b> belirli sayıda tekrar eder; Python'da <code>for</code> ile yazılır.</p>
          <ul><li>Veri öğelerinden oluşan bir <b>dizi (sequence)</b> ile çalışır; dizideki <b>her öğe için bir kez</b> döner. Liste, tuple, string veya başka yinelenebilir nesneler üzerinde dolaşabilir.</li>
          <li>Format: <code>for degisken in [d1, d2, ...]:</code></li>
          <li><b>Hedef değişken (target variable):</b> her iterasyonun başında sıradaki öğenin atandığı değişken. İlk öğeden son öğeye doğru ilerler; döngü son öğeye kadar devam eder.</li></ul>`,
          { kod: "spell = 'Star Wars'\nfor s in spell:\n    print(s)" }),
        O("range fonksiyonu", [28, 32], `
          <p><code>range</code> for döngüsünü kolaylaştırır; <b>yinelenebilir (iterable)</b> bir nesne döndürür.</p>
          <ul><li><code>range(stop)</code>: 0'dan başlar, 1'er artar, <b>stop dahil değil</b>.</li>
          <li><code>range(start, stop)</code>: start dahil, stop hariç.</li>
          <li><code>range(start, stop, step)</code>: üçüncü argüman <b>adım</b> değeridir.</li></ul>
          <p>Hedef değişken döngü gövdesinde hesaplarda kullanılabilir; örn. bir aralıktaki sayıların karelerini yazdırmak.</p>`,
          { kod: "for n in range(1, 6):\n    print(n, n ** 2)\nprint(list(range(0, 10, 3)))" }),
        O("Geriye doğru sayma ve kullanıcı kontrolü", [33, 35], `
          <p>range azalan dizi de üretebilir: başlangıç bitişten <b>büyük</b>, adım <b>negatif</b> olmalı: <code>range(10, 0, -1)</code>.</p>
          <p>Programcı döngünün kaç kez döneceğini bilmeyebilir: aralık değerleri kullanıcıdan alınıp değişkenlere konabilir ve <code>range</code> bu değişkenlerle çağrılabilir. <b>Uç durumlara dikkat:</b> range bitiş değerini <b>dahil etmez</b>.</p>`,
          { kod: "for number in range(19, 11, -1):\n    print(number)" }),
        C("for s in 'abc':\n    print(s)", ["a\nb\nc", "abc", "['a', 'b', 'c']", "a b c"], "for string'in her karakteri için bir kez döner."),
        C("print(list(range(5)))", ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "[5]"], "range(stop) 0'dan başlar, stop dahil değildir."),
        C("print(list(range(2, 11, 3)))", ["[2, 5, 8]", "[2, 5, 8, 11]", "[3, 6, 9]", "[2, 3, 4]"], "2'den başla, 3'er artır, 11'e ulaşmadan dur."),
        C("print(list(range(19, 11, -1)))", ["[19, 18, 17, 16, 15, 14, 13, 12]", "[19, 18, 17, 16, 15, 14, 13, 12, 11]", "[]", "[11, 12, 13, 14, 15, 16, 17, 18, 19]"], "Negatif adımla azalan dizi; 11 dahil değil."),
        Y("for n in range(3):\n    print(n * 10, end=' ')", "0 10 20", "n: 0, 1, 2 → 0 10 20 (end=' ' ile aynı satırda)."),
        S("1'den 10'a kadar (10 dahil) sayılar için hangisi?", ["range(1, 11)", "range(1, 10)", "range(10)", "range(0, 10, 1)"], "Bitiş dahil olmadığı için 11 yazılır."),
        DY("for döngüsü yalnızca listeler üzerinde dolaşabilir, string'ler üzerinde dolaşamaz.", false, "for liste, tuple, string ve diğer yinelenebilir nesneler üzerinde dolaşabilir."),
        B("10'dan 1'e geri say", "for i in range(10, 0, ___):\n    print(i)", ["-1"], ["-1", "1", "0", "10"], "Azalan dizi için adım negatif olmalı."),
      ],
    },
    {
      id: "kontrol-toplam", baslik: "Toplam, sentinel ve doğrulama", slayt: [36, 41],
      adimlar: [
        O("Birikimli toplam (running total)", [36, 36], `
          <p>Programlar sık sık bir sayı serisinin toplamını hesaplar. İki öğe gerekir:</p>
          <ul><li>Serideki her sayıyı okuyan bir <b>döngü</b></li><li>Toplamı biriktiren bir <b>biriktirici (accumulator) değişken</b> (genellikle 0 ile başlar)</li></ul>
          <p>Döngü bitince biriktirici toplamı tutar.</p>`,
          { kod: "total = 0\nfor n in [5, 10, 15]:\n    total += n\nprint(total)" }),
        O("Artırılmış atama operatörleri", [37, 38], `
          <p>Çoğu atamada sol taraftaki değişken sağda da görünür (<code>x = x + 5</code>). Bunun için <b>kısaltma operatörleri</b> vardır:</p>
          <table><tr><th>Operatör</th><th>Örnek</th><th>Eşdeğeri</th></tr><tr><td><code>+=</code></td><td>x += 5</td><td>x = x + 5</td></tr><tr><td><code>-=</code></td><td>y -= 2</td><td>y = y - 2</td></tr><tr><td><code>*=</code></td><td>z *= 10</td><td>z = z * 10</td></tr><tr><td><code>/=</code></td><td>a /= b</td><td>a = a / b</td></tr><tr><td><code>%=</code></td><td>c %= 3</td><td>c = c % 3</td></tr><tr><td><code>//=</code></td><td>x //= 3</td><td>x = x // 3</td></tr><tr><td><code>**=</code></td><td>y **= 2</td><td>y = y ** 2</td></tr></table>`),
        O("Sentinel ve girdi doğrulama", [39, 41], `
          <p><b>Sentinel (nöbetçi):</b> bir öğe dizisinin <b>sonunu işaretleyen özel değer</b>. Program sentinel'e ulaşınca dizinin bittiğini anlar ve döngü sonlanır. Normal bir değerle <b>karıştırılmayacak kadar ayırt edici</b> olmalıdır; örn. dosya okurken boş satır.</p>
          <p>Bilgisayar iyi veriyle kötü veriyi ayırt edemez: <b>GIGO — garbage in, garbage out</b> (çöp girerse çöp çıkar). Program kötü girdiyi asla kabul etmeyecek şekilde tasarlanmalıdır.</p>
          <p><b>Girdi doğrulama:</b> girdiyi işlemeden önce incelemek. Genellikle girdi kötü olduğu sürece dönen bir <b>while döngüsüyle</b> yapılır: kötüyse hata mesajı göster ve yeniden iste; iyiyse işlemeye devam et.</p>`),
        Y("total = 0\nfor n in [5, 10, 15]:\n    total += n\nprint(total)", "30", "Biriktirici her iterasyonda sayıyı ekler: 5 + 10 + 15."),
        Y("x = 7\nx *= 3\nx -= 1\nprint(x)", "20", "7 × 3 = 21, 21 − 1 = 20."),
        Y("c = 17\nc %= 5\nprint(c)", "2", "c = c % 5 = 2."),
        C("sayilar = [4, 8, -1, 6]\ntoplam = 0\nfor n in sayilar:\n    if n == -1:\n        break\n    toplam += n\nprint(toplam)", ["12", "17", "18", "-1"], "-1 sentinel'dir; görülünce döngü biter: 4 + 8."),
        S("GIGO ne anlama gelir?", ["Garbage in, garbage out: kötü girdi kötü çıktı üretir", "Good input, good output", "Bir döngü türü", "Bir hata türü"], "Slayt 40: garbage in, garbage out."),
        S("İyi bir sentinel değer nasıl olmalıdır?", ["Normal bir veri değeriyle karıştırılmayacak kadar ayırt edici", "Her zaman 0", "Dizideki en büyük değer", "Rastgele bir sayı"], "Slayt 39: distinctive enough so as not to be mistaken for a regular value."),
        DY("Girdi doğrulama genellikle girdi geçersiz olduğu sürece tekrar eden bir while döngüsüyle yapılır.", true, "Slayt 41."),
        E(["+=", "x = x + ..."], ["//=", "x = x // ..."], ["**=", "x = x ** ..."], ["Accumulator", "toplamı tutan değişken"]),
        K("dongu-toplam", [36, 38]),
      ],
    },
    {
      id: "kontrol-break", baslik: "break, continue, pass ve iç içe döngüler", slayt: [42, 56],
      adimlar: [
        O("Döngü kontrol ifadeleri", [42, 46], `
          <p>Bazen döngüden tamamen çıkmak, bir iterasyonu atlamak veya bir koşulu yok saymak gerekir. Python'un kontrol ifadeleri: <b>break</b>, <b>continue</b>, <b>pass</b>, <b>return</b>.</p>
          <p><code>break</code> içinde bulunduğu döngüyü <b>sonlandırır</b>; program döngüden sonraki ilk satırdan devam eder.</p>
          <p>Örnek: <code>while True</code> ile sürekli sayı al, 0 veya negatif gelince break ile çık. Ya da "gamer" kelimesinde 'm' harfine gelince dur.</p>`,
          { kod: "word = 'gamer'\nfor w in word:\n    if w == 'm':\n        break\n    print(w)\nprint('The loop has ended.')" }),
        O("continue ve pass", [47, 50], `
          <p><code>continue</code> break'in tersidir: döngüyü bitirmek yerine <b>sıradaki iterasyona geçmeye</b> zorlar. continue'dan sonra gelen gövde kodu o iterasyon için <b>atlanır</b>.</p>
          <p><code>pass</code> <b>hiçbir şey yapmaz</b>. Söz dizimi gereği bir ifade gerekip hiçbir kod çalışmasını istemediğinde kullanılır.</p>`,
          { kod: "for i in range(15):\n    if not i % 2 == 0:\n        continue\n    print(i, end=' ')" }),
        O("İç içe döngüler", [51, 56], `
          <p><b>İç içe döngü:</b> başka bir döngünün içindeki döngü. Analog saat gibi: akrep her hareket ettiğinde yelkovan 12 kez, yelkovanın her hareketinde saniye kolu 60 kez hareket eder.</p>
          <ul><li>İç döngü, dış döngünün <b>her iterasyonu için tüm iterasyonlarını</b> tamamlar.</li>
          <li>İç döngüler dış döngülerden daha hızlı tamamlanır.</li>
          <li><b>Toplam iterasyon = iç döngü iterasyonu × dış döngü iterasyonu</b>. 60 × 60 = 3600; saat-dakika-saniye için 24 × 60 × 60 = 86400.</li></ul>`,
          { kod: "for i in range(2):\n    for j in range(3):\n        print(i, ':', j)" }),
        C("for w in 'gamer':\n    if w == 'm':\n        break\n    print(w)", ["g\na", "g\na\nm", "g\na\ne\nr", "m"], "'m' görülünce döngü biter; m yazdırılmaz."),
        C("for i in range(6):\n    if i % 2 != 0:\n        continue\n    print(i, end=' ')", ["0 2 4", "1 3 5", "0 1 2 3 4 5", "0"], "Tek sayılarda continue ile print atlanır."),
        Y("sayac = 0\nfor m in range(60):\n    for s in range(60):\n        sayac += 1\nprint(sayac)", "3600", "Toplam iterasyon = 60 × 60."),
        S("for hours in range(24) içinde for minutes in range(60) ve onun içinde for seconds in range(60) varsa en içteki print kaç kez çalışır?", ["86400", "144", "3600", "1440"], "24 × 60 × 60 = 86400."),
        S("continue ifadesi ne yapar?", ["O iterasyonun kalanını atlayıp sıradaki iterasyona geçer", "Döngüyü tamamen bitirir", "Hiçbir şey yapmaz", "Programı durdurur"], "Slayt 47."),
        DY("pass ifadesi döngüyü sonlandırır.", false, "pass hiçbir şey yapmaz; söz dizimi gereği ifade gereken yerlerde kullanılır."),
        E(["break", "döngüyü bitirir"], ["continue", "sıradaki iterasyona geçer"], ["pass", "hiçbir şey yapmaz"]),
      ],
    },
  ],
});
