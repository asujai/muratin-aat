import React from 'react';
import { PropertyType } from '../../types/service';
import { Home, Building2, Briefcase, Store, HardHat, Check, ArrowLeft, ArrowRight, Castle } from 'lucide-react';

interface StepPropertyTypeProps {
  propertyType: PropertyType;
  onSelect: (type: PropertyType) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepPropertyType: React.FC<StepPropertyTypeProps> = ({
  propertyType,
  onSelect,
  onNext,
  onBack,
}) => {
  const propertyTypes: { type: PropertyType; label: string; desc: string; icon: React.ElementType }[] = [
    { type: 'Ev', label: 'Daire / Ev', desc: 'Standart konut daire', icon: Home },
    { type: 'Villa / Müstakil', label: 'Müstakil Ev / Villa', desc: 'Müstakil konut ve yazlık', icon: Castle },
    { type: 'Apartman', label: 'Apartman / Site Ortak Alan', desc: 'Bina girişi, çatı, merdiven, bahçe', icon: Building2 },
    { type: 'Ofis', label: 'Ofis / Büro', desc: 'Çalışma alanı, iş merkezi', icon: Briefcase },
    { type: 'Mağaza', label: 'Mağaza / Dükkan / Restoran', desc: 'Ticari işletme ve müşteri alanları', icon: Store },
    { type: 'İnşaat', label: 'İnşaat / Şantiye', desc: 'Yeni yapı veya kaba inşaat alanı', icon: HardHat },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
          Adım 3 / 7 — Mekân Türü
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          İşin yapılacağı mekânı seçin
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          İşin ölçeği ve gereken ekipman için mekân türünü belirtiniz.
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto p-1">
        {propertyTypes.map((item) => {
          const Icon = item.icon;
          const isSelected = propertyType === item.type;
          return (
            <div
              key={item.type}
              onClick={() => onSelect(item.type)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/80 ring-2 ring-brand-500/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-brand-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isSelected ? 'text-brand-900' : 'text-slate-800'}`}>
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>

              {isSelected && (
                <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
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
          disabled={!propertyType}
          className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center gap-2 transition-all"
        >
          <span>Devam Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
