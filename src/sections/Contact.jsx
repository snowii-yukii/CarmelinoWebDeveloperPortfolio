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

  const SOCIAL_LINKS = [
    { name: "Email", value: "carmelinojadulco@gmail.com", href: "mailto:carmelinojadulco@gmail.com", icon: Mail },
    { name: "LinkedIn", value: "linkedin.com/in/carms", href: "https://www.linkedin.com/in/carmelino-jadulco/", icon: Linkedin },
    { name: "GitHub", value: "github.com/snowii-yukii", href: "https://github.com/snowii-yukii", icon: Github },
    { name: "Resume", value: "Download CV Document", href: "#", icon: FileText },
  ];





  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Let's Collaborate
          </h3>
          <p className="text-sm text-slate-400 max-w-md mt-3 leading-relaxed font-normal">
            Currently looking for my first professional opportunity. Let's build something amazing together.
          </p>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Testimonial & Connections */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left h-full">
            <h4 className="text-lg font-bold text-white mb-6">
              Connect With Me
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed font-normal mb-8">
              I am open to internships, contract projects, and entry-level developer roles. Drop a message or reach out on social channels directly.
            </p>

            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    onClick={(e) => {
                      if (link.name === "Resume") {
                        e.preventDefault();
                        alert("Resume download triggered (simulated placeholder).");
                      }
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-lg bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        {link.name}
                      </div>
                      <div className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors">
                        {link.value}
                      </div>
                    </div>
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
