"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdSend } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ id }) {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    if (containerRef.current) {
      // Animate heading
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 80%",
          },
        }
      );

      // Animate contact cards
      const contactCards = containerRef.current.querySelectorAll(".contact-card");
      contactCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });

      // Animate form
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:aleemtalha098@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative z-20 w-full min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] py-32 px-4 md:px-8"
    >
      {/* Section Header */}
      <div className="contact-heading mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Let's Build Something Great Together
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Ready to transform your ideas into high-performance digital solutions? 
          Reach out today and let's discuss your project vision.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Email Contact Card */}
        <div className="contact-card bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FaEnvelope className="text-emerald-300 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Email</h3>
          <p className="text-slate-400 mb-4">
            Send me an email with your project details and let's connect.
          </p>
          <a
            href="mailto:aleemtalha098@gmail.com"
            className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors"
          >
            aleemtalha098@gmail.com
            <MdSend className="text-lg" />
          </a>
        </div>

        {/* WhatsApp Contact Card */}
        <div className="contact-card bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FaWhatsapp className="text-emerald-300 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
          <p className="text-slate-400 mb-4">
            Quick chat? Hit me up on WhatsApp for instant conversation.
          </p>
          <a
            href="https://wa.me/923270445135"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors"
          >
            Start Conversation
            <FaWhatsapp className="text-lg" />
          </a>
        </div>

        {/* Phone Contact Card */}
        <div className="contact-card bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300 group">
          <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FaPhone className="text-emerald-300 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
          <p className="text-slate-400 mb-4">
            Prefer a direct call? Let&APOS;s have a conversation about your needs.
          </p>
          <a
            href="tel:+923270445135"
            className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors"
          >
            +92 3270445135
            <FaPhone className="text-lg" />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <div className="contact-form bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Send me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 transition-all"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Project Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is your project about?"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, timeline, and requirements..."
                rows="6"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/30 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <MdSend className="text-xl" />
              Send Message
            </button>

            {submitted && (
              <div className="text-center text-emerald-300 font-semibold">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>

          <p className="text-slate-500 text-sm text-center mt-6">
            * Required fields. Your information will only be used to contact you about your project.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-400/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            Don't wait to start your project
          </h3>
          <p className="text-slate-400 mb-6">
            Whether you're a startup looking for your first MVP or an enterprise needing scaling solutions, 
            I'm here to deliver excellence. Let's create something that makes an impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:aleem.talha@rategmail.com"
              className="px-8 py-3 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500/30 transition-all"
            >
              Email Me Now
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500/30 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
