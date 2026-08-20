import { CATEGORIES } from './categories';
import { SmartSuggestionMatch } from '../types/service';

interface KeywordRule {
  keywords: string[];
  categoryId: string;
  subServiceId: string;
  detectedProblem: string;
  explanation: string;
}

const SMART_RULES: KeywordRule[] = [
  // Su Tesisatı & Kaçak
  {
    keywords: ['su damlıyor', 'tavandan su', 'su sızıyor', 'su akıyor', 'nemlenme', 'kaçak', 'alt kata su', 'sayaç dönüyor', 'ıslaklık', 'damla'],
    categoryId: 'su-tesisati',
    subServiceId: 'su-kacagi',
    detectedProblem: 'Tavandan veya duvardan su sızıntısı / Su Kaçağı',
    explanation: 'Termal kamera ile kırmadan noktasal tespit ve boru onarımı önerilir.'
  },
  {
    keywords: ['musluk', 'batarya', 'çeşme', 'şebeke', 'damlatıyor', 'tazyik'],
    categoryId: 'su-tesisati',
    subServiceId: 'musluk-batarya',
    detectedProblem: 'Musluk / Batarya su kaçırma veya montaj ihtiyacı',
    explanation: 'Batarya conta değişimi veya yeni aç-kapa armatür montajı.'
  },
  {
    keywords: ['tıkanıklık', 'gider tıkandı', 'su gitmiyor', 'lavabo tıkandı', 'klozet taştı', 'pimaş', 'kötü koku'],
    categoryId: 'su-tesisati',
    subServiceId: 'tikaniklik-acma',
    detectedProblem: 'Gider tıkanıklığı ve atık su geri basması',
    explanation: 'Robot yaylı cihaz ile pimaşa zarar vermeden tıkanıklık açma.'
  },
  {
    keywords: ['sifon', 'rezervuar', 'klozet', 'gömme rezervuar', 'iç takım'],
    categoryId: 'su-tesisati',
    subServiceId: 'klozet-rezervuar',
    detectedProblem: 'Klozet sifon su akıtması / İç takım arızası',
    explanation: 'Şamandıra veya gömme rezervuar conta değişimi ile su israfını önleme.'
  },
  // Boya
  {
    keywords: ['boya', 'badana', 'duvar rengi', 'boyatmak', 'ev boyama', 'iç cephe', 'dökülme', 'kirlendi'],
    categoryId: 'boya-badana',
    subServiceId: 'ic-cephe-boya',
    detectedProblem: 'İç mekan boya & duvar yenileme',
    explanation: 'Pürüzsüz macun, astar ve silinebilir 1. kalite iç cephe boyama.'
  },
  {
    keywords: ['tavan sarardı', 'tavan boya', 'tavan dökülüyor', 'tavan isi'],
    categoryId: 'boya-badana',
    subServiceId: 'tavan-boya',
    detectedProblem: 'Tavan lekesi ve plastik boya yenileme',
    explanation: 'Leke örtücü astar ve ekstra mat tavan boyası uygulaması.'
  },
  {
    keywords: ['duvar kağıdı', 'poster', 'duvar kaplama'],
    categoryId: 'boya-badana',
    subServiceId: 'duvar-kagidi',
    detectedProblem: 'Duvar kağıdı kaplama / söküm',
    explanation: 'Hizalı ve potluksuz profesyonel duvar kağıdı işçiliği.'
  },
  // Elektrik
  {
    keywords: ['priz', 'kıvılcım', 'cızırtı', 'anahtar', 'fiş', 'prizden koku', 'elektrik çarptı'],
    categoryId: 'elektrik',
    subServiceId: 'priz-anahtar',
    detectedProblem: 'Priz ark yapması / arızası',
    explanation: 'Yangın tehlikesine karşı acil priz klemens ve kablo yenilemesi.'
  },
  {
    keywords: ['sigorta atıyor', 'kaçak akım', 'şalter', 'elektrik kesildi', 'pano'],
    categoryId: 'elektrik',
    subServiceId: 'sigorta-panosu',
    detectedProblem: 'Sigorta panosu / Kaçak akım rölesi arızası',
    explanation: 'Aşırı yük ve kaçak kontrolü ile sigorta şalter değişimi.'
  },
  {
    keywords: ['avize', 'lamba', 'aydınlatma', 'spot', 'led', 'aplik'],
    categoryId: 'elektrik',
    subServiceId: 'aydinlatma-avize',
    detectedProblem: 'Aydınlatma / Avize montajı',
    explanation: 'Tavan askı kancası ve güvenli klemens bağlantısı.'
  },
  // Tadilat
  {
    keywords: ['komple tadilat', 'evi yenilemek', 'anahtar teslim', 'yıkım', 'baştan sona'],
    categoryId: 'tadilat',
    subServiceId: 'komple-ev-tadilati',
    detectedProblem: 'Komple ev & daire tadilatı',
    explanation: 'Ücretsiz keşif, 3D görselleştirme ve anahtar teslim uygulama.'
  },
  {
    keywords: ['banyo tadilatı', 'banyoyu yenilemek', 'küvet kırma', 'eski banyo'],
    categoryId: 'tadilat',
    subServiceId: 'banyo-tadilati',
    detectedProblem: 'Komple banyo & ıslak zemin tadilatı',
    explanation: 'Kırım, su yalıtımı, seramik, duşakabin ve banyo mobilyası.'
  },
  {
    keywords: ['mutfak tadilatı', 'mutfak dolabı', 'amerikan mutfak', 'tezgah'],
    categoryId: 'tadilat',
    subServiceId: 'mutfak-tadilati',
    detectedProblem: 'Mutfak yenileme & özel dolap imalatı',
    explanation: 'Gövde MDF, kapaklar Lake/Akrilik ve granit/porselen tezgah.'
  },
  // Çatı
  {
    keywords: ['çatı', 'çatı akıyor', 'kiremit', 'yağmur oluğu', 'baca', 'saçak', 'aktarma'],
    categoryId: 'cati',
    subServiceId: 'cati-tamiri',
    detectedProblem: 'Çatı akıntısı ve kiremit onarımı',
    explanation: 'Karadeniz iklimine dayanıklı su yalıtımlı çatı aktarma ve tamir.'
  },
  // Zemin & Parke
  {
    keywords: ['parke', 'laminat', 'zemin', 'parke şişti', 'gıcırdıyor', 'süpürgelik'],
    categoryId: 'zemin',
    subServiceId: 'laminat-parke',
    detectedProblem: 'Laminat parke döşeme veya tamiratı',
    explanation: 'Nem bariyerli şilte ve derzli dayanıklı laminat parke döşeme.'
  },
  // Kapı & Pencere
  {
    keywords: ['pencere', 'pvc', 'cam', 'rüzgar geliyor', 'soğuk alıyor', 'kapı kapanmıyor', 'çelik kapı', 'sineklik'],
    categoryId: 'kapi-pencere',
    subServiceId: 'pvc-pencere-cam',
    detectedProblem: 'Pencere / Kapı yalıtım ve mekanizma sorunu',
    explanation: 'Fitil değişimi, çift açılım ayarı ve ısıcam montajı.'
  },
  // Isıtma & Klima
  {
    keywords: ['klima', 'soğutmuyor', 'ısıtmıyor', 'klima damlatıyor', 'kombi', 'sıcak su', 'petek ısınmıyor', 'petek temizliği'],
    categoryId: 'isitma-sogutma',
    subServiceId: 'klima-montaj-bakim',
    detectedProblem: 'Klima / Isıtma performansı düşüklüğü',
    explanation: 'Gaz dolumu, kimyasallı petek yıkama veya periyodik bakım.'
  },
  // İzolasyon & Rutubet
  {
    keywords: ['rutubet', 'küf', 'mantolama', 'ses yalıtımı', 'komşu sesi', 'ısı yalıtımı', 'nem kokusu'],
    categoryId: 'izolasyon',
    subServiceId: 'rutubet-kuf-onleme',
    detectedProblem: 'Rutubet, küf ve ısı/ses yalıtım yetersizliği',
    explanation: 'Özel yalıtım membranları ve nefes alan anti-küf sistemleri.'
  },
  // Temizlik & Moloz
  {
    keywords: ['moloz', 'inşaat temizliği', 'hafriyat', 'tadilat pisliği', 'derz lekesi'],
    categoryId: 'insaat-sonrasi',
    subServiceId: 'insaat-sonrasi-temizlik',
    detectedProblem: 'İnşaat / Tadilat sonrası detaylı temizlik',
    explanation: 'Buharlı derin temizlik, harç kazıma ve taşınmaya hazır teslim.'
  },
  // Mobilya Montaj
  {
    keywords: ['mobilya', 'gardırop', 'montaj', 'ikea', 'marangoz', 'dolap kapağı', 'tv ünitesi'],
    categoryId: 'mobilya-montaj',
    subServiceId: 'demonte-mobilya-kurulum',
    detectedProblem: 'Demonte mobilya montajı veya dolap tamiri',
    explanation: 'Hızlı, gönyeli ve sağlam profesyonel mobilya montajı.'
  }
];

