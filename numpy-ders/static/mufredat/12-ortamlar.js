// Bölüm 12 — Week5_Environments.md: Anaconda, Jupyter, Google Colab (19 slayt)
UNITELER.push({
  id: "u-ortam", renk: "turkuaz", baslik: "Python Ortamları", kaynak: "Week5_Environments", slaytSayisi: 19,
  altBaslik: "Week 5 · Anaconda Navigator, Jupyter Notebook, Google Colab",
  dersler: [
    {
      id: "ortam-anaconda", baslik: "Anaconda Navigator", slayt: [1, 7],
      adimlar: [
        O("Anaconda nedir?", [1, 3], `
          <p>Bu bölüm Python ortamlarını ve araç yönetimini kolaylaştıran üç aracı anlatır: <b>Anaconda Navigator, Jupyter Notebook ve Google Colab</b>.</p>
          <p><b>Anaconda:</b> Anaconda Foundation'ın sunduğu, Python ve R için <b>ücretsiz, açık kaynaklı bir dağıtım</b>.</p>
          <ul><li>Veri bilimi, makine öğrenmesi ve bilimsel hesaplama için tasarlanmıştır.</li>
          <li><b>conda</b> adlı paket yöneticisi Python'u NumPy, Pandas, Matplotlib gibi <b>önceden kurulu</b> çok sayıda bilimsel kütüphaneyle paketler.</li><li>Uğraştırmadan eksiksiz bir araç seti sunar.</li></ul>
          <p><b>Anaconda Navigator:</b> Anaconda dağıtımıyla gelen <b>grafik kullanıcı arayüzü (GUI)</b>. Farklı kütüphanelerin zengin özelliklerini yönetirken <b>komut satırına bağımlılığı azaltır</b>.</p>`),
        O("Navigator'ın temel özellikleri", [4, 4], `
          <ul><li><b>Uygulama başlatıcı:</b> popüler IDE ve araçları tek tıkla açan merkez — Jupyter Notebook, JupyterLab, Spyder, VS Code, RStudio.</li>
          <li><b>Ortam yönetimi:</b> ayrı "ortamları" görsel olarak oluşturma, kopyalama (clone) ve silme.
            <br><b>Ortam nedir?</b> Belirli bir proje için belirli paket sürümlerinin kurulduğu <b>yalıtılmış alan</b> (ör. Project_A Python 3.8, Project_B Python 3.10 kullanır). Bu, <b>paket çakışmalarını önler</b>.</li>
          <li><b>Paket yönetimi:</b> belirli bir ortamda binlerce Python paketini arama, kurma, güncelleme ve kaldırma; hangilerinin kurulu, kurulu olmadığı veya güncellemesi olduğu kolayca görülür.</li></ul>`),
        O("Kurulum, demo ve özet", [5, 7], `
          <p><b>Kurulum:</b> anaconda.com/download → işletim sistemine uygun Anaconda Distribution yükleyicisini indir → yükleyiciyi çalıştır (kurulum büyüktür, çok paket içerir) → uygulamalar menüsünden "Anaconda Navigator"ı aç. Navigator için <b>ayrı kurulum gerekmez</b>, dağıtıma dahildir.</p>
          <p><b>Kısa demo:</b></p>
          <ul><li><b>Jupyter'ı başlatmak:</b> Home sekmesi → Jupyter Notebook kutucuğu → Launch.</li>
          <li><b>Yeni ortam:</b> Environments sekmesi → Create → ad ver (ör. my-new-project) → Python sürümü seç → Create.</li>
          <li><b>Paket kurmak:</b> Environments'ta ortamı seç → filtreyi "Installed"dan "Not Installed"a çevir → paketi ara (ör. seaborn) → işaretle → Apply.</li></ul>
          <p><b>Özet:</b> <b>conda</b> Anaconda'nın çekirdeği olan <b>komut satırı paket yöneticisidir</b>; <b>Anaconda</b> her şeyi kolaylaştıran hepsi bir arada dağıtımdır; <b>Navigator</b> bu araç kutusunun GUI'sidir ve özellikle yeni başlayanlar için en kullanıcı dostu yoldur.</p>`),
        S("Anaconda'daki paket yöneticisinin adı nedir?", ["conda", "pip", "npm", "brew"], "Slayt 2."),
        S("Anaconda'da 'ortam' (environment) neden kullanılır?", ["Projeler için ayrı paket sürümleri kurup paket çakışmalarını önlemek", "İnternetsiz çalışmak", "Kodu hızlandırmak", "Dosya paylaşmak"], "Slayt 4: isolated space, prevents package conflicts."),
        S("Navigator'da yeni bir ortam hangi sekmeden oluşturulur?", ["Environments", "Home", "Learning", "Community"], "Slayt 6: Environments → Create."),
        DY("Anaconda Navigator için Anaconda dağıtımından ayrı bir kurulum gerekir.", false, "Navigator dağıtıma dahildir."),
        DY("Anaconda Navigator, komut satırına bağımlılığı azaltan grafik bir arayüzdür.", true, "Slayt 3."),
        E(["conda", "komut satırı paket yöneticisi"], ["Anaconda", "hepsi bir arada dağıtım"], ["Navigator", "grafik arayüz (GUI)"], ["Environment", "yalıtılmış paket alanı"]),
      ],
    },
    {
      id: "ortam-jupyter", baslik: "Jupyter Notebook", slayt: [8, 13],
      adimlar: [
        O("Jupyter Notebook nedir?", [8, 9], `
          <p>Etkileşimli bir <b>veri hikâyeciliği</b> aracı: <b>canlı kod, görselleştirme ve anlatımı</b> tek belgede birleştirir. "Notebook" denen belgeleri oluşturup paylaşmayı sağlayan açık kaynaklı bir <b>web uygulamasıdır</b>. Bir notebook şunları içerebilir:</p>
          <ul><li>Çalıştırılabilir kod (çekirdek diller: <b>Julia, Python ve R</b>)</li><li>Açıklayıcı metin (<b>Markdown</b>)</li><li>Denklemler, görselleştirmeler (grafikler) ve diğer zengin medya</li></ul>
          <p>İki hücre tipi vardır:</p>
          <ul><li><b>Code hücresi:</b> kod yazılıp çalıştırılır; <b>Shift + Enter</b> ile çalışır, çıktı (metin, grafik, tablo) hemen altında görünür.</li>
          <li><b>Markdown hücresi:</b> anlatım metni yazılır (<code># Başlık</code>, <code>**kalın**</code>, <code>*italik*</code>, listeler); çalıştırılınca biçimli metne dönüşür.</li></ul>`),
        O("Özellikler ve kurulum", [10, 11], `
          <ul><li><b>Etkileşimli iş akışı:</b> küçük kod parçalarını tek tek çalıştır, sonucu gör, düzelt — <b>keşifsel veri analizi (EDA)</b> için ideal.</li>
          <li><b>Hikâyecilik ve paylaşım:</b> veri yüklemeden temizlemeye, analizden sonuca tüm hikâye tek belgede.</li>
          <li><b>Tekrarlanabilirlik:</b> kod, çıktı ve açıklama bir arada; başkalarının işi anlayıp tekrarlaması kolaylaşır.</li>
          <li><b>Dilden bağımsız:</b> farklı <b>kernel</b>'lar (perde arkasındaki hesaplama motoru) ile 40'tan fazla dil desteklenir.</li></ul>
          <p><b>Kurulum:</b> Yöntem 1 (önerilen): Anaconda'yı kur; Jupyter zaten dahildir, Navigator'dan Launch. Yöntem 2 (minimal): Python varsa komut satırında <code>pip install notebook</code>, çalıştırmak için <code>jupyter notebook</code>.</p>`),
        O("Kısa demo ve özet", [12, 13], `
          <ol><li><b>Başlatma:</b> Navigator'da Jupyter Notebook → Launch; tarayıcıda "Jupyter Dashboard" (dosya gezgini) açılır.</li>
          <li><b>Yeni notebook:</b> klasöre git → sağ üstteki New → Python 3 (veya istediğin kernel).</li>
          <li><b>Hücrelerle çalışma:</b> boş bir code hücresiyle açılır; <code>print("Hello, World!")</code> yaz, Shift + Enter.</li>
          <li><b>Hücre tipini değiştirme:</b> araç çubuğundaki menüyü "Code"dan "Markdown"a çevir, <code># My First Analysis</code> yaz, Shift + Enter → başlık olarak görünür.</li>
          <li><b>Kaydetme:</b> başlığa ("Untitled") tıklayıp adlandır; otomatik kaydedilir veya Ctrl + S. Dosya uzantısı <b>.ipynb</b>'dir.</li></ol>
          <p>Jupyter, keşifsel veri analizi, veri hikâyeciliği ve tekrarlanabilir araştırmayı paylaşmak için <b>endüstri standardıdır</b>; en kolay edinme yolu Anaconda'dır.</p>`),
        S("Jupyter'da bir hücre hangi kısayolla çalıştırılır?", ["Shift + Enter", "Ctrl + C", "Alt + F4", "Tab"], "Slayt 9."),
        S("Jupyter notebook dosyalarının uzantısı nedir?", [".ipynb", ".py", ".txt", ".jpy"], "Slayt 12."),
        S("Anlatım metni yazmak için hangi hücre tipi kullanılır?", ["Markdown", "Code", "Raw", "Kernel"], "Slayt 9."),
        S("Jupyter'da kodu çalıştıran, perde arkasındaki hesaplama motoruna ne denir?", ["Kernel", "Dashboard", "Cell", "Notebook"], "Slayt 10."),
        S("Anaconda olmadan Jupyter kurmak için hangi komut kullanılır?", ["pip install notebook", "conda remove notebook", "python notebook.py", "install jupyter.exe"], "Slayt 11: Method 2."),
        DY("Jupyter Notebook yalnızca Python dilini destekler.", false, "Kernel'lar aracılığıyla 40'tan fazla dili destekler."),
        E(["Code cell", "kod çalıştırılır"], ["Markdown cell", "biçimli metin"], ["Kernel", "hesaplama motoru"], ["EDA", "keşifsel veri analizi"]),
      ],
    },
    {
      id: "ortam-colab", baslik: "Google Colab", slayt: [14, 19],
      adimlar: [
        O("Google Colab nedir?", [14, 15], `
          <p><b>Google Colaboratory</b>, kurulum gerektirmeyen ve güçlü donanım sunan, <b>bulut tabanlı, ücretsiz</b> bir Jupyter Notebook ortamıdır.</p>
          <ul><li><b>Sıfır kurulum:</b> tamamen tarayıcıda çalışır; yalnızca Google hesabı ve tarayıcı gerekir.</li>
          <li><b>Bulut tabanlı:</b> notebook'lar doğrudan <b>Google Drive</b>'a kaydedilir.</li>
          <li><b>Ücretsiz donanım:</b> derin öğrenme için gerekli <b>GPU</b> (Graphics Processing Unit) ve <b>TPU</b> (Tensor Processing Unit) erişimi — günler süren eğitim dakikalara/saatlere iner.</li>
          <li><b>Kolay iş birliği:</b> Google Doc gibi paylaşılır; birden çok kişi aynı anda yorum yapabilir veya düzenleyebilir.</li>
          <li><b>Önceden kurulu kütüphaneler:</b> TensorFlow, PyTorch, pandas... Diğerleri hücrede <code>!pip install paket_adi</code> ile kurulur.</li></ul>`),
        O("Sınırlamalar", [16, 16], `
          <ul><li><b>İnternet bağlantısı gerekir</b>; çevrimdışı çalışılamaz.</li>
          <li><b>Kaynak sınırları (ücretsiz katman):</b> çalışma ortamı kalıcı değildir; hareketsizlikten sonra (ör. 90 dk) veya azami ömür dolunca (ör. 12 saat) oturum kapanır. <b>Kurulan paketler ve (Drive dışındaki) dosyalar silinir!</b> En iyi GPU'lar (V100, A100) garanti değildir.</li>
          <li><b>Veri depolama:</b> veriyi Google Drive'a kaydetmeli (Drive'ı "mount" ederek) ya da her oturum başında yüklemelisin; çalışma ortamına doğrudan yüklenen dosyalar <b>geçicidir</b>.</li></ul>`),
        O("Başlamak ve ne zaman kullanmalı?", [17, 19], `
          <p><b>Başlamak:</b> colab.research.google.com → Google hesabıyla giriş → açılan pencerede "New notebook". <b>GPU açmak:</b> Runtime → Change runtime type → Hardware accelerator: GPU (veya TPU) → Save.</p>
          <p>Arayüz standart Jupyter ile neredeyse aynıdır (code ve Markdown hücreleri, Shift + Enter). Komut satırı komutları başına <b>ünlem (!)</b> konarak çalıştırılır: <code>!pip install scikit-learn</code>, <code>!nvidia-smi</code> (atanan GPU'yu gösterir).</p>
          <p><b>Ne zaman Colab?</b> Ücretsiz güçlü donanım (GPU/TPU) gerektiğinde (derin öğrenme), kolay iş birliği istediğinde, sıfır kurulumla hızlı başlamak istediğinde ve oturum süre sınırları ile çevrimiçi olma şartı sorun değilse.</p>`),
        S("Colab'ın 'killer feature' olarak anılan özelliği nedir?", ["Ücretsiz GPU/TPU erişimi", "Çevrimdışı çalışma", "Sınırsız oturum süresi", "Kalıcı dosya depolama"], "Slayt 15."),
        S("Colab'da bir komut satırı komutu nasıl çalıştırılır?", ["Başına ! konarak (!pip install ...)", "Başına # konarak", "Başına $ konarak", "Çalıştırılamaz"], "Slayt 18."),
        S("Colab oturumu kapandığında ne olur?", ["Kurulan paketler ve Drive dışındaki dosyalar silinir", "Her şey korunur", "Notebook silinir", "GPU kalıcı olarak atanır"], "Slayt 16."),
        S("Colab'da GPU nasıl açılır?", ["Runtime → Change runtime type → Hardware accelerator: GPU", "File → GPU", "!pip install gpu", "Settings → Theme"], "Slayt 17."),
        DY("Google Colab internet bağlantısı olmadan da kullanılabilir.", false, "Bulut servisidir; internet gerekir."),
        DY("Colab notebook'ları doğrudan Google Drive'a kaydedilir.", true, "Slayt 14."),
        E(["Anaconda", "yerel dağıtım + paketler"], ["Jupyter", "etkileşimli notebook"], ["Colab", "bulutta ücretsiz notebook"], ["!nvidia-smi", "atanan GPU'yu gösterir"]),
      ],
    },
  ],
});
