// Bölüm 8 — week4_Classes_OOP.md: Sınıflar ve nesne yönelimli programlama (32 slayt)
UNITELER.push({
  id: "u-sinif", renk: "yesil", baslik: "Sınıflar ve OOP", kaynak: "week4_Classes_OOP", slaytSayisi: 32,
  altBaslik: "Week 4 · Nesne, sınıf, __init__, self, __str__, UML",
  dersler: [
    {
      id: "sinif-oop", baslik: "Prosedürel ve nesne yönelimli programlama", slayt: [1, 8],
      adimlar: [
        O("Prosedürel programlama", [1, 3], `
          <p>Bölümün konuları: prosedürel ve nesne yönelimli programlama, sınıflar, örneklerle çalışmak, sınıf tasarlama teknikleri.</p>
          <p><b>Prosedürel programlama:</b> belirli görevleri yapan <b>fonksiyonlardan (prosedürlerden)</b> oluşan programlar yazmak.</p>
          <ul><li>Prosedürler genellikle kendilerinden <b>ayrı duran</b> veri öğeleri üzerinde çalışır.</li>
          <li>Veri öğeleri bir prosedürden diğerine aktarılır.</li><li>Odak: programın verisi üzerinde çalışan prosedürler yazmak.</li></ul>`),
        O("Nesne yönelimli programlama (OOP)", [4, 7], `
          <p><b>OOP</b> nesneler oluşturmaya odaklanır. <b>Nesne:</b> hem veri hem prosedür içeren varlık.</p>
          <ul><li>Nesnenin verisine <b>veri öznitelikleri (data attributes)</b>, prosedürlerine <b>metotlar</b> denir; metotlar veri öznitelikleri üzerinde işlem yapar.</li>
          <li><b>Kapsülleme (encapsulation):</b> veriyi ve kodu tek bir nesnede birleştirmek.</li>
          <li><b>Veri gizleme (data hiding):</b> nesnenin verisi dışarıdaki koddan gizlenir; erişim nesnenin metotlarıyla sınırlıdır. Verinin kazara bozulmasını önler; dışarıdaki kodun nesnenin iç yapısını bilmesi gerekmez.</li>
          <li><b>Yeniden kullanılabilirlik:</b> aynı nesne farklı programlarda kullanılabilir (ör. 3B görüntü nesnesi hem mimaride hem oyunda).</li></ul>
          <p>Dışarıdaki kod nesneyle yalnızca <b>metotları üzerinden</b> etkileşir.</p>`),
        O("Günlük hayattan örnek: saat", [8, 8], `
          <ul><li><b>Veri öznitelikleri</b> nesnenin <b>durumunu</b> tanımlar: bir saat nesnesinin saniye, dakika ve saat öznitelikleri.</li>
          <li><b>Public (genel) metotlar</b> dışarıdaki kodun nesneyi yönetmesini sağlar: <code>set_time</code>, <code>set_alarm_time</code>.</li>
          <li><b>Private (özel) metotlar</b> nesnenin iç işleyişi için kullanılır.</li></ul>`),
        S("Veriyi ve kodu tek bir nesnede birleştirmeye ne denir?", ["Kapsülleme (encapsulation)", "Kalıtım", "Özyineleme", "Serileştirme"], "Slayt 4."),
        S("Veri gizlemenin (data hiding) faydası nedir?", ["Verinin kazara bozulmasını önler", "Programı kısaltır", "Nesneyi kopyalar", "Metotları gizler"], "Slayt 6: protects from accidental corruption."),
        S("Prosedürel programlamanın odağı nedir?", ["Program verisi üzerinde çalışan prosedürler oluşturmak", "Nesneler oluşturmak", "Sınıflar tasarlamak", "Veriyi gizlemek"], "Slayt 3."),
        DY("OOP'de dışarıdaki kod, nesnenin verisine genellikle doğrudan değil metotları üzerinden erişir.", true, "Slayt 6–7."),
        E(["Data attribute", "nesnenin verisi"], ["Method", "nesnenin prosedürü"], ["Encapsulation", "veri + kod tek nesnede"], ["Public method", "dışarıdan kullanılır"]),
      ],
    },
    {
      id: "sinif-tanim", baslik: "Sınıf tanımları", slayt: [9, 18],
      adimlar: [
        O("Sınıf ve örnek", [9, 11], `
          <p><b>Sınıf (class):</b> belirli tipteki bir nesnenin veri özniteliklerini ve metotlarını belirten kod. Bir evin <b>planı</b> veya kurabiye <b>kalıbı</b> gibidir.</p>
          <p><b>Örnek (instance):</b> sınıftan oluşturulan nesne; plana göre inşa edilmiş belirli bir ev veya kalıptan çıkan belirli bir kurabiye gibi. Bir sınıfın <b>birçok örneği</b> olabilir (housefly ve mosquito, Insect sınıfının örnekleri).</p>`),
        O("Sınıf tanımı, self ve __init__", [12, 15], `
          <ul><li>Sınıf tanımı <code>class Sinif_adi:</code> ile başlar; sınıf adları genellikle <b>büyük harfle</b> başlar.</li>
          <li>Metot tanımı normal fonksiyon tanımı gibidir.</li>
          <li><b>self parametresi:</b> sınıftaki her metotta gereklidir; metodun üzerinde çalıştığı <b>belirli nesneyi</b> referans eder.</li>
          <li><b>Başlatıcı (initializer) metot</b> <code>def __init__(self):</code> — sınıfın bir örneği oluşturulunca <b>otomatik çalışır</b>, veri özniteliklerini başlatır. Genellikle sınıftaki ilk metottur.</li>
          <li>Örnek oluşturmak: <code>my_instance = Class_Name()</code>; metot çağırmak: <code>my_instance.method()</code>. self referansı <b>otomatik</b> aktarılır.</li></ul>`,
          { kod: "import random\n\nclass Coin:\n    def __init__(self):\n        self.sideup = 'Heads'\n\n    def toss(self):\n        if random.randint(0, 1) == 0:\n            self.sideup = 'Heads'\n        else:\n            self.sideup = 'Tails'\n\n    def get_sideup(self):\n        return self.sideup\n\nmy_coin = Coin()\nprint(my_coin.get_sideup())\nmy_coin.toss()\nprint(my_coin.get_sideup())" }),
        O("Öznitelikleri gizlemek, BankAccount, __str__", [16, 18], `
          <ul><li>Veri öznitelikleri <b>private</b> olmalıdır; bunun için adın başına <b>iki alt çizgi</b> konur: <code>__current_minute</code>.</li>
          <li>Sınıflar modüllerde saklanabilir; dosya adı .py ile bitmeli, sınıfı kullanan programlar modülü import eder.</li>
          <li>Metotlar self'e ek olarak <b>birden çok parametre</b> alabilir: <code>__init__</code> örneği oluşturmak için gerekenleri alır (BankAccount bir <b>bakiye</b> ile oluşturulur), diğer metotlar görev için gerekenleri alır (deposit <b>yatırılacak miktarı</b> alır).</li>
          <li><b>Nesnenin durumu:</b> özniteliklerinin belirli bir andaki değerleri. <code>__str__</code> metodu durumu gösteren string döndürür; nesne <b>print</b>'e veya <b>str</b>'ye verildiğinde otomatik çağrılır.</li></ul>`,
          { kod: "class BankAccount:\n    def __init__(self, bal):\n        self.__balance = bal\n\n    def deposit(self, amount):\n        self.__balance += amount\n\n    def get_balance(self):\n        return self.__balance\n\n    def __str__(self):\n        return f'The balance is ${self.__balance:,.2f}'\n\nhesap = BankAccount(1000.0)\nhesap.deposit(500)\nprint(hesap.get_balance())\nprint(hesap)" }),
        C("class Coin:\n    def __init__(self):\n        self.sideup = 'Heads'\n\nc = Coin()\nprint(c.sideup)", ["Heads", "Tails", "sideup", "Hata verir"], "__init__ örnek oluşturulunca otomatik çalışır ve sideup'ı başlatır."),
        C("class Sayac:\n    def __init__(self):\n        self.n = 0\n\n    def artir(self):\n        self.n += 1\n\ns = Sayac()\ns.artir()\ns.artir()\nprint(s.n)", ["2", "0", "1", "Hata verir"], "Her çağrı aynı örneğin n özniteliğini artırır."),
        C("class Hesap:\n    def __init__(self, bakiye):\n        self.__bakiye = bakiye\n\n    def __str__(self):\n        return 'Bakiye: ' + str(self.__bakiye)\n\nprint(Hesap(250))", ["Bakiye: 250", "250", "<__main__.Hesap object>", "Hata verir"], "print nesneye uygulanınca __str__ otomatik çağrılır."),
        C("class Hesap:\n    def __init__(self, bakiye):\n        self.__bakiye = bakiye\n\nh = Hesap(100)\nprint(h.__bakiye)", ["Hata verir", "100", "None", "__bakiye"], "İki alt çizgiyle başlayan öznitelik dışarıdan bu adla erişilemez (AttributeError)."),
        S("Sınıftaki her metodun ilk parametresi olan ve metodun üzerinde çalıştığı nesneyi referans eden parametre hangisidir?", ["self", "this", "init", "object"], "Slayt 12."),
        S("Bir öznitelik nasıl private yapılır?", ["Adının başına iki alt çizgi konarak (__ad)", "Adı büyük harfle yazılarak", "private anahtar kelimesiyle", "Adının sonuna _ konarak"], "Slayt 16."),
        DY("Bir sınıftan yalnızca tek bir örnek oluşturulabilir.", false, "Bir sınıfın birçok örneği olabilir."),
        B("Başlatıcı metodu tanımla", "class Kedi:\n    def ___(self, ad):\n        self.ad = ad", ["__init__"], ["__init__", "__str__", "init", "self"], "Başlatıcı metot __init__'tir."),
        E(["Class", "plan / kalıp"], ["Instance", "sınıftan oluşturulan nesne"], ["__init__", "örnek oluşunca çalışır"], ["__str__", "print'te otomatik çağrılır"]),
        K("banka-hesabi", [12, 18]),
      ],
    },
    {
      id: "sinif-ornek", baslik: "Örneklerle çalışmak ve sınıf tasarımı", slayt: [19, 32],
      adimlar: [
        O("Örnek öznitelikleri", [19, 21], `
          <p><b>Örnek özniteliği (instance attribute):</b> sınıfın belirli bir örneğine aittir; bir metot self parametresini kullanarak öznitelik oluşturduğunda oluşur.</p>
          <p>Bir sınıftan birçok örnek oluşturulursa <b>her birinin kendi öznitelik kümesi</b> vardır. coin1, coin2, coin3 üç ayrı Coin nesnesidir; birinin toss metodu yalnızca kendi <code>__sideup</code> değerini değiştirir.</p>`,
          { kod: "class Coin:\n    def __init__(self):\n        self.sideup = 'Heads'\n\ncoin1 = Coin()\ncoin2 = Coin()\ncoin1.sideup = 'Tails'\nprint(coin1.sideup, coin2.sideup)" }),
        O("Accessor ve mutator metotlar, nesneyi argüman vermek", [22, 23], `
          <p>Genellikle sınıfın tüm veri öznitelikleri private'tır ve onlara erişip değiştirmek için metotlar sağlanır:</p>
          <ul><li><b>Accessor (erişici) metot:</b> özniteliğin değerini <b>değiştirmeden döndürür</b>; dışarıdaki kodun değeri okumasının güvenli yoludur (<code>get_balance</code>).</li>
          <li><b>Mutator (değiştirici) metot:</b> özniteliğin değerini saklar veya değiştirir (<code>set_balance</code>, <code>deposit</code>).</li></ul>
          <p>Bir nesneyi argüman olarak vermek aslında <b>nesneye bir referans</b> vermektir: alan fonksiyon <b>asıl nesneye</b> erişir, metotlarını çağırabilir ve mutator'larla özniteliklerini değiştirebilir.</p>`,
          { kod: "class Coin:\n    def __init__(self):\n        self.__sideup = 'Heads'\n    def set_tails(self):\n        self.__sideup = 'Tails'\n    def get_sideup(self):\n        return self.__sideup\n\ndef cevir(coin_obj):\n    coin_obj.set_tails()\n\nc = Coin()\ncevir(c)\nprint(c.get_sideup())" }),
        O("UML diyagramı", [24, 26], `
          <p><b>UML (Unified Modeling Language):</b> nesne yönelimli sistemleri grafikle göstermek için standart diyagramlar.</p>
          <p>Bir sınıf, <b>üç bölmeli</b> bir kutuyla gösterilir:</p>
          <ul><li><b>Üst:</b> sınıfın adı (Coin)</li><li><b>Orta:</b> veri öznitelikleri (__sideup)</li><li><b>Alt:</b> metotlar (__init__(), toss(), get_sideup())</li></ul>`),
        O("Problemdeki sınıfları bulmak", [27, 32], `
          <p>OOP program geliştirirken ilk hedef <b>sınıfları belirlemektir</b>; genellikle problemdeki gerçek dünya nesneleri bulunur. Teknik:</p>
          <ol><li>Problem alanının <b>yazılı açıklamasını</b> al (sen veya bir uzman yazar). Fiziksel nesneleri, bir kişinin rolünü, bir iş olayının sonucunu, kayıt tutma öğelerini içermelidir.</li>
          <li>Açıklamadaki <b>tüm isimleri</b> (isim tamlamaları ve zamirler dahil) belirle; her biri potansiyel bir sınıftır.</li>
          <li>Listeyi <b>daralt</b>: aynı anlama gelenleri, programın ilgilenmediği öğeleri, sınıf değil <b>nesne</b> olanları ve bir değişkene atanabilecek <b>basit değerleri</b> çıkar.</li></ol>
          <p><b>Sınıfın sorumlulukları:</b> <b>bilmesi gerekenler</b> → veri öznitelikleri; <b>yapması gerekenler</b> → metotlar. Problem alanına bakılarak çıkarılır.</p>`),
        C("class Coin:\n    def __init__(self):\n        self.sideup = 'Heads'\n\nc1 = Coin()\nc2 = Coin()\nc1.sideup = 'Tails'\nprint(c2.sideup)", ["Heads", "Tails", "Hata verir", "None"], "Her örneğin kendi öznitelikleri vardır; c1'i değiştirmek c2'yi etkilemez."),
        C("class Kutu:\n    def __init__(self):\n        self.deger = 1\n\ndef degistir(k):\n    k.deger = 99\n\nb = Kutu()\ndegistir(b)\nprint(b.deger)", ["99", "1", "None", "Hata verir"], "Nesne argüman verilince referansı aktarılır; fonksiyon asıl nesneyi değiştirir."),
        S("Özniteliğin değerini değiştirmeden döndüren metoda ne denir?", ["Accessor metot", "Mutator metot", "Initializer", "Private metot"], "Slayt 22."),
        S("UML sınıf diyagramının orta bölmesinde ne yazar?", ["Veri öznitelikleri", "Sınıf adı", "Metotlar", "Alt sınıflar"], "Üst: ad, orta: öznitelikler, alt: metotlar."),
        S("Problem açıklamasından sınıf bulurken hangisi listeden ÇIKARILMAZ?", ["Problemle ilgili, sınıf temsil eden isimler", "Aynı anlama gelen isimler", "Basit değer temsil eden isimler", "Programın ilgilenmediği öğeler"], "Slayt 30."),
        DY("Bir sınıfın 'bilmesi gereken' şeyler onun metotlarını belirlemeye yardım eder.", false, "Bilmesi gerekenler → veri öznitelikleri; yapması gerekenler → metotlar."),
        E(["Accessor", "değeri döndürür"], ["Mutator", "değeri değiştirir"], ["UML", "sınıf diyagramı"], ["Instance attribute", "örneğe ait öznitelik"]),
      ],
    },
  ],
});
