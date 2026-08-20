export interface SubService {
  id: string;
  name: string;
  description?: string;
  iconName?: string;
  popular?: boolean;
  estimatedPriceRange?: string;
  estimatedDuration?: string;
  typicalProblems?: string[];
  suggestedLocations?: string[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  badge?: string;
  colorTheme: {
    bg: string;
    text: string;
    border: string;
    light: string;
  };
  popular: boolean;
  subServices: SubService[];
  commonProblems?: string[];
}

export type PropertyType = 'Ev' | 'Apartman' | 'Ofis' | 'Mağaza' | 'İnşaat' | 'Villa / Müstakil' | 'Diğer';

export type TimingOption = 'Acil (1-2 Saat)' | 'Bugün İçinde' | 'Bu Hafta' | 'Tarih Önemli Değil';

export interface ServiceRequest {
  id: string;
  createdAt: string;
  category: Category;
  subService: SubService;
  problemLocation: string;
  problemDetail: string;
  propertyType: PropertyType;
  city: string;
  district: string;
  neighborhood: string;
  addressNote?: string;
  customDescription: string;
  photos: string[]; // base64 or blob URLs
  timing: TimingOption;
  contactName: string;
  contactPhone: string;
  status: 'PENDING' | 'MATCHING' | 'ACCEPTED' | 'COMPLETED';
}

export interface SmartSuggestionMatch {
  confidence: number;
  category: Category;
  subService: SubService;
  detectedProblem: string;
  explanation: string;
}
