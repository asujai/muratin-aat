import React, { useState } from 'react';
import { MessageSquarePlus, Send, Copy, Check, X, Sparkles, AlertCircle } from 'lucide-react';

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
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 flex items-center justify-between z-50 relative">
          <div className="flex items-center gap-2 max-w-4xl mx-auto">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <p className="text-[11px] sm:text-xs">
              <strong className="text-white">Müşteri İnceleme & Demo Sürümü:</strong> Tasarım ve akış hakkında revizyon notlarınızı kolayca iletmek için not modunu kullanabilirsiniz.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-2">
            <button
              onClick={() => setIsOpen(true)}
              className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-[11px] flex items-center gap-1 transition-colors"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Not Ekle</span>
            </button>
            <button
              onClick={() => setIsBannerVisible(false)}
              className="p-1 text-slate-400 hover:text-white"
              title="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button (If banner is dismissed) */}
      {!isBannerVisible && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-24 right-4 z-40 bg-slate-900/90 hover:bg-slate-900 text-amber-300 border border-slate-700 shadow-xl px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm transition-all hover:scale-105"
        >
          <MessageSquarePlus className="w-3.5 h-3.5" />
          <span>Demo Revizyon Notu</span>
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <MessageSquarePlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">Müşteri Revizyon & Geri Bildirim Notu</h3>
                  <p className="text-xs text-slate-500">Değişmesini istediğiniz alanları buraya yazabilirsiniz.</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <textarea
              rows={5}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Örnek:
1. Renk tonlarını kurumsal logomuza göre biraz daha koyu mavi yapalım.
2. Ana sayfadaki popüler kategorilere Çatı hizmetini de 1. sıraya alalım.
3. İletişimdeki sabit telefon yerine şu cep numarasını ekleyelim..."
              className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white"
            />

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!feedbackText.trim()}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Kopyalandı!' : 'Notları Kopyala'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                disabled={!feedbackText.trim()}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp ile İlet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
