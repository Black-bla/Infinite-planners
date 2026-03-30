"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <section className="bg-[linear-gradient(135deg,#4B3621_0%,#8B5E3C_45%,#A68966_100%)] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Let&apos;s Talk</h1>
          <p className="mt-4 max-w-2xl" style={{color: '#D2B48C'}}>
            Ready to start planning your event? Get in touch and let&apos;s create something amazing together.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Event Inquiry Form
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Tell me about your vision. The more details you share, the better I can help bring it to life.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-900/20">
                <p className="font-semibold text-green-800 dark:text-green-200">
                  Thank you for your inquiry!
                </p>
                <p className="mt-2 text-green-700 dark:text-green-300">
                  I&apos;ll review your details and get back to you within 24 hours to discuss your event.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                      style={{
                        borderColor: '#A68966'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                      style={{
                        borderColor: '#A68966'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                    style={{
                      borderColor: '#A68966'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      style={{
                        borderColor: '#A68966'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                    >
                      <option value="">Select an event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="destination">Destination Event</option>
                      <option value="private">Private Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                      Event Date (Approximate)
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      style={{
                        borderColor: '#A68966'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                      Expected Guest Count
                    </label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      style={{
                        borderColor: '#A68966'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                    >
                      <option value="">Select guest count</option>
                      <option value="0-25">0-25</option>
                      <option value="25-50">25-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100-250">100-250</option>
                      <option value="250+">250+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      style={{
                        borderColor: '#A68966'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                    >
                      <option value="">Select budget</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                    Tell Me About Your Vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-slate-900 placeholder-slate-400 outline-none transition-colors dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                    style={{
                      borderColor: '#A68966'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#8B5E3C'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#A68966'}
                    placeholder="Share details about your event, your vision, style preferences, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: '#8B5E3C'
                  }}
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Quick Contact</h3>
              <div className="mt-4 space-y-4">
                <p>
                  <span className="block text-sm font-medium text-slate-600 dark:text-slate-400">Email</span>
                  <a href="mailto:hello@eventplanner.com" className="hover:opacity-80 transition-opacity" style={{color: '#8B5E3C'}}>
                    hello@eventplanner.com
                  </a>
                </p>
                <p>
                  <span className="block text-sm font-medium text-slate-600 dark:text-slate-400">Phone</span>
                  <a href="tel:+15551234567" className="hover:opacity-80 transition-opacity" style={{color: '#8B5E3C'}}>
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Response Time</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                I typically respond to inquiries within 24 hours during business hours.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">What to Expect</h3>
              <ol className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="font-semibold" style={{color: '#8B5E3C'}}>1.</span>
                  <span>Initial consultation call</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold" style={{color: '#8B5E3C'}}>2.</span>
                  <span>Proposal with pricing</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold" style={{color: '#8B5E3C'}}>3.</span>
                  <span>Planning collaboration</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold" style={{color: '#8B5E3C'}}>4.</span>
                  <span>Flawless execution</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
