// Bölüm 4 — week3_part3_Files_Exceptions.md: Dosyalar ve istisnalar (31 slayt)
UNITELER.push({
  id: "u-dosya", renk: "turuncu", baslik: "Dosyalar ve İstisnalar", kaynak: "week3_part3_Files_Exceptions", slaytSayisi: 31,
  altBaslik: "Week 3 · Dosya okuma/yazma, kayıtlar, try/except",
  dersler: [
    {
      id: "dosya-io", baslik: "Dosya girişi ve çıkışı", slayt: [1, 16],
      adimlar: [
        O("Neden dosya?", [1, 7], `
          <p>Programın verisini <b>çalıştırmalar arasında saklaması</b> için veriyi kaydetmesi gerekir; veri genellikle diskteki bir <b>dosyaya</b> kaydedilir ve sonra tekrar kullanılabilir.</p>
          <ul><li><b>Yazmak (writing data to):</b> veriyi dosyaya kaydetmek. Yazılan dosya <b>çıktı dosyası</b>dır.</li>
          <li><b>Okumak (reading data from):</b> veriyi dosyadan almak. Okunan dosya <b>girdi dosyası</b>dır.</li></ul>
          <p>Dosya kullanırken <b>üç adım</b>: <b>aç → işle → kapat</b>.</p>
          <p>İki tür dosya: <b>metin dosyası</b> (metin olarak kodlanmış veri) ve <b>ikili (binary) dosya</b> (metne çevrilmemiş veri). İki erişim yolu: <b>sıralı erişim</b> (baştan sona okunur, ileri atlanamaz) ve <b>doğrudan erişim</b> (istenen veriye doğrudan atlanır).</p>`),
        O("Dosya nesneleri ve open", [8, 11], `
          <p><b>Dosya uzantısı</b> dosya adının sonundaki noktayla başlayan kısa karakterlerdir; içindeki verinin türünü gösterir (.txt, .jpg...).</p>
          <p><b>Dosya nesnesi:</b> belirli bir dosyayla ilişkili nesne; program dosyayla bunun üzerinden çalışır ve nesne bir değişkenle referans edilir.</p>
          <p><code>dosya_nesnesi = open(dosya_adi, mod)</code> dosyayı açar ve dosya nesnesi oluşturur. Mod: <code>'r'</code> okuma, <code>'w'</code> yazma, <code>'a'</code> ekleme.</p>
          <ul><li>Dosya adında yol yoksa, dosyanın <b>programla aynı klasörde</b> olduğu varsayılır; oluşturulan dosya da oraya yazılır.</li>
          <li>Farklı bir yol verilebilir; yol string'inin başına <b>r</b> harfi konur: <code>open(r'C:\\Users\\data.txt', 'r')</code> (ters eğik çizgiler kaçış karakteri sayılmasın diye).</li></ul>`),
        O("Yazmak ve okumak", [12, 14], `
          <p><b>Metot:</b> bir nesneye ait fonksiyon. Dosya nesnesinin <code>write</code> metodu dosyaya yazar: <code>dosya.write(string)</code>. İş bitince <code>dosya.close()</code> ile kapatılır.</p>
          <ul><li><code>read()</code>: dosyanın <b>tüm içeriğini</b> string olarak belleğe okur (dosya okuma için açılmış olmalı).</li>
          <li><code>readline()</code>: <b>bir satır</b> okur; satır <code>'\\n'</code> dahil string olarak döner.</li>
          <li><b>Okuma konumu:</b> sıradaki okunacak öğenin yerini işaretler.</li></ul>
          <p>Yazılan değerlerin sonuna genellikle <code>+ '\\n'</code> eklenir; okunan satırdan ise <code>rstrip('\\n')</code> ile sondaki yeni satır temizlenir.</p>`,
          { kod: "f = open('philosophers.txt', 'w')\nf.write('John Locke\\n')\nf.write('David Hume\\n')\nf.close()\n\nf = open('philosophers.txt', 'r')\nline1 = f.readline()\nline2 = f.readline()\nf.close()\nprint(line1.rstrip('\\n'))\nprint(line2.rstrip('\\n'))" }),
        O("Ekleme ve sayısal veri", [15, 16], `
          <ul><li><code>'w'</code> moduyla açılan dosya zaten varsa <b>üzerine yazılır</b> (eski içerik silinir).</li>
          <li><code>'a'</code> modu: dosya varsa <b>silinmez</b>, yoksa oluşturulur; veri mevcut içeriğin <b>sonuna</b> yazılır.</li>
          <li>Sayılar dosyaya yazılmadan önce <code>str()</code> ile <b>string'e çevrilmelidir</b>.</li>
          <li>Metin dosyasından okunan sayılar <b>string</b>'dir; işlem yapmak için <code>int()</code> veya <code>float()</code> ile çevrilmelidir.</li></ul>`,
          { kod: "f = open('numbers.txt', 'w')\nf.write(str(10) + '\\n')\nf.close()\nf = open('numbers.txt', 'a')\nf.write(str(20) + '\\n')\nf.close()\nf = open('numbers.txt', 'r')\ntoplam = int(f.readline()) + int(f.readline())\nf.close()\nprint(toplam)" }),
        SR("Dosya kullanmanın üç adımını sırala", ["Dosyayı aç", "Dosyayı işle", "Dosyayı kapat"], ["Dosyayı sil"], " → ", "Open → process → close"),
        S("Var olan bir dosyayı içeriğini silmeden sonuna veri eklemek için hangi mod kullanılır?", ["'a'", "'w'", "'r'", "'x'"], "'a' (append) modu mevcut içeriği korur."),
        S("readline() metodu ne döndürür?", ["Bir satırı, sonundaki '\\n' dahil string olarak", "Tüm dosyayı", "Satır sayısını", "Bir liste"], "Slayt 13."),
        C("f = open('t.txt', 'w')\nf.write('A\\n')\nf.close()\nf = open('t.txt', 'w')\nf.write('B\\n')\nf.close()\nf = open('t.txt', 'r')\nprint(f.read().rstrip('\\n'))\nf.close()", ["B", "A\nB", "A", "Hata verir"], "'w' modu var olan dosyanın üzerine yazar."),
        C("f = open('t.txt', 'w')\nf.write('A\\n')\nf.close()\nf = open('t.txt', 'a')\nf.write('B\\n')\nf.close()\nf = open('t.txt', 'r')\nprint(f.read().rstrip('\\n'))\nf.close()", ["A\nB", "B", "A", "AB"], "'a' modu mevcut içeriğin sonuna ekler."),
        DY("Dosyadan okunan sayılar doğrudan int olarak gelir; dönüştürmeye gerek yoktur.", false, "Metin dosyasından okunan her şey string'dir; int() veya float() gerekir."),
        B("Okunan satırın sonundaki yeni satırı sil", "isim = f.readline().___('\\n')", ["rstrip"], ["rstrip", "write", "close", "split"], "rstrip sondaki karakterleri temizler."),
        E(["'r'", "okuma"], ["'w'", "yazma (üzerine)"], ["'a'", "sona ekleme"], ["Sequential access", "baştan sona okunur"]),
      ],
    },
    {
      id: "dosya-dongu", baslik: "Döngülerle dosya ve kayıtlar", slayt: [17, 21],
      adimlar: [
        O("Dosyayı döngüyle işlemek", [17, 19], `
          <p>Dosyalar genellikle büyük miktarda veri tutar ve <b>kaç öğe olduğu çoğu zaman bilinmez</b>; bu yüzden dosya okuma/yazmada döngü kullanılır.</p>
          <p><code>readline</code> dosyanın sonuna gelince <b>boş string</b> döndürür; bu bir <b>sentinel</b> olarak kullanılır: <code>while line != ''</code>.</p>
          <p>Mantık: dosyayı aç → ilk satırı oku → boş string mi? Hayırsa işle ve sonraki satırı oku; evetse kapat.</p>
          <p>Python ayrıca dosya sonuna gelince <b>otomatik duran</b> bir for döngüsü sunar: <code>for line in dosya_nesnesi:</code> — dosyadaki her satır için bir kez döner.</p>`,
          { kod: "f = open('sales.txt', 'w')\nfor s in [1000.0, 2000.0, 3000.0]:\n    f.write(str(s) + '\\n')\nf.close()\n\ntotal = 0\nf = open('sales.txt', 'r')\nfor line in f:\n    total += float(line)\nf.close()\nprint(total)" }),
        O("Kayıtları işlemek", [20, 21], `
          <ul><li><b>Kayıt (record):</b> tek bir öğeyi tanımlayan veri kümesi (ör. bir çalışan).</li>
          <li><b>Alan (field):</b> kayıttaki tek bir veri parçası (ad, kimlik no, departman).</li>
          <li>Sıralı dosyaya kayıt yazmak için alanlar <b>art arda</b> yazılır; okurken kayıt tamamlanana kadar her alan okunur.</li></ul>
          <p>Kayıtlarla çalışırken şunları yapabilmek gerekir: kayıt <b>ekleme, görüntüleme, arama, değiştirme, silme</b>.</p>`,
          { kod: "f = open('employees.txt', 'w')\nfor ad, no in [('Ingrid', '4587'), ('Julia', '4588')]:\n    f.write(ad + '\\n')\n    f.write(no + '\\n')\nf.close()\n\nf = open('employees.txt', 'r')\nname = f.readline()\nwhile name != '':\n    id_num = f.readline()\n    print(name.rstrip('\\n'), id_num.rstrip('\\n'))\n    name = f.readline()\nf.close()" }),
        S("readline dosyanın sonuna ulaşınca ne döndürür?", ["Boş string ('')", "None", "-1", "Hata fırlatır"], "Boş string sentinel olarak kullanılır."),
        C("f = open('s.txt', 'w')\nf.write('2\\n3\\n4\\n')\nf.close()\ntoplam = 0\nfor line in open('s.txt'):\n    toplam += int(line)\nprint(toplam)", ["9", "234", "0", "Hata verir"], "for her satır için bir kez döner; int() ile çevrilip toplanır."),
        S("Bir çalışanın adı, kimlik numarası ve departmanından oluşan veri kümesine ne denir?", ["Kayıt (record)", "Alan (field)", "Dosya nesnesi", "Sentinel"], "Kayıt bir öğeyi tanımlar; her parça bir alandır."),
        DY("for line in dosya: döngüsü dosyanın sonuna gelince otomatik olarak durur.", true, "Slayt 19."),
        E(["Record", "bir öğeyi tanımlayan veri"], ["Field", "kayıttaki tek veri parçası"], ["''", "dosya sonu sentinel'i"]),
      ],
    },
    {
      id: "dosya-istisna", baslik: "İstisnalar (exceptions)", slayt: [22, 31],
      adimlar: [
        O("İstisna nedir?", [22, 23], `
          <p><b>İstisna (exception):</b> program <b>çalışırken</b> oluşan hata; genellikle programın aniden durmasına yol açar.</p>
          <p><b>Traceback:</b> istisnaya yol açan satır numaraları hakkında bilgi veren hata mesajı; istisnanın türünü ve kısa açıklamasını gösterir.</p>
          <ul><li>Birçok istisna <b>dikkatli kodla</b> önlenebilir; örn. basit bir karar yapısıyla <b>girdi doğrulama</b> (bölmeden önce sıfır mı diye bakmak).</li>
          <li>Bazıları önlenemez: <b>sayısal olmayan string'i int'e çevirmek</b>, <b>olmayan bir dosyayı okumak için açmak</b>.</li></ul>`,
          { kod: "print(int('abc'))", hataBeklenir: true }),
        O("try/except", [24, 27], `
          <p><b>İstisna işleyici (exception handler):</b> istisna fırlatıldığında yanıt veren ve programın çökmesini önleyen kod. Python'da <b>try/except</b> ile yazılır.</p>
          <ul><li><b>try bloğu:</b> istisna fırlatabilecek ifadeler.</li><li><b>Handler:</b> except bloğundaki ifadeler.</li></ul>
          <p>try bloğundaki bir ifade istisna fırlatırsa: istisna <b>except'te belirtilen türdense</b> o handler çalışır ve program try/except'ten sonra devam eder. <b>Başka bir türse</b> program traceback ile durur. İstisna yoksa handler'lar <b>atlanır</b>.</p>
          <p>Birden çok istisna türü için her biri ayrı except yazılır. Tür belirtmeyen <code>except:</code> her istisnayı yakalar ve <b>en sona</b> yazılmalıdır. İstisna nesnesi bir değişkene atanıp varsayılan hata mesajı yazdırılabilir: <code>except ValueError as err:</code></p>`,
          { kod: "try:\n    hours = int('kırk')\nexcept ValueError as err:\n    print('Hata:', err)\nprint('Program devam ediyor')" }),
        O("else, finally ve işlenmeyen istisnalar", [28, 31], `
          <ul><li><b>else</b> cümlesi (isteğe bağlı) tüm except'lerden sonra gelir. else bloğu, try bloğu <b>istisna olmadan</b> biterse çalışır; istisna olduysa atlanır.</li>
          <li><b>finally</b> cümlesi (isteğe bağlı) en sonda gelir. finally bloğu <b>istisna olsa da olmasa da</b> çalışır; amacı çıkmadan önce <b>temizlik</b> yapmaktır (dosyayı kapatmak gibi).</li></ul>
          <p>İstisna iki şekilde işlenmeden kalır: doğru türü belirten except yoktur veya istisna <b>try bloğunun dışında</b> fırlatılmıştır. İki durumda da program durur. Hangi fonksiyonun hangi istisnaları fırlatabileceği Python belgelerinde yazar.</p>`,
          { kod: "for deger in ['10', 'on']:\n    try:\n        sayi = int(deger)\n    except ValueError:\n        print(deger, '→ sayı değil')\n    else:\n        print(deger, '→', sayi * 2)\n    finally:\n        print('kontrol bitti')" }),
        C("try:\n    x = int('abc')\n    print('A')\nexcept ValueError:\n    print('B')\nprint('C')", ["B\nC", "A\nB\nC", "A\nC", "C"], "int('abc') ValueError fırlatır; try'daki kalan satır atlanır, handler çalışır, program devam eder."),
        C("try:\n    x = int('5')\nexcept ValueError:\n    print('hata')\nelse:\n    print('tamam', x)", ["tamam 5", "hata", "hata\ntamam 5", "5"], "İstisna olmadığı için else bloğu çalışır."),
        C("try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print('sıfıra bölme')\nfinally:\n    print('temizlik')", ["sıfıra bölme\ntemizlik", "temizlik", "sıfıra bölme", "Hata verir"], "finally her durumda çalışır."),
        C("try:\n    int('x')\nexcept ValueError as err:\n    print(err)", ["invalid literal for int() with base 10: 'x'", "ValueError", "x", "err"], "İstisna nesnesi varsayılan hata mesajını taşır."),
        S("Hangisi dikkatli kodlamayla önlenemeyen bir istisnaya örnektir?", ["Okumak için var olmayan bir dosyayı açmak", "Sıfıra bölmeden önce kontrol etmek", "Girdi doğrulama", "if ile aralık kontrolü"], "Slayt 23."),
        S("Tür belirtmeyen except: cümlesi nereye yazılmalıdır?", ["Tüm except cümlelerinin en sonuna", "En başa", "try'dan önce", "finally'den sonra"], "Slayt 26: should always be last."),
        DY("finally bloğu yalnızca istisna oluşmadığında çalışır.", false, "finally istisna olsa da olmasa da çalışır."),
        SR("try ifadesinin cümlelerini doğru sıraya diz", ["try:", "except ValueError:", "else:", "finally:"], [], " → ", "try → except → else → finally"),
        E(["try", "istisna fırlatabilecek kod"], ["except", "istisnayı işler"], ["else", "istisna yoksa çalışır"], ["finally", "her durumda çalışır"]),
        K("guvenli-bol", [24, 29]),
      ],
    },
  ],
});
