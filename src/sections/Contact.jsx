import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, FileText, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../components/Card";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
      tempErrors.email = "Please enter a valid email.";
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
          company: formData.company,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setShowToast(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        console.error("Form submission error:", result);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("carmelinojadulco@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const SOCIAL_LINKS = [
    { name: "LinkedIn", value: "carmelino-jadulco", href: "https://www.linkedin.com/in/carmelino-jadulco/", icon: Linkedin },
    { name: "GitHub", value: "snowii-yukii", href: "https://github.com/snowii-yukii", icon: Github },
    { name: "Resume", value: "Carmelino_Jadulco_Resume.pdf", href: "/Carmelino_Jadulco_Resume.pdf", download: "Carmelino_Jadulco_Resume.pdf", icon: FileText },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's build something memorable.
          </h2>
          <p className="text-slate-400 max-w-2xl mt-3 text-base leading-relaxed">
            Have an open developer position, an interesting freelance build, or just want to chat about frontend craft? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left h-full gap-4">
            
            {/* Primary Email Card with Quick Copy */}
            <div className="bento-card p-6 rounded-2xl flex flex-col justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Primary Email
                </span>
                <div className="text-white font-mono text-sm font-semibold break-all">
                  carmelinojadulco@gmail.com
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Expect a personal reply within 24 hours (UTC+8).
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied to Clipboard!" : "Copy Email"}</span>
                </button>
                <a
                  href="mailto:carmelinojadulco@gmail.com"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-mono transition cursor-pointer"
                >
                  Open Mail App ↗
                </a>
              </div>
            </div>

            {/* Social Channels & Resume */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Resume" ? "_self" : "_blank"}
                    rel={link.name === "Resume" ? undefined : "noopener noreferrer"}
                    download={link.name === "Resume" ? link.download : undefined}
                    className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                          {link.name}
                        </div>
                        <div className="text-xs text-white font-mono group-hover:text-blue-400 transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </div>
                    <span className="text-slate-500 group-hover:text-white text-xs font-mono transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Validation Contact Form */}
          <div className="lg:col-span-7 w-full">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all ${
                        errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue-500/50"
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-400 mt-1.5">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all ${
                        errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue-500/50"
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-400 mt-1.5">{errors.email}</span>}
                  </div>
                </div>

                {/* Company field (Optional) */}
                <div className="flex flex-col items-start">
                  <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Company Name <span className="text-[10px] text-slate-600 font-medium">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Meta"
                    className="w-full bg-slate-950 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col items-start">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, internship vacancy, or opportunity..."
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none ${
                      errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue-500/50"
                    }`}
                  />
                  {errors.message && <span className="text-[11px] text-red-400 mt-1.5">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl cursor-pointer transition-all shadow-md shadow-blue-500/10"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Reusable Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-emerald-500/30 p-4 rounded-xl shadow-2xl backdrop-blur-md"
          >
            <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400">
              <Check className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-white font-bold">Message Transmitted</div>
              <div className="text-[11px] text-slate-400 font-medium">I'll review and follow up shortly.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
