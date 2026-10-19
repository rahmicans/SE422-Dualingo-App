// Bölüm 6 — week4_MoreStrings.md: String'ler hakkında daha fazlası (27 slayt)
UNITELER.push({
  id: "u-str", renk: "turkuaz", baslik: "String'ler", kaynak: "week4_MoreStrings", slaytSayisi: 27,
  altBaslik: "Week 4 · Karakterler, dilimleme, string metotları, split",
  dersler: [
    {
      id: "str-temel", baslik: "Karakterler, birleştirme, değişmezlik", slayt: [1, 10],
      adimlar: [
        O("Temel string işlemleri", [1, 3], `
          <p>Pek çok program string'ler üzerinde işlem yapar ve Python string incelemek/değiştirmek için birçok araç sunar. String'ler <b>dizidir (sequence)</b>; bu yüzden dizilerle çalışan araçların çoğu string'lerle de çalışır.</p>
          <p>Bölümün konuları: temel işlemler, string dilimleme, string'leri test etme, arama ve değiştirme.</p>`),
        O("Tek tek karakterlere erişmek", [4, 7], `
          <p>Bir string'deki karakterlere iki yolla erişilir:</p>
          <ul><li><b>for döngüsü:</b> <code>for karakter in string:</code> — tüm string üzerinde dolaşmak gerektiğinde (ör. bir harfin kaç kez geçtiğini saymak) kullanışlıdır.</li>
          <li><b>İndeksleme:</b> her karakterin konumunu belirten bir indeksi vardır, <b>0'dan</b> başlar: <code>karakter = my_string[i]</code>. 'Roses are red' içinde indeks 6 → 'a'.</li></ul>
          <p>Aralık dışı indeks <b>IndexError</b> verir; döngü string'in sonunu geçerse olur. <code>len(string)</code> uzunluğu verir ve bunu önlemek için kullanılır.</p>`,
          { kod: "name = 'Juliet'\nfor ch in name:\n    print(ch, end=' ')\nprint()\nmy_string = 'Roses are red'\nprint(my_string[6], len(my_string))" }),
        O("Birleştirme ve değişmezlik", [8, 10], `
          <p><b>Birleştirme:</b> <code>+</code> operatörü iki string'i birleştirir; <code>+=</code> de kullanılabilir (soldaki operand <b>var olan bir değişken</b> olmalı, yoksa istisna).</p>
          <p>String'ler <b>değiştirilemez (immutable)</b>: oluşturulduktan sonra değişmezler.</p>
          <ul><li>Birleştirme var olan string'i değiştirmez; <b>yeni bir string oluşturup</b> değişkene atar. <code>name = 'Carmen'</code> sonra <code>name = name + ' Brown'</code> → name artık yeni 'Carmen Brown' string'ini gösterir.</li>
          <li><code>string[index] = yeni_karakter</code> biçimindeki ifade <b>istisna fırlatır</b>.</li></ul>`,
          { kod: "name = 'Carmen'\nname = name + ' Brown'\nprint(name)\nletters = 'abc'\nletters += 'def'\nprint(letters)" }),
        Y("my_string = 'Roses are red'\nprint(my_string[6])", "a", "İndeks 0'dan başlar: R-o-s-e-s-boşluk → 6. karakter 'a'."),
        Y("print(len('Juliet'))", "6", "6 karakter."),
        Y("sayac = 0\nfor ch in 'banana':\n    if ch == 'a':\n        sayac += 1\nprint(sayac)", "3", "for ile her karakter dolaşılır ve 'a'lar sayılır."),
        C("s = 'abc'\ns[0] = 'X'\nprint(s)", ["Hata verir", "Xbc", "abc", "X"], "String'ler değiştirilemez; atama TypeError fırlatır."),
        C("name = 'Carmen'\nname += ' Brown'\nprint(name)", ["Carmen Brown", "CarmenBrown", "Carmen", "Hata verir"], "+= yeni bir string oluşturup name'e atar."),
        DY("Birleştirme işlemi var olan string'i yerinde değiştirir.", false, "Yeni bir string oluşturulup değişkene atanır."),
        E(["for ch in s", "karakterler üzerinde dolaşır"], ["s[i]", "indeksle karakter"], ["len(s)", "uzunluk"], ["Immutable", "değiştirilemez"]),
      ],
    },
    {
      id: "str-metot", baslik: "Dilimleme ve string metotları", slayt: [11, 19],
      adimlar: [
        O("String dilimleme ve in", [11, 12], `
          <p><b>Dilim:</b> diziden alınan aralık; string için <b>alt string (substring)</b>. Format: <code>string[start : end]</code> → start'tan end'e (dahil değil) karakterlerin kopyası.</p>
          <ul><li>start yoksa 0, end yoksa <code>len(string)</code> kullanılır.</li><li>Adım ve negatif indeks kullanılabilir.</li></ul>
          <p><code>string1 in string2</code>: string1, string2'nin içinde geçiyor mu? <code>not in</code> tersini test eder.</p>`,
          { kod: "full_name = 'Patty Lynn Smith'\nprint(full_name[0:5])\nprint(full_name[6:])\nprint(full_name[-5:])\nprint('Lynn' in full_name)" }),
        O("Test metotları", [13, 14], `
          <p>Genel format: <code>mystring.metot(argumanlar)</code>. Bazı metotlar string'in bir özelliğini test eder ve <b>True/False</b> döndürür:</p>
          <table><tr><th>Metot</th><th>True döner, eğer string...</th></tr>
          <tr><td><code>isalnum()</code></td><td>yalnızca harf veya rakam içeriyorsa (en az 1 karakter)</td></tr>
          <tr><td><code>isalpha()</code></td><td>yalnızca harf içeriyorsa</td></tr><tr><td><code>isdigit()</code></td><td>yalnızca rakam içeriyorsa</td></tr>
          <tr><td><code>islower()</code> / <code>isupper()</code></td><td>tüm harfleri küçük / büyükse (en az bir harf olmalı)</td></tr>
          <tr><td><code>isspace()</code></td><td>yalnızca boşluk karakterleri (boşluk, \\n, \\t) içeriyorsa</td></tr></table>`,
          { kod: "print('abc123'.isalnum())\nprint('2024'.isdigit())\nprint('Ali'.isupper())\nprint('   '.isspace())" }),
        O("Değiştirme metotları", [15, 16], `
          <p>Bazı metotlar <b>değiştirilmiş bir kopya</b> döndürür (string'i değiştirilebilir gibi gösterir ama aslında yeni string üretir):</p>
          <ul><li><code>lower()</code> / <code>upper()</code> → tüm harfleri küçük / büyük harfe çevirir</li>
          <li><code>lstrip()</code>, <code>rstrip()</code>, <code>strip()</code> → baştaki / sondaki / her iki uçtaki boşluk karakterlerini siler</li>
          <li><code>lstrip(char)</code>, <code>rstrip(char)</code>, <code>strip(char)</code> → belirtilen karakteri uçlardan siler</li></ul>
          <p>Karşılaştırmalar büyük/küçük harfe duyarlıdır; <b>lower/upper</b> ile harf duyarsız karşılaştırma yapılır.</p>`,
          { kod: "cevap = '  Evet  '\nprint(cevap.strip().lower() == 'evet')\nprint('$$100$$'.strip('$'))\nprint('python'.upper())" }),
        O("Arama ve değiştirme", [17, 19], `
          <ul><li><code>endswith(alt)</code> → string alt string ile bitiyorsa True</li>
          <li><code>startswith(alt)</code> → alt string ile başlıyorsa True</li>
          <li><code>find(alt)</code> → alt string'in geçtiği <b>en küçük indeksi</b> döndürür; bulamazsa <b>-1</b></li>
          <li><code>replace(eski, yeni)</code> → eski'nin <b>her geçtiği yer</b> yeni ile değiştirilmiş kopya</li></ul>`,
          { kod: "filename = 'rapor.txt'\nprint(filename.endswith('.txt'))\nstring = 'Four score and seven years ago'\nprint(string.find('seven'))\nprint(string.find('ten'))\nprint(string.replace('years', 'days'))" }),
        C("full_name = 'Patty Lynn Smith'\nprint(full_name[6:10])", ["Lynn", "Lynn ", "Patty", "Smith"], "İndeks 6'dan 10'a (dahil değil)."),
        Y("print('Python'[-3:])", "hon", "Son üç karakter."),
        C("print('2024'.isdigit())", ["True", "False", "2024", "Hata verir"], "Yalnızca rakam içerir."),
        C("print('Ali'.isupper())", ["False", "True", "ALI", "Hata verir"], "Tüm harfler büyük değil."),
        Y("print('  Evet  '.strip().lower())", "evet", "strip uçtaki boşlukları siler, lower küçük harfe çevirir."),
        Y("s = 'Four score and seven years ago'\nprint(s.find('seven'))", "15", "'seven' indeks 15'te başlar."),
        Y("print('banana'.find('x'))", "-1", "Bulunamazsa find -1 döndürür."),
        C("print('a-b-c'.replace('-', '+'))", ["a+b+c", "a+b-c", "a-b-c", "abc"], "replace her geçtiği yeri değiştirir."),
        DY("upper() metodu string'in kendisini değiştirir.", false, "Değiştirilmiş bir kopya döndürür; string'ler değiştirilemez."),
        E(["find", "indeks veya -1"], ["replace", "değiştirilmiş kopya"], ["strip", "uçlardaki boşlukları siler"], ["isdigit", "yalnızca rakam mı?"]),
      ],
    },
    {
      id: "str-split", baslik: "Tekrar, split ve token", slayt: [20, 27],
      adimlar: [
        O("Tekrar operatörü", [20, 20], `
          <p><code>*</code> bir string ve tam sayıyla kullanılınca <b>tekrar operatörü</b>dür: string'in kopyalarını birleştirir. String sol, sayı sağ operanddır: <code>string * n</code>. Değişken, orijinalin kopyalarını içeren <b>yeni bir string</b>i referans eder.</p>`,
          { kod: "print('Ha' * 3)\nprint('-' * 20)" }),
        O("split metodu", [21, 22], `
          <p><code>split()</code> string'deki kelimeleri içeren bir <b>liste</b> döndürür. Varsayılan ayırıcı <b>boşluktur</b>; argüman olarak farklı bir ayırıcı verilebilir.</p>`,
          { kod: "my_string = 'One two three four'\nprint(my_string.split())\ndate_string = '1/2/3/4/5'\nprint(date_string.split('/'))" }),
        O("Token'lar", [23, 27], `
          <p>Bazen bir string özel bir karakterle ayrılmış alt string'ler içerir. Bu alt string'lere <b>token</b>, ayıran karaktere <b>sınırlayıcı (delimiter)</b> denir.</p>
          <ul><li><code>'peach raspberry strawberry vanilla'</code> → token'lar 4 meyve, sınırlayıcı boşluk</li>
          <li><code>'17;92;81;12;46;5'</code> → sınırlayıcı <code>;</code></li></ul>
          <p><b>Tokenizing:</b> string'i token'lara ayırıp her birini ayrı öğe olarak saklamak. Python'da <code>split</code> ile yapılır.</p>
          <p>Bölüm özeti: string üzerinde dolaşmak, tekrar ve birleştirme, değişmezlik, dilimleme ve test etme, metotlar, split.</p>`,
          { kod: "my_address = 'www.example.com'\ntokens = my_address.split('.')\nprint(tokens)\nsayilar = '17;92;81'.split(';')\nprint(sum([int(t) for t in sayilar]))" }),
        Y("print('Ha' * 3)", "HaHaHa", "* tekrar operatörü."),
        C("print('1/2/3'.split('/'))", ["['1', '2', '3']", "[1, 2, 3]", "['1/2/3']", "123"], "split bir string listesi döndürür."),
        Y("print(len('One two three four'.split()))", "4", "Varsayılan ayırıcı boşluk: 4 kelime."),
        C("tokens = 'www.example.com'.split('.')\nprint(tokens[1])", ["example", "www", "com", "."], "Token listesi: ['www', 'example', 'com']."),
        S("'17;92;81' string'inde ; karakterine ne denir?", ["Sınırlayıcı (delimiter)", "Token", "İndeks", "Dilim"], "Token'ları ayıran karakter delimiter'dır."),
        DY("split() metodu varsayılan olarak boşluk karakterine göre ayırır.", true, "Slayt 21."),
        B("Virgülle ayrılmış veriyi parçala", "parcalar = '3,5,8'.___(',')", ["split"], ["split", "find", "strip", "replace"], "split sınırlayıcıya göre listeye ayırır."),
        E(["Token", "ayrılmış alt string"], ["Delimiter", "ayırıcı karakter"], ["Tokenizing", "token'lara ayırma"], ["s * 3", "tekrar operatörü"]),
        K("string-islem", [11, 27]),
      ],
    },
  ],
});
