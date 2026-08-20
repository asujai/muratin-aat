import React from 'react';
import { ArrowRight, Sparkles, ChevronRight, Check } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { Category, SubService } from '../../types/service';
import { CategoryIcon } from '../common/CategoryIcon';

interface PopularServicesProps {
  onSelectCategory: (category: Category) => void;
  onSelectSubService: (category: Category, subService: SubService) => void;
  onOpenAllCategories: () => void;
}

export const PopularServices: React.FC<PopularServicesProps> = ({
  onSelectCategory,
  onSelectSubService,
  onOpenAllCategories,
}) => {
  // 8 prominent popular categories
  const popularCategories = CATEGORIES.filter((c) => c.popular).slice(0, 8);

  return (
    <section id="hizmetler" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2 border border-brand-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hizmet Yelpazesi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              En Çok Tercih Edilen Hizmetler
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1 max-w-2xl">
              Eviniz ve iş yeriniz için en popüler tadilat, tesisat ve onarım kategorilerinden dilediğinizi seçin.
            </p>
          </div>

          <button
            onClick={onOpenAllCategories}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm shadow-soft-sm hover:shadow-soft-md transition-all self-start md:self-auto group"
          >
            <span>Tüm Hizmetleri Gör (16 Kategori)</span>
            <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid (Armut / Getir Clean Card Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {popularCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-brand-400 shadow-soft-sm hover:shadow-card-hover transition-all duration-200 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${category.colorTheme.bg} ${category.colorTheme.text} flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <CategoryIcon name={category.iconName} className="w-7 h-7" />
                  </div>

                  {category.badge && (
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Title & Short Desc */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1.5 flex items-center gap-2">
                  <span>{category.name}</span>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {category.shortDesc}
                </p>

                {/* Sub-services Quick Chips */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Alt Hizmetler:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.subServices.slice(0, 3).map((sub) => (
                      <span
                        key={sub.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectSubService(category, sub);
                        }}
                        className="inline-flex items-center text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-brand-50 hover:text-brand-700 px-2 py-1 rounded-md border border-slate-100 transition-colors"
                      >
                        {sub.name}
                      </span>
                    ))}
                    {category.subServices.length > 3 && (
                      <span className="text-[10px] font-bold text-slate-400 self-center">
                        +{category.subServices.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-brand-600 text-xs font-bold group-hover:text-brand-700">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Ücretsiz Keşif & Talep
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-800 text-white shadow-soft-lg flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold">16 Kategori ve 70+ Farklı Hizmet</h3>
            <p className="text-sm text-brand-100 max-w-xl">
              İzolasyondan bahçe düzenlemesine, kapı pencereden mobilya montajına kadar ihtiyacınız olan tüm ustalar burada.
            </p>
          </div>
          <button
            onClick={onOpenAllCategories}
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-brand-900 font-extrabold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Katalogun Tamamını İncele</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
