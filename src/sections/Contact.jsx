import { useState, useEffect } from "react";
import { Mail, Linkedin, FileText, Send, Check, Copy, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import TechIcon from "../components/TechIcon";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ac31e935-2d16-4503-b3c0-2ad57a1eea24",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to deliver message. Please reach out directly to carmelinojadulco@gmail.com");
      }
    } catch {
      alert("An error occurred. Please email me directly at carmelinojadulco@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("carmelinojadulco@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const SOCIAL_LINKS = [
    {
      name: "GitHub",
      handle: "@snowii-yukii",
      href: "https://github.com/snowii-yukii",
      iconKey: "github",
    },
    {
      name: "LinkedIn",
      handle: "carmelino-jadulco",
      href: "https://www.linkedin.com/in/carmelino-jadulco",
      lucideIcon: Linkedin,
    },
    {
      name: "Resume",
      handle: "Carmelino_Jadulco_Resume.pdf",
      href: "/Carmelino_Jadulco_Resume.pdf",
      download: "Carmelino_Jadulco_Resume.pdf",
      lucideIcon: FileText,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-neutral-200/80 dark:border-white/8">
      {/* Background subtle radial highlight */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[500px] h-[400px] rounded-full bg-neutral-200/40 dark:bg-white/[0.02] blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
            Let's build together.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-3 leading-relaxed">
            Available for full-stack engineering roles, production application builds, or technical collaborations. Reach out directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left gap-4">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="bento-card p-6 rounded-2xl flex flex-col justify-between gap-5 border border-neutral-200 dark:border-white/10 shadow-sm">
              <div>
                <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1">
                  Primary Contact
                </span>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">
                  carmelinojadulco@gmail.com
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Fastest response channel. Usually within 24 hours.
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-semibold text-xs transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Resume Cards */}
            <div className="grid grid-cols-1 gap-3">
              {SOCIAL_LINKS.map((link) => {
                const LucideIcon = link.lucideIcon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    download={link.download}
                    target={link.download ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-white/8 hover:border-neutral-400 dark:hover:border-white/25 hover:bg-neutral-50 dark:hover:bg-neutral-850 transition-all duration-200 active:scale-98 cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-900 dark:text-white group-hover:border-neutral-400 dark:group-hover:border-white/30 transition-colors shadow-xs">
                        {link.iconKey ? (
                          <TechIcon name={link.iconKey} className="w-4.5 h-4.5" />
                        ) : (
                          <LucideIcon className="w-4.5 h-4.5" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-neutral-950 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                          {link.name}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border border-neutral-200 dark:border-white/10 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6 font-sans">
                Fill in the details below and I'll receive it instantly in my inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivers"
                      className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-white/40 focus:ring-1 focus:ring-neutral-200 dark:focus:ring-white/20 transition-all shadow-xs"
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Email Address <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-white/40 focus:ring-1 focus:ring-neutral-200 dark:focus:ring-white/20 transition-all shadow-xs"
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Message <span className="text-neutral-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-white/40 focus:ring-1 focus:ring-neutral-200 dark:focus:ring-white/20 transition-all resize-none shadow-xs"
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 disabled:opacity-50 font-semibold text-xs transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Toast Confirmation */}
              <AnimatePresence>
                {showToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-300"
                  >
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Message delivered successfully! I will reply shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
