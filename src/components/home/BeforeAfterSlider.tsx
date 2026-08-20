import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

interface ProjectComparison {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
  stats: string;
}

const PROJECTS: ProjectComparison[] = [
  {
    id: '1',
    title: 'Komple Banyo & Duşakabin Yenileme',
    category: 'Banyo Tadilatı',
    location: 'Ortahisar / Trabzon',
    duration: '6 Gün',
    stats: '60x120 Granit Seramik + Gömme Rezervuar + Siyah Çıtalı Duşakabin',
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '2',
    title: '3+1 Daire İç Cephe Boya & Işık Bandı',
    category: 'Boya & Alçıpan',
    location: 'Akçaabat / Söğütlü',
    duration: '3 Gün',
    stats: 'Silinebilir İpek Mat Boya + Gizli LED Tavan Havuzu',
    beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '3',
    title: 'Modern Ada Mutfak & Porselen Tezgah',
    category: 'Mutfak Tadilatı',
    location: 'Yomra / Kaşüstü',
    duration: '10 Gün',
    stats: 'Mat Antrasit Lake Dolaplar + Çimstone Tezgah',
    beforeImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    afterImg: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=80',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectComparison>(PROJECTS[0]);
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-bold uppercase tracking-wider mb-3 border border-accent-200">
            <Sparkles className="w-3.5 h-3.5 text-accent-600" />
            <span>İşçilik Kalitemiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Önce & Sonra: Dönüşüm Hikayeleri
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Eski, yıpranmış mekanların uzman ustalarımızın dokunuşuyla nasıl modern yaşam alanlarına dönüştüğünü inceleyin.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProject(proj);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeProject.id === proj.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {proj.category}
            </button>
          ))}
        </div>

        {/* Comparison Viewer */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
            <div>
              <h3 className="font-bold text-base sm:text-lg">{activeProject.title}</h3>
              <p className="text-xs text-slate-400">
                {activeProject.location} • Tamamlanma Süresi: <span className="text-amber-400 font-semibold">{activeProject.duration}</span>
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-3 py-1 rounded-full self-start sm:self-auto flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> {activeProject.stats}
            </span>
          </div>

          {/* Interactive Image Slider */}
          <div className="relative h-72 sm:h-96 md:h-[460px] overflow-hidden select-none">
            {/* After Image (Full width background) */}
            <img
              src={activeProject.afterImg}
              alt="Sonra"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
              Sonra (Yenilenmiş)
            </div>

            {/* Before Image (Clipped width) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeProject.beforeImg}
                alt="Önce"
                className="absolute inset-y-0 left-0 w-[896px] max-w-none h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                Önce (Eski Hali)
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-2xl"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-brand-700 shadow-xl flex items-center justify-center -translate-x-1/2">
                <ArrowLeftRight className="w-4 h-4 font-bold" />
              </div>
            </div>

            {/* Hidden HTML Range Input for Accessibility & Touch Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Önce ve sonra karşılaştırma kaydırıcısı"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          <div className="p-3 bg-slate-950 text-center text-xs text-slate-400 border-t border-slate-800 flex items-center justify-center gap-2">
            <ArrowLeftRight className="w-3.5 h-3.5 text-brand-400" />
            <span>Farkı görmek için görselin ortasındaki çizgiyi sağa/sola sürükleyin.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
