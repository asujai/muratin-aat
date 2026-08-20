import React, { useState } from 'react';
import { X, Search, ArrowRight, Check, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { Category, SubService } from '../../types/service';
import { CategoryIcon } from '../common/CategoryIcon';

interface AllCategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: Category) => void;
  onSelectSubService: (category: Category, subService: SubService) => void;
}

export const AllCategoriesModal: React.FC<AllCategoriesModalProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectSubService,
}) => {
  const [filterText, setFilterText] = useState('');
  const [selectedCatId, setSelectedCatId] = useState<string>(CATEGORIES[0].id);

  if (!isOpen) return null;

  const filteredCategories = CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(filterText.toLowerCase()) ||
      c.subServices.some((s) => s.name.toLowerCase().includes(filterText.toLowerCase()))
  );

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCatId) || CATEGORIES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Tüm Hizmet Kategorileri (16 Kategori)</h3>
              <p className="text-xs text-slate-500">İhtiyacınız olan hizmeti seçip hemen talep oluşturabilirsiniz.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar in Modal */}
        <div className="p-4 sm:px-6 bg-white border-b border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Kategori veya alt hizmet ara (Örn: fayans, priz, tavan, oluk, klima...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Modal Body: Left category sidebar + Right sub-services details */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Left Categories List */}
          <div className="md:col-span-4 p-3 space-y-1 overflow-y-auto max-h-[300px] md:max-h-full bg-slate-50/50">
            {filteredCategories.map((cat) => {
              const isSelected = cat.id === currentCategory.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`w-full text-left p-3 rounded-2xl flex items-center justify-between gap-3 transition-all ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.emoji}</span>
                    <div>
                      <p className="text-xs font-bold leading-tight">{cat.name}</p>
                      <p
                        className={`text-[10px] ${
                          isSelected ? 'text-brand-100' : 'text-slate-400'
                        }`}
                      >
                        {cat.subServices.length} Alt Hizmet
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isSelected ? 'text-white translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Sub-services Details */}
          <div className="md:col-span-8 p-5 sm:p-6 overflow-y-auto bg-white">
            <div className="mb-6">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl ${currentCategory.colorTheme.bg} ${currentCategory.colorTheme.text} flex items-center justify-center text-2xl`}
                  >
                    <CategoryIcon name={currentCategory.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{currentCategory.name}</h4>
                    <p className="text-xs text-slate-500">{currentCategory.shortDesc}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectCategory(currentCategory);
                  }}
                  className="px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 rounded-xl text-xs font-bold transition-colors"
                >
                  Genel Talep Başlat
                </button>
              </div>
            </div>

            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Mevcut Alt Hizmetler & İşlemler ({currentCategory.subServices.length})
            </p>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentCategory.subServices.map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => {
                    onClose();
                    onSelectSubService(currentCategory, sub);
                  }}
                  className="p-4 rounded-2xl border border-slate-200/80 hover:border-brand-500 hover:bg-brand-50/40 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h5 className="text-sm font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                        {sub.name}
                      </h5>
                      {sub.popular && (
                        <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded">
                          Popüler
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                      {sub.description || 'Profesyonel usta ve malzeme temini.'}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    {sub.estimatedPriceRange && (
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {sub.estimatedPriceRange}
                      </span>
                    )}
                    <span className="font-bold text-brand-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Seç <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" /> Tüm talepler ücretsiz keşif içerir.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
