export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: '1',
    category: 'Genel',
    question: 'Hangi hizmetleri veriyorsunuz?',
    answer: 'Boya & badana, kırmadan su kaçağı tespiti ve tesisat tamiri, elektrik arıza & aydınlatma, komple anahtar teslim ev/ofis tadilatı, çatı ve oluk onarımı, banyo ve mutfak yenileme, laminat parke & zemin, kapı & pencere montajı, klima & kombi bakımı, su/ses izolasyonu, bina mantolama, bahçe düzenleme, demonte mobilya montajı ve inşaat sonrası temizlik dahil 16 ana kategoride 70\'ten fazla alt hizmet sunuyoruz.'
  },
  {
    id: '2',
    category: 'Fiyatlandırma',
    question: 'Fiyat nasıl belirleniyor ve keşif ücretli mi?',
    answer: 'Tüm keşif ve talep oluşturma süreçlerimiz tamamen ÜCRETSİZDİR. Ustalarımız veya teknik ekibimiz mekanınızı yerinde inceler veya fotoğraflı talep üzerinden net iş programı çıkarır. Malzeme kalitesi, işçilik süresi ve mekan ölçülerine göre sürpriz ek masraf içermeyen sabit bir teklif sunulur.'
  },
  {
    id: '3',
    category: 'Süreç',
    question: 'Talep oluşturmak ücretli mi veya bağlayıcı mı?',
    answer: 'Hayır, sitemiz üzerinden talep oluşturmak %100 ücretsizdir ve herhangi bir bağlayıcılığı yoktur. Teklifi inceledikten sonra onay verip vermemek tamamen sizin tercihinizdir.'
  },
  {
    id: '4',
    category: 'Bölge',
    question: 'Hangi bölgelerde ve ilçelerde hizmet veriyorsunuz?',
    answer: 'Başta Trabzon (Ortahisar, Akçaabat, Yomra, Sürmene, Of, Araklı, Beşikdüzü, Vakfıkebir, Maçka ve diğer tüm ilçeler) olmak üzere Doğu Karadeniz bölgesi genelinde geniş usta ve teknik kadromuzla kesintisiz hizmet veriyoruz.'
  },
  {
    id: '5',
    category: 'Acil Durum',
    question: 'Acil arıza durumunda (su baskını, elektrik kesintisi) ne kadar sürede ulaşıyorsunuz?',
    answer: 'Acil su kaçağı, boru patlaması veya sigorta yangın riski gibi kritik durumlarda talebinizi "Acil (1-2 Saat)" olarak işaretlediğinizde, en yakın nöbetçi ekibimiz ortalama 30-45 dakika içinde adresinize yönlendirilir.'
  },
  {
    id: '6',
    category: 'Garanti',
    question: 'Yapılan işlerde garanti veriliyor mu?',
    answer: 'Evet! Murat Yapı & Hizmet güvencesiyle tamamlanan tüm tadilat, tesisat, çatı ve yalıtım işlerimiz 1 yıldan 10 yıla kadar işçilik ve malzeme garantisi altındadır. Olası bir aksaklıkta ücretsiz servis sağlanır.'
  }
];