export function findSmartSuggestion(userInput: string): SmartSuggestionMatch | null {
  const normalized = userInput.toLowerCase().trim();
  if (!normalized || normalized.length < 3) return null;

  for (const rule of SMART_RULES) {
    const hasMatch = rule.keywords.some(kw => normalized.includes(kw.toLowerCase()));
    if (hasMatch) {
      const category = CATEGORIES.find(c => c.id === rule.categoryId);
      if (!category) continue;
      const subService = category.subServices.find(s => s.id === rule.subServiceId) || category.subServices[0];
      return {
        confidence: 0.95,
        category,
        subService,
        detectedProblem: rule.detectedProblem,
        explanation: rule.explanation
      };
    }
  }

  // Fallback match on category names/descriptions
  for (const category of CATEGORIES) {
    if (normalized.includes(category.name.toLowerCase()) || normalized.includes(category.id.replace('-', ' '))) {
      return {
        confidence: 0.8,
        category,
        subService: category.subServices[0],
        detectedProblem: `${category.name} ile ilgili genel talep`,
        explanation: `${category.name} alanında uzman ekibimizle hızlı çözüm.`
      };
    }
    for (const sub of category.subServices) {
      if (normalized.includes(sub.name.toLowerCase())) {
        return {
          confidence: 0.9,
          category,
          subService: sub,
          detectedProblem: sub.name,
          explanation: sub.description || `${sub.name} alanında profesyonel hizmet.`
        };
      }
    }
  }

  // If no specific match, suggest general renovation
  const defaultCategory = CATEGORIES.find(c => c.id === 'su-tesisati') || CATEGORIES[0];
  return {
    confidence: 0.5,
    category: defaultCategory,
    subService: defaultCategory.subServices[0],
    detectedProblem: 'Genel Yapı & Tesisat Danışmanlığı',
    explanation: 'Yazdığınız problem için en yakın uzman ekibimiz yönlendirilecektir.'
  };
}
