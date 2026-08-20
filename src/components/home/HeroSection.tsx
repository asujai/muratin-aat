import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, CheckCircle2, Shield, Clock, ThumbsUp } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { Category, SubService } from '../../types/service';

interface HeroSectionProps {
  onSelectCategory: (category: Category) => void;
  onSelectSubService: (category: Category, subService: SubService) => void;
  onOpenWizard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCategory,
  onSelectSubService,
  onOpenWizard,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter categories and subservices based on search
  const filteredResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();

    const matches: { category: Category; subService?: SubService }[] = [];

    CATEGORIES.forEach((cat) => {
      if (cat.name.toLowerCase().includes(query) || cat.shortDesc.toLowerCase().includes(query)) {
        matches.push({ category: cat });
      }
      cat.subServices.forEach((sub) => {
        if (
          sub.name.toLowerCase().includes(query) ||
          (sub.description && sub.description.toLowerCase().includes(query)) ||
          (sub.typicalProblems && sub.typicalProblems.some((p) => p.toLowerCase().includes(query)))
        ) {
          matches.push({ category: cat, subService: sub });
        }
      });
    });

    return matches.slice(0, 8);
  }, [searchQuery]);

  const quickTags = [
    { label: 'Su Kaçağı', catId: 'su-tesisati', subId: 'su-kacagi', emoji: '💧' },
    { label: 'İç Cephe Boya', catId: 'boya-badana', subId: 'ic-cephe-boya', emoji: '🎨' },
    { label: 'Priz / Elektrik Arızası', catId: 'elektrik', subId: 'priz-anahtar', emoji: '⚡' },
    { label: 'Banyo Tadilatı', catId: 'tadilat', subId: 'banyo-tadilati', emoji: '🚿' },
    { label: 'Çatı Tamiri', catId: 'cati', subId: 'cati-tamiri', emoji: '🏠' },
    { label: 'Laminat Parke', catId: 'zemin', subId: 'laminat-parke', emoji: '🪵' },
  ];

  const handleQuickTagClick = (tag: typeof quickTags[0]) => {
    const category = CATEGORIES.find((c) => c.id === tag.catId);
    if (!category) return;
    const sub = category.subServices.find((s) => s.id === tag.subId);
    if (sub) {
      onSelectSubService(category, sub);
    } else {
      onSelectCategory(category);
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50">
      {/* Background decorative ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-200/40 via-sky-100/30 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 shadow-soft-sm mb-6 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-700">Trabzon & Karadeniz'in 1 Numaralı Hizmet Ağı</span>
          <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
            Ücretsiz Keşif
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
          Evinizde veya iş yerinizde <br className="hidden sm:inline" />
          yapılması gereken ne varsa{' '}
          <span className="relative inline-block text-brand-600">
            tek yerden
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-accent-400 opacity-80"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>{' '}
          çözün.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Boya, elektrik, su tesisatı, tadilat, çatı, zemin ve onlarca farklı hizmet için dakikalar içinde ücretsiz talep oluşturun.
        </p>

        {/* Interactive Search Box Container */}
        <div ref={searchRef} className="max-w-2xl mx-auto relative mb-6">
          <div
            className={`relative bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 shadow-soft-lg ${
              isSearchFocused ? 'border-brand-500 ring-4 ring-brand-100 shadow-card-hover' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center p-2 sm:p-3">
              <div className="pl-3 sm:pl-4 text-slate-400">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Hangi hizmete ihtiyacınız var? (Örn: Su kaçağı, boya, çatı...)"
                className="w-full px-3 py-2.5 sm:py-3.5 text-sm sm:text-base font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                onClick={() => {
                  if (filteredResults.length > 0) {
                    const first = filteredResults[0];
                    if (first.subService) {
                      onSelectSubService(first.category, first.subService);
                    } else {
                      onSelectCategory(first.category);
                    }
                  } else {
                    onOpenWizard();
                  }
                }}
                className="shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/25 transition-all flex items-center gap-1.5"
              >
                <span>Ara & Başla</span>
                <ArrowRight className="w-4 h-4 hidden sm:inline" />
              </button>
            </div>

            {/* Live Search Results Dropdown */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 max-h-96 overflow-y-auto z-50 p-2 text-left animate-fade-in">
                {filteredResults.length > 0 ? (
                  <div className="space-y-1">
                    <p className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Önerilen Hizmetler ({filteredResults.length})
                    </p>
                    {filteredResults.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setIsSearchFocused(false);
                          setSearchQuery('');
                          if (item.subService) {
                            onSelectSubService(item.category, item.subService);
                          } else {
                            onSelectCategory(item.category);
                          }
                        }}
                        className="p-3 rounded-xl hover:bg-brand-50 cursor-pointer flex items-center justify-between transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover:scale-110 transition-transform">
                            {item.category.emoji}
                          </span>
                          <div>
                            <p className="text-sm font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                              {item.subService ? item.subService.name : item.category.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {item.subService
                                ? `${item.category.name} • ${item.subService.description || ''}`
                                : item.category.shortDesc}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-brand-600 bg-brand-100/60 px-2.5 py-1 rounded-lg flex items-center gap-1 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                          Talep Aç <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-sm font-bold text-slate-700 mb-1">Eşleşen sonuç bulunamadı</p>
                    <p className="text-xs text-slate-500 mb-4">
                      "{searchQuery}" ile ilgili doğrudan bir başlık yok ancak uzman ekibimiz her türlü tadilat işini çözebilir.
                    </p>
                    <button
                      onClick={() => {
                        setIsSearchFocused(false);
                        onOpenWizard();
                      }}
                      className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-brand-700"
                    >
                      Genel Talep Oluştur
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Search Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Popüler:
            </span>
            {quickTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickTagClick(tag)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-brand-50 border border-slate-200 hover:border-brand-300 rounded-full text-xs font-medium text-slate-700 hover:text-brand-700 shadow-soft-sm transition-all active:scale-95"
              >
                <span>{tag.emoji}</span>
                <span>{tag.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Value Props & Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 text-left">
          <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-soft-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">%100 Ücretsiz</p>
              <p className="text-[11px] text-slate-500">Keşif ve teklif alma</p>
            </div>
          </div>

          <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-soft-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Garantili İşçilik</p>
              <p className="text-[11px] text-slate-500">Sözleşmeli & güvenceli</p>
            </div>
          </div>

          <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-soft-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Hızlı Müdahale</p>
              <p className="text-[11px] text-slate-500">Ortalama 45 dk varış</p>
            </div>
          </div>

          <div className="p-3.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-soft-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Sabit Fiyat</p>
              <p className="text-[11px] text-slate-500">Sürpriz masraf yok</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
