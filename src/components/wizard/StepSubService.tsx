import React from 'react';
import { Category, SubService } from '../../types/service';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { CategoryIcon } from '../common/CategoryIcon';

interface StepSubServiceProps {
  category: Category;
  selectedSubService: SubService | null;
  onSelect: (subService: SubService) => void;
  onNext: () => void;
}

export const StepSubService: React.FC<StepSubServiceProps> = ({
  category,
  selectedSubService,
  onSelect,
  onNext,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
          <span>{category.emoji} {category.name}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          İhtiyacınız olan işlemi seçin
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Hangi konuda desteğe veya tamire ihtiyacınız olduğunu belirleyin.
        </p>
      </div>

      {/* Sub-services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto p-1">
        {category.subServices.map((sub) => {
          const isSelected = selectedSubService?.id === sub.id;
          return (
            <div
              key={sub.id}
              onClick={() => onSelect(sub)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/70 ring-2 ring-brand-500/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className={`text-sm font-bold ${isSelected ? 'text-brand-900' : 'text-slate-800'}`}>
                    {sub.name}
                  </h4>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {!isSelected && sub.popular && (
                    <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded">
                      Popüler
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {sub.description || 'Uzman usta ve malzeme temini.'}
                </p>
              </div>

              {sub.estimatedPriceRange && (
                <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">Yaklaşık Aralık:</span>
                  <span className="font-bold text-slate-700">{sub.estimatedPriceRange}</span>
                </div>
              )}
            </div>
          );
        })}

        {/* Diğer Seçeneği */}
        <div
          onClick={() =>
            onSelect({
              id: 'diger',
              name: 'Diğer / Özel İşlem',
              description: 'Listede olmayan farklı bir işlem veya özel tadilat talebi.',
            })
          }
          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
            selectedSubService?.id === 'diger'
              ? 'border-brand-600 bg-brand-50/70 ring-2 ring-brand-500/20 shadow-md'
              : 'border-slate-200 hover:border-slate-300 bg-white'
          }`}
        >
          <div>
            <h4 className="text-sm font-bold text-slate-800">Diğer / Farklı Bir İşlem</h4>
            <p className="text-xs text-slate-500">Listede yer almayan özel bir talep</p>
          </div>
          {selectedSubService?.id === 'diger' && (
            <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Continue Button */}
      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button
          onClick={onNext}
          disabled={!selectedSubService}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center justify-center gap-2 transition-all"
        >
          <span>Devam Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
