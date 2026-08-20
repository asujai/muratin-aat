import React from 'react';
import { TimingOption } from '../../types/service';
import { Clock, Zap, Calendar, CalendarDays, Check, ArrowLeft, ArrowRight } from 'lucide-react';

interface StepTimingProps {
  timing: TimingOption;
  onSelect: (opt: TimingOption) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepTiming: React.FC<StepTimingProps> = ({
  timing,
  onSelect,
  onNext,
  onBack,
}) => {
  const timingOptions: { option: TimingOption; label: string; desc: string; icon: React.ElementType; badge?: string }[] = [
    {
      option: 'Acil (1-2 Saat)',
      label: 'Acil (1 - 2 Saat İçinde)',
      desc: 'Su basması, sigorta arızası vb. acil müdahale gerektiren durumlar.',
      icon: Zap,
      badge: 'Nöbetçi Ekip',
    },
    {
      option: 'Bugün İçinde',
      label: 'Bugün İçinde',
      desc: 'Gün içerisinde uygun bir saatte keşif veya tamirat.',
      icon: Clock,
    },
    {
      option: 'Bu Hafta',
      label: 'Bu Hafta İçinde',
      desc: 'Hafta boyunca size en uygun gün ve saatte planlama.',
      icon: Calendar,
    },
    {
      option: 'Tarih Önemli Değil',
      label: 'Tarih Önemli Değil / Esnek',
      desc: 'Fiyat ve proje teklifini inceleyip daha sonra karar vermek istiyorum.',
      icon: CalendarDays,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
          Adım 6 / 7 — Zamanlama
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          Ne zaman yapılmasını istiyorsunuz?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          İşinizin aciliyetine göre nöbetçi usta veya planlı randevu organize edilir.
        </p>
      </div>

      {/* Timing Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto p-1">
        {timingOptions.map((item) => {
          const Icon = item.icon;
          const isSelected = timing === item.option;
          return (
            <div
              key={item.option}
              onClick={() => onSelect(item.option)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/80 ring-2 ring-brand-500/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {item.badge && (
                    <span className="text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h4 className={`text-sm font-bold ${isSelected ? 'text-brand-900' : 'text-slate-800'} mb-1`}>
                  {item.label}
                </h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>

              {isSelected && (
                <div className="mt-3 pt-2 border-t border-brand-200 flex items-center justify-end text-brand-600 text-xs font-bold gap-1">
                  <Check className="w-4 h-4" /> Seçildi
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
          disabled={!timing}
          className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center gap-2 transition-all"
        >
          <span>Özete İlerle</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
