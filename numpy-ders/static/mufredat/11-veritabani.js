// Bölüm 11 — week5_Database_Programming.md: Veritabanı programlama (76 slayt)
// Örnekler terminalde çalışabilsin diye bellekte (':memory:') SQLite veritabanı kullanır.
UNITELER.push({
  id: "u-vt", renk: "pembe", baslik: "Veritabanı Programlama", kaynak: "week5_Database_Programming", slaytSayisi: 76,
  altBaslik: "Week 5 · SQLite, SQL, CRUD, birincil/yabancı anahtar",
  dersler: [
    {
      id: "vt-giris", baslik: "DBMS, SQL ve tablolar", slayt: [1, 14],
      adimlar: [
        O("Veritabanı yönetim sistemi", [1, 5], `
          <p>Konular: DBMS, tablolar/satırlar/sütunlar, SQLite bağlantısı, tablo oluşturma ve silme, veri ekleme, SELECT, güncelleme ve silme, birincil anahtarlar, hatalar, CRUD ve ilişkisel veri.</p>
          <p>Veriyi klasik dosyalarda saklamanın sınırları vardır: <b>az veri</b> için uygundur, <b>çok veri</b> için pratik değildir; veri büyüdükçe basit işlemler bile zahmetli ve verimsiz hale gelir.</p>
          <p><b>DBMS (veritabanı yönetim sistemi):</b> büyük miktarda veriyle <b>verimli ve düzenli</b> çalışmak için tasarlanmış yazılım.</p>
          <ul><li>Python uygulaması veriyi doğrudan değil <b>DBMS ile iletişim kurarak</b> işler.</li>
          <li>Uygulama DBMS'e bir <b>komut gönderir</b> → DBMS komutu veri üzerinde çalıştırır → <b>sonucu uygulamaya geri gönderir</b> → uygulama sonucu hesaplarında kullanır.</li></ul>`),
        O("SQL ve SQLite", [6, 7], `
          <p><b>SQL (Structured Query Language):</b> DBMS'lerle çalışmak için <b>standart dil</b>. Genel amaçlı programlama dili <b>değildir</b>; ifadeler kuran anahtar kelimelerden oluşur.</p>
          <p>SQL ifadeleri uygulamadan DBMS'e API metot çağrılarıyla <b>string</b> olarak gönderilir ve DBMS'e verisi üzerinde işlem yapması için talimat olur.</p>
          <p>Derste <b>SQLite</b> kullanılır: kullanımı kolaydır ve Python ile birlikte <code>sqlite3</code> modülünde <b>otomatik kurulur</b>: <code>import sqlite3</code></p>`),
        O("Tablolar, satırlar, sütunlar ve veri tipleri", [8, 11], `
          <p>DBMS veriyi bir <b>veritabanında</b> saklar; veritabanı bir veya daha çok <b>tablodan</b> oluşur. Her tablo ilgili verileri <b>satır ve sütunlar</b> halinde tutar.</p>
          <ul><li><b>Satır:</b> tek bir öğe hakkındaki eksiksiz veri kümesi (ör. Kevin Brown, 555-9012).</li><li><b>Sütun:</b> öğe hakkındaki tek bir veri parçası (Name, Phone).</li></ul>
          <table><tr><th>SQLite</th><th>Açıklama</th><th>Python</th></tr><tr><td>NULL</td><td>bilinmeyen değer</td><td>None</td></tr><tr><td>INTEGER</td><td>tam sayı</td><td>int</td></tr><tr><td>REAL</td><td>gerçek sayı</td><td>float</td></tr><tr><td>TEXT</td><td>metin</td><td>str</td></tr><tr><td>BLOB</td><td>ikili büyük nesne</td><td>herhangi bir nesne</td></tr></table>`),
        O("Birincil anahtar, kimlik sütunu, NULL", [12, 14], `
          <ul><li><b>Birincil anahtar (primary key):</b> her satır için <b>benzersiz</b> değer tutan sütun; belirli bir satırı tanımlamak için kullanılır (ör. çalışan kimlik numarası).</li>
          <li><b>Kimlik sütunu (identity column):</b> DBMS tarafından üretilen benzersiz değerler içerir; genellikle <b>otomatik artan</b> tam sayılardır. Tabloda benzersiz değerli bir sütun yoksa kimlik sütunu oluşturulup birincil anahtar yapılır.</li>
          <li>Bir sütunda veri yoksa <b>null</b> denir; bu bazen sorun değildir ama <b>birincil anahtar asla null olamaz</b>. Bir sütunun null olmasını önlemek için kısıt (constraint) uygulanabilir.</li></ul>`),
        S("SQL nedir?", ["DBMS'lerle çalışmak için standart bir dil", "Genel amaçlı bir programlama dili", "Bir Python modülü", "Bir dosya formatı"], "Slayt 6: not used as a general programming language."),
        S("SQLite'ın Python'daki modülünün adı nedir?", ["sqlite3", "sql", "sqlite", "dbms"], "import sqlite3"),
        S("SQLite'taki REAL veri tipi Python'da hangisine karşılık gelir?", ["float", "int", "str", "None"], "Slayt 11."),
        S("Bir tablodaki satır neyi temsil eder?", ["Tek bir öğe hakkındaki eksiksiz veri kümesini", "Tek bir veri parçasını", "Tüm veritabanını", "Bir veri tipini"], "Slayt 8."),
        DY("Birincil anahtar sütunu null değer içerebilir.", false, "Birincil anahtar asla null olamaz."),
        DY("Python uygulaması veriyi doğrudan değiştirmek yerine DBMS ile iletişim kurar.", true, "Slayt 4."),
        E(["NULL", "None"], ["INTEGER", "int"], ["TEXT", "str"], ["Primary key", "satırı benzersiz tanımlar"]),
      ],
    },
    {
      id: "vt-tablo", baslik: "Bağlantı, tablo oluşturma ve veri ekleme", slayt: [15, 27],
      adimlar: [
        O("Veritabanı bağlantısı", [15, 17], `
          <p>SQLite kullanmanın tipik süreci:</p>
          <ol><li>Veritabanına <b>bağlan</b>: <code>conn = sqlite3.connect('contacts.db')</code> — Connection nesnesi döner; veritabanı yoksa <b>oluşturulur</b>.</li>
          <li>Bir <b>cursor</b> al: <code>cur = conn.cursor()</code></li><li>Veritabanı üzerinde <b>işlemleri yap</b></li>
          <li>Değişiklikleri <b>kaydet</b>: <code>conn.commit()</code></li><li>Bağlantıyı <b>kapat</b>: <code>conn.close()</code></li></ol>
          <p>SQL ifadesi çalıştırmak için ifadeyi tutan bir string oluşturulur ve Cursor nesnesinin <code>execute</code> metoduna verilir: <code>cur.execute(SQLstring)</code></p>`),
        O("CREATE TABLE ve DROP TABLE", [18, 22], `
          <p><code>CREATE TABLE TabloAdi (Sutun1 Tip1, Sutun2 Tip2, ...)</code> → <code>CREATE TABLE Inventory (ItemName TEXT, Price REAL)</code></p>
          <ul><li>Birincil anahtar için tipten sonra <code>PRIMARY KEY</code> kısıtı yazılır. SQLite'ta <b>INTEGER PRIMARY KEY</b> olan sütun otomatik olarak <b>otomatik artan kimlik sütunu</b> olur.</li>
          <li><code>NOT NULL</code> kısıtı sütunun boş bırakılamayacağını belirtir.</li>
          <li>Yalnızca yoksa oluştur: <code>CREATE TABLE IF NOT EXISTS ...</code></li>
          <li>Tablo silmek: <code>DROP TABLE Inventory</code> veya <code>DROP TABLE IF EXISTS Inventory</code></li></ul>`,
          { kod: "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('''CREATE TABLE Inventory (ItemID INTEGER PRIMARY KEY NOT NULL,\n                                     ItemName TEXT,\n                                     Price REAL)''')\nconn.commit()\nprint('Tablo oluşturuldu')\nconn.close()" }),
        O("INSERT ile veri eklemek", [23, 27], `
          <p><code>INSERT INTO TabloAdi (Sutun1, Sutun2) VALUES (Deger1, Deger2)</code></p>
          <ul><li>INTEGER PRIMARY KEY değerini yazmazsan SQLite <b>otomatik bir değer üretir</b>.</li>
          <li>Tek INSERT ile <b>birden çok satır</b> eklenebilir: <code>VALUES ("Screwdriver", 4.99), ("Hammer", 12.99)</code></li>
          <li>Bir değişkenin değerini eklemek için <b>soru işareti yer tutucuları</b> kullanılır: <code>cur.execute('INSERT INTO Inventory (ItemName, Price) VALUES (?, ?)', (item_name, price))</code></li></ul>`,
          { kod: "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE Inventory (ItemID INTEGER PRIMARY KEY NOT NULL, ItemName TEXT, Price REAL)')\ncur.execute('''INSERT INTO Inventory (ItemName, Price)\n               VALUES (\"Screwdriver\", 4.99), (\"Hammer\", 12.99)''')\nitem_name = 'Wrench'\nprice = 16.99\ncur.execute('INSERT INTO Inventory (ItemName, Price) VALUES (?, ?)', (item_name, price))\nconn.commit()\ncur.execute('SELECT * FROM Inventory')\nprint(cur.fetchall())\nconn.close()" }),
        SR("SQLite kullanma adımlarını sırala", ["connect", "cursor", "execute", "commit", "close"], [], " → ", "Bağlan → cursor al → işlem yap → commit → kapat"),
        S("sqlite3.connect('contacts.db') çağrıldığında veritabanı yoksa ne olur?", ["Oluşturulur", "Hata fırlatılır", "None döner", "Program durur"], "Slayt 16."),
        S("Değişikliklerin veritabanına kaydedilmesini sağlayan metot hangisidir?", ["conn.commit()", "conn.close()", "cur.execute()", "conn.save()"], "commit değişiklikleri kaydeder."),
        S("SQL ifadesine değişken değeri eklemek için hangi yer tutucu kullanılır?", ["?", "%s", "{}", "$1"], "Slayt 27: question-mark placeholders."),
        C("import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE T (ID INTEGER PRIMARY KEY, Ad TEXT)')\ncur.execute('INSERT INTO T (Ad) VALUES (\"a\"), (\"b\")')\ncur.execute('SELECT * FROM T')\nprint(cur.fetchall())", ["[(1, 'a'), (2, 'b')]", "[('a',), ('b',)]", "[(0, 'a'), (1, 'b')]", "Hata verir"], "INTEGER PRIMARY KEY verilmezse SQLite otomatik artan değer (1, 2, ...) üretir."),
        DY("SQLite'ta INTEGER PRIMARY KEY olan sütun otomatik artan kimlik sütunu olur.", true, "Slayt 19."),
        B("Tabloyu yalnızca yoksa oluştur", "CREATE TABLE IF NOT ___ Inventory (ItemName TEXT)", ["EXISTS"], ["EXISTS", "NULL", "KEY", "TABLE"], "CREATE TABLE IF NOT EXISTS"),
        E(["CREATE TABLE", "tablo oluşturur"], ["DROP TABLE", "tablo siler"], ["INSERT INTO", "satır ekler"], ["NOT NULL", "boş bırakılamaz"]),
      ],
    },
    {
      id: "vt-select", baslik: "SELECT, WHERE, sıralama ve toplama", slayt: [28, 42],
      adimlar: [
        O("SELECT ifadesi", [28, 32], `
          <p><code>SELECT Sutunlar FROM Tablo</code> tablodan belirli satırları getirir.</p>
          <ul><li><code>SELECT Description FROM Products</code> → her satırın Description sütunu</li>
          <li>Birden çok sütun virgülle: <code>SELECT Description, Price FROM Products</code></li><li><code>*</code> tüm sütunları getirir: <code>SELECT * FROM Products</code></li></ul>
          <p>Python'da SELECT <b>iki adımlıdır</b>: (1) ifadeyi <code>execute</code> ile çalıştır — DBMS sonuçları bulur ama programa döndürmez; (2) sonuçları <b>getir (fetch)</b>:</p>
          <ul><li><code>fetchall()</code> → tüm satırları içeren <b>liste</b> döndürür.</li>
          <li><code>fetchone()</code> → her çağrıda <b>tek satırı</b> tuple olarak döndürür; satır kalmayınca <b>None</b>.</li></ul>`,
          { kod: "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE Products (Description TEXT, RetailPrice REAL, UnitsOnHand INTEGER)')\ncur.execute('''INSERT INTO Products VALUES (\"Dark Chocolate Bar\", 2.99, 120),\n               (\"Chocolate Truffles\", 12.99, 40), (\"Mint Bar\", 3.49, 80)''')\ncur.execute('SELECT Description, RetailPrice FROM Products')\nfor row in cur.fetchall():\n    print(f'{row[0]:20} {row[1]:5}')\ncur.execute('SELECT Description FROM Products')\nprint(cur.fetchone())" }),
        O("WHERE ile arama kriteri", [33, 38], `
          <p><code>SELECT Sutunlar FROM Tablo WHERE Kriter</code> → yalnızca kriteri sağlayan satırlar döner.</p>
          <ul><li><code>SELECT * FROM Products WHERE RetailPrice &gt; 10.00</code></li>
          <li>İlişkisel operatörler: <code>&gt; &lt; &gt;= &lt;=</code>, eşittir <code>==</code> veya <code>=</code>, eşit değil <code>!=</code> veya <code>&lt;&gt;</code></li>
          <li>Mantıksal operatörler: <b>AND, OR, NOT</b> — <code>WHERE UnitCost &gt; 3.00 AND UnitsOnHand &lt; 100</code></li>
          <li><b>LIKE</b> alt string arar; <code>%</code> birden çok karakter yerine geçen <b>joker</b>dir: <code>WHERE Description LIKE "%Bar%"</code> → içinde "Bar" geçenler</li></ul>`),
        O("ORDER BY ve toplama fonksiyonları", [39, 42], `
          <p><code>ORDER BY</code> sonuçları sıralar (varsayılan <b>artan</b>, en ucuz önce): <code>SELECT * FROM Products WHERE RetailPrice &gt; 9.00 ORDER BY RetailPrice</code></p>
          <ul><li><code>AVG(sutun)</code> → ortalama · <code>SUM(sutun)</code> → toplam</li>
          <li><code>MIN(sutun)</code>, <code>MAX(sutun)</code> → en küçük / en büyük</li>
          <li><code>COUNT(*)</code> → satır sayısı; WHERE ile birlikte de kullanılır</li></ul>`,
          { kod: "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE Products (Description TEXT, RetailPrice REAL)')\ncur.execute('INSERT INTO Products VALUES (\"Dark Bar\", 2.99), (\"Truffles\", 12.99), (\"Mint Bar\", 3.49)')\ncur.execute('SELECT Description FROM Products WHERE Description LIKE \"%Bar%\" ORDER BY RetailPrice')\nprint(cur.fetchall())\ncur.execute('SELECT COUNT(*), MAX(RetailPrice) FROM Products')\nprint(cur.fetchone())" }),
        S("fetchall() ne döndürür?", ["SELECT sonucundaki tüm satırları içeren bir liste", "Tek bir satır", "Satır sayısı", "Sütun adları"], "Slayt 31."),
        S("fetchone() döndürecek satır kalmayınca ne döndürür?", ["None", "Boş liste", "-1", "Hata fırlatır"], "Slayt 32: while (row != None)."),
        S("İçinde 'Bar' geçen açıklamaları bulan kriter hangisidir?", ["Description LIKE \"%Bar%\"", "Description == \"Bar\"", "Description LIKE \"Bar\"", "Description IN \"Bar\""], "% joker karakterdir."),
        S("Bir tablodaki satır sayısını hangi SQL fonksiyonu verir?", ["COUNT(*)", "SUM(*)", "AVG(*)", "LEN(*)"], "Slayt 42."),
        C("import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE P (Ad TEXT, Fiyat REAL)')\ncur.execute('INSERT INTO P VALUES (\"a\", 5.0), (\"b\", 15.0), (\"c\", 25.0)')\ncur.execute('SELECT Ad FROM P WHERE Fiyat > 10.0')\nprint(cur.fetchall())", ["[('b',), ('c',)]", "[('a',)]", "['b', 'c']", "[('a',), ('b',), ('c',)]"], "Yalnızca Fiyat > 10 olan satırlar döner; her satır bir tuple'dır."),
        Y("import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE P (Fiyat REAL)')\ncur.execute('INSERT INTO P VALUES (4.0), (6.0), (11.0)')\ncur.execute('SELECT SUM(Fiyat) FROM P')\nprint(cur.fetchone()[0])", "21.0", "SUM sütundaki değerlerin toplamını verir."),
        DY("ORDER BY varsayılan olarak azalan sırada sıralar.", false, "Varsayılan artandır (en düşük önce)."),
        E(["SELECT", "satırları getirir"], ["WHERE", "arama kriteri"], ["ORDER BY", "sıralar"], ["LIKE", "alt string arar"]),
        K("sql-sorgu", [28, 42]),
      ],
    },
    {
      id: "vt-update", baslik: "UPDATE, DELETE, anahtarlar ve hatalar", slayt: [43, 60],
      adimlar: [
        O("UPDATE ile satır güncellemek", [43, 48], `
          <p><code>UPDATE Tablo SET Sutun = Deger WHERE Kriter</code> var olan satırların içeriğini değiştirir.</p>
          <ul><li><code>UPDATE Products SET RetailPrice = 13.99 WHERE Description == "Chocolate Truffles"</code></li>
          <li>Birden çok sütun virgülle: <code>SET RetailPrice = 8.99, UnitsOnHand = 100</code></li>
          <li>Güncellenen satır sayısı Cursor'ın <code>rowcount</code> özniteliğindedir.</li>
          <li><b>Dikkat!</b> WHERE'i unutursan <b>tablodaki her satır</b> güncellenir: <code>UPDATE Products SET UnitsOnHand = 0</code></li></ul>`),
        O("DELETE ile satır silmek", [49, 52], `
          <p><code>DELETE FROM Tablo WHERE Kriter</code> bir veya daha çok satırı siler.</p>
          <ul><li><code>DELETE FROM Products WHERE ProductID == 10</code></li><li><code>DELETE FROM Products WHERE Description LIKE "%Bar"</code> → "Bar" ile bitenler</li>
          <li>Silinen satır sayısı yine <code>rowcount</code> ile alınır.</li>
          <li><b>Dikkat!</b> WHERE olmadan <code>DELETE FROM Products</code> <b>her satırı siler</b>.</li></ul>`,
          { kod: "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE Products (Description TEXT, Units INTEGER)')\ncur.execute('INSERT INTO Products VALUES (\"Mint Bar\", 5), (\"Truffles\", 8), (\"Dark Bar\", 2)')\ncur.execute('UPDATE Products SET Units = 0 WHERE Description LIKE \"%Bar%\"')\nprint('güncellenen:', cur.rowcount)\ncur.execute('DELETE FROM Products WHERE Units == 0')\nprint('silinen:', cur.rowcount)\nconn.commit()\ncur.execute('SELECT * FROM Products')\nprint(cur.fetchall())" }),
        O("Birincil anahtarlar hakkında daha fazlası", [53, 57], `
          <ul><li>Birincil anahtar <b>değer tutmalıdır</b> (NULL olamaz) ve her satırda <b>benzersiz</b> olmalıdır.</li>
          <li>Bir tablonun <b>yalnızca bir</b> birincil anahtarı olur; ama birden çok sütun birleştirilip <b>bileşik anahtar (composite key)</b> oluşturulabilir: <code>PRIMARY KEY(RoomNumber, Building)</code></li>
          <li>SQLite tablolarında otomatik artan bir <b>RowID</b> sütunu vardır; yeni satır, en büyük RowID'den 1 fazla değer alır.</li>
          <li>INTEGER PRIMARY KEY olarak belirlenen sütun aslında <b>RowID'nin takma adıdır</b>.</li>
          <li>Herhangi bir tip birincil anahtar olabilir (ör. <code>EmployeeID TEXT PRIMARY KEY NOT NULL</code>); INTEGER olmayan anahtarda değeri <b>satır eklerken sen vermelisin</b> ve NOT NULL kısıtını kullanmalısın.</li></ul>`),
        O("Veritabanı hatalarını işlemek", [58, 60], `
          <p><code>sqlite3</code> modülü, bir veritabanı hatası oluştuğunda fırlatılan <b>Error</b> istisnasını tanımlar. Veritabanı kodunu <b>try/except</b> içinde yazmak iyi bir uygulamadır:</p>
          <pre class="kod-blok soru-kod">conn = None
try:
    conn = sqlite3.connect(DatabaseName)
    cur = conn.cursor()
    # veritabanı işlemleri
except sqlite3.Error:
    # veritabanı hatasına yanıt ver
except Exception:
    # genel hataya yanıt ver
finally:
    if conn != None:
        conn.close()</pre>
          <p><b>CRUD</b>, bir veritabanı uygulamasının dört temel işlemidir: <b>Create</b> (INSERT), <b>Read</b> (SELECT), <b>Update</b> (UPDATE), <b>Delete</b> (DELETE).</p>`,
          { kod: "import sqlite3\nconn = None\ntry:\n    conn = sqlite3.connect(':memory:')\n    cur = conn.cursor()\n    cur.execute('SELECT * FROM OlmayanTablo')\nexcept sqlite3.Error as err:\n    print('Veritabanı hatası:', err)\nfinally:\n    if conn != None:\n        conn.close()" }),
        S("UPDATE Products SET UnitsOnHand = 0 ifadesi (WHERE olmadan) ne yapar?", ["Tablodaki her satırı günceller", "Hiçbir satırı güncellemez", "Hata verir", "Yalnızca ilk satırı günceller"], "Slayt 48: WHERE'i unutma!"),
        S("Güncellenen veya silinen satır sayısı nereden alınır?", ["Cursor'ın rowcount özniteliği", "conn.count()", "fetchone()", "len(cur)"], "Slayt 47 ve 52."),
        S("CRUD'daki 'R' (Read) hangi SQL ifadesiyle yapılır?", ["SELECT", "INSERT", "UPDATE", "DELETE"], "Slayt 60."),
        Y("import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE T (x INTEGER)')\ncur.execute('INSERT INTO T VALUES (1), (2), (3), (4)')\ncur.execute('DELETE FROM T WHERE x > 2')\nprint(cur.rowcount)", "2", "x > 2 olan iki satır (3 ve 4) silindi."),
        C("import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE T (ID INTEGER PRIMARY KEY, Ad TEXT)')\ncur.execute('INSERT INTO T VALUES (1, \"a\")')\ntry:\n    cur.execute('INSERT INTO T VALUES (1, \"b\")')\n    print('eklendi')\nexcept sqlite3.Error:\n    print('hata')", ["hata", "eklendi", "eklendi\nhata", "Hiçbir şey"], "Birincil anahtar benzersiz olmalı; aynı ID ikinci kez eklenemez."),
        DY("Bir tablonun birden çok birincil anahtarı olabilir.", false, "Yalnızca bir birincil anahtar olur; birden çok sütun bileşik anahtar oluşturabilir."),
        E(["Create", "INSERT"], ["Read", "SELECT"], ["Update", "UPDATE"], ["Delete", "DELETE"]),
        B("Veritabanı hatasını yakala", "except sqlite3.___:\n    print('Veritabanı hatası')", ["Error"], ["Error", "Exception", "Cursor", "commit"], "sqlite3 modülü Error istisnasını tanımlar."),
      ],
    },
    {
      id: "vt-iliski", baslik: "İlişkisel veri ve yabancı anahtarlar", slayt: [61, 76],
      adimlar: [
        O("Neden ilişkisel tasarım?", [61, 64], `
          <p>İlişkisel veritabanında bir tablonun sütunu <b>başka tabloların sütunlarıyla ilişkilendirilebilir</b>. İlişkisel tasarım veritabanındaki <b>tekrarlanan veriyi azaltır</b>.</p>
          <p>Veri tekrarının sorunları: <b>boşa harcanan depolama</b> ve <b>tutarsız, çelişkili veri</b>.</p>
          <p>Örnek: Employees tablosunda Department ve City sütunları sürekli tekrarlanır ("Marketing, New York City" iki kez). İlişkisel tasarımda veri üç tabloya ayrılır: <b>Departments</b> (DepartmentID, DepartmentName), <b>Locations</b> (LocationID, City), <b>Employees</b> (EmployeeID, Name, Position, DepartmentID, LocationID). Çalışan satırında departman adı yerine <b>DepartmentID</b>, şehir yerine <b>LocationID</b> saklanır.</p>`),
        O("Yabancı anahtarlar", [65, 68], `
          <p><b>Yabancı anahtar (foreign key):</b> bir tabloda, <b>başka bir tablonun birincil anahtarını</b> referans eden sütun.</p>
          <ul><li>Employees'e satır eklenince DepartmentID değeri Departments tablosunda <b>var olan</b> bir değerle eşleşmelidir; bu iki tablo arasında <b>ilişki</b> kurar. LocationID için de aynısı geçerlidir.</li></ul>
          <p><b>Varlık-ilişki diyagramı (ERD):</b> 1 "bir", ∞ "çok" demektir. 1 → ∞ <b>bire-çok</b>, ∞ → 1 <b>çoka-bir</b> ilişkidir (bir departmanda çok çalışan vardır).</p>`),
        O("SQL'de yabancı anahtar oluşturmak", [69, 73], `
          <p><code>FOREIGN KEY(DepartmentID) REFERENCES Departments(DepartmentID)</code> tablo kısıtı yabancı anahtarı belirler ve iki tablo arasında <b>referans bütünlüğü (referential integrity)</b> sağlar: Employees'e satır eklenince değerlerin geçerli olduğu kontrol edilir.</p>
          <p>SQLite <b>varsayılan olarak</b> yabancı anahtar bütünlüğünü <b>zorlamaz</b>; açmak için: <code>cur.execute('PRAGMA foreign_keys=ON')</code></p>
          <p>Hatırla: yeni satırdaki her yabancı anahtar referans ettiği tablodan <b>geçerli veri</b> içermeli; güncellemede yabancı anahtar <b>geçersiz değere</b> değiştirilemez; başka tablolardaki satırlarca referans edilen bir satır <b>silinemez</b>.</p>`,
          { kod: "import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('PRAGMA foreign_keys=ON')\ncur.execute('CREATE TABLE Departments(DepartmentID INTEGER PRIMARY KEY NOT NULL, DepartmentName TEXT)')\ncur.execute('''CREATE TABLE Employees(EmployeeID INTEGER PRIMARY KEY NOT NULL, Name TEXT,\n               DepartmentID INTEGER,\n               FOREIGN KEY(DepartmentID) REFERENCES Departments(DepartmentID))''')\ncur.execute('INSERT INTO Departments VALUES (1, \"Marketing\")')\ncur.execute('INSERT INTO Employees VALUES (1, \"Jack Smith\", 1)')\ntry:\n    cur.execute('INSERT INTO Employees VALUES (2, \"Renee\", 99)')\nexcept sqlite3.Error as err:\n    print('Reddedildi:', err)" }),
        O("Birden çok tablodan sütun almak", [74, 76], `
          <p>Birden çok tablodan sütun almak için sütunların <b>tam nitelikli adları</b> kullanılır: <code>TabloAdi.SutunAdi</code></p>
          <pre class="kod-blok soru-kod">SELECT Employees.Name, Departments.DepartmentName, Locations.City
FROM Employees, Departments, Locations
WHERE Employees.DepartmentID == Departments.DepartmentID AND
      Employees.LocationID == Locations.LocationID</pre>
          <p>Bölüm özeti: DBMS, tablolar, SQLite bağlantısı, tablo oluşturma/silme, INSERT, SELECT, UPDATE, DELETE, birincil anahtarlar, hata işleme, CRUD ve ilişkisel veri.</p>`,
          { kod: "import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE Departments(DepartmentID INTEGER PRIMARY KEY, DepartmentName TEXT)')\ncur.execute('CREATE TABLE Employees(EmployeeID INTEGER PRIMARY KEY, Name TEXT, DepartmentID INTEGER)')\ncur.execute('INSERT INTO Departments VALUES (1, \"Marketing\"), (2, \"Accounting\")')\ncur.execute('INSERT INTO Employees VALUES (1, \"Jack\", 1), (2, \"Sonia\", 2), (3, \"Renee\", 1)')\ncur.execute('''SELECT Employees.Name, Departments.DepartmentName FROM Employees, Departments\n               WHERE Employees.DepartmentID == Departments.DepartmentID''')\nprint(cur.fetchall())" }),
        S("Yabancı anahtar (foreign key) nedir?", ["Başka bir tablonun birincil anahtarını referans eden sütun", "Tablodaki ilk sütun", "Otomatik artan sütun", "Şifrelenmiş sütun"], "Slayt 65."),
        S("İlişkisel tasarımın veri tekrarını azaltmasının faydası hangisidir?", ["Depolama israfını ve tutarsız veriyi önler", "Sorguları daha uzun yapar", "Birincil anahtarı gereksiz kılar", "Tabloları birleştirir"], "Slayt 61."),
        S("SQLite'ta yabancı anahtar zorlamasını açan ifade hangisidir?", ["PRAGMA foreign_keys=ON", "ENABLE FOREIGN KEYS", "SET foreign_keys TRUE", "FOREIGN KEY ON"], "Slayt 72."),
        S("ERD'de 1 → ∞ ne anlama gelir?", ["Bire-çok ilişki", "Çoka-bir ilişki", "Bire-bir ilişki", "İlişki yok"], "Slayt 68."),
        C("import sqlite3\ncur = sqlite3.connect(':memory:').cursor()\ncur.execute('CREATE TABLE D(ID INTEGER PRIMARY KEY, Ad TEXT)')\ncur.execute('CREATE TABLE E(Ad TEXT, DID INTEGER)')\ncur.execute('INSERT INTO D VALUES (1, \"IT\"), (2, \"HR\")')\ncur.execute('INSERT INTO E VALUES (\"Ali\", 2)')\ncur.execute('SELECT E.Ad, D.Ad FROM E, D WHERE E.DID == D.ID')\nprint(cur.fetchall())", ["[('Ali', 'HR')]", "[('Ali', 'IT')]", "[('Ali', 2)]", "[]"], "E.DID == D.ID koşuluyla Ali'nin departmanı (2 → HR) eşleşir."),
        DY("SQLite varsayılan olarak yabancı anahtar bütünlüğünü zorlar.", false, "Varsayılan olarak zorlamaz; PRAGMA foreign_keys=ON gerekir."),
        DY("Başka tablolardaki satırlarca referans edilen bir satır silinemez.", true, "Slayt 73."),
        E(["Foreign key", "başka tablonun PK'sini referans eder"], ["Referential integrity", "geçerli referans garantisi"], ["Tablo.Sutun", "tam nitelikli ad"], ["Composite key", "birden çok sütunlu anahtar"]),
      ],
    },
  ],
});
