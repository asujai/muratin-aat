import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="iletisim" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider border border-brand-200">
              <Phone className="w-3.5 h-3.5" />
              <span>Bize Ulaşın</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sorularınız için <br />
              her zaman buradayız.
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed">
              Trabzon ve tüm Karadeniz bölgesinde tadilat, tesisat veya arıza işleriniz için dilediğiniz kanaldan bize ulaşabilir, anında teknik destek alabilirsiniz.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="tel:08503080000"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50 border border-slate-100 hover:border-brand-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Müşteri Hizmetleri & Acil Hat</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    0850 308 00 00
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/905320000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp Canlı Destek</p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    0532 000 00 00
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Merkez Ofis</p>
                  <p className="text-sm font-bold text-slate-800">
                    Kahramanmaraş Cad. No: 45 / Ortahisar, Trabzon
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Çalışma Saatleri</p>
                  <p className="text-sm font-bold text-slate-800">
                    Pazartesi - Cumartesi: 08:00 - 20:00 <br />
                    <span className="text-xs font-semibold text-emerald-600">(Acil Ekipler 7/24 Nöbettedir)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft-md">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Hızlı İletişim & Bilgi Formu
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                İletişim bilgilerinizi bırakın, müşteri temsilcimiz 15 dakika içinde sizi geri arasın.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Mesajınız Alındı!</h4>
                  <p className="text-xs text-emerald-700">
                    En kısa sürede tarafınıza telefonla dönüş yapılacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Danışmak İstediğiniz Konu / Not
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hangi hizmet hakkında bilgi veya fiyat almak istiyorsunuz?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Hemen Gönder</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Bilgileriniz KVKK kapsamında korunmakta olup yalnızca hizmet amaçlı aranacaksınız.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
