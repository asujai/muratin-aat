import React from 'react';
import { Category, SubService } from '../../types/service';
import { ArrowLeft, ArrowRight, Check, MapPin, AlertCircle } from 'lucide-react';

interface StepProblemProps {
  category: Category;
  subService: SubService;
  problemLocation: string;
  problemDetail: string;
  onSetLocation: (loc: string) => void;
  onSetDetail: (detail: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepProblem: React.FC<StepProblemProps> = ({
  category,
  subService,
  problemLocation,
  problemDetail,
  onSetLocation,
  onSetDetail,
  onNext,
  onBack,
}) => {
  // Location options (customized or default)
  const defaultLocations = [
    'Banyo',
    'Mutfak',
    'Tuvalet',
    'Salon',
    'Yatak Odası',
    'Balkon / Teras',
    'Koridor / Antre',
    'Çatı / Tavan Arası',
    'Bahçe / Dış Alan',
    'Tüm Ev / Mekân',
    'Bilmiyorum / Emin Değilim',
  ];

  const locationOptions = subService.suggestedLocations && subService.suggestedLocations.length > 0
    ? Array.from(new Set([...subService.suggestedLocations, ...defaultLocations.slice(0, 5), 'Diğer']))
    : defaultLocations;

  // Problem detail options
  const defaultProblems = [
    'Borudan / ek yerinden su geliyor',
    'Duvar veya tavan nemleniyor / kabarıyor',
    'Tavandan alt kata su damlıyor',
    'Cihaz veya sigorta sürekli arıza veriyor',
    'Eski ve deforme olmuş, yenilenmesi gerekiyor',
    'Çatlak veya kırık var',
    'Kaynağını / tam sebebini bilmiyorum',
  ];

  const problemOptions = subService.typicalProblems && subService.typicalProblems.length > 0
    ? Array.from(new Set([...subService.typicalProblems, ...defaultProblems.slice(0, 3), 'Diğer']))
    : (category.commonProblems || defaultProblems);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
          Adım 2 / 7 — Sorun Detayı
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          {subService.name} için detayları belirtin
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Sorunun hangi alanda olduğunu ve belirtisini seçin.
        </p>
      </div>

      {/* 1 — Sorun Nerede? */}
      <div className="space-y-3">
        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
          <MapPin className="w-4 h-4 text-brand-600" />
          <span>1 — Sorun tam olarak nerede? *</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {locationOptions.map((loc) => {
            const isSelected = problemLocation === loc;
            return (
              <button
                type="button"
                key={loc}
                onClick={() => onSetLocation(loc)}
                className={`p-3 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'border-brand-600 bg-brand-50 text-brand-900 ring-2 ring-brand-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{loc}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2 — Problemi Seçin */}
      <div className="space-y-3 pt-2">
        <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider">
          <AlertCircle className="w-4 h-4 text-accent-600" />
          <span>2 — Karşılaştığınız problemi seçin *</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {problemOptions.map((prob) => {
            const isSelected = problemDetail === prob;
            return (
              <button
                type="button"
                key={prob}
                onClick={() => onSetDetail(prob)}
                className={`p-3 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'border-brand-600 bg-brand-50 text-brand-900 ring-2 ring-brand-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="line-clamp-2">{prob}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Geri</span>
        </button>

        <button
          onClick={onNext}
          disabled={!problemLocation || !problemDetail}
          className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center gap-2 transition-all"
        >
          <span>Devam Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
