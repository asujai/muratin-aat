import React, { useState } from 'react';
import { Bot, Sparkles, ArrowRight, Lightbulb, CheckCircle2, RefreshCw } from 'lucide-react';
import { findSmartSuggestion } from '../../data/smartSuggestions';
import { SmartSuggestionMatch, Category, SubService } from '../../types/service';

interface SmartAssistantProps {
  onSelectSuggestion: (category: Category, subService: SubService, problemText: string) => void;
}

export const SmartAssistant: React.FC<SmartAssistantProps> = ({ onSelectSuggestion }) => {
  const [problemInput, setProblemInput] = useState('');
  const [suggestion, setSuggestion] = useState<SmartSuggestionMatch | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const sampleProblems = [
    'Banyomun tavanından su geliyor',
    'Salondaki prizden kıvılcım çıktı',
    '3+1 evi komple boyatmak istiyoruz',
    'Klozet sifonu durmadan akıtıyor',
    'Yağmur yağınca çatıdan su sızıyor',
    'Odalara laminat parke döşetmek istiyoruz',
  ];

  const handleAnalyze = (textToAnalyze?: string) => {
    const text = (textToAnalyze ?? problemInput).trim();
    if (!text) return;
    const result = findSmartSuggestion(text);
    setSuggestion(result);
    setHasSearched(true);
  };

  const handleSampleClick = (sample: string) => {
    setProblemInput(sample);
    handleAnalyze(sample);
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white p-4 sm:p-8 md:p-10 shadow-xl sm:shadow-2xl border border-brand-800/40">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-start gap-3 sm:gap-4 mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-brand-500 to-accent-400 p-0.5 shadow-lg shrink-0 mt-0.5">
              <div className="w-full h-full bg-slate-900 rounded-[10px] sm:rounded-[14px] flex items-center justify-center text-brand-400">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white leading-snug">
                  Ne yaptırmak istediğinizi bilmiyor musunuz?
                </h3>
                <span className="inline-flex px-2 py-0.5 bg-brand-500/20 border border-brand-400/30 text-brand-300 text-[10px] font-bold uppercase rounded-full">
                  Akıllı Asistan
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Probleminizi kendi cümlelerinizle yazın, sizin için en doğru usta ve hizmeti belirleyelim.
              </p>
            </div>
          </div>

          {/* Input Box & Action Button */}
          <div className="relative z-10 space-y-3">
            <div className="bg-slate-800/90 rounded-xl sm:rounded-2xl border border-slate-700 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/20 p-2.5 sm:p-3 transition-all">
              <textarea
                rows={3}
                value={problemInput}
                onChange={(e) => {
                  setProblemInput(e.target.value);
                  if (hasSearched) setHasSearched(false);
                }}
                placeholder="Örneğin: 'Banyomun tavanında sararma ve su damlaması var, alt kata su iniyor...' veya '3+1 ev boyatmak istiyoruz.'"
                className="w-full bg-transparent text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none resize-none leading-relaxed"
              />

              {/* Action Bar (Always below text, never overlapping!) */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 mt-1">
                <div>
                  {problemInput && (
                    <button
                      type="button"
                      onClick={() => {
                        setProblemInput('');
                        setSuggestion(null);
                        setHasSearched(false);
                      }}
                      className="inline-flex items-center gap-1 px-2 py-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/50 text-[11px] font-medium"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Temizle</span>
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleAnalyze()}
                  disabled={!problemInput.trim()}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-amber-500 hover:from-accent-400 hover:to-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-accent-500/20 active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Uygun Hizmeti Bul</span>
                </button>
              </div>
            </div>

            {/* Quick Sample Prompts - Horizontal Scrollable Chips on Mobile */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Hızlı Örnekler (Tıklayın):
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar -mx-1 px-1">
                {sampleProblems.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSampleClick(sample)}
                    className="shrink-0 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/70 text-slate-200 hover:text-white text-[11px] font-medium transition-colors text-left active:scale-95"
                  >
                    "{sample}"
                  </button>
                ))}
              </div>
            </div>

            {/* Suggestion Result Card */}
            {hasSearched && suggestion && (
              <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-brand-900/90 to-slate-800/90 border border-brand-500/40 shadow-xl animate-fade-in space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl sm:text-3xl shrink-0">{suggestion.category.emoji}</span>
                  <div>
                    <span className="text-[10px] font-bold text-brand-300 uppercase tracking-wider block">
                      Önerilen Kategori & Hizmet:
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white flex flex-wrap items-center gap-1.5">
                      <span>{suggestion.category.name}</span>
                      <span className="text-slate-400 text-xs">→</span>
                      <span className="text-amber-300">{suggestion.subService.name}</span>
                    </h4>
                  </div>
                </div>

                <div className="text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Teşhis & Çözüm: </strong>
                    {suggestion.detectedProblem} — {suggestion.explanation}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectSuggestion(suggestion.category, suggestion.subService, problemInput)}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/30 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <span>Talebi Bu Hizmetle Başlat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
