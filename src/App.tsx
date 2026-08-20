import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { SmartAssistant } from './components/home/SmartAssistant';
import { PopularServices } from './components/home/PopularServices';
import { AllCategoriesModal } from './components/home/AllCategoriesModal';
import { BeforeAfterSlider } from './components/home/BeforeAfterSlider';
import { CostEstimator } from './components/home/CostEstimator';
import { HowItWorks } from './components/home/HowItWorks';
import { TrustSection } from './components/home/TrustSection';
import { FaqSection } from './components/home/FaqSection';
import { ContactSection } from './components/home/ContactSection';
import { LiveActivityToast } from './components/home/LiveActivityToast';
import { DemoFeedbackBar } from './components/home/DemoFeedbackBar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { RequestWizardModal } from './components/wizard/RequestWizardModal';
import { Category, SubService } from './types/service';
import { MessageSquare, Sparkles } from 'lucide-react';

export function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(false);
  const [wizardCategory, setWizardCategory] = useState<Category | null>(null);
  const [wizardSubService, setWizardSubService] = useState<SubService | null>(null);
  const [wizardProblemText, setWizardProblemText] = useState<string>('');

  // Handle open wizard with optional presets
  const handleOpenWizard = (category?: Category, subService?: SubService, problemText?: string) => {
    setWizardCategory(category || null);
    setWizardSubService(subService || null);
    setWizardProblemText(problemText || '');
    setIsWizardOpen(true);
  };

  const handleSelectCategory = (category: Category) => {
    handleOpenWizard(category);
  };

  const handleSelectSubService = (category: Category, subService: SubService) => {
    handleOpenWizard(category, subService);
  };

  const handleSmartSuggestion = (category: Category, subService: SubService, problemText: string) => {
    handleOpenWizard(category, subService, problemText);
  };

  const handleStartWithEstimate = (category: Category, subService: SubService, notes: string) => {
    handleOpenWizard(category, subService, notes);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-brand-500 selection:text-white pb-16 lg:pb-0">
      {/* Top Demo Review Bar for Client */}
      <DemoFeedbackBar />

      {/* Top Sticky Header */}
      <Navbar
        onOpenWizard={() => handleOpenWizard()}
        onOpenAllCategories={() => setIsAllCategoriesOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Live Search & Badges */}
        <HeroSection
          onSelectCategory={handleSelectCategory}
          onSelectSubService={handleSelectSubService}
          onOpenWizard={() => handleOpenWizard()}
        />

        {/* 2. Smart Problem Finder ("Ne yaptırmak istediğinizi bilmiyor musunuz?") */}
        <SmartAssistant onSelectSuggestion={handleSmartSuggestion} />

        {/* 3. Popular Services Grid & 16 Categories Hub */}
        <PopularServices
          onSelectCategory={handleSelectCategory}
          onSelectSubService={handleSelectSubService}
          onOpenAllCategories={() => setIsAllCategoriesOpen(true)}
        />

        {/* 4. Interactive Before / After Renovation Slider */}
        <BeforeAfterSlider />

        {/* 5. Live Budget & Cost Estimator */}
        <CostEstimator onStartWithEstimate={handleStartWithEstimate} />

        {/* 6. How It Works - 3 Step Guide */}
        <HowItWorks onOpenWizard={() => handleOpenWizard()} />

        {/* 7. About & Trust Indicators */}
        <TrustSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact & Instant Callback */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
      />

      {/* Live Social Proof Activity Toasts */}
      <LiveActivityToast />

      {/* Mobile App Bottom Navigation Bar */}
      <MobileBottomNav
        onOpenWizard={() => handleOpenWizard()}
        onOpenAllCategories={() => setIsAllCategoriesOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Desktop Floating Action Buttons */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-30 flex-col gap-3">
        <a
          href="https://wa.me/905320000000?text=Merhaba,%20hizmet%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all"
          title="WhatsApp Destek"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <button
          onClick={() => handleOpenWizard()}
          className="px-5 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-xl shadow-brand-600/30 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Hemen Talep Oluştur</span>
        </button>
      </div>

      {/* All 16 Categories Modal */}
      <AllCategoriesModal
        isOpen={isAllCategoriesOpen}
        onClose={() => setIsAllCategoriesOpen(false)}
        onSelectCategory={(cat) => {
          setIsAllCategoriesOpen(false);
          handleSelectCategory(cat);
        }}
        onSelectSubService={(cat, sub) => {
          setIsAllCategoriesOpen(false);
          handleSelectSubService(cat, sub);
        }}
      />

      {/* Request Wizard Modal */}
      <RequestWizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        initialCategory={wizardCategory}
        initialSubService={wizardSubService}
        initialProblemText={wizardProblemText}
      />
    </div>
  );
}

export default App;
