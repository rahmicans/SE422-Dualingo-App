// Bölüm 7 — week4_Dictionaries_and_Sets.md: Sözlükler ve kümeler (39 slayt)
UNITELER.push({
  id: "u-sozluk", renk: "mavi", baslik: "Sözlükler ve Kümeler", kaynak: "week4_Dictionaries_and_Sets", slaytSayisi: 39,
  altBaslik: "Week 4 · dict, metotlar, comprehension, set, pickle",
  dersler: [
    {
      id: "sozluk-giris", baslik: "Sözlükler", slayt: [1, 8],
      adimlar: [
        O("Sözlük nedir?", [1, 3], `
          <p>Bölümün konuları: sözlükler, kümeler ve nesneleri serileştirme.</p>
          <p><b>Sözlük (dictionary):</b> bir veri koleksiyonu saklayan nesne. Her eleman bir <b>anahtar (key)</b> ve bir <b>değerden (value)</b> oluşur; genellikle <b>anahtardan değere eşleme</b> (mapping) olarak anılır.</p>
          <ul><li>Anahtar <b>değiştirilemez (immutable)</b> bir nesne olmalıdır (string, sayı, tuple).</li>
          <li>Belirli bir değeri almak için ona bağlı <b>anahtar</b> kullanılır.</li>
          <li>Format: <code>sozluk = {anahtar1: deger1, anahtar2: deger2}</code></li></ul>`,
          { kod: "phonebook = {'Chris': '555-1111', 'Katie': '555-2222', 'Joanne': '555-3333'}\nprint(phonebook)\nprint(phonebook['Katie'])" }),
        O("Değer almak, eklemek, silmek", [4, 6], `
          <ul><li>Sözlükteki elemanlar <b>sıralı değildir</b> (konuma göre değil anahtara göre erişilir).</li>
          <li>Değer almak: <code>sozluk[anahtar]</code>. Anahtar varsa değeri döner, <b>yoksa KeyError</b> istisnası fırlatılır.</li>
          <li><code>in</code> ve <code>not in</code> ile anahtarın sözlükte olup olmadığı test edilir; KeyError'ı önlemeye yardımcı olur.</li>
          <li>Sözlükler <b>mutable</b>'dır. Yeni çift eklemek: <code>sozluk[anahtar] = deger</code>. Anahtar zaten varsa <b>değeri değişir</b>.</li>
          <li>Silmek: <code>del sozluk[anahtar]</code>; anahtar yoksa KeyError.</li></ul>`,
          { kod: "phonebook = {'Chris': '555-1111'}\nphonebook['Joe'] = '555-0123'\nphonebook['Chris'] = '555-4444'\nprint('Joe' in phonebook)\ndel phonebook['Joe']\nprint(phonebook)" }),
        O("len, karışık tipler, boş sözlük ve döngü", [7, 8], `
          <ul><li><code>len</code> sözlükteki eleman (çift) sayısını verir.</li>
          <li>Anahtarlar immutable olmalı ama <b>değerler her tipte</b> olabilir; bir sözlükte farklı tiplerde anahtarlar ve değerler bulunabilir.</li>
          <li>Boş sözlük: <code>{}</code> veya <code>dict()</code>; elemanlar program çalışırken eklenebilir.</li>
          <li>for ile sözlük üzerinde dolaşmak <b>anahtarlar</b> üzerinde dolaşmaktır: <code>for key in sozluk:</code></li></ul>`,
          { kod: "test_scores = {'Kayla': [88, 92, 100], 'Luis': [95, 74, 81]}\nprint(len(test_scores))\nfor name in test_scores:\n    print(name, test_scores[name])" }),
        C("d = {'a': 1, 'b': 2}\nprint(d['b'])", ["2", "1", "b", "Hata verir"], "Değere anahtarıyla erişilir."),
        C("d = {'a': 1}\nprint(d['z'])", ["Hata verir", "None", "0", "z"], "Olmayan anahtar KeyError fırlatır."),
        C("d = {'a': 1}\nd['a'] = 5\nd['b'] = 2\nprint(d)", ["{'a': 5, 'b': 2}", "{'a': 1, 'b': 2}", "{'a': 1, 'a': 5, 'b': 2}", "Hata verir"], "Var olan anahtara atama değeri değiştirir; yeni anahtar yeni çift ekler."),
        Y("d = {'x': 1, 'y': 2, 'z': 3}\ndel d['y']\nprint(len(d))", "2", "Bir çift silindi; 2 kaldı."),
        S("Hangisi sözlük ANAHTARI olamaz?", ["[1, 2] (liste)", "'ad' (string)", "42 (int)", "(1, 2) (tuple)"], "Anahtar immutable olmalıdır; liste değiştirilebilir."),
        DY("for key in sozluk: döngüsü sözlüğün değerleri üzerinde dolaşır.", false, "Anahtarlar üzerinde dolaşır."),
        B("Yeni bir çift ekle", "stok___'elma'___ = 10", ["[", "]"], ["[", "]", "(", ")"], "sozluk[anahtar] = deger"),
        E(["d[k]", "değeri getirir"], ["d[k] = v", "ekler veya değiştirir"], ["del d[k]", "çifti siler"], ["KeyError", "anahtar yok"]),
      ],
    },
    {
      id: "sozluk-metot", baslik: "Sözlük metotları ve comprehension", slayt: [9, 19],
      adimlar: [
        O("clear, get, items", [9, 10], `
          <ul><li><code>clear()</code> → tüm elemanları siler, sözlük boş kalır.</li>
          <li><code>get(anahtar, varsayilan)</code> → anahtarın değerini getirir; anahtar <b>yoksa varsayılan</b> döner. <code>[]</code> operatörüne alternatiftir ve <b>KeyError fırlatmaz</b>.</li>
          <li><code>items()</code> → tüm anahtarları ve değerleri bir <b>sözlük görünümü (view)</b> olarak döndürür; her eleman (anahtar, değer) <b>tuple</b>'ıdır. for ile dolaşırken tuple'ı tek değişkene veya iki değişkene (anahtar, değer) alabilirsin.</li></ul>`,
          { kod: "phonebook = {'Chris': '555-1111', 'Katie': '555-2222'}\nprint(phonebook.get('Andy', 'Bulunamadı'))\nfor key, value in phonebook.items():\n    print(key, value)" }),
        O("keys, pop, popitem, values", [11, 13], `
          <ul><li><code>keys()</code> → tüm anahtarları bir dizi olarak döndürür.</li>
          <li><code>pop(anahtar, varsayilan)</code> → anahtarın değerini döndürür ve çifti <b>siler</b>; anahtar yoksa varsayılan döner.</li>
          <li><code>popitem()</code> → <b>son eklenen</b> çifti tuple olarak döndürür ve sözlükten siler.</li>
          <li><code>values()</code> → tüm değerleri bir dizi olarak döndürür; for ile dolaşılabilir.</li></ul>`,
          { kod: "d = {'a': 1, 'b': 2, 'c': 3}\nprint(list(d.keys()))\nprint(d.pop('a'))\nprint(d.popitem())\nprint(list(d.values()))" }),
        O("Sözlük üreteci (dictionary comprehension)", [14, 19], `
          <p>Bir girdi dizisini okuyup elemanlarından <b>sözlük üreten</b> ifade.</p>
          <p><code>squares = {item: item**2 for item in numbers}</code></p>
          <ul><li><code>item: item**2</code> → <b>sonuç ifadesi</b> (anahtar: değer); <code>for item in numbers</code> → <b>iterasyon ifadesi</b></li>
          <li>Her iterasyonda hedef değişkene bir eleman atanır ve sözlüğe <code>item</code> anahtarlı, <code>item**2</code> değerli eleman eklenir.</li>
          <li>Bir sözlüğü kopyalamak: <code>{k: v for k, v in dict1.items()}</code></li>
          <li><b>if</b> ile seçim: nüfusu 2 milyondan büyük şehirler <code>{k: v for k, v in populations.items() if v &gt; 2000000}</code></li></ul>`,
          { kod: "numbers = [1, 2, 3, 4]\nprint({item: item**2 for item in numbers})\nnames = ['Jeremy', 'Kate', 'Peg']\nprint({item: len(item) for item in names})\npop = {'New York': 8398748, 'Phoenix': 1660272}\nprint({k: v for k, v in pop.items() if v > 2000000})" }),
        C("d = {'a': 1}\nprint(d.get('z', 0))", ["0", "None", "Hata verir", "z"], "get anahtar yoksa varsayılanı döndürür, KeyError fırlatmaz."),
        C("d = {'a': 1, 'b': 2}\nx = d.pop('a')\nprint(x, d)", ["1 {'b': 2}", "1 {'a': 1, 'b': 2}", "{'b': 2}", "a {'b': 2}"], "pop değeri döndürür ve çifti siler."),
        C("d = {'a': 1, 'b': 2}\nprint(d.popitem())", ["('b', 2)", "('a', 1)", "2", "{'b': 2}"], "popitem son eklenen çifti tuple olarak döndürür."),
        C("print({n: n**2 for n in [1, 2, 3]})", ["{1: 1, 2: 4, 3: 9}", "[1, 4, 9]", "{1, 4, 9}", "{1: 2, 2: 4, 3: 6}"], "Sözlük üreteci: anahtar n, değer n**2."),
        C("names = ['Jeremy', 'Kate', 'Peg']\nprint({n: len(n) for n in names})", ["{'Jeremy': 6, 'Kate': 4, 'Peg': 3}", "[6, 4, 3]", "{6: 'Jeremy', 4: 'Kate', 3: 'Peg'}", "{'Jeremy', 'Kate', 'Peg'}"], "Anahtar isim, değer uzunluk."),
        Y("d = {'a': 1, 'b': 2}\nfor k, v in d.items():\n    print(k + str(v), end=' ')", "a1 b2", "items() (anahtar, değer) tuple'ları verir."),
        DY("get metodu anahtar bulunamazsa KeyError fırlatır.", false, "get varsayılan değeri döndürür."),
        E(["get", "varsayılanlı değer"], ["items", "(anahtar, değer) çiftleri"], ["pop", "değeri döndürüp siler"], ["popitem", "son eklenen çift"]),
        K("sozluk-uretec", [14, 19]),
      ],
    },
    {
      id: "sozluk-kume", baslik: "Kümeler (sets)", slayt: [20, 34],
      adimlar: [
        O("Küme nedir, nasıl oluşturulur?", [20, 22], `
          <p><b>Küme (set):</b> veri koleksiyonunu matematiksel küme gibi saklayan nesne.</p>
          <ul><li>Tüm öğeler <b>benzersiz</b>dir; küme <b>sırasız</b>dır; öğeler farklı tiplerde olabilir.</li>
          <li><code>set()</code> boş küme oluşturur; <code>set(arguman)</code> yinelenebilir öğeler içeren bir nesneden (liste, string, tuple) küme oluşturur.</li>
          <li>Argüman string ise <b>her karakter</b> bir öğe olur; string'lerden küme için liste verilir.</li>
          <li>Argümanda tekrarlar varsa kümede <b>yalnızca biri</b> görünür.</li>
          <li><code>len</code> öğe sayısını verir. Kümeler <b>mutable</b>'dır: <code>add</code> bir öğe, <code>update</code> bir grup öğe ekler.</li></ul>`,
          { kod: "s = set([1, 2, 2, 3, 3, 3])\nprint(s, len(s))\nprint(sorted(set('aabbc')))\ns.add(4)\ns.update([5, 6])\nprint(s)" }),
        O("Silme, döngü, in", [23, 24], `
          <ul><li><code>remove(oge)</code> ve <code>discard(oge)</code> belirtilen öğeyi siler. Fark: öğe yoksa <b>remove KeyError fırlatır</b>, <b>discard fırlatmaz</b>.</li>
          <li><code>clear()</code> tüm öğeleri siler.</li>
          <li><code>for oge in kume:</code> her öğe için bir kez döner; <code>in</code> / <code>not in</code> öğe var mı diye test eder.</li></ul>`,
          { kod: "s = {1, 2, 3}\ns.discard(10)\ns.remove(2)\nprint(s)\nprint(3 in s)" }),
        O("Küme işlemleri", [25, 30], `
          <table><tr><th>İşlem</th><th>Metot</th><th>Operatör</th><th>Sonuç</th></tr>
          <tr><td>Birleşim</td><td><code>set1.union(set2)</code></td><td><code>|</code></td><td>iki kümenin tüm öğeleri</td></tr>
          <tr><td>Kesişim</td><td><code>set1.intersection(set2)</code></td><td><code>&amp;</code></td><td>yalnızca ikisinde de olanlar</td></tr>
          <tr><td>Fark</td><td><code>set1.difference(set2)</code></td><td><code>-</code></td><td>birincide olup ikincide olmayanlar</td></tr>
          <tr><td>Simetrik fark</td><td><code>set1.symmetric_difference(set2)</code></td><td><code>^</code></td><td>ortak olmayan öğeler</td></tr>
          <tr><td>Alt küme</td><td><code>setA.issubset(setB)</code></td><td><code>&lt;=</code></td><td>A'nın tüm öğeleri B'de mi?</td></tr>
          <tr><td>Üst küme</td><td><code>setA.issuperset(setB)</code></td><td><code>&gt;=</code></td><td>A, B'nin tüm öğelerini içeriyor mu?</td></tr></table>
          <p>Birleşim, kesişim ve fark işlemleri <b>yeni bir küme</b> döndürür.</p>`,
          { kod: "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(sorted(a | b))\nprint(sorted(a & b))\nprint(sorted(a - b))\nprint(sorted(a ^ b))\nprint({1, 2} <= a)" }),
        O("Küme üreteci", [31, 34], `
          <p><b>Küme üreteci:</b> bir dizinin elemanları üzerinde dolaşarak yeni küme oluşturan kısa ifade. Liste üreteci gibi yazılır ama <b>süslü parantez</b> <code>{}</code> içindedir.</p>
          <ul><li>Kopya: <code>{item for item in set1}</code></li><li>Kareler: <code>{item**2 for item in set1}</code></li><li>Seçim: <code>{item for item in set1 if item &lt; 10}</code></li></ul>`,
          { kod: "set1 = set([1, 20, 2, 40, 3, 50])\nprint(sorted({item for item in set1 if item < 10}))\nprint(sorted({item**2 for item in [1, 2, 3]}))" }),
        Y("print(len(set([1, 2, 2, 3, 3, 3])))", "3", "Kümede tekrarlar tek kez tutulur."),
        Y("print(len(set('banana')))", "3", "String'in her karakteri öğe olur: b, a, n."),
        C("a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a & b))", ["[2, 3]", "[1, 2, 3, 4]", "[1]", "[1, 4]"], "Kesişim: ikisinde de olanlar."),
        C("a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a ^ b))", ["[1, 4]", "[2, 3]", "[1, 2, 3, 4]", "[1]"], "Simetrik fark: ortak olmayanlar."),
        C("a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a - b))", ["[1]", "[4]", "[1, 4]", "[2, 3]"], "Fark: a'da olup b'de olmayanlar."),
        C("print({1, 2} <= {1, 2, 3})", ["True", "False", "{1, 2}", "Hata verir"], "<= alt küme testidir."),
        S("Kümede olmayan bir öğeyi silmeye çalışınca hangi metot istisna fırlatmaz?", ["discard", "remove", "pop", "Hepsi fırlatır"], "remove KeyError fırlatır; discard fırlatmaz."),
        DY("Bir küme aynı öğeden birden fazla içerebilir.", false, "Kümedeki tüm öğeler benzersizdir."),
        E(["|", "birleşim"], ["&", "kesişim"], ["-", "fark"], ["^", "simetrik fark"]),
        K("kume-islem", [20, 30]),
      ],
    },
    {
      id: "sozluk-pickle", baslik: "Nesneleri serileştirme (pickle)", slayt: [35, 39],
      adimlar: [
        O("Pickling ve unpickling", [35, 39], `
          <p><b>Serileştirme:</b> bir nesneyi dosyada kolayca saklanabilecek bir <b>bayt akışına</b> dönüştürmek. Python'da buna <b>pickling</b> denir.</p>
          <p>Bir nesneyi pickle'lamak:</p>
          <ol><li><code>pickle</code> modülünü içe aktar</li><li>Dosyayı <b>ikili yazma</b> için aç (<code>'wb'</code>)</li><li><code>pickle.dump(nesne, dosya)</code> çağır</li><li>Dosyayı kapat</li></ol>
          <p>Kapatmadan önce aynı dosyaya <b>birden çok nesne</b> pickle'lanabilir.</p>
          <p><b>Unpickling:</b> pickle'lanmış nesneyi geri almak: pickle'ı içe aktar, dosyayı <b>ikili okuma</b> için aç (<code>'rb'</code>), <code>pickle.load(dosya)</code> çağır, dosyayı kapat. Birden çok nesne geri okunabilir.</p>
          <p>Bölüm özeti: sözlük oluşturma, ekleme/alma/silme, for ve in, metotlar; kümeler ve işlemleri; nesneleri pickle'lamak.</p>`,
          { kod: "import pickle\nphonebook = {'Chris': '555-1111', 'Katie': '555-2222'}\nf = open('phonebook.dat', 'wb')\npickle.dump(phonebook, f)\nf.close()\nf = open('phonebook.dat', 'rb')\nyuklenen = pickle.load(f)\nf.close()\nprint(yuklenen)" }),
        SR("Bir nesneyi pickle'lama adımlarını sırala", ["import pickle", "open(dosya, 'wb')", "pickle.dump(nesne, dosya)", "dosya.close()"], ["pickle.load(dosya)"], " → ", "Modül → ikili yazma için aç → dump → kapat"),
        S("Pickle'lanmış nesneyi geri almak için hangi fonksiyon kullanılır?", ["pickle.load", "pickle.dump", "pickle.open", "pickle.read"], "Unpickling: pickle.load(file)."),
        S("Serileştirme (serialization) nedir?", ["Nesneyi dosyada saklanabilecek bir bayt akışına dönüştürmek", "Nesneyi silmek", "Bir listeyi sıralamak", "String'i parçalamak"], "Slayt 35."),
        DY("Bir dosyaya kapatmadan önce birden çok nesne pickle'lanabilir.", true, "Slayt 36."),
        E(["pickle.dump", "nesneyi dosyaya yazar"], ["pickle.load", "nesneyi dosyadan okur"], ["'wb'", "ikili yazma"], ["'rb'", "ikili okuma"]),
      ],
    },
  ],
});
