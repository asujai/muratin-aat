import React from 'react';
import { CITIES } from '../../data/locations';
import { MapPin, ArrowLeft, ArrowRight, Building } from 'lucide-react';

interface StepLocationProps {
  city: string;
  district: string;
  neighborhood: string;
  addressNote: string;
  onSetCity: (c: string) => void;
  onSetDistrict: (d: string) => void;
  onSetNeighborhood: (n: string) => void;
  onSetAddressNote: (note: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const StepLocation: React.FC<StepLocationProps> = ({
  city,
  district,
  neighborhood,
  addressNote,
  onSetCity,
  onSetDistrict,
  onSetNeighborhood,
  onSetAddressNote,
  onNext,
  onBack,
}) => {
  const currentCityData = CITIES.find((c) => c.name === city) || CITIES[0];
  const currentDistrictData = currentCityData.districts.find((d) => d.name === district);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center sm:text-left">
        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
          Adım 4 / 7 — Konum & Bölge
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
          Hizmetin verileceği konumu seçin
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Size en yakın ve müsait ustalarımızı yönlendirebilmemiz için ilçe ve mahalle seçiniz.
        </p>
      </div>

      <div className="space-y-4">
        {/* İl & İlçe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              İl *
            </label>
            <select
              value={city}
              onChange={(e) => {
                const newCity = e.target.value;
                onSetCity(newCity);
                const cityData = CITIES.find((c) => c.name === newCity);
                if (cityData && cityData.districts.length > 0) {
                  onSetDistrict(cityData.districts[0].name);
                  onSetNeighborhood(cityData.districts[0].neighborhoods[0] || '');
                }
              }}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            >
              {CITIES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              İlçe *
            </label>
            <select
              value={district}
              onChange={(e) => {
                const newDist = e.target.value;
                onSetDistrict(newDist);
                const distData = currentCityData.districts.find((d) => d.name === newDist);
                if (distData && distData.neighborhoods.length > 0) {
                  onSetNeighborhood(distData.neighborhoods[0]);
                } else {
                  onSetNeighborhood('');
                }
              }}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            >
              <option value="" disabled>İlçe Seçiniz...</option>
              {currentCityData.districts.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mahalle */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Mahalle / Semt *
          </label>
          {currentDistrictData && currentDistrictData.neighborhoods.length > 0 ? (
            <select
              value={neighborhood}
              onChange={(e) => onSetNeighborhood(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            >
              <option value="" disabled>Mahalle Seçiniz...</option>
              {currentDistrictData.neighborhoods.map((n) => (
                <option key={n} value={n}>
                  {n} Mahallesi
                </option>
              ))}
              <option value="Diğer Mahalle">Diğer / Listede Yok</option>
            </select>
          ) : (
            <input
              type="text"
              value={neighborhood}
              onChange={(e) => onSetNeighborhood(e.target.value)}
              placeholder="Mahalle veya semt adı yazınız"
              className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          )}
        </div>

        {/* Adres / Bina Notu */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Cadde, Sokak veya Bina Notu (Opsiyonel)
          </label>
          <input
            type="text"
            value={addressNote}
            onChange={(e) => onSetAddressNote(e.target.value)}
            placeholder="Örn: Atatürk Bulvarı No:12 Daire:4 (Merkez Bankası arkası)"
            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
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
          disabled={!city || !district || !neighborhood}
          className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-brand-600/20 flex items-center gap-2 transition-all"
        >
          <span>Devam Et</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
