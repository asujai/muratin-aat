import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Copy, Check, Clock, Phone, MapPin, Calendar, ArrowRight, Home, RefreshCw } from 'lucide-react';
import { ServiceRequest } from '../../types/service';

interface StepSuccessProps {
  request: ServiceRequest;
  onReset: () => void;
  onClose: () => void;
}

export const StepSuccess: React.FC<StepSuccessProps> = ({ request, onReset, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0e8ce9', '#f97e0b', '#10b981', '#6366f1']
      });
    } catch {
      // ignore in environments without canvas
    }
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(request.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6 text-center animate-fade-in py-2">
      {/* Top Success Badge */}
      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div>
        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold mb-2">
          İşlem Başarılı
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Talebiniz Alındı!
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
          Sayın <strong className="text-slate-800">{request.contactName}</strong>, talebiniz ilgili teknik ekibimize iletildi.
        </p>
      </div>

      {/* Tracking Code Box */}
      <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-left">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Talep Takip Kodu</p>
          <p className="text-base sm:text-lg font-black text-brand-700 tracking-wide font-mono">
            {request.id}
          </p>
        </div>
        <button
          onClick={handleCopyCode}
          className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-soft-sm transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600">Kopyalandı</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>Kodu Kopyala</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Timeline Simulation */}
      <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200/90 p-5 text-left space-y-4 shadow-soft-sm">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hizmet Süreci & Takip</p>

        <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
          {/* Step 1 */}
          <div className="flex items-start gap-3 relative">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 ring-4 ring-white">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Talep Kaydedildi</p>
              <p className="text-[11px] text-slate-500">{request.createdAt} tarihinde oluşturuldu.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 relative">
            <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 ring-4 ring-white animate-pulse">
              2
            </div>
            <div>
              <p className="text-xs font-bold text-brand-700">Uzman Usta Eşleştiriliyor</p>
              <p className="text-[11px] text-slate-500">{request.district} bölgesindeki en uygun ekibimiz inceliyor.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 relative opacity-60">
            <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 z-10 ring-4 ring-white">
              3
            </div>
            <div>
              <p className="text-xs font-bold text-slate-700">Ücretsiz Keşif & Net Teklif</p>
              <p className="text-[11px] text-slate-500">Mekan incelemesi ve kesin fiyat onayı.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 relative opacity-60">
            <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 z-10 ring-4 ring-white">
              4
            </div>
            <div>
              <p className="text-xs font-bold text-slate-700">Garantili Teslimat</p>
              <p className="text-[11px] text-slate-500">İşin bitimi ve servis garanti belgesi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Notice Note */}
      <div className="max-w-md mx-auto p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
        💡 <strong>Demo Bildirimi:</strong> Bu arayüz konsept bir frontend demosu olup gerçek bir sunucuya talep gönderilmemiştir. Backend API bağlantısı yapıldığında tüm adımlar canlı veritabanına bağlanacaktır.
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onReset}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Yeni Bir Talep Oluştur</span>
        </button>

        <button
          onClick={onClose}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 flex items-center justify-center gap-1.5 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Ana Sayfaya Dön</span>
        </button>
      </div>
    </div>
  );
};
