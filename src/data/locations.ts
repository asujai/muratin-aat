export interface DistrictData {
  name: string;
  neighborhoods: string[];
}

export interface CityData {
  name: string;
  districts: DistrictData[];
}

export const CITIES: CityData[] = [
  {
    name: 'Trabzon',
    districts: [
      {
        name: 'Ortahisar (Merkez)',
        neighborhoods: ['Yalıncak', 'Bostancı', 'Pelitli', 'Konaklar', 'Erdoğdu', 'Çukurçayır', '1 Nolu Beşirli', '2 Nolu Beşirli', 'Soğuksu', 'Bahçecik', 'Aydınlıkevler', 'Gazipaşa', 'Kemerkaya', 'Karşıyaka', 'Yenicuma', 'İncesu', 'Kaymaklı']
      },
      {
        name: 'Akçaabat',
        neighborhoods: ['Söğütlü', 'Yıldızlı', 'Yaylacık', 'Dürbinar', 'Darıca', 'Kavaklı', 'Mersin', 'Salacık', 'Sarıtaş', 'Akçakale']
      },
      {
        name: 'Yomra',
        neighborhoods: ['Kaşüstü', 'Sancak', 'Gürsel', 'Çamlıyurt', 'Özdil', 'İkisu']
      },
      {
        name: 'Sürmene',
        neighborhoods: ['Çamburnu', 'Balıklı', 'Çarşı', 'Zeytinli', 'Soğuksu', 'Kastel']
      },
      {
        name: 'Of',
        neighborhoods: ['Cumhuriyet', 'İrfanlı', 'Kıyıboyu', 'Bölümlü', 'Eskipazar', 'Gürpınar']
      },
      {
        name: 'Araklı',
        neighborhoods: ['Merkez', 'Hürriyet', 'Yolgören', 'Kalecik', 'Yeşilce']
      },
      {
        name: 'Beşikdüzü',
        neighborhoods: ['Cumhuriyet', 'Vardallı', 'Nefsişarlı', 'Adacık', 'Yeşilköy']
      },
      {
        name: 'Vakfıkebir',
        neighborhoods: ['Kemaliye', 'Körez', 'Çarşı', 'Büyükliman', 'Hürriyet']
      },
      {
        name: 'Maçka',
        neighborhoods: ['Merkez', 'Mataracı', 'Esiroğlu', 'Coşandere', 'Galyan']
      },
      {
        name: 'Arsin',
        neighborhoods: ['Güzelyalı', 'Fatih', 'Yeşiltepe', 'Cumhuriyet', 'Santa']
      },
      {
        name: 'Çaykara',
        neighborhoods: ['Merkez', 'Uzungöl', 'Taşlıgedik', 'Şahinkaya']
      },
      {
        name: 'Çarşıbaşı',
        neighborhoods: ['Merkez', 'Burunbaşı', 'Kerem', 'Salova']
      },
      {
        name: 'Tonya',
        neighborhoods: ['Ortamahalle', 'Kale', 'Karşılılar', 'Büyükmahalle']
      },
      {
        name: 'Düzköy',
        neighborhoods: ['Cevizlik', 'Çal', 'Çayırbağı', 'Orta Mahalle']
      },
      {
        name: 'Şalpazarı',
        neighborhoods: ['Merkez', 'Fidanbaşı', 'Geyikli', 'Simenli']
      },
      {
        name: 'Köprübaşı',
        neighborhoods: ['Merkez', 'Beşköy', 'Gündoğan', 'Çifteköprü']
      }
    ]
  },
  {
    name: 'Rize',
    districts: [
      { name: 'Merkez', neighborhoods: ['Engindere', 'Gülbahar', 'Tophane', 'Müftü', 'İslampaşa'] },
      { name: 'Çayeli', neighborhoods: ['Büyükcaferpaşa', 'Eskipazar', 'Yenipazar'] },
      { name: 'Ardeşen', neighborhoods: ['Cumhuriyet', 'Deniz', 'Merkez'] }
    ]
  },
  {
    name: 'Giresun',
    districts: [
      { name: 'Merkez', neighborhoods: ['Çaykara', 'Güre', 'Teyyaredüzü', 'Nizamiye'] },
      { name: 'Bulancak', neighborhoods: ['Sanayi', 'İsmetpaşa', 'Ballıca'] },
      { name: 'Görele', neighborhoods: ['Kumyalı', 'Sayfiye', 'Yeşiltepe'] }
    ]
  },
  {
    name: 'İstanbul',
    districts: [
      { name: 'Kadıköy', neighborhoods: ['Moda', 'Fenerbahçe', 'Caddebostan', 'Acıbadem'] },
      { name: 'Beşiktaş', neighborhoods: ['Levent', 'Bebek', 'Etiler', 'Ortaköy'] },
      { name: 'Üsküdar', neighborhoods: ['Altunizade', 'Acıbadem', 'Beylerbeyi', 'Kandilli'] }
    ]
  }
];
