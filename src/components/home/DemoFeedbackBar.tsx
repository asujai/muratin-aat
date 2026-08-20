import React, { useState } from 'react';
import { MessageSquarePlus, Send, Copy, Check, X } from 'lucide-react';

export const DemoFeedbackBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCopy = () => {
    if (!feedbackText.trim()) return;
    navigator.clipboard.writeText(`Murat Yapı Demo Notları:\n${feedbackText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    if (!feedbackText.trim()) return;
    const msg = encodeURIComponent(`Murat Yapı Demo Revizyon Notları:\n\n${feedbackText}`);
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Top Notice Banner */}
      {isBannerVisible && (
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-3 border-b border-slate-800 flex items-center justify-between z-50 relative">
          <div className="flex items-center gap-1.5 truncate mr-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <p className="text-[10px] sm:text-xs truncate">
              <strong className="text-white">Müşteri Önizleme Modu:</strong> Revizyon notu bırakmak için tıklayın.
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsOpen(true)}
              className="px-2 py-0.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-md text-[10px] flex items-center gap-1 transition-colors"
            >
              <MessageSquarePlus className="w-3 h-3" />
              <span>Not Ekle</span>
            </button>
            <button
              onClick={() => setIsBannerVisible(false)}
              className="p-1 text-slate-400 hover:text-white"
              title="Kapat"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button (If banner is dismissed) */}
      {!isBannerVisible && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-20 right-3 z-30 bg-slate-900/90 hover:bg-slate-900 text-amber-300 border border-slate-700 shadow-xl px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 backdrop-blur-sm transition-all hover:scale-105"
        >
          <MessageSquarePlus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Revizyon Notu</span>
          <span className="sm:hidden">Not</span>
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3.5 animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <MessageSquarePlus className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">Müşteri Revizyon Notu</h3>
                  <p className="text-[11px] text-slate-500">Değişmesini istediğiniz yerleri buraya yazabilirsiniz.</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <textarea
              rows={4}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Örnek:
1. Renk tonlarını logomuza göre biraz daha koyu mavi yapalım.
2. Çatı kategorisini öne çıkaralım..."
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white"
            />

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!feedbackText.trim()}
                className="flex-1 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Kopyalandı!' : 'Notları Kopyala'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                disabled={!feedbackText.trim()}
                className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp ile İlet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
