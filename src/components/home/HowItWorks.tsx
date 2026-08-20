import React from 'react';
import { Search, SlidersHorizontal, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenWizard: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenWizard }) => {
  const steps = [
    {
      step: '01',
      title: 'Hizmeti Seçin',
      desc: '16 ana kategori ve onlarca alt işlem arasından eviniz veya iş yeriniz için gereken hizmeti kolayca belirleyin.',
      icon: Search,
      color: 'bg-brand-50 text-brand-600 border-brand-200',
    },
    {
      step: '02',
      title: 'Detayları Paylaşın',
      desc: 'Sorun yeri, arıza tipi, mekan bilgisi, adres ve isterseniz fotoğraf ekleyerek ihtiyacınızı netleştirin.',
      icon: SlidersHorizontal,
      color: 'bg-accent-50 text-accent-600 border-accent-200',
    },
    {
      step: '03',
      title: 'Talebinizi Oluşturun',
      desc: 'Talebinizi onaylayın; en uygun sertifikalı usta ekibimiz belirlenen tarihte keşif ve uygulama için harekete geçsin.',
      icon: CheckCircle2,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <section id="nasil-calisir" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200">
            Kolay & Hızlı Süreç
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nasıl Çalışır?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Karmaşık telefon görüşmeleri veya usta arama stresi yok. 3 basit adımda garantili hizmet alın.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-brand-400 shadow-soft-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-brand-200 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-brand-600 transition-colors">
                  <span>Adım {idx + 1} / 3</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenWizard}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brand-600/25 transition-all"
          >
            <span>Hemen İlk Talebini Oluştur</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
