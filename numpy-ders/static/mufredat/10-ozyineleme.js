// Bölüm 10 — week5_Recursion.md: Özyineleme (23 slayt)
UNITELER.push({
  id: "u-ozyineleme", renk: "turuncu", baslik: "Özyineleme", kaynak: "week5_Recursion", slaytSayisi: 23,
  altBaslik: "Week 5 · Temel durum, faktöriyel, Fibonacci, EBOB, Hanoi",
  dersler: [
    {
      id: "ozyineleme-giris", baslik: "Özyinelemeye giriş", slayt: [1, 12],
      adimlar: [
        O("Kendini çağıran fonksiyon", [1, 5], `
          <p>Bölümün konuları: özyinelemeye giriş, özyinelemeyle problem çözme, özyinelemeli algoritma örnekleri.</p>
          <p><b>Özyinelemeli (recursive) fonksiyon:</b> <b>kendini çağıran</b> fonksiyon.</p>
          <ul><li>Kaç kez tekrar edeceğini <b>kontrol edecek bir yolu</b> olmalıdır; yoksa sonsuza kadar kendini çağırır.</li>
          <li>Genellikle fonksiyonun ne zaman <b>değer döndüreceğini</b>, ne zaman <b>kendini çağıracağını</b> belirleyen bir if-else içerir.</li>
          <li><b>Özyineleme derinliği:</b> fonksiyonun kendini kaç kez çağırdığı.</li></ul>
          <p>Bir özyinelemeli çağrı bitince kontrol, <b>çağrıdan hemen sonraki noktaya</b> geri döner.</p>`,
          { kod: "def message(times):\n    if times > 0:\n        print('This is a recursive function.')\n        message(times - 1)\n\nmessage(3)" }),
        O("Özyinelemeyle problem çözmek", [6, 7], `
          <ul><li>Özyineleme tekrarlı problemleri çözmek için güçlü bir araçtır ama <b>hiçbir zaman zorunlu değildir</b>: özyinelemeyle çözülebilen her problem <b>döngüyle de</b> çözülebilir.</li>
          <li>Özyinelemeli algoritmalar genellikle döngülü olanlardan <b>daha az verimlidir</b>; her fonksiyon çağrısının ek yükü vardır.</li></ul>
          <p>Genel taslak:</p>
          <ul><li>Problem özyineleme olmadan <b>hemen çözülebiliyorsa</b> çöz ve döndür → <b>temel durum (base case)</b></li>
          <li>Değilse problemi <b>aynı yapıda daha küçük bir probleme</b> indirge ve fonksiyonu tekrar çağır → <b>özyinelemeli durum (recursive case)</b></li></ul>`),
        O("Faktöriyel", [8, 11], `
          <p>Matematikte n! bir sayının faktöriyelidir: <b>n = 0 için n! = 1</b>; <b>n &gt; 0 için n! = 1 × 2 × 3 × … × n</b>.</p>
          <ul><li>n = 0 → <b>temel durum</b></li><li>n &gt; 0 → <b>özyinelemeli durum</b>: <code>factorial(n) = n × factorial(n-1)</code></li></ul>
          <p>Her çağrı problemi küçültür (parametre bir azalır); sonunda özyineleme gerektirmeyen temel duruma ulaşılır ve özyineleme durur.</p>`,
          { kod: "def factorial(num):\n    if num == 0:\n        return 1\n    else:\n        return num * factorial(num - 1)\n\nprint(factorial(4))" }),
        O("Doğrudan ve dolaylı özyineleme", [12, 12], `
          <ul><li><b>Doğrudan özyineleme:</b> fonksiyon <b>kendini doğrudan</b> çağırır (şimdiye kadarki tüm örnekler).</li>
          <li><b>Dolaylı özyineleme:</b> A fonksiyonu B'yi çağırır, B de tekrar A'yı çağırır.</li></ul>`,
          { kod: "def cift_mi(n):\n    if n == 0:\n        return True\n    return tek_mi(n - 1)\n\ndef tek_mi(n):\n    if n == 0:\n        return False\n    return cift_mi(n - 1)\n\nprint(cift_mi(4), tek_mi(7))" }),
        Y("def factorial(num):\n    if num == 0:\n        return 1\n    return num * factorial(num - 1)\n\nprint(factorial(5))", "120", "5 × 4 × 3 × 2 × 1 × 1 = 120"),
        C("def message(times):\n    if times > 0:\n        print('Hi')\n        message(times - 1)\n\nmessage(2)", ["Hi\nHi", "Hi", "Hi\nHi\nHi", "Sonsuz döngü"], "times 2 → 1 → 0; iki kez yazdırır."),
        Y("def geri_say(n):\n    if n == 0:\n        print('Bitti')\n    else:\n        print(n, end=' ')\n        geri_say(n - 1)\n\ngeri_say(3)", "3 2 1 Bitti", "Her çağrı n'i bir azaltır; n == 0 temel durumdur."),
        S("Faktöriyel fonksiyonunda temel durum hangisidir?", ["n == 0 → 1 döndür", "n > 0", "n * factorial(n - 1)", "n == 1 → 0 döndür"], "Slayt 8."),
        S("Özyinelemeli algoritmalar genellikle döngülü olanlardan neden daha az verimlidir?", ["Her fonksiyon çağrısının ek yükü olduğu için", "Daha az bellek kullandıkları için", "Python özyinelemeyi desteklemediği için", "Daha kısa oldukları için"], "Slayt 6."),
        DY("Özyinelemeyle çözülebilen her problem döngüyle de çözülebilir.", true, "Slayt 6: recursion is never required."),
        DY("A fonksiyonunun B'yi, B'nin de A'yı çağırmasına doğrudan özyineleme denir.", false, "Buna dolaylı (indirect) özyineleme denir."),
        E(["Base case", "özyinelemesiz çözülür"], ["Recursive case", "küçük problemle kendini çağırır"], ["Depth of recursion", "kendini çağırma sayısı"], ["Indirect recursion", "A → B → A"]),
        K("faktoriyel", [8, 11]),
      ],
    },
    {
      id: "ozyineleme-alg", baslik: "Özyinelemeli algoritmalar", slayt: [13, 23],
      adimlar: [
        O("Liste aralığını toplamak", [13, 14], `
          <p>Fonksiyon; toplanacak elemanları içeren listeyi, başlangıç indeksini ve bitiş indeksini alır.</p>
          <ul><li><b>Temel durum:</b> başlangıç &gt; bitiş ise 0 döndür.</li>
          <li><b>Özyinelemeli durum:</b> <code>mevcut_sayi + range_sum(liste, start+1, end)</code></li></ul>`,
          { kod: "def range_sum(num_list, start, end):\n    if start > end:\n        return 0\n    else:\n        return num_list[start] + range_sum(num_list, start + 1, end)\n\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(range_sum(numbers, 2, 5))" }),
        O("Fibonacci ve EBOB", [15, 16], `
          <p><b>Fibonacci serisinin iki temel durumu</b> vardır: n = 0 ise Fib(n) = 0; n = 1 ise Fib(n) = 1. n &gt; 1 ise <code>Fib(n) = Fib(n-1) + Fib(n-2)</code>. Seri: 0, 1, 1, 2, 3, 5, 8, 13…</p>
          <p><b>En büyük ortak bölen (GCD / EBOB):</b> x, y'ye tam bölünüyorsa <code>gcd(x, y) = y</code>; değilse <code>gcd(x, y) = gcd(y, x'in y'ye bölümünden kalan)</code>.</p>`,
          { kod: "def fib(n):\n    if n == 0:\n        return 0\n    elif n == 1:\n        return 1\n    else:\n        return fib(n - 1) + fib(n - 2)\n\ndef gcd(x, y):\n    if x % y == 0:\n        return y\n    else:\n        return gcd(y, x % y)\n\nprint([fib(i) for i in range(8)])\nprint(gcd(49, 28))" }),
        O("Hanoi kuleleri", [17, 21], `
          <p>Özyinelemenin gücünü göstermek için sık kullanılan matematik oyunu: <b>üç çubuk</b> ve küçülen boyutlarda diskler. Amaç diskleri <b>en soldan en sağdaki</b> çubuğa taşımak. Kurallar:</p>
          <ul><li>Aynı anda <b>yalnızca bir disk</b> taşınabilir.</li><li>Bir disk <b>daha küçük bir diskin üstüne</b> konamaz.</li><li>Taşınırken dışında tüm diskler bir çubukta olmalıdır.</li></ul>
          <p>Üç disk 7 hamlede taşınır. Özyinelemeli çözüm (n diski 1'den 3'e, 2'yi geçici kullanarak):</p>
          <ul><li>n == 1 ise: diski 1'den 3'e taşı</li>
          <li>Değilse: n-1 diski 1'den 2'ye taşı (3'ü kullanarak) → kalan diski 1'den 3'e taşı → n-1 diski 2'den 3'e taşı (1'i kullanarak)</li></ul>`,
          { kod: "def move_discs(num, from_peg, to_peg, temp_peg):\n    if num > 0:\n        move_discs(num - 1, from_peg, temp_peg, to_peg)\n        print('Move a disc from peg', from_peg, 'to peg', to_peg)\n        move_discs(num - 1, temp_peg, to_peg, from_peg)\n\nmove_discs(3, 1, 3, 2)" }),
        O("Özyineleme mi, döngü mü?", [22, 23], `
          <p>Özyineleme kullanmama nedenleri:</p>
          <ul><li><b>Daha az verimlidir</b>: döngüde gerekmeyen fonksiyon çağrısı yükü vardır.</li>
          <li>Döngülü çözüm genellikle <b>daha anlaşılırdır</b>.</li></ul>
          <p>Ama bazı problemler özyinelemeyle <b>daha kolay</b> çözülür; örn. matematiksel tanımı özyinelemeye uygun olan <b>Fibonacci</b>.</p>
          <p>Bölüm özeti: özyinelemenin tanımı, temel durumun önemi, problemi küçülten özyinelemeli durum, doğrudan/dolaylı özyineleme, örnek algoritmalar, özyineleme ve döngü karşılaştırması.</p>`),
        Y("def range_sum(lst, start, end):\n    if start > end:\n        return 0\n    return lst[start] + range_sum(lst, start + 1, end)\n\nprint(range_sum([1, 2, 3, 4, 5, 6], 2, 4))", "12", "İndeks 2, 3, 4: 3 + 4 + 5 = 12."),
        Y("def fib(n):\n    if n == 0:\n        return 0\n    elif n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(7))", "13", "0, 1, 1, 2, 3, 5, 8, 13 → fib(7) = 13."),
        Y("def gcd(x, y):\n    if x % y == 0:\n        return y\n    return gcd(y, x % y)\n\nprint(gcd(49, 28))", "7", "49 % 28 = 21 → gcd(28, 21) → 28 % 21 = 7 → gcd(21, 7) → 7."),
        S("Fibonacci fonksiyonunun kaç temel durumu vardır?", ["İki (n == 0 ve n == 1)", "Bir", "Hiç", "Üç"], "Slayt 15."),
        S("3 diskli Hanoi kulesi kaç hamlede çözülür?", ["7", "3", "6", "8"], "Slayt 19: yedi hamle."),
        S("Hanoi kurallarından hangisi YANLIŞTIR?", ["Aynı anda iki disk taşınabilir", "Disk daha küçük bir diskin üstüne konamaz", "Taşınan disk dışında tüm diskler bir çubukta olmalı", "Amaç diskleri en sağdaki çubuğa taşımak"], "Aynı anda yalnızca bir disk taşınabilir."),
        DY("Matematiksel tanımı özyinelemeye uygun olan Fibonacci gibi problemler özyinelemeyle daha kolay çözülür.", true, "Slayt 22."),
        E(["fib(n)", "fib(n-1) + fib(n-2)"], ["gcd(x, y)", "gcd(y, x % y)"], ["range_sum temel durumu", "start > end → 0"], ["Hanoi", "n-1 disk, 1 disk, n-1 disk"]),
        K("fibonacci", [15, 16]),
      ],
    },
  ],
});
