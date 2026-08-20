import React from 'react';
import { Home, Grid, Bot, Plus, Phone } from 'lucide-react';

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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pt-1.5 pb-3 px-3">
      <div className="grid grid-cols-5 items-center text-center max-w-md mx-auto">
        {/* 1. Ana Sayfa */}
        <button
          type="button"
          onClick={() => onNavigateSection('hero')}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 active:scale-95 transition-transform focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">Ana Sayfa</span>
        </button>

        {/* 2. Hizmetler */}
        <button
          type="button"
          onClick={onOpenAllCategories}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 active:scale-95 transition-transform focus:outline-none"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">Katalog</span>
        </button>

        {/* 3. Talep Oluştur (Prominent Center Button) */}
        <button
          type="button"
          onClick={onOpenWizard}
          className="flex flex-col items-center -mt-6 focus:outline-none group active:scale-95 transition-transform"
        >
          <div className="w-13 h-13 p-3 rounded-full bg-gradient-to-tr from-brand-600 to-brand-700 text-white flex items-center justify-center shadow-lg shadow-brand-600/35 border-2 border-white">
            <Plus className="w-6 h-6 stroke-[3]" />
          </div>
          <span className="text-[10px] font-extrabold text-brand-700 mt-0.5">Talep Aç</span>
        </button>

        {/* 4. Nasıl Çalışır */}
        <button
          type="button"
          onClick={() => onNavigateSection('nasil-calisir')}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 active:scale-95 transition-transform focus:outline-none"
        >
          <Bot className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">Süreç</span>
        </button>

        {/* 5. İletişim */}
        <button
          type="button"
          onClick={() => onNavigateSection('iletisim')}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-brand-600 active:scale-95 transition-transform focus:outline-none"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">İletişim</span>
        </button>
      </div>
    </div>
  );
};
