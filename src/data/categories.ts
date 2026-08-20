import { Category } from '../types/service';

export const CATEGORIES: Category[] = [
  {
    id: 'boya-badana',
    name: 'Boya & Badana',
    emoji: '🎨',
    iconName: 'Paintbrush',
    shortDesc: 'İç & dış cephe, tavan, duvar kağıdı ve dekoratif boya işleri',
    fullDesc: 'Evinizi veya iş yerinizi uzman ustalarımızla tertemiz, hızlı ve kaliteli malzemelerle yenileyin.',
    popular: true,
    badge: 'Çok Tercih Edilen',
    colorTheme: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      border: 'border-rose-200',
      light: 'hover:border-rose-400',
    },
    commonProblems: [
      'Duvar rengini değiştirmek istiyorum',
      'Duvarlarda kabarma ve çatlak var',
      'Rutubet ve küf izleri oluştu',
      'Tavan sarardı ve dökülüyor',
      'Taşınma öncesi temiz boya gerekiyor'
    ],
    subServices: [
      {
        id: 'ic-cephe-boya',
        name: 'İç Cephe Boya',
        description: 'Tüm ev veya oda bazlı profesyonel iç mekan boyama',
        popular: true,
        estimatedPriceRange: '3.500 ₺ - 15.000 ₺',
        estimatedDuration: '1 - 3 Gün',
        suggestedLocations: ['Salon', 'Yatak Odası', 'Koridor', 'Tüm Ev', 'Ofis'],
        typicalProblems: ['Renk Değişimi', 'Duvar Çatlakları', 'Eski Boya Dökülmesi', 'Kirli / Lekeli Duvar']
      },
      {
        id: 'dis-cephe-boya',
        name: 'Dış Cephe Boya',
        description: 'Bina, villa ve dış cephe suya dayanıklı koruyucu boya',
        popular: false,
        estimatedPriceRange: '15.000 ₺ - 60.000 ₺',
        estimatedDuration: '3 - 7 Gün',
        suggestedLocations: ['Bina Dış Cephesi', 'Müstakil Ev / Villa', 'Balkon Dışı', 'Bahçe Duvarı'],
        typicalProblems: ['Dış Cephe Dökülmesi', 'Güneşten Solma', 'Su Alma / Nem', 'Renk Yenileme']
      },
      {
        id: 'tavan-boya',
        name: 'Tavan Boya',
        description: 'Özel tavan plastiği ile lekesiz, bembeyaz tavan boyama',
        popular: true,
        estimatedPriceRange: '1.200 ₺ - 4.500 ₺',
        estimatedDuration: '1 Gün',
        suggestedLocations: ['Banyo Tavanı', 'Mutfak Tavanı', 'Salon Tavanı', 'Tüm Ev Tavanları'],
        typicalProblems: ['Tavanda Sararma / İs', 'Nemden Kabarma', 'Su Akıntısı İzi', 'Dökülme']
      },
      {
        id: 'duvar-kagidi',
        name: 'Duvar Kağıdı Uygulaması',
        description: 'Duvar kağıdı sökme, astar ve kusursuz desen eşleştirmeli kaplama',
        popular: false,
        estimatedPriceRange: '2.000 ₺ - 8.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Vurgu Duvarı (TV Arkası)', 'Yatak Başı', 'Çocuk Odası', 'Ofis'],
        typicalProblems: ['Yeni Duvar Kağıdı Kaplama', 'Eski Kağıdı Sökme', 'Açılan Ek Yerlerini Tamir']
      },
      {
        id: 'dekoratif-italyan-boya',
        name: 'Dekoratif & İtalyan Boya',
        description: 'Mermer efektli, sedefli, mikroçimento ve özel dokulu uygulamalar',
        popular: false,
        estimatedPriceRange: '5.000 ₺ - 20.000 ₺',
        estimatedDuration: '2 - 4 Gün',
        suggestedLocations: ['Salon Vurgu Duvarı', 'Giriş / Antre', 'Ofis Resepsiyonu'],
        typicalProblems: ['Özel Efektli Tasarım', 'Dokulu Sıva Görünümü']
      }
    ]
  },
  {
    id: 'su-tesisati',
    name: 'Su Tesisatı',
    emoji: '🔧',
    iconName: 'Wrench',
    shortDesc: 'Su kaçağı bulma, musluk, lavabo, klozet, tıkanıklık ve boru yenileme',
    fullDesc: 'Kırmadan termal kamera ve dinleme cihazlarıyla su kaçağı tespiti, tıkanıklık açma ve sıhhi tesisat tamiri.',
    popular: true,
    badge: '7/24 Acil Servis',
    colorTheme: {
      bg: 'bg-sky-50',
      text: 'text-sky-600',
      border: 'border-sky-200',
      light: 'hover:border-sky-400',
    },
    commonProblems: [
      'Borudan su damlıyor / sızıyor',
      'Duvar veya tavanda ıslaklık / nemlenme var',
      'Musluk veya batarya su kaçırıyor',
      'Gider tıkandı, su geri basıyor',
      'Klozet sifonu durmadan akıtıyor',
      'Su sayacı musluklar kapalıyken de dönüyor'
    ],
    subServices: [
      {
        id: 'su-kacagi',
        name: 'Su Kaçağı Tespiti',
        description: 'Termal kamera ve akustik dinleme ile noktasal kırmadan kaçak bulma',
        popular: true,
        estimatedPriceRange: '800 ₺ - 2.500 ₺',
        estimatedDuration: '1 - 3 Saat',
        suggestedLocations: ['Banyo', 'Mutfak', 'Tuvalet', 'Kombisi Olan Alan', 'Tavan / Alt Kat'],
        typicalProblems: ['Tavandan Su Damlıyor', 'Duvar Nemleniyor / Kabarıyor', 'Su Sayacı Sürekli Dönüyor', 'Kombinin Basıncı Düşüyor', 'Kaynağını Bilmiyorum']
      },
      {
        id: 'musluk-batarya',
        name: 'Musluk & Batarya Değişimi',
        description: 'Aç-kapa batarya, fotoselli musluk, spiral mutfak bataryası montajı ve tamiri',
        popular: true,
        estimatedPriceRange: '400 ₺ - 1.200 ₺',
        estimatedDuration: '1 Saat',
        suggestedLocations: ['Mutfak Evyesi', 'Banyo Lavabosu', 'Duş Bataryası', 'Balkon'],
        typicalProblems: ['Bataryanın Dibinden Su Kaçırıyor', 'Musluk Kapanmıyor / Damlatıyor', 'Yeni Batarya Montajı', 'Su Tazyiki Çok Az']
      },
      {
        id: 'tikaniklik-acma',
        name: 'Tıkanıklık Açma',
        description: 'Robot cihaz ve yaylı sistemle kırmadan lavabo, klozet ve ana gider açma',
        popular: true,
        estimatedPriceRange: '750 ₺ - 2.000 ₺',
        estimatedDuration: '1 - 2 Saat',
        suggestedLocations: ['Mutfak Gideri', 'Banyo Süzgeci', 'Klozet / Alaturka Tuvalet', 'Bina Ana Pimaş Hattı'],
        typicalProblems: ['Lavabodan Su Gitmiyor', 'Klozet Taşıyor', 'Giderden Kötü Koku Geliyor', 'Çamaşır/Bulaşık Makinesi Gideri Tıkalı']
      },
      {
        id: 'klozet-rezervuar',
        name: 'Klozet & Gömme Rezervuar',
        description: 'İç takım tamiri, şamandıra değişimi, gömme sifon onarımı ve montaj',
        popular: true,
        estimatedPriceRange: '500 ₺ - 1.800 ₺',
        estimatedDuration: '1 - 2 Saat',
        suggestedLocations: ['Ebeveyn Banyosu', 'Ortak Banyo', 'Misafir Tuvaleti'],
        typicalProblems: ['Sifon İçeriye Sürekli Su Akıtıyor', 'Gömme Rezervuar Butonu Basmıyor', 'Klozetin Tabanından Su Çıkıyor', 'Klozet Kapağı Kırık']
      },
      {
        id: 'tesisat-yenileme',
        name: 'Komple Tesisat Yenileme',
        description: 'Temiz su PPRC boruları, atık su pimaş hatları ve ana kolon değişimi',
        popular: false,
        estimatedPriceRange: '5.000 ₺ - 25.000 ₺',
        estimatedDuration: '2 - 5 Gün',
        suggestedLocations: ['Tüm Daire', 'Banyo & Tuvalet', 'Mutfak Hattı', 'Apartman Ana Kolon'],
        typicalProblems: ['Eski Demir Borular Paslı', 'Su Basıncı Yetersiz', 'Komple Tadilat Öncesi Yenileme']
      },
      {
        id: 'su-aritma-montaji',
        name: 'Su Arıtma Montajı & Filtre',
        description: 'Tezgah altı arıtma cihazı kurulumu, filtre değişimi ve arıza onarımı',
        popular: false,
        estimatedPriceRange: '450 ₺ - 1.500 ₺',
        estimatedDuration: '1 Saat',
        suggestedLocations: ['Mutfak Dolap Altı'],
        typicalProblems: ['Cihaz Kurulumu', 'Filtre Değişimi', 'Cihaz Su Damlatıyor', 'Arıtılmış Su Tadı Bozuldu']
      }
    ]
  },
  {
    id: 'elektrik',
    name: 'Elektrik',
    emoji: '⚡',
    iconName: 'Zap',
    shortDesc: 'Priz, anahtar, sigorta panosu, aydınlatma, hat çekimi ve acil arıza',
    fullDesc: 'Sertifikalı elektrik ustalarımızla güvenli, standartlara uygun arıza tespiti ve tesisat çözümleri.',
    popular: true,
    badge: 'Hızlı Müdahale',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-200',
      light: 'hover:border-amber-400',
    },
    commonProblems: [
      'Sigorta sürekli atıyor',
      'Prizden cızırtı veya kıvılcım geliyor',
      'Bazı prizlerde veya odalarda elektrik yok',
      'Yeni avize / aydınlatma montajı yapılacak',
      'Elektrik faturasında kaçak şüphesi var'
    ],
    subServices: [
      {
        id: 'priz-anahtar',
        name: 'Priz & Anahtar Montaj / Tamir',
        description: 'Yanmış priz tamiri, topraklı priz çekimi, akıllı anahtar ve çerçeve değişimi',
        popular: true,
        estimatedPriceRange: '300 ₺ - 1.000 ₺',
        estimatedDuration: '1 Saat',
        suggestedLocations: ['Salon', 'Mutfak', 'Yatak Odası', 'Çalışma Odası'],
        typicalProblems: ['Priz Çalışmıyor', 'Priz Yuvasından Çıktı', 'Prizden Koku / Cızırtı Geliyor', 'Yeni Priz Hattı Çekilecek']
      },
      {
        id: 'sigorta-panosu',
        name: 'Sigorta Panosu & Arıza Tespiti',
        description: 'Kaçak akım rölesi montajı, sigorta şalter değişimi ve hat yük dengeleme',
        popular: true,
        estimatedPriceRange: '600 ₺ - 2.500 ₺',
        estimatedDuration: '1 - 3 Saat',
        suggestedLocations: ['Daire Giriş Panosu', 'Bina Ana Panosu', 'Sayaç Kutusu'],
        typicalProblems: ['Sigorta Sürekli Atıyor', 'Kaçak Akım Rölesi Tutmuyor', 'Eski Tip Sigortayı Otomatiğe Çevirme', 'Panodan Yanık Kokusu Geliyor']
      },
      {
        id: 'aydinlatma-avize',
        name: 'Aydınlatma & Avize Montajı',
        description: 'Ağır avize askısı, aplik montajı, LED profil, ray spot ve dimmer kurulumu',
        popular: true,
        estimatedPriceRange: '350 ₺ - 1.200 ₺',
        estimatedDuration: '1 Saat',
        suggestedLocations: ['Salon', 'Yemek Masası Üstü', 'Yatak Odası', 'Koridor', 'Mutfak'],
        typicalProblems: ['Yeni Avize Takılacak', 'Tavan Askı Yeri Yok', 'LED Şerit Yanmıyor / Titriyor', 'Sensörlü Lamba Çalışmıyor']
      },
      {
        id: 'elektrik-hatti',
        name: 'Kablo & Elektrik Hattı Çekimi',
        description: 'Klima, fırın veya şofben için özel bağımsız elektrik hattı ve kanal çekimi',
        popular: false,
        estimatedPriceRange: '800 ₺ - 3.500 ₺',
        estimatedDuration: '2 - 4 Saat',
        suggestedLocations: ['Mutfak (Fırın/Ocak)', 'Banyo (Termosifon)', 'Klima Konumu', 'Balkon'],
        typicalProblems: ['Klima İçin Yeni Hat Gerekli', 'Topraklama Hattı Yok', 'Kablo Kanalı İle Gizleme']
      },
      {
        id: 'kamera-diafon',
        name: 'Görüntülü Diafon & Kamera',
        description: 'Bina görüntülü diafon sistemleri, IP güvenlik kamerası montajı ve ayarları',
        popular: false,
        estimatedPriceRange: '1.200 ₺ - 6.000 ₺',
        estimatedDuration: '2 - 6 Saat',
        suggestedLocations: ['Kapı Girişi', 'Apartman Zili', 'Bina Çevresi', 'Bahçe Girişi'],
        typicalProblems: ['Zil Çalmıyor', 'Görüntü Gelmiyor / Parazitli', 'Yeni Güvenlik Kamerası Kurulumu']
      }
    ]
  },
  {
    id: 'tadilat',
    name: 'Tadilat & Yenileme',
    emoji: '🧱',
    iconName: 'Hammer',
    shortDesc: 'Komple ev, mutfak, banyo, oda yenileme ve anahtar teslim projeler',
    fullDesc: 'Kırım, döküm, altyapı ve ince işçilik dahil anahtar teslim profesyonel iç mimari tadilat çözümleri.',
    popular: true,
    badge: 'Ücretsiz Keşif',
    colorTheme: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      light: 'hover:border-orange-400',
    },
    commonProblems: [
      'Eski daireyi sıfırdan yenilemek istiyorum',
      'Mutfak ve banyoyu modernleştirmek istiyorum',
      'Duvar kırıp odaları birleştirmek istiyorum',
      'Ofis / mağaza dekorasyonunu değiştireceğiz'
    ],
    subServices: [
      {
        id: 'komple-ev-tadilati',
        name: 'Komple Ev Tadilatı',
        description: 'A\'dan Z\'ye anahtar teslim yıkım, tesisat, sıva, boya, zemin ve mobilya işleri',
        popular: true,
        estimatedPriceRange: '80.000 ₺ - 350.000 ₺+',
        estimatedDuration: '20 - 45 Gün',
        suggestedLocations: ['Tüm Daire / Villa', 'Yazlık Ev'],
        typicalProblems: ['Eski Daire Komple Yenilenecek', 'Yatırımlık Daire Tadilatı', 'Taşınma Öncesi Genel Yenileme']
      },
      {
        id: 'banyo-tadilati',
        name: 'Komple Banyo Tadilatı',
        description: 'Eski seramik kırma, su yalıtımı, yeni fayans, duşakabin, gömme rezervuar ve banyo dolabı',
        popular: true,
        estimatedPriceRange: '25.000 ₺ - 85.000 ₺',
        estimatedDuration: '5 - 10 Gün',
        suggestedLocations: ['Ana Banyo', 'Ebeveyn Banyosu', 'Misafir Tuvaleti'],
        typicalProblems: ['Eski Fayansları Kırıp Yenileme', 'Küveti Kaldırıp Duşakabin Yapma', 'Gömme Klozet & Dolap Montajı']
      },
      {
        id: 'mutfak-tadilati',
        name: 'Komple Mutfak Tadilatı',
        description: 'Eski dolap sökümü, yeni MDF/Lake dolap, porselen/granit tezgah ve tesisat düzenlemesi',
        popular: true,
        estimatedPriceRange: '35.000 ₺ - 120.000 ₺',
        estimatedDuration: '7 - 15 Gün',
        suggestedLocations: ['Mutfak'],
        typicalProblems: ['Dolaplar Eskidi / Kullanışsız', 'Açık Amerikan Mutfak Yapılacak', 'Tezgah ve Seramik Değişimi']
      },
      {
        id: 'ofis-magaza-tadilati',
        name: 'Ofis & Mağaza Tadilatı',
        description: 'İş yerleri için cam bölme, akustik tavan, zemin kaplama ve kurumsal dekorasyon',
        popular: false,
        estimatedPriceRange: '40.000 ₺ - 200.000 ₺',
        estimatedDuration: '10 - 25 Gün',
        suggestedLocations: ['Ofis Katı', 'Mağaza / Dükkan', 'Restoran / Kafe'],
        typicalProblems: ['Kurumsal Kimliğe Uygun Tasarım', 'Bölme Duvar ve Aydınlatma Yenileme']
      }
    ]
  },
  {
    id: 'cati',
    name: 'Çatı İşleri',
    emoji: '🏠',
    iconName: 'Home',
    shortDesc: 'Çatı tamiri, su yalıtımı, oluk montajı, kiremit ve sandviç panel',
    fullDesc: 'Trabzon ve Karadeniz iklimine tam dayanıklı, akıtmayan, ısı kaybettirmeyen çatı ve oluk sistemleri.',
    popular: true,
    badge: '10 Yıl Garanti',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      light: 'hover:border-emerald-400',
    },
    commonProblems: [
      'Şiddetli yağmurda çatıdan su akıyor',
      'Tavan arasında kiremitler kırılmış',
      'Yağmur olukları tıkandı veya paslandı',
      'Çatı katı çok soğuk / rüzgar alıyor'
    ],
    subServices: [
      {
        id: 'cati-tamiri',
        name: 'Çatı Tamiri & Aktarma',
        description: 'Kırık kiremit değişimi, mahya tamiri, meyil düzeltme ve genel kontrol',
        popular: true,
        estimatedPriceRange: '4.000 ₺ - 20.000 ₺',
        estimatedDuration: '1 - 3 Gün',
        suggestedLocations: ['Bina Çatısı', 'Müstakil Ev Çatısı', 'Teras Çatı'],
        typicalProblems: ['Tavandan Su Damlıyor', 'Rüzgarda Kiremit Uçtu', 'Baca Kenarından Su Sızıyor']
      },
      {
        id: 'cati-izolasyonu',
        name: 'Çatı Su & Isı İzolasyonu',
        description: 'Membran kaplama, likit su yalıtımı, taşyünü/cam yünü çatı şiltesi serimi',
        popular: true,
        estimatedPriceRange: '8.000 ₺ - 35.000 ₺',
        estimatedDuration: '2 - 5 Gün',
        suggestedLocations: ['Açık Teras', 'Ahşap Çatı İçi', 'Kiremit Altı'],
        typicalProblems: ['Teras Tabandan Alt Kata Su Kaçırıyor', 'Kışın Çatı Katı Isınmıyor', 'Nem ve Terleme Oluyor']
      },
      {
        id: 'yagmur-olugu',
        name: 'Yağmur Oluğu Montaj & Tamir',
        description: 'Eksiz çinko veya PVC yağmur deresi, iniş boruları montajı ve temizliği',
        popular: false,
        estimatedPriceRange: '2.500 ₺ - 10.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Çatı Saçak Kenarları', 'Bina Yağmur İniş Boruları'],
        typicalProblems: ['Oluktan Dışarı Su Taşıyor', 'Oluk Kırıldı / Sarktı', 'Gider Borusu Tıkandı']
      },
      {
        id: 'sandvic-panel-cati',
        name: 'Sandviç Panel & Sac Çatı',
        description: 'Sanayi tipi, teras üzeri ve garajlar için dayanıklı sandviç panel kaplama',
        popular: false,
        estimatedPriceRange: '15.000 ₺ - 75.000 ₺',
        estimatedDuration: '3 - 7 Gün',
        suggestedLocations: ['Teras Üstü Kapatma', 'Depo / Atölye', 'Garaj Üstü'],
        typicalProblems: ['Yeni Çatı Kapatma', 'Eski Sacları Panelle Yenileme']
      }
    ]
  },
  {
    id: 'banyo',
    name: 'Banyo & Islak Hacim',
    emoji: '🚿',
    iconName: 'Bath',
    shortDesc: 'Duşakabin, seramik, lavabo, banyo dolabı ve su yalıtımı',
    fullDesc: 'Modern duş kabinleri, şık banyo mobilyaları ve sızdırmaz zemin uygulamaları.',
    popular: true,
    colorTheme: {
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
      light: 'hover:border-teal-400',
    },
    commonProblems: [
      'Duşakabin su sızdırıyor / tekerlekleri kırık',
      'Banyo zemininden alt kata su iniyor',
      'Eski banyo dolabını yenilemek istiyorum',
      'Lavabo çatladı veya sallanıyor'
    ],
    subServices: [
      {
        id: 'dusakabin-montaj',
        name: 'Duşakabin Montaj & Tamir',
        description: 'Siyah profil, karolajlı, füme veya şeffaf temperli cam duşakabin kurulumu ve silikon yenileme',
        popular: true,
        estimatedPriceRange: '2.500 ₺ - 9.000 ₺',
        estimatedDuration: '2 - 4 Saat',
        suggestedLocations: ['Banyo Duş Alanı'],
        typicalProblems: ['Dışarıya Su Kaçırıyor', 'Cam Sürgü Kapı Açılmıyor / Raydan Çıktı', 'Küflenen Silikonların Yenilenmesi']
      },
      {
        id: 'banyo-dolabi',
        name: 'Banyo Dolabı & Ayna Montajı',
        description: 'Lake/MDF banyo dolabı, ledli dokunmatik ayna ve boy dolabı montajı',
        popular: true,
        estimatedPriceRange: '1.500 ₺ - 8.000 ₺',
        estimatedDuration: '2 - 4 Saat',
        suggestedLocations: ['Banyo'],
        typicalProblems: ['Yeni Dolap Kurulumu', 'Eski Dolap Su Aldı / Kabardı']
      },
      {
        id: 'banyo-fayans',
        name: 'Banyo Fayans & Seramik Döşeme',
        description: 'Lazer hizalı 60x120 granit veya desenli seramik kaplama ve derz dolgusu',
        popular: false,
        estimatedPriceRange: '6.000 ₺ - 22.000 ₺',
        estimatedDuration: '3 - 6 Gün',
        suggestedLocations: ['Banyo Duvar & Zemin'],
        typicalProblems: ['Eski Fayansları Yenileme', 'Kırık / Çatlak Fayans Tamiri', 'Derz Dolgularının Kararması']
      }
    ]
  },
  {
    id: 'mutfak',
    name: 'Mutfak',
    emoji: '🍳',
    iconName: 'Utensils',
    shortDesc: 'Özel mutfak dolabı, granit/çimstone tezgah, evye ve ada mutfak',
    fullDesc: 'Fonksiyonel, ergonomik ve modern mutfak tasarım, imalat ve montaj hizmeti.',
    popular: true,
    colorTheme: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      border: 'border-yellow-200',
      light: 'hover:border-yellow-400',
    },
    subServices: [
      {
        id: 'mutfak-dolabi-imalat',
        name: 'Özel Mutfak Dolabı İmalatı',
        description: 'Lake, Akrilik, Membran veya Masif kapaklı özel ölçü mutfak dolabı projelendirme',
        popular: true,
        estimatedPriceRange: '25.000 ₺ - 110.000 ₺',
        estimatedDuration: '10 - 20 Gün',
        suggestedLocations: ['Mutfak'],
        typicalProblems: ['Sıfırdan Özel Ölçü Dolap Yaptırma', 'Kapak / Çekmece Mekanizma Değişimi']
      },
      {
        id: 'mutfak-tezgahi',
        name: 'Mutfak Tezgâhı Değişimi',
        description: 'Çimstone, Granit, Belenco, Mermerit ve Porselen tezgah kesim ve montajı',
        popular: true,
        estimatedPriceRange: '6.000 ₺ - 28.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Mutfak Tezgahı'],
        typicalProblems: ['Eski Tezgahı Değiştirme', 'Tezgah Kırığı / Çatlağı', 'Evye Yuvası Açma']
      },
      {
        id: 'tezgah-arasi-fayans',
        name: 'Tezgâh Arası Seramik & Cam',
        description: 'Metro seramik, balıksırtı veya temperli 3D baskılı cam panel uygulaması',
        popular: false,
        estimatedPriceRange: '2.000 ₺ - 6.500 ₺',
        estimatedDuration: '1 Gün',
        suggestedLocations: ['Tezgah ile Üst Dolap Arası'],
        typicalProblems: ['Yeni Seramik Kaplama', 'Eski Fayans Üzerine Yapıştırma']
      }
    ]
  },
  {
    id: 'zemin',
    name: 'Zemin & Parke',
    emoji: '🪵',
    iconName: 'Grid',
    shortDesc: 'Laminat parke, seramik, süpürgelik, şap ve epoksi kaplama',
    fullDesc: 'Aşınmaya dayanıklı 8mm/10mm derzli laminat parke, granit zeminler ve kusursuz süpürgelik işçiliği.',
    popular: true,
    badge: 'Hızlı Teslim',
    colorTheme: {
      bg: 'bg-stone-50',
      text: 'text-stone-700',
      border: 'border-stone-200',
      light: 'hover:border-stone-400',
    },
    subServices: [
      {
        id: 'laminat-parke',
        name: 'Laminat Parke Döşeme',
        description: 'Kapron/şilte serimi, kilitli derzli laminat parke ve lake süpürgelik montajı',
        popular: true,
        estimatedPriceRange: '4.500 ₺ - 25.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Salon', 'Yatak Odaları', 'Koridor', 'Tüm Ev', 'Ofis'],
        typicalProblems: ['Eski Halı/Zemini Parkeyle Değiştirme', 'Parke Şişmesi / Su Alması', 'Gıcırdayan Parke Tamiri']
      },
      {
        id: 'zemin-seramik',
        name: 'Zemin Seramik & Granit',
        description: 'Antre, koridor, balkon ve ıslak hacimler için kaymaz seramik uygulaması',
        popular: false,
        estimatedPriceRange: '5.000 ₺ - 22.000 ₺',
        estimatedDuration: '2 - 4 Gün',
        suggestedLocations: ['Antre & Koridor', 'Mutfak Zemini', 'Balkon'],
        typicalProblems: ['Fayans Döşeme', 'Kırık Karo Değişimi', 'Derz Temizleme & Yenileme']
      },
      {
        id: 'sap-dokumu',
        name: 'Helikopterli & Düz Şap Dökümü',
        description: 'Zemin tesviyesi, akıllı kendiliğinden yayılan şap veya helikopterli zemin',
        popular: false,
        estimatedPriceRange: '3.500 ₺ - 18.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Parke Öncesi Bozuk Zemin', 'Garaj', 'Depo', 'Teras'],
        typicalProblems: ['Kot Farkı Olan Zemin Düzeltme', 'Yerden Isıtma Üstü Şap']
      },
      {
        id: 'epoksi-zemin',
        name: 'Epoksi Zemin Kaplama',
        description: 'Otopark, dükkan, atölye ve modern yaşam alanları için eksiz epoksi',
        popular: false,
        estimatedPriceRange: '8.000 ₺ - 35.000 ₺',
        estimatedDuration: '2 - 4 Gün',
        suggestedLocations: ['Garaj', 'Ofis', 'Mağaza', 'Spor Salonu'],
        typicalProblems: ['Tozumayan Kolay Temizlenen Zemin']
      }
    ]
  },
  {
    id: 'kapi-pencere',
    name: 'Kapı & Pencere',
    emoji: '🚪',
    iconName: 'DoorClosed',
    shortDesc: 'PVC pencere, çelik kapı, iç oda kapıları, cam balkon ve sineklik',
    fullDesc: 'Isı ve ses yalıtımlı PVC pencereler, emniyetli çelik kapılar ve şık oda kapıları.',
    popular: false,
    colorTheme: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      light: 'hover:border-indigo-400',
    },
    subServices: [
      {
        id: 'celik-kapi',
        name: 'Çelik Kapı Montaj & Kilit',
        description: 'Yüksek güvenlikli lüks çelik kapı satışı, montajı, kilit ve barel değişimi',
        popular: true,
        estimatedPriceRange: '6.000 ₺ - 24.000 ₺',
        estimatedDuration: '1 Gün',
        suggestedLocations: ['Daire Giriş Kapısı', 'Bina Ana Girişi'],
        typicalProblems: ['Yeni Çelik Kapı', 'Kapı Sürtüyor / Kapanmıyor', 'Kilit Değişimi']
      },
      {
        id: 'ic-oda-kapisi',
        name: 'İç Oda Kapısı (Lake/Panel)',
        description: 'Amerikan panel, melamin, kompozit ve özel lake kapı montajı',
        popular: true,
        estimatedPriceRange: '2.500 ₺ - 6.500 ₺ (Adet)',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Oda Girişleri', 'Banyo Kapısı'],
        typicalProblems: ['Kapıların Tümünü Yenileme', 'Kilit / Kol Tamiri', 'Kapanmayan Kapı Ayarı']
      },
      {
        id: 'pvc-pencere-cam',
        name: 'PVC Pencere & Isıcam',
        description: 'Çift/üç camlı PVC pencere montajı, fitil değişimi, çift açılım mekanizması',
        popular: true,
        estimatedPriceRange: '4.000 ₺ - 20.000 ₺',
        estimatedDuration: '1 - 3 Gün',
        suggestedLocations: ['Tüm Pencereler', 'Balkon Kapısı'],
        typicalProblems: ['Pencereden Soğuk / Rüzgar Geliyor', 'Cam Terliyor / Buğulanıyor', 'Kol veya Menteşe Bozuldu']
      },
      {
        id: 'sineklik-montaji',
        name: 'Plise & Stor Sineklik',
        description: 'Kedi tülü korumalı, pileli katlanır pencere ve kapı sinekliği',
        popular: false,
        estimatedPriceRange: '450 ₺ - 1.500 ₺ (Adet)',
        estimatedDuration: '1 Gün',
        suggestedLocations: ['Yatak Odası Penceresi', 'Mutfak', 'Balkon Kapısı'],
        typicalProblems: ['Yeni Sineklik Yaptırma', 'Yırtılan Tül Tamiri']
      }
    ]
  },
  {
    id: 'isitma-sogutma',
    name: 'Isıtma & Soğutma',
    emoji: '🧊',
    iconName: 'ThermometerSnowflake',
    shortDesc: 'Klima montaj & gaz dolumu, kombi bakımı, petek temizliği ve yerden ısıtma',
    fullDesc: 'Yüksek verimli iklimlendirme sistemleri, periyodik bakım ve acil arıza servisi.',
    popular: false,
    colorTheme: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      light: 'hover:border-cyan-400',
    },
    subServices: [
      {
        id: 'klima-montaj-bakim',
        name: 'Klima Montaj, Söküm & Bakım',
        description: 'İnverter klima demontaj/montaj, antibakteriyel filtre temizliği ve R410/R32 gaz dolumu',
        popular: true,
        estimatedPriceRange: '900 ₺ - 3.500 ₺',
        estimatedDuration: '2 - 3 Saat',
        suggestedLocations: ['Salon', 'Yatak Odası', 'Ofis'],
        typicalProblems: ['Klima Soğutmuyor / Isıtmıyor', 'Klima Su Damlatıyor', 'Klimadan Kötü Koku Geliyor', 'Taşınma Sebebiyle Söküm/Montaj']
      },
      {
        id: 'kombi-bakim-onarim',
        name: 'Kombi Bakım & Arıza Onarımı',
        description: 'Hermetik ve yoğuşmalı kombi genel periyodik bakımı, eşanjör temizliği ve arıza tespiti',
        popular: true,
        estimatedPriceRange: '600 ₺ - 2.200 ₺',
        estimatedDuration: '1 - 2 Saat',
        suggestedLocations: ['Mutfak / Balkon Kombisi'],
        typicalProblems: ['Sıcak Su Gelmiyor', 'Kombi Basıncı Düşüyor', 'Kombi Sesli Çalışıyor', 'Arıza Kodu Veriyor']
      },
      {
        id: 'petek-temizleme',
        name: 'Makineli Petek Temizleme',
        description: 'Özel kimyasal ve basınçlı yıkama makinesiyle radyatör kireç ve tortu temizliği',
        popular: true,
        estimatedPriceRange: '900 ₺ - 2.500 ₺',
        estimatedDuration: '2 - 3 Saat',
        suggestedLocations: ['Tüm Daire Petekleri'],
        typicalProblems: ['Peteklerin Altı Soğuk Üstü Sıcak', 'Bazı Odalar Hiç Isınmıyor', 'Fatura Çok Yüksek Geliyor']
      }
    ]
  },
  {
    id: 'duvar-alci',
    name: 'Duvar & Alçı & Alçıpan',
    emoji: '🧱',
    iconName: 'Layers',
    shortDesc: 'Alçıpan bölme duvar, asma tavan, gizli LED ışık havuzu, sıva ve kartonpiyer',
    fullDesc: 'Mekanlarınızı estetik alçıpan tavanlar, nişler ve pürüzsüz saten alçı duvarlarla şekillendirin.',
    popular: false,
    colorTheme: {
      bg: 'bg-violet-50',
      text: 'text-violet-600',
      border: 'border-violet-200',
      light: 'hover:border-violet-400',
    },
    subServices: [
      {
        id: 'alcipan-asma-tavan',
        name: 'Asma Tavan & Gizli Işık Bandı',
        description: 'Salon ve koridorlar için modern gergi tavan, spot kanallı asma tavan yapımı',
        popular: true,
        estimatedPriceRange: '4.500 ₺ - 22.000 ₺',
        estimatedDuration: '2 - 4 Gün',
        suggestedLocations: ['Salon Tavanı', 'Giriş / Koridor', 'Mutfak'],
        typicalProblems: ['Modern Tavan Tasarımı', 'Eski Tavandaki Eğrilikleri Gizleme']
      },
      {
        id: 'bolme-duvar',
        name: 'Alçıpan Bölme Duvar',
        description: 'Ses yalıtımlı taşyünü dolgulu oda ayırma ve hafif ara bölme duvar uygulaması',
        popular: true,
        estimatedPriceRange: '3.000 ₺ - 15.000 ₺',
        estimatedDuration: '1 - 3 Gün',
        suggestedLocations: ['Oda Bölme', 'Giyinme Odası Ayrımı', 'Ofis Odaları'],
        typicalProblems: ['Bir Odayı İkiye Bölme', 'Giyinme Odası Oluşturma', 'Ofis İçi Çalışma Alanı']
      },
      {
        id: 'alci-siva-tamir',
        name: 'Alçı Sıva & Duvar Tamiri',
        description: 'Kara sıva üstü kaba/ince alçı sıva çekimi, dübel ve delik onarımları',
        popular: false,
        estimatedPriceRange: '1.500 ₺ - 8.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Tadilat Gören Duvarlar', 'Bozuk Yüzeyler'],
        typicalProblems: ['Duvar Çatlakları', 'Kapı/Pencere Kenarı Boşlukları', 'Kırılan Alçı Köşeleri']
      }
    ]
  },
  {
    id: 'izolasyon',
    name: 'İzolasyon & Yalıtım',
    emoji: '💧',
    iconName: 'ShieldCheck',
    shortDesc: 'Su, ses, ısı yalıtımı, teras izolasyonu ve temel bohçalama',
    fullDesc: 'Rutubet, küf ve enerji kaybını sıfıra indiren ileri teknoloji yalıtım çözümleri.',
    popular: false,
    colorTheme: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      light: 'hover:border-blue-400',
    },
    subServices: [
      {
        id: 'teras-su-yalitimi',
        name: 'Teras & Balkon Su İzolasyonu',
        description: 'Poliüretan likit membran, kristalize su yalıtımı ve seramik altı izolasyon',
        popular: true,
        estimatedPriceRange: '5.000 ₺ - 28.000 ₺',
        estimatedDuration: '2 - 4 Gün',
        suggestedLocations: ['Açık Teras', 'Geniş Balkon', 'Banyo Zemini'],
        typicalProblems: ['Alt Kata Su Damlaması', 'Fayans Aralarından Su Geçişi', 'Köşe Birleşim Yerlerinden Sızıntı']
      },
      {
        id: 'ses-yalitimi',
        name: 'Duvar & Tavan Ses Yalıtımı',
        description: 'Komşu duvarı ses kesici bariyerler, akustik sünger ve titreşim önleyici paneller',
        popular: false,
        estimatedPriceRange: '4.000 ₺ - 20.000 ₺',
        estimatedDuration: '1 - 3 Gün',
        suggestedLocations: ['Yatak Odası Duvarı', 'Müzik/Çalışma Odası', 'Tavan'],
        typicalProblems: ['Komşudan Gelen Konuşma / TV Sesi', 'Üst Kattan Ayak Sesi Gelmesi']
      },
      {
        id: 'rutubet-kuf-onleme',
        name: 'Rutubet & Nem İzolasyonu',
        description: 'Özel anti-küf bariyer boyaları ve higroskopik tuz izolasyonu',
        popular: true,
        estimatedPriceRange: '2.000 ₺ - 9.000 ₺',
        estimatedDuration: '1 - 2 Gün',
        suggestedLocations: ['Kuzey Cephe Odaları', 'Bodrum / Giriş Kat', 'Pencere Kenarları'],
        typicalProblems: ['Köşelerde Siyah Küf Oluşumu', 'Rutubet Kokusu', 'Boya Kabarması']
      }
    ]
  },
  {
    id: 'dis-cephe',
    name: 'Dış Cephe & Mantolama',
    emoji: '🏢',
    iconName: 'Building',
    shortDesc: 'Bina mantolama, söve, ısı tasarrufu ve dış cephe yenileme',
    fullDesc: 'Binalarınıza %50\'ye varan enerji tasarrufu ve modern estetik kazandıran cephe çözümleri.',
    popular: false,
    colorTheme: {
      bg: 'bg-slate-100',
      text: 'text-slate-700',
      border: 'border-slate-300',
      light: 'hover:border-slate-400',
    },
    subServices: [
      {
        id: 'bina-mantolama',
        name: 'Bina Isı Yalıtımı (Mantolama)',
        description: 'Taşyünü veya EPS strafor levhalar ile standartlara uygun komple bina mantolama',
        popular: true,
        estimatedPriceRange: '45.000 ₺ - 300.000 ₺+',
        estimatedDuration: '15 - 35 Gün',
        suggestedLocations: ['Apartman Binası', 'Müstakil Villa', 'Ticari Yapı'],
        typicalProblems: ['Yüksek Doğalgaz Faturaları', 'Dış Duvarların Soğuk Olması', 'Dış Cephe Dökülmeleri']
      },
      {
        id: 'sove-dekorasyon',
        name: 'Söve & Dekoratif Cephe Kaplama',
        description: 'Pencere söveleri, kat silmeleri ve kompozit panel cephe süslemeleri',
        popular: false,
        estimatedPriceRange: '8.000 ₺ - 40.000 ₺',
        estimatedDuration: '4 - 10 Gün',
        suggestedLocations: ['Pencere Kenarları', 'Bina Köşeleri'],
        typicalProblems: ['Dış Cepheye Estetik Kazandırma']
      }
    ]
  },
  {
    id: 'bahce-dis-alan',
    name: 'Bahçe & Dış Alan',
    emoji: '🌳',
    iconName: 'Trees',
    shortDesc: 'Peyzaj, kilit taş döşeme, bahçe duvarı, çit ve çevre düzenleme',
    fullDesc: 'Bahçenizi keyifli bir yaşam alanına dönüştüren taş döşeme, taş duvar ve peyzaj işleri.',
    popular: false,
    colorTheme: {
      bg: 'bg-lime-50',
      text: 'text-lime-700',
      border: 'border-lime-200',
      light: 'hover:border-lime-400',
    },
    subServices: [
      {
        id: 'bahce-tas-doseme',
        name: 'Kilit Parke & Doğal Taş Döşeme',
        description: 'Bahçe yolları, otopark alanı kilit parke, andezit, bazalt ve begonit taş döşeme',
        popular: true,
        estimatedPriceRange: '6.000 ₺ - 35.000 ₺',
        estimatedDuration: '2 - 6 Gün',
        suggestedLocations: ['Bahçe Yürüyüş Yolu', 'Otopark Girişi', 'Veranda Önü'],
        typicalProblems: ['Çamurlu Bahçe Zeminini Taş Yapma', 'Çöken Taşları Düzeltme']
      },
      {
        id: 'bahce-duvari-cit',
        name: 'Bahçe Duvarı & Panel Çit',
        description: 'Taş duvar örme, betonarme istinat duvarı ve yeşil tel panel çit montajı',
        popular: true,
        estimatedPriceRange: '8.000 ₺ - 50.000 ₺',
        estimatedDuration: '3 - 10 Gün',
        suggestedLocations: ['Bahçe Sınırı', 'Eğimli Arazi'],
        typicalProblems: ['Bahçe Güvenliği', 'Toprak Kaymasını Önleme (İstinat)']
      },
      {
        id: 'peyzaj-cim',
        name: 'Peyzaj & Rulo Çim Serimi',
        description: 'Toprak tesviyesi, hazır rulo çim serimi, süs bitkisi dikimi ve otomatik sulama',
        popular: false,
        estimatedPriceRange: '5.000 ₺ - 25.000 ₺',
        estimatedDuration: '1 - 3 Gün',
        suggestedLocations: ['Ön/Arka Bahçe', 'Site Bahçesi'],
        typicalProblems: ['Kuruyan Çimleri Yenileme', 'Sıfırdan Bahçe Düzenleme']
      }
    ]
  },
  {
    id: 'mobilya-montaj',
    name: 'Mobilya & Montaj',
    emoji: '🔨',
    iconName: 'Wrench',
    shortDesc: 'Demonte mobilya montajı, gardırop, TV ünitesi, marangozluk ve tamirat',
    fullDesc: 'IKEA, Vivense, Trendyol vb. demonte mobilya montajı, kapak menteşe ayarları ve özel marangozluk.',
    popular: false,
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      light: 'hover:border-amber-400',
    },
    subServices: [
      {
        id: 'demonte-mobilya-kurulum',
        name: 'Demonte Mobilya Montajı',
        description: 'Gardırop, baza, çalışma masası, şifonyer ve kitaplık profesyonel kurulumu',
        popular: true,
        estimatedPriceRange: '400 ₺ - 1.800 ₺',
        estimatedDuration: '1 - 3 Saat',
        suggestedLocations: ['Yatak Odası', 'Genç Odası', 'Çalışma Odası'],
        typicalProblems: ['Kutudan Yeni Çıkan Mobilya Kurulumu', 'Taşınma Sonrası Mobilya Yeniden Montajı']
      },
      {
        id: 'tv-unitesi-raf',
        name: 'TV Ünitesi & Duvar Raf Montajı',
        description: 'TV duvara asma aparatı, duvara monte raflar, askılık ve tablo asımı',
        popular: true,
        estimatedPriceRange: '300 ₺ - 900 ₺',
        estimatedDuration: '1 Saat',
        suggestedLocations: ['Salon', 'Antre', 'Yatak Odası'],
        typicalProblems: ['Büyük TV Askı Montajı', 'Görünmez Raf Sabitleme']
      },
      {
        id: 'marangoz-tamir',
        name: 'Marangoz & Mobilya Tamiri',
        description: 'Sarkan dolap kapakları, kırık çekmece rayları, mobilya kesimi ve küçültme',
        popular: false,
        estimatedPriceRange: '350 ₺ - 1.200 ₺',
        estimatedDuration: '1 - 2 Saat',
        suggestedLocations: ['Tüm Mobilyalar'],
        typicalProblems: ['Kapak Kapanmıyor / Düşüyor', 'Çekmece Rayı Bozuldu', 'Dolap Kapak Ayarı']
      }
    ]
  },
  {
    id: 'insaat-sonrasi',
    name: 'İnşaat & Tadilat Temizliği',
    emoji: '🧹',
    iconName: 'Sparkles',
    shortDesc: 'Moloz kaldırma, inşaat sonrası detaylı dip köşe temizlik ve harç kazıma',
    fullDesc: 'Tadilat ve inşaat bitiminde cam harçları, derz kalıntıları ve molozların profesyonelce temizlenmesi.',
    popular: false,
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      light: 'hover:border-emerald-400',
    },
    subServices: [
      {
        id: 'insaat-sonrasi-temizlik',
        name: 'İnşaat Sonrası Detaylı Temizlik',
        description: 'Buharlı zemin, cam koruma bantları sökümü, harç/alçı kalıntı kazıma ve taşınmaya hazır temizlik',
        popular: true,
        estimatedPriceRange: '2.500 ₺ - 8.500 ₺',
        estimatedDuration: '1 Gün',
        suggestedLocations: ['Tüm Daire / Villa', 'Ofis'],
        typicalProblems: ['Tadilat Tozu ve Boya Damlaları', 'Pencerelerdeki Etiket ve Harçlar', 'Banyo/Mutfak Derz Lekeleri']
      },
      {
        id: 'moloz-hafriyat',
        name: 'Moloz Çuvallama & Kaldırma',
        description: 'Kırım sonrası molozların çuvallanması, kata indirilmesi ve resmi döküm alanına nakli',
        popular: true,
        estimatedPriceRange: '1.500 ₺ - 6.000 ₺',
        estimatedDuration: ' Yarım Gün',
        suggestedLocations: ['Daire İçi', 'Bina Önü', 'Bahçe'],
        typicalProblems: ['Yıkım Sonrası Kalan Moloz Çuvalları', 'Eski Fayans / Duvar Atıkları']
      }
    ]
  }
];
