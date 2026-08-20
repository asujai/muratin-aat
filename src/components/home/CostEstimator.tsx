import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { Category, SubService } from '../../types/service';

interface CostEstimatorProps {
  onStartWithEstimate: (category: Category, subService: SubService, notes: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onStartWithEstimate }) => {
  const [selectedServiceKey, setSelectedServiceKey] = useState<'boya' | 'banyo' | 'parke' | 'mutfak' | 'cati'>('boya');
  const [sizeTier, setSizeTier] = useState<number>(2); // 0: 1+1, 1: 2+1, 2: 3+1, 3: Villa
  const [qualityTier, setQualityTier] = useState<'standart' | 'premium' | 'luks'>('premium');

  const services = {
    boya: {
      name: 'İç Cephe Boya & Badana',
      catId: 'boya-badana',
      subId: 'ic-cephe-boya',
      basePrices: [4500, 7500, 11000, 18000],
      duration: ['1 Gün', '2 Gün', '3 Gün', '4-5 Gün'],
      unit: 'Tüm Odalar ve Tavanlar Dahil',
    },
    banyo: {
      name: 'Komple Banyo Yenileme',
      catId: 'tadilat',
      subId: 'banyo-tadilati',
      basePrices: [22000, 35000, 48000, 75000],
      duration: ['4 Gün', '6 Gün', '8 Gün', '12 Gün'],
      unit: 'Kırım + Yalıtım + Seramik + Duşakabin + Dolap',
    },
    parke: {
      name: 'Laminat Parke & Süpürgelik',
      catId: 'zemin',
      subId: 'laminat-parke',
      basePrices: [6000, 9500, 14000, 24000],
      duration: ['1 Gün', '1-2 Gün', '2 Gün', '3 Gün'],
      unit: 'Şilte Serimi + 8mm/10mm Parke + Lake Süpürgelik',
    },
    mutfak: {
      name: 'Mutfak Dolabı & Tezgâh',
      catId: 'tadilat',
      subId: 'mutfak-tadilati',
      basePrices: [28000, 42000, 60000, 95000],
      duration: ['5 Gün', '8 Gün', '10 Gün', '15 Gün'],
      unit: 'MDF Gövde + Lake Kapaklar + Granit Tezgâh',
    },
    cati: {
      name: 'Çatı Tamiri & İzolasyon',
      catId: 'cati',
      subId: 'cati-tamiri',
      basePrices: [8000, 14000, 22000, 38000],
      duration: ['2 Gün', '3 Gün', '4 Gün', '6 Gün'],
      unit: 'Kiremit Aktarma + Su Membranı + Yağmur Oluğu Kontrolü',
    },
  };

  const sizes = [
    { label: '1+1 (50-70 m²)', desc: 'Küçük Daire / Stüdyo' },
    { label: '2+1 (75-100 m²)', desc: 'Standart Daire' },
    { label: '3+1 (110-145 m²)', desc: 'Geniş Aile Dairesi' },
    { label: '4+1 & Villa (150+ m²)', desc: 'Dubleks & Müstakil' },
  ];

  const currentService = services[selectedServiceKey];
  const multiplier = qualityTier === 'standart' ? 0.85 : qualityTier === 'premium' ? 1.0 : 1.35;
  const baseCost = currentService.basePrices[sizeTier];
  const calculatedCost = Math.round(baseCost * multiplier);
  const minCost = Math.round(calculatedCost * 0.9);
  const maxCost = Math.round(calculatedCost * 1.15);
  const estDuration = currentService.duration[sizeTier];

  const handleLaunchRequest = () => {
    const cat = CATEGORIES.find((c) => c.id === currentService.catId) || CATEGORIES[0];
    const sub = cat.subServices.find((s) => s.id === currentService.subId) || cat.subServices[0];
    const note = `Tahmini Hesaplama: ${sizes[sizeTier].label}, ${qualityTier.toUpperCase()} Kalite Paketi. Tahmini Bütçe: ${minCost.toLocaleString('tr-TR')} ₺ - ${maxCost.toLocaleString('tr-TR')} ₺.`;
    onStartWithEstimate(cat, sub, note);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>Şeffaf Fiyatlandırma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Canlı Maliyet & Bütçe Hesaplayıcı
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Mekân ölçünüzü ve istediğiniz kalite paketini seçin, saniyeler içinde ortalama bütçe aralığını görün.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Hizmet Türü */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1 — Hizmet Seçin
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(services) as Array<keyof typeof services>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedServiceKey(key)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                      selectedServiceKey === key
                        ? 'border-brand-600 bg-brand-50 text-brand-900 ring-2 ring-brand-500/20 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    {services[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Mekân Büyüklüğü */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2 — Mekân Büyüklüğü
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {sizes.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSizeTier(idx)}
                    className={`p-3 rounded-xl text-xs font-bold text-center transition-all border ${
                      sizeTier === idx
                        ? 'border-brand-600 bg-brand-50 text-brand-900 ring-2 ring-brand-500/20 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <p className="font-extrabold">{s.label.split(' ')[0]}</p>
                    <p className="text-[10px] text-slate-400 font-normal mt-0.5">{s.label.split(' ')[1]}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Kalite & Malzeme Paketi */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3 — Malzeme & İşçilik Paketi
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standart', name: 'Ekonomik / Standart', desc: 'Uygun fiyatlı kaliteli yerli malzeme' },
                  { id: 'premium', name: '1. Sınıf Premium', desc: 'En çok tercih edilen TSE garantili seri' },
                  { id: 'luks', name: 'Ultra Lüks / Özel Tasarım', desc: 'İthal ve mimari özel tasarım seri' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setQualityTier(tier.id as any)}
                    className={`p-3 rounded-xl text-xs text-left transition-all border ${
                      qualityTier === tier.id
                        ? 'border-brand-600 bg-brand-50 text-brand-900 ring-2 ring-brand-500/20 shadow-sm font-bold'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <p className="font-bold">{tier.name}</p>
                    <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Cost Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl border border-slate-800">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Tahmini Hesaplama Özeti</span>
                <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full">
                  Keşif %100 Ücretsiz
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-1">{currentService.name}</h4>
              <p className="text-xs text-slate-400 mb-6">{currentService.unit}</p>

              {/* Price Range Box */}
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 mb-4">
                <span className="text-[11px] text-slate-400 block mb-1">Tahmini Malzeme + İşçilik Aralığı:</span>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400">
                  {minCost.toLocaleString('tr-TR')} ₺ — {maxCost.toLocaleString('tr-TR')} ₺
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  * Kesin fiyat yerinde ücretsiz keşif veya fotoğraf incelemesi sonrasında verilir.
                </span>
              </div>

              {/* Estimated completion duration */}
              <div className="flex items-center justify-between text-xs text-slate-300 py-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-4 h-4 text-brand-400" /> Tahmini Teslim Süresi:
                </span>
                <strong className="text-white">{estDuration}</strong>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleLaunchRequest}
              className="mt-6 w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-extrabold text-sm shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Bu Hesaplama İle Talep Oluştur</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
