import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Sparkles, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    emailjs.sendForm('service_o0zevlv', 'template_xt30tu2', form.current, '5WXKaXz8xcQ8uGr-u')
      .then(() => {
        setStatus('success');
        form.current.reset();
        setIsSubmitting(false);
      }, (error) => {
        console.error(error);
        setStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <section className="section py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden scroll-mt-24" id="contact">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="section-title text-4xl md:text-5xl font-black font-heading tracking-tight mb-3">
            Contact <span className="text-accent underline decoration-4 decoration-tertiary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">

          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Phone Card */}
            <div className="bg-tertiary border-3 border-foreground rounded-3xl p-6 shadow-hard hover:-translate-y-1 transition-all duration-300 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-foreground flex items-center justify-center text-foreground shadow-sm">
                    <Phone size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-foreground/70 block">Phone</span>
                    <a href="tel:+918767953954" className="font-heading font-black text-lg text-foreground hover:underline">
                      +91-8767953954
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+918767953954', 'phone')}
                  title="Copy Phone Number"
                  className="cursor-target w-10 h-10 rounded-xl bg-white border-2 border-foreground flex items-center justify-center text-foreground hover:bg-slate-100 transition-colors"
                >
                  {copiedField === 'phone' ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-quaternary border-3 border-foreground rounded-3xl p-6 shadow-hard hover:-translate-y-1 transition-all duration-300 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-2 border-foreground flex items-center justify-center text-foreground shadow-sm">
                    <Mail size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-foreground/70 block">Email</span>
                    <a href="mailto:sahiljadhav1617@gmail.com" className="font-heading font-black text-base md:text-lg text-foreground hover:underline break-all">
                      sahiljadhav1617@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('sahiljadhav1617@gmail.com', 'email')}
                  title="Copy Email"
                  className="cursor-target w-10 h-10 rounded-xl bg-white border-2 border-foreground flex items-center justify-center text-foreground hover:bg-slate-100 transition-colors shrink-0 ml-2"
                >
                  {copiedField === 'email' ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-secondary text-white border-3 border-foreground rounded-3xl p-6 shadow-hard hover:-translate-y-1 transition-all duration-300 relative">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-foreground flex items-center justify-center text-foreground shadow-sm">
                  <MapPin size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider opacity-90 block">Location</span>
                  <span className="font-heading font-black text-lg text-white">
                    Pune, India
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white border-3 border-foreground rounded-3xl overflow-hidden shadow-hard relative">

            {/* Window Bar Header */}
            <div className="bg-muted px-6 py-3 border-b-3 border-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-foreground/30 inline-block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-foreground/30 inline-block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-foreground/30 inline-block"></span>
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-foreground bg-white px-3 py-1 rounded-full border border-foreground">
                Message Box
              </span>
            </div>

            <form ref={form} onSubmit={sendEmail} className="p-8 flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-black uppercase tracking-wider text-foreground">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  className="w-full bg-input border-3 border-foreground rounded-2xl px-4 py-3.5 text-foreground font-bold outline-none transition-all duration-200 focus:shadow-hard focus:bg-slate-50 text-sm"
                  placeholder="Insert your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-wider text-foreground">
                  Your Email *
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  className="w-full bg-input border-3 border-foreground rounded-2xl px-4 py-3.5 text-foreground font-bold outline-none transition-all duration-200 focus:shadow-hard focus:bg-slate-50 text-sm"
                  placeholder="Insert your email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-wider text-foreground">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-input border-3 border-foreground rounded-2xl px-4 py-3.5 text-foreground font-bold outline-none transition-all duration-200 focus:shadow-hard focus:bg-slate-50 resize-none text-sm"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-target w-full bg-accent hover:bg-foreground text-white font-black text-sm uppercase tracking-wider py-4 rounded-2xl border-3 border-foreground shadow-hard hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                <Send size={18} strokeWidth={2.5} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="bg-quaternary/30 text-foreground border-2 border-foreground rounded-2xl p-4 flex items-center gap-3 font-bold text-xs mt-2">
                  <CheckCircle2 size={20} className="text-emerald-700 shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-rose-100 text-rose-900 border-2 border-foreground rounded-2xl p-4 flex items-center gap-3 font-bold text-xs mt-2">
                  <AlertCircle size={20} className="text-rose-700 shrink-0" />
                  <span>Oops! Something went wrong. Please try again or email directly.</span>
                </div>
              )}

            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

