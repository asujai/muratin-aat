import React, { useState, useEffect } from 'react';
import { X, Sparkles, Shield, ArrowLeft } from 'lucide-react';
import { Category, SubService, PropertyType, TimingOption, ServiceRequest } from '../../types/service';
import { CATEGORIES } from '../../data/categories';
import { StepSubService } from './StepSubService';
import { StepProblem } from './StepProblem';
import { StepPropertyType } from './StepPropertyType';
import { StepLocation } from './StepLocation';
import { StepDetails } from './StepDetails';
import { StepTiming } from './StepTiming';
import { StepSummary } from './StepSummary';
import { StepSuccess } from './StepSuccess';

interface RequestWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: Category | null;
  initialSubService?: SubService | null;
  initialProblemText?: string;
}

export const RequestWizardModal: React.FC<RequestWizardModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialSubService,
  initialProblemText,
}) => {
  // Wizard Step:
  // 0: Category Select (if none provided)
  // 1: SubService
  // 2: Problem
  // 3: Property Type
  // 4: Location
  // 5: Details & Photos
  // 6: Timing
  // 7: Summary
  // 8: Success
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory || CATEGORIES[1]); // Default to Su Tesisatı
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(initialSubService || null);
  const [problemLocation, setProblemLocation] = useState<string>('Banyo');
  const [problemDetail, setProblemDetail] = useState<string>('Borudan su geliyor');
  const [propertyType, setPropertyType] = useState<PropertyType>('Ev');
  const [city, setCity] = useState<string>('Trabzon');
  const [district, setDistrict] = useState<string>('Ortahisar (Merkez)');
  const [neighborhood, setNeighborhood] = useState<string>('Yalıncak');
  const [addressNote, setAddressNote] = useState<string>('');
  const [customDescription, setCustomDescription] = useState<string>(initialProblemText || '');
  const [photos, setPhotos] = useState<string[]>([]);
  const [timing, setTiming] = useState<TimingOption>('Bu Hafta');
  const [contactName, setContactName] = useState<string>('Ahmet Yılmaz');
  const [contactPhone, setContactPhone] = useState<string>('0532 123 45 67');

  const [completedRequest, setCompletedRequest] = useState<ServiceRequest | null>(null);

  // Update states whenever initialCategory / subService changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
      if (initialSubService) {
        setSelectedSubService(initialSubService);
        setCurrentStep(2); // Go straight to step 2 if subservice is already picked
      } else {
        setSelectedSubService(initialCategory.subServices[0] || null);
        setCurrentStep(1);
      }
    } else {
      setSelectedCategory(CATEGORIES[1]); // Su Tesisatı default
      setSelectedSubService(CATEGORIES[1].subServices[0] || null);
      setCurrentStep(1);
    }

    if (initialProblemText) {
      setCustomDescription(initialProblemText);
    }
  }, [initialCategory, initialSubService, initialProblemText, isOpen]);

  if (!isOpen) return null;

  const totalSteps = 7;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 8));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleAddPhoto = (photoBase64: string) => {
    if (photos.length < 4) {
      setPhotos((prev) => [...prev, photoBase64]);
    }
  };

  const handleRemovePhoto = (idx: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newRequest: ServiceRequest = {
      id: `#MURAT-${randomCode}`,
      createdAt: new Date().toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      category: selectedCategory,
      subService: selectedSubService || selectedCategory.subServices[0],
      problemLocation,
      problemDetail,
      propertyType,
      city,
      district,
      neighborhood,
      addressNote,
      customDescription,
      photos,
      timing,
      contactName,
      contactPhone,
      status: 'PENDING',
    };

    setCompletedRequest(newRequest);
    setCurrentStep(8); // Success step
  };

  const handleReset = () => {
    setCurrentStep(1);
    setCompletedRequest(null);
    setPhotos([]);
    setCustomDescription('');
  };

  const getStepProgressPercentage = () => {
    if (currentStep >= 8) return 100;
    return Math.round((currentStep / totalSteps) * 100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              M
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-slate-900">Talep Sihirbazı</span>
                <span className="text-[10px] bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-bold border border-brand-200">
                  Ücretsiz
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {currentStep < 8 ? `Adım ${currentStep} / ${totalSteps}` : 'Tamamlandı'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Visible while in steps 1..7) */}
        {currentStep <= 7 && (
          <div className="w-full bg-slate-100 h-1.5 relative">
            <div
              className="bg-gradient-to-r from-brand-600 to-accent-500 h-1.5 transition-all duration-300 rounded-r-full"
              style={{ width: `${getStepProgressPercentage()}%` }}
            />
          </div>
        )}

        {/* Modal Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 bg-white">
          {/* STEP 1: SubService Selection */}
          {currentStep === 1 && (
            <StepSubService
              category={selectedCategory}
              selectedSubService={selectedSubService}
              onSelect={(sub) => setSelectedSubService(sub)}
              onNext={handleNext}
            />
          )}

          {/* STEP 2: Problem Location & Detail */}
          {currentStep === 2 && selectedSubService && (
            <StepProblem
              category={selectedCategory}
              subService={selectedSubService}
              problemLocation={problemLocation}
              problemDetail={problemDetail}
              onSetLocation={(loc) => setProblemLocation(loc)}
              onSetDetail={(det) => setProblemDetail(det)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 3: Property Type */}
          {currentStep === 3 && (
            <StepPropertyType
              propertyType={propertyType}
              onSelect={(pt) => setPropertyType(pt)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 4: Location */}
          {currentStep === 4 && (
            <StepLocation
              city={city}
              district={district}
              neighborhood={neighborhood}
              addressNote={addressNote}
              onSetCity={(c) => setCity(c)}
              onSetDistrict={(d) => setDistrict(d)}
              onSetNeighborhood={(n) => setNeighborhood(n)}
              onSetAddressNote={(note) => setAddressNote(note)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 5: Details, Photos & Contact */}
          {currentStep === 5 && (
            <StepDetails
              customDescription={customDescription}
              photos={photos}
              contactName={contactName}
              contactPhone={contactPhone}
              onSetDescription={(d) => setCustomDescription(d)}
              onAddPhoto={handleAddPhoto}
              onRemovePhoto={handleRemovePhoto}
              onSetContactName={(name) => setContactName(name)}
              onSetContactPhone={(phone) => setContactPhone(phone)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 6: Timing Preference */}
          {currentStep === 6 && (
            <StepTiming
              timing={timing}
              onSelect={(opt) => setTiming(opt)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 7: Summary & Confirmation */}
          {currentStep === 7 && selectedSubService && (
            <StepSummary
              category={selectedCategory}
              subService={selectedSubService}
              problemLocation={problemLocation}
              problemDetail={problemDetail}
              propertyType={propertyType}
              city={city}
              district={district}
              neighborhood={neighborhood}
              addressNote={addressNote}
              customDescription={customDescription}
              photos={photos}
              timing={timing}
              contactName={contactName}
              contactPhone={contactPhone}
              onGoToStep={(s) => setCurrentStep(s)}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          )}

          {/* STEP 8: Success Screen */}
          {currentStep === 8 && completedRequest && (
            <StepSuccess
              request={completedRequest}
              onReset={handleReset}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};
