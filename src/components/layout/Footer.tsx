import React from 'react';
import { Phone, Mail, MapPin, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { Category } from '../../types/service';

interface FooterProps {
  onSelectCategory: (category: Category) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigateSection }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-black text-lg">
                M
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                MURAT<span className="text-brand-500 font-bold ml-1">YAPI</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Evinizde ve iş yerinizde boya, elektrik, su tesisatı, tadilat, çatı ve onlarca farklı hizmet için sertifikalı uzman kadromuzla güvenilir, garantili ve hızlı çözümler sunuyoruz.
            </p>
            <div className="flex items-center gap-2 pt-2 text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Garantili İşçilik & Sözleşmeli Güvence</span>
            </div>
          </div>

          {/* Col 2: Popular Categories */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hizmetlerimiz</p>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Categories */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Diğer Hizmetler</p>
            <ul className="space-y-2">
              {CATEGORIES.slice(7, 14).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links & Contact */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hızlı Menü</p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateSection('hero')} className="hover:text-white transition-colors">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('nasil-calisir')} className="hover:text-white transition-colors">
                  Nasıl Çalışır?
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('hakkimizda')} className="hover:text-white transition-colors">
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('sss')} className="hover:text-white transition-colors">
                  Sık Sorulan Sorular
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('iletisim')} className="hover:text-white transition-colors">
                  İletişim & Destek
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
              <p className="text-white font-bold text-xs flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400" /> 0850 308 00 00
              </p>
              <p className="text-slate-400 text-[11px] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> Ortahisar / Trabzon
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Murat Yapı & İnşaat Hizmet Platformu. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <span>Gizlilik Politikası</span>
            <span>•</span>
            <span>Kullanım Koşulları</span>
            <span>•</span>
            <span className="text-amber-400/80 font-medium">Demo Versiyon 1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
