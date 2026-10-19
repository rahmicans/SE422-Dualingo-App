// Bölüm 9 — week4_Inheritance_Polymorph.md: Kalıtım ve çok biçimlilik (14 slayt)
UNITELER.push({
  id: "u-kalitim", renk: "mor", baslik: "Kalıtım ve Çok Biçimlilik", kaynak: "week4_Inheritance_Polymorph", slaytSayisi: 14,
  altBaslik: "Week 4 · Üst/alt sınıf, \"is a\" ilişkisi, override, isinstance",
  dersler: [
    {
      id: "kalitim-giris", baslik: "Kalıtım", slayt: [1, 10],
      adimlar: [
        O("Genel ve özel nesneler", [1, 4], `
          <p>Bölümün konuları: kalıtıma giriş ve çok biçimlilik.</p>
          <p>Gerçek dünyada pek çok nesne, daha genel bir nesnenin <b>özelleşmiş</b> halidir. Çekirgeler ve arılar özel böcek türleridir: tüm böceklerin genel özelliklerine sahiptirler, ayrıca kendilerine özgü özellikleri vardır.</p>
          <ul><li>Çekirge <b>zıplayabilir</b>.</li><li>Arı <b>sokabilir, bal yapabilir, kovan kurabilir</b>.</li></ul>`),
        O("\"Is a\" ilişkisi, üst sınıf ve alt sınıf", [5, 7], `
          <p><b>"Is a" ilişkisi:</b> bir nesne diğerinin özelleşmiş hali olduğunda vardır. Özel nesne genel nesnenin <b>tüm özelliklerine artı kendine özgü</b> özelliklere sahiptir: dikdörtgen <b>bir</b> şekildir, papatya <b>bir</b> çiçektir.</p>
          <p><b>Kalıtım (inheritance)</b> sınıflar arasında "is a" ilişkisi kurar:</p>
          <ul><li><b>Üst sınıf (superclass / base class):</b> genel sınıf</li>
          <li><b>Alt sınıf (subclass / derived class):</b> özelleşmiş sınıf; üst sınıfın genişletilmiş halidir. Üst sınıfın <b>özniteliklerini ve metotlarını miras alır</b>, yenileri eklenebilir.</li></ul>
          <p>Örnek: arabalar, kamyonetler ve SUV'lar <b>otomobildir</b>; marka, model yılı, kilometre ve fiyat taban sınıfın öznitelikleridir. Ek olarak arabanın <b>kapı sayısı</b>, kamyonetin <b>çekiş tipi</b>, SUV'un <b>yolcu kapasitesi</b> vardır.</p>`),
        O("Python'da alt sınıf tanımlamak ve UML", [8, 10], `
          <ul><li>Kalıtımı göstermek için üst sınıfın adı alt sınıf adından sonra <b>parantez içine</b> yazılır: <code>class Car(Automobile):</code></li>
          <li>Alt sınıfın başlatıcı metodu önce <b>üst sınıfın başlatıcısını çağırır</b>, sonra kendine özgü öznitelikleri başlatır.</li>
          <li>Kendine özgü metotlar eklenir.</li></ul>
          <p>UML diyagramında kalıtım, <b>alt sınıftan üst sınıfa</b> doğru <b>içi boş ok uçlu</b> bir çizgiyle gösterilir (Car, Truck, SUV → Automobile).</p>`,
          { kod: "class Automobile:\n    def __init__(self, make, model, mileage, price):\n        self.__make = make\n        self.__model = model\n        self.__mileage = mileage\n        self.__price = price\n    def get_make(self):\n        return self.__make\n\nclass Car(Automobile):\n    def __init__(self, make, model, mileage, price, doors):\n        Automobile.__init__(self, make, model, mileage, price)\n        self.__doors = doors\n    def get_doors(self):\n        return self.__doors\n\ncar = Car('BMW', 2001, 70000, 15000.0, 4)\nprint(car.get_make(), car.get_doors())" }),
        C("class Insect:\n    def kanat(self):\n        return 'var'\n\nclass Bee(Insect):\n    def sok(self):\n        return 'sokar'\n\nb = Bee()\nprint(b.kanat(), b.sok())", ["var sokar", "sokar", "Hata verir", "var"], "Alt sınıf üst sınıfın metotlarını miras alır ve kendi metotlarını ekler."),
        C("class A:\n    def __init__(self):\n        self.x = 1\n\nclass B(A):\n    def __init__(self):\n        A.__init__(self)\n        self.y = 2\n\nb = B()\nprint(b.x + b.y)", ["3", "2", "1", "Hata verir"], "B'nin başlatıcısı önce A'nınkini çağırır (x), sonra y'yi ekler."),
        S("class Car(Automobile): satırında üst sınıf hangisidir?", ["Automobile", "Car", "İkisi de", "Hiçbiri"], "Üst sınıf parantez içine yazılır."),
        S("Hangisi bir \"is a\" ilişkisidir?", ["Papatya bir çiçektir", "Arabanın motoru vardır", "Öğrenci kitap okur", "Ev odalardan oluşur"], "Slayt 5: Daisy is a flower."),
        DY("Alt sınıf, üst sınıfın öznitelik ve metotlarını miras alır ve yenilerini ekleyebilir.", true, "Slayt 6."),
        DY("UML'de kalıtım oku üst sınıftan alt sınıfa doğru çizilir.", false, "Ok alt sınıftan üst sınıfa doğrudur."),
        E(["Superclass", "genel sınıf"], ["Subclass", "özelleşmiş sınıf"], ["Inheritance", "\"is a\" ilişkisi kurar"]),
        K("kalitim", [8, 10]),
      ],
    },
    {
      id: "kalitim-poly", baslik: "Çok biçimlilik ve isinstance", slayt: [11, 14],
      adimlar: [
        O("Çok biçimlilik (polymorphism)", [11, 12], `
          <p><b>Çok biçimlilik:</b> bir nesnenin <b>farklı biçimler alabilme</b> yeteneği. Temel bileşenleri:</p>
          <ul><li>Üst sınıfta bir metot tanımlayıp alt sınıfta onu <b>geçersiz kılmak (override)</b>: alt sınıf <b>aynı adlı</b> bir metot tanımlar.</li>
          <li>Metodu çağıran nesnenin <b>tipine göre</b> doğru sürümün çağrılması.</li></ul>
          <p>Önceki örneklerde <code>__init__</code> override edilmişti (üst sınıfın __init__'i çağrılıp üzerine eklendi). Aynısı her metot için yapılabilir: metot üst sınıftaki karşılığını çağırıp ekleme yapabilir veya <b>tamamen farklı</b> bir şey yapabilir.</p>`,
          { kod: "class Mammal:\n    def __init__(self, species):\n        self.__species = species\n    def make_sound(self):\n        print('Grrrrr')\n\nclass Dog(Mammal):\n    def __init__(self):\n        Mammal.__init__(self, 'Dog')\n    def make_sound(self):\n        print('Woof! Woof!')\n\nfor animal in [Mammal('regular'), Dog()]:\n    animal.make_sound()" }),
        O("isinstance fonksiyonu", [13, 14], `
          <p>Çok biçimlilik program tasarımında büyük esneklik sağlar. Ancak bir metot, doğru sınıfın örneği olmayan bir nesne alırsa <b>AttributeError</b> istisnası fırlatılabilir.</p>
          <p><code>isinstance(nesne, sinif)</code> nesnenin bir sınıfın örneği olup olmadığını belirler. Alt sınıfın örneği, <b>üst sınıfın da örneği</b> sayılır.</p>
          <p>Bölüm özeti: "is a" ilişkileri, alt ve üst sınıflar, alt sınıf ve başlatıcı tanımlama, UML'de kalıtım, çok biçimlilik ve isinstance.</p>`,
          { kod: "class Mammal:\n    pass\n\nclass Dog(Mammal):\n    pass\n\nd = Dog()\nprint(isinstance(d, Dog), isinstance(d, Mammal))\nprint(isinstance(Mammal(), Dog))" }),
        C("class Mammal:\n    def sound(self):\n        print('Grrrrr')\n\nclass Dog(Mammal):\n    def sound(self):\n        print('Woof!')\n\nDog().sound()", ["Woof!", "Grrrrr", "Grrrrr\nWoof!", "Hata verir"], "Alt sınıf metodu override eder; Dog nesnesi kendi sürümünü çağırır."),
        C("class Mammal:\n    def sound(self):\n        print('Grrrrr')\n\nclass Cat(Mammal):\n    pass\n\nCat().sound()", ["Grrrrr", "Hata verir", "None", "Meow"], "Override edilmeyen metot üst sınıftan miras alınır."),
        C("class A:\n    def ad(self):\n        return 'A'\n\nclass B(A):\n    def ad(self):\n        return A.ad(self) + 'B'\n\nprint(B().ad())", ["AB", "B", "A", "BA"], "Override eden metot üst sınıftaki sürümü çağırıp üzerine ekleyebilir."),
        C("class Mammal:\n    pass\n\nclass Dog(Mammal):\n    pass\n\nprint(isinstance(Dog(), Mammal))", ["True", "False", "Dog", "Hata verir"], "Alt sınıfın örneği üst sınıfın da örneğidir."),
        S("Bir metodun, nesnenin tipine göre farklı sürümünün çağrılmasına ne denir?", ["Çok biçimlilik (polymorphism)", "Kapsülleme", "Serileştirme", "Özyineleme"], "Slayt 11."),
        S("Uygun olmayan sınıftan bir nesne metoda verilirse hangi istisna oluşabilir?", ["AttributeError", "KeyError", "IndexError", "ValueError"], "Slayt 13."),
        DY("Override eden metot, üst sınıftaki sürümden tamamen farklı bir şey yapabilir.", true, "Slayt 12."),
        E(["Override", "aynı adlı metodu yeniden tanımlamak"], ["isinstance", "örneği mi?"], ["AttributeError", "metot/öznitelik yok"]),
      ],
    },
  ],
});
