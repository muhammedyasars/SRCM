import React, { useState } from 'react';
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  MapPinIcon,
  SendIcon,
  CheckCircleIcon,
  ClockIcon } from
'lucide-react';
import Link from 'next/link';
import { ROUTES } from '../constants';
type Page = 'home' | 'services' | 'careers' | 'contact';
interface ContactPageProps {
  onNavigate?: (page: Page) => void;
}
interface FormState {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
export function ContactPage({ onNavigate }: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="hero-gradient py-24 pt-36 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2D7A3A]/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-white/90 text-sm font-body font-medium">
              Get In Touch
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your revenue cycle? Our team of experts is here
            to help. Reach out today for a consultation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M0 60L1440 60L1440 30C1200 0 960 60 720 30C480 0 240 60 0 30L0 60Z"
              fill="#F0F4F8" />

          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#1B3A6B] mb-2">
                  Let's Connect
                </h2>
                <div className="accent-line mb-4" />
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  Whether you're looking to optimize your revenue cycle, explore
                  our services, or join our team — we'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EEF2F9] flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#1B3A6B] text-sm mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+97100000000"
                    className="text-gray-600 text-sm font-body hover:text-[#2D7A3A] transition-colors">

                    +971 XX XXX XXXX
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e8f5ea] flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-[#2D7A3A]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#1B3A6B] text-sm mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@streamlinercm.com"
                    className="text-gray-600 text-sm font-body hover:text-[#2D7A3A] transition-colors">

                    info@streamlinercm.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EEF2F9] flex items-center justify-center flex-shrink-0">
                  <GlobeIcon className="w-5 h-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#1B3A6B] text-sm mb-1">
                    Website
                  </p>
                  <span className="text-gray-600 text-sm font-body">
                    www.streamlinercm.com
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#e8f5ea] flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-[#2D7A3A]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#1B3A6B] text-sm mb-1">
                    Location
                  </p>
                  <span className="text-gray-600 text-sm font-body">
                    Middle East & Beyond
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EEF2F9] flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-[#1B3A6B]" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#1B3A6B] text-sm mb-1">
                    Business Hours
                  </p>
                  <p className="text-gray-600 text-sm font-body">
                    Sun – Thu: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-gray-500 text-xs font-body mt-0.5">
                    24/7 Support Available
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
                {submitted ?
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#e8f5ea] flex items-center justify-center mb-6">
                      <CheckCircleIcon className="w-10 h-10 text-[#2D7A3A]" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#1B3A6B] mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 font-body max-w-md leading-relaxed mb-8">
                      Thank you for reaching out to Streamline RCM. Our team
                      will review your message and get back to you within 24
                      hours.
                    </p>
                    <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="btn-primary">

                      Send Another Message
                    </button>
                  </div> :

                <>
                    <div className="mb-8">
                      <h2 className="font-heading font-bold text-2xl text-[#1B3A6B] mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-500 font-body text-sm">
                        Fill out the form below and we'll get back to you
                        promptly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {/* Name */}
                        <div>
                          <label
                          htmlFor="name"
                          className="block text-sm font-heading font-medium text-gray-700 mb-1.5">

                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1B3A6B]'}`}
                          aria-describedby={
                          errors.name ? 'name-error' : undefined
                          } />

                          {errors.name &&
                        <p
                          id="name-error"
                          className="mt-1.5 text-xs text-red-500 font-body">

                              {errors.name}
                            </p>
                        }
                        </div>

                        {/* Email */}
                        <div>
                          <label
                          htmlFor="email"
                          className="block text-sm font-heading font-medium text-gray-700 mb-1.5">

                            Email Address{' '}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1B3A6B]'}`}
                          aria-describedby={
                          errors.email ? 'email-error' : undefined
                          } />

                          {errors.email &&
                        <p
                          id="email-error"
                          className="mt-1.5 text-xs text-red-500 font-body">

                              {errors.email}
                            </p>
                        }
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                          htmlFor="phone"
                          className="block text-sm font-heading font-medium text-gray-700 mb-1.5">

                            Phone Number
                          </label>
                          <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 XX XXX XXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:bg-white focus:border-[#1B3A6B] transition-all" />

                        </div>

                        {/* Organization */}
                        <div>
                          <label
                          htmlFor="organization"
                          className="block text-sm font-heading font-medium text-gray-700 mb-1.5">

                            Organization
                          </label>
                          <input
                          id="organization"
                          name="organization"
                          type="text"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Hospital / Clinic name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:bg-white focus:border-[#1B3A6B] transition-all" />

                        </div>
                      </div>

                      {/* Subject */}
                      <div className="mb-5">
                        <label
                        htmlFor="subject"
                        className="block text-sm font-heading font-medium text-gray-700 mb-1.5">

                          Subject
                        </label>
                        <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 font-body text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:bg-white focus:border-[#1B3A6B] transition-all">

                          <option value="">Select a subject</option>
                          <option value="services">
                            Inquire About Services
                          </option>
                          <option value="partnership">
                            Partnership Opportunity
                          </option>
                          <option value="careers">Career Inquiry</option>
                          <option value="consultancy">RCM Consultancy</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="mb-7">
                        <label
                        htmlFor="message"
                        className="block text-sm font-heading font-medium text-gray-700 mb-1.5">

                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs, questions, or how we can help..."
                        className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 transition-all resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white focus:border-[#1B3A6B]'}`}
                        aria-describedby={
                        errors.message ? 'message-error' : undefined
                        } />

                        {errors.message &&
                      <p
                        id="message-error"
                        className="mt-1.5 text-xs text-red-500 font-body">

                            {errors.message}
                          </p>
                      }
                      </div>

                      <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">

                        {isSubmitting ?
                      <>
                            <svg
                          className="animate-spin w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none">

                              <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4" />

                              <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />

                            </svg>
                            Sending...
                          </> :

                      <>
                            Send Message
                            <SendIcon className="w-5 h-5" />
                          </>
                      }
                      </button>
                    </form>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>);

}
export default ContactPage;
