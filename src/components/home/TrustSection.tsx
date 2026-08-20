import React from 'react';
import { ShieldCheck, Award, Users, Clock, CheckCircle2, Star, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const highlights = [
    {
      title: '16 Kategori, 70+ Farklı Hizmet',
      desc: 'Boyadan tesisata, çatıdan mutfak dolabına kadar tüm yapı işleriniz için tek muhatap.',
      icon: Award,
    },
    {
      title: 'Kolay & Hızlı Talep Oluşturma',
      desc: '1 dakikada ihtiyacınızı birkaç soruyla belirleyin, sürpriz maliyetlerle karşılaşmayın.',
      icon: Clock,
    },
    {
      title: 'Ev ve İş Yerleri İçin Çözüm',
      desc: 'Daire, müstakil villa, ofis, mağaza veya şantiye; her ölçekte profesyonel yönetim.',
      icon: Users,
    },
    {
      title: 'Garantili & Denetimli Hizmet Ağı',
      desc: 'Tüm ustalarımız sertifikalı, referanslı ve işçilik garantilidir.',
      icon: ShieldCheck,
    },
  ];

  const stats = [
    { value: '15+', label: 'Yıllık Sektör Tecrübesi' },
    { value: '2.500+', label: 'Tamamlanan Başarılı İş' },
    { value: '%98', label: 'Müşteri Memnuniyeti' },
    { value: '7/24', label: 'Acil Arıza Desteği' },
  ];

  return (
    <section id="hakkimizda" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 blur-3xl pointer-events-none -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Trust Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hakkımızda & Güven</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Tadilat ve yapı işleriniz için <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                tek noktadan güvenilir çözüm.
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Murat Yapı & Hizmet olarak, yapı ve tadilat sektöründeki usta bulma zorluğunu, belirsiz fiyatları ve geciken teslimatları tarihe karıştırıyoruz. Evinizde veya işletmenizde yapılması gereken her işi profesyonel bir sistemle, zamanında ve sözleşmeli güvenceyle tamamlıyoruz.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stats & Big Badge Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 text-center hover:border-brand-500/50 transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Quote Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-brand-900/60 to-slate-800 border border-brand-500/30">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2">4.9 / 5.0 (420+ Değerlendirme)</span>
              </div>
              <p className="text-sm text-slate-200 italic mb-4">
                "Banyomuzdaki su kaçağı için talep açtıktan 40 dakika sonra usta geldi, kırmadan termal kamerayla boruyu bulup 1 saatte tamir ettiler. Gerçekten harika bir hizmet."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-700 text-white font-bold text-xs flex items-center justify-center">
                  HT
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Hakan T. — Ortahisar / Trabzon</p>
                  <p className="text-[10px] text-slate-400">Doğrulanmış Müşteri Değerlendirmesi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
