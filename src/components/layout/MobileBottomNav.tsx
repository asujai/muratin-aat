import React from 'react';
import { Home, Grid, Bot, PlusCircle, Phone } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenWizard: () => void;
  onOpenAllCategories: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenWizard,
  onOpenAllCategories,
  onNavigateSection,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-5 items-center text-center">
        {/* 1. Ana Sayfa */}
        <button
          onClick={() => onNavigateSection('hero')}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Ana Sayfa</span>
        </button>

        {/* 2. Hizmetler */}
        <button
          onClick={onOpenAllCategories}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 focus:outline-none"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold">Hizmetler</span>
        </button>

        {/* 3. Talep Oluştur (Prominent Center Button) */}
        <button
          onClick={onOpenWizard}
          className="flex flex-col items-center -mt-5 focus:outline-none group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-600 to-brand-700 text-white flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:scale-105 active:scale-95 transition-all">
            <PlusCircle className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-extrabold text-brand-700 mt-0.5">Talep Aç</span>
        </button>

        {/* 4. Nasıl Çalışır */}
        <button
          onClick={() => onNavigateSection('nasil-calisir')}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 focus:outline-none"
        >
          <Bot className="w-5 h-5" />
          <span className="text-[10px] font-bold">Süreç</span>
        </button>

        {/* 5. İletişim */}
        <button
          onClick={() => onNavigateSection('iletisim')}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 focus:outline-none"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">İletişim</span>
        </button>
      </div>
    </div>
  );
};
