import React from 'react';
import { Category, SubService, PropertyType, TimingOption } from '../../types/service';
import { ArrowLeft, CheckCircle2, Edit3, ShieldCheck, Sparkles, MapPin, Calendar, Clock, User, Home, AlertCircle, Camera } from 'lucide-react';

interface StepSummaryProps {
  category: Category;
  subService: SubService;
  problemLocation: string;
  problemDetail: string;
  propertyType: PropertyType;
  city: string;
  district: string;
  neighborhood: string;
  addressNote?: string;
  customDescription: string;
  photos: string[];
  timing: TimingOption;
  contactName: string;
  contactPhone: string;
  onGoToStep: (stepNumber: number) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export const StepSummary: React.FC<StepSummaryProps> = ({
  category,
  subService,
  problemLocation,
  problemDetail,
  propertyType,
  city,
  district,
  neighborhood,
  addressNote,
  customDescription,
  photos,
  timing,
  contactName,
  contactPhone,
  onGoToStep,
  onBack,
  onSubmit,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
          Son Adım — Talep Özeti
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          Talebinizi Kontrol Edin
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Bilgileriniz doğruysa onaylayarak ücretsiz keşif ve teklif sürecini başlatabilirsiniz.
        </p>
      </div>

      {/* Summary Review Card */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-4 max-h-[380px] overflow-y-auto">
        {/* Row 1: Hizmet & İşlem */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Hizmet & İşlem</span>
            <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>{category.emoji} {category.name}</span>
              <span className="text-slate-400">→</span>
              <span className="text-brand-600">{subService.name}</span>
            </p>
            {subService.estimatedPriceRange && (
              <p className="text-xs text-slate-500">Tahmini Aralık: {subService.estimatedPriceRange}</p>
            )}
          </div>
          <button
            onClick={() => onGoToStep(1)}
            className="p-1.5 text-xs text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg flex items-center gap-1 font-semibold"
          >
            <Edit3 className="w-3.5 h-3.5" /> Düzenle
          </button>
        </div>

        {/* Row 2: Sorun & Belirti */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sorun Yeri & Belirti</span>
            <p className="text-sm font-bold text-slate-800">
              {problemLocation} <span className="font-normal text-slate-500">({problemDetail})</span>
            </p>
          </div>
          <button
            onClick={() => onGoToStep(2)}
            className="p-1.5 text-xs text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg flex items-center gap-1 font-semibold"
          >
            <Edit3 className="w-3.5 h-3.5" /> Düzenle
          </button>
        </div>

        {/* Row 3: Mekân & Konum */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Mekân & Konum</span>
            <p className="text-sm font-bold text-slate-800">
              {propertyType} — {city} / {district} / {neighborhood} Mahallesi
            </p>
            {addressNote && <p className="text-xs text-slate-500 italic">Not: {addressNote}</p>}
          </div>
          <button
            onClick={() => onGoToStep(4)}
            className="p-1.5 text-xs text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg flex items-center gap-1 font-semibold"
          >
            <Edit3 className="w-3.5 h-3.5" /> Düzenle
          </button>
        </div>

        {/* Row 4: Zamanlama & İletişim */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Zamanlama & İletişim</span>
            <p className="text-sm font-bold text-slate-800">
              <span className="text-emerald-700 font-semibold">{timing}</span> — {contactName} ({contactPhone})
            </p>
          </div>
          <button
            onClick={() => onGoToStep(5)}
            className="p-1.5 text-xs text-brand-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg flex items-center gap-1 font-semibold"
          >
            <Edit3 className="w-3.5 h-3.5" /> Düzenle
          </button>
        </div>

        {/* Row 5: Açıklama & Fotoğraflar */}
        {(customDescription || photos.length > 0) && (
          <div className="space-y-2 pt-1">
            {customDescription && (
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Açıklama</span>
                <p className="text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60 mt-0.5">
                  "{customDescription}"
                </p>
              </div>
            )}
            {photos.length > 0 && (
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Eklenen Fotoğraflar ({photos.length})
                </span>
                <div className="flex gap-2 mt-1">
                  {photos.map((p, i) => (
                    <img
                      key={i}
                      src={p}
                      alt="Önizleme"
                      className="w-14 h-14 object-cover rounded-lg border border-slate-200"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Trust Notice */}
      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-800">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Talebiniz tamamen ücretsizdir. Fiyat teklifini onaylamadan hiçbir ücret ödemezsiniz.</span>
      </div>

      {/* Navigation & Submit */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Geri</span>
        </button>

        <button
          onClick={onSubmit}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brand-600/30 flex items-center gap-2 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Talebi Oluştur</span>
        </button>
      </div>
    </div>
  );
};
