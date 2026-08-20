import React, { useRef } from 'react';
import { Camera, Upload, X, ArrowLeft, ArrowRight, User, Phone, Image as ImageIcon } from 'lucide-react';

interface StepDetailsProps {
  customDescription: string;
  photos: string[];
  contactName: string;
  contactPhone: string;
  onSetDescription: (desc: string) => void;
  onAddPhoto: (photoBase64: string) => void;
  onRemovePhoto: (index: number) => void;
  onSetContactName: (name: string) => void;
  onSetContactPhone: (phone: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepDetails: React.FC<StepDetailsProps> = ({
  customDescription,
  photos,
  contactName,
  contactPhone,
  onSetDescription,
  onAddPhoto,
  onRemovePhoto,
  onSetContactName,
  onSetContactPhone,
  onNext,
  onBack,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        if (loadEvent.target?.result) {
          onAddPhoto(loadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
          Adım 5 / 7 — Açıklama & Fotoğraf
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          Problemi anlatın ve fotoğraf ekleyin
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Ustanın işe tam hazırlıklı gelmesi için detayları paylaşabilirsiniz.
        </p>
      </div>

      <div className="space-y-4">
        {/* Description Textarea */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Problemi Kısaca Anlatın
          </label>
          <textarea
            rows={3}
            value={customDescription}
            onChange={(e) => onSetDescription(e.target.value)}
            placeholder="Örn: Banyodaki duvarın alt kısmında yaklaşık 2 gündür nemlenme var. Su sayacı musluklar kapalıyken yavaş yavaş dönüyor."
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </div>

        {/* Photo Upload Area */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-brand-600" />
              <span>Fotoğraf Ekle (Opsiyonel)</span>
            </label>
            <span className="text-[11px] text-slate-400">En fazla 4 fotoğraf</span>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            multiple
            className="hidden"
          />

          {/* Upload triggers & preview list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {photos.map((photo, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                <img src={photo} alt={`Yüklenen görsel ${idx + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => onRemovePhoto(idx)}
                  className="absolute top-1.5 right-1.5 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-700 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {photos.length < 4 && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-brand-600 transition-all aspect-video cursor-pointer"
              >
                <Upload className="w-5 h-5" />
                <span className="text-[11px] font-bold">Görsel Seç</span>
              </button>
            )}
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">
            * Fotoğraflar önizleme simülasyonu olarak tarayıcınızda işlenir, sunucuya aktarılmaz.
          </p>
        </div>

        {/* Contact info fields */}
        <div className="pt-2 border-t border-slate-100">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            İletişim & Randevu Bilgisi *
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => onSetContactName(e.target.value)}
                  placeholder="Adınız Soyadınız"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 font-medium"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => onSetContactPhone(e.target.value)}
                  placeholder="05XX XXX XX XX"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
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
          disabled={!contactName.trim() || !contactPhone.trim()}
          className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center gap-2 transition-all"
        >
          <span>Devam Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
