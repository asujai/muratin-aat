import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Sparkles, MapPin } from 'lucide-react';

interface ActivityItem {
  id: number;
  user: string;
  location: string;
  service: string;
  timeAgo: string;
  emoji: string;
}

const ACTIVITIES: ActivityItem[] = [
  { id: 1, user: 'Ahmet K.', location: 'Ortahisar / Yalıncak', service: 'Su Kaçağı Tespiti Talebi', timeAgo: '2 dakika önce', emoji: '💧' },
  { id: 2, user: 'Merve S.', location: 'Akçaabat / Söğütlü', service: '3+1 Daire Komple Boya Badana', timeAgo: '7 dakika önce', emoji: '🎨' },
  { id: 3, user: 'Hasan Y.', location: 'Yomra / Kaşüstü', service: 'Priz & Sigorta Panosu Arızası', timeAgo: '12 dakika önce', emoji: '⚡' },
  { id: 4, user: 'Gökhan B.', location: 'Ortahisar / Erdoğdu', service: 'Komple Banyo & Duşakabin Yenileme', timeAgo: '18 dakika önce', emoji: '🚿' },
  { id: 5, user: 'Fatma D.', location: 'Sürmene / Merkez', service: 'Çatı İzolasyonu & Oluk Tamiri', timeAgo: '25 dakika önce', emoji: '🏠' },
  { id: 6, user: 'Mustafa T.', location: 'Beşikdüzü / Cumhuriyet', service: 'Laminat Parke Döşeme', timeAgo: '32 dakika önce', emoji: '🪵' },
];

export const LiveActivityToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show first toast after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    // Loop interval
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setIsVisible(true);
      }, 800);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = ACTIVITIES[currentIndex];

  return (
    <div
      className={`fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-30 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-soft-lg p-3.5 pr-8 max-w-xs sm:max-w-sm flex items-center gap-3 relative">
        <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl shrink-0">
          <span>{current.emoji}</span>
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-bold text-slate-900">{current.user}</p>
            <span className="text-[10px] text-slate-400">• {current.timeAgo}</span>
          </div>
          <p className="text-[11px] font-semibold text-brand-700 leading-tight">
            {current.service}
          </p>
          <p className="text-[10px] text-slate-500 flex items-center gap-0.5">
            <MapPin className="w-2.5 h-2.5 text-slate-400" /> {current.location}
          </p>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
          title="Kapat"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
