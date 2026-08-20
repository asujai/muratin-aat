import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, Grid, ArrowRight, MessageSquare, ChevronRight, Home, Shield, HelpCircle, MapPin } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { Category } from '../../types/service';

interface NavbarProps {
  onOpenWizard: (category?: Category) => void;
  onOpenAllCategories: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWizard,
  onOpenAllCategories,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center text-white shadow-sm shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <span className="font-extrabold text-lg sm:text-xl tracking-tighter">M</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                    MURAT<span className="text-brand-600 ml-0.5">YAPI</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 bg-brand-50 text-brand-700 border border-brand-200 rounded ml-1">
                    Hizmet
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none mt-0.5">
                  Usta & Hizmet Platformu
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                >
                  <span>Hizmetler</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-bold">16</span>
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute left-0 top-full pt-2 w-[480px] z-50 animate-fade-in"
                  >
                    <div className="bg-white rounded-2xl shadow-soft-lg border border-slate-100 p-4 grid grid-cols-2 gap-2">
                      <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hizmet Kategorileri</span>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenAllCategories();
                          }}
                          className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                        >
                          Tümünü Gör <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                      {CATEGORIES.slice(0, 10).map((cat) => (
                        <div
                          key={cat.id}
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenWizard(cat);
                          }}
                          className="p-2 rounded-xl hover:bg-slate-50 cursor-pointer flex items-center gap-2.5 transition-colors group/item"
                        >
                          <span className="text-xl group-hover/item:scale-110 transition-transform">{cat.emoji}</span>
                          <div>
                            <p className="text-xs font-bold text-slate-800 group-hover/item:text-brand-600 transition-colors">{cat.name}</p>
                            <p className="text-[10px] text-slate-400 line-clamp-1">{cat.shortDesc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('nasil-calisir')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Nasıl Çalışır?
              </button>
              <button
                onClick={() => handleNavClick('hakkimizda')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => handleNavClick('sss')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Sık Sorulanlar
              </button>
              <button
                onClick={() => handleNavClick('iletisim')}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                İletişim
              </button>
            </nav>

            {/* Action CTAs (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:08503080000"
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-medium leading-tight">7/24 Çağrı Merkezi</p>
                  <p className="font-bold text-slate-800 text-xs">0850 308 00 00</p>
                </div>
              </a>

              <button
                onClick={() => onOpenWizard()}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Talep Oluştur</span>
              </button>
            </div>

            {/* Mobile Right Bar */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:08503080000"
                className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-sm shadow-sm active:scale-95"
                title="Ara"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-colors"
                aria-label="Menüyü aç"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN SOLID MOBILE MENU (NO TRANSPARENCY, NO BACKGROUND BLEED) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white animate-fade-in">
          {/* Top Header Inside Menu */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                M
              </div>
              <div>
                <span className="font-extrabold text-base text-slate-900">
                  MURAT<span className="text-brand-600 ml-0.5">YAPI</span>
                </span>
                <p className="text-[10px] text-slate-500">Menü & Hızlı Erişim</p>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center active:scale-95"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Scrollable Body (100% Solid White Background) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {/* Primary Action Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">
                  %100 Ücretsiz
                </span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <h4 className="text-base font-extrabold">Hemen Talep Oluşturun</h4>
              <p className="text-xs text-brand-100">
                1 dakikada ihtiyacınızı belirleyin, Trabzon genelinde usta ekibimiz yönlendirilsin.
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWizard();
                }}
                className="w-full py-2.5 bg-white text-brand-900 font-extrabold text-xs rounded-xl shadow-sm active:scale-95 transition-all mt-1"
              >
                Talep Başlat →
              </button>
            </div>

            {/* Main Navigation Links */}
            <div className="space-y-1 pt-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1">
                Sayfalar & Bölümler
              </p>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAllCategories();
                }}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-brand-50 border border-slate-100 flex items-center justify-between text-sm font-bold text-slate-800"
              >
                <span className="flex items-center gap-2.5">
                  <Grid className="w-4 h-4 text-brand-600" />
                  Tüm Hizmetler (16 Kategori)
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleNavClick('hero')}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-slate-400" />
                  Ana Sayfa
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={() => handleNavClick('nasil-calisir')}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-slate-400" />
                  Nasıl Çalışır?
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={() => handleNavClick('hakkimizda')}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-slate-400" />
                  Hakkımızda & Güven
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={() => handleNavClick('sss')}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  Sık Sorulan Sorular
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>

              <button
                onClick={() => handleNavClick('iletisim')}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-semibold text-slate-700"
              >
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  İletişim & Randevu
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Direct Contact Options */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Doğrudan İletişim</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:08503080000"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>0850 308 00 00</span>
                </a>
                <a
                  href="https://wa.me/905320000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-bold text-emerald-800 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
