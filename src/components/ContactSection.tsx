"use client";

import { useState, useEffect } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  time: string;
  contactMethod: string;
  agree: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  time?: string;
  contactMethod?: string;
  agree?: string;
  recaptcha?: string;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (
        container: string | Element,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => void;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaCallback: (token: string) => void;
  }
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    contactMethod: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setIsRecaptchaLoaded(true);
    document.head.appendChild(script);

    window.onRecaptchaCallback = (token: string) => {
      setRecaptchaToken(token);
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim())
      newErrors.message = "Please let us know what brings you here";
    if (!formData.time.trim()) newErrors.time = "Preferred time is required";
    if (!formData.contactMethod.trim())
      newErrors.contactMethod = "Please select a contact method";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted";
    if (!recaptchaToken) newErrors.recaptcha = "Please complete the reCAPTCHA";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        contactMethod: "",
        agree: false,
      });
      setErrors({});
      setRecaptchaToken("");
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Get In Touch
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-800">
          Have questions or ready to begin your healing journey? Reach out, I'm
          here to help.
        </p>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Dr. Serena Blake, PsyD
              </h3>
              <p className="text-gray-600">Clinical Psychologist</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Location</h4>
              <p className="text-gray-600">
                1287 Maplewood Drive
                <br />
                Los Angeles, CA 90026
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Contact</h4>
              <p className="text-gray-600">
                Phone: (323) 555-0192
                <br />
                Email: serena@blakepsychology.com
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Office Hours</h4>
              <p className="text-gray-600">
                In-person: Tue & Thu, 10 AM-6 PM
                <br />
                Virtual via Zoom: Mon, Wed & Fri, 1 PM-5 PM
              </p>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg lg:mx-0 lg:mr-auto">
              <video
                src="/lotus.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                aria-hidden="true"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="rounded-2xl border border-[#004346] bg-white p-8 shadow-sm">
            {submitStatus === "success" ? (
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <h3 className="text-lg font-medium text-green-800">
                  Thank you for your message!
                </h3>
                <p className="mt-2 text-green-700">
                  We've received your inquiry and will get back to you soon. A
                  confirmation has been sent to your email.
                </p>
              </div>
            ) : submitStatus === "error" ? (
              <div className="rounded-lg bg-red-50 p-4 text-center">
                <h3 className="text-lg font-medium text-red-800">
                  Something went wrong
                </h3>
                <p className="mt-2 text-red-700">
                  Please try again later or contact us directly at
                  serena@blakepsychology.com
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 rounded-lg bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 234-5678"
                    autoComplete="tel"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className={`w-full resize-none rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Preferred Contact Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="text"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.time ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Let us know when you're typically available for a call or
                    consultation
                  </p>
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contactMethod"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-lg border px-4 py-3 text-gray-900 transition-colors focus:ring-2 focus:ring-teal-500 focus:outline-none ${
                      errors.contactMethod
                        ? "border-red-500"
                        : "border-gray-300"
                    } ${!formData.contactMethod ? "text-gray-400" : ""}`}
                  >
                    <option value="">Select preferred method</option>
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                    <option value="any">Any Method</option>
                  </select>
                  {errors.contactMethod && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.contactMethod}
                    </p>
                  )}
                </div>
                <div className="flex justify-center">
                  {isRecaptchaLoaded && (
                    <div
                      className="g-recaptcha"
                      data-sitekey={
                        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                        "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      }
                      data-callback="onRecaptchaCallback"
                    ></div>
                  )}
                  {errors.recaptcha && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.recaptcha}
                    </p>
                  )}
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="agree"
                    className="text-sm leading-relaxed text-gray-600"
                  >
                    I agree to be contacted regarding this inquiry.
                  </label>
                </div>
                {errors.agree && (
                  <p className="text-sm text-red-600">{errors.agree}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-teal-700 px-6 py-4 font-medium text-white transition-colors hover:bg-teal-800 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>{" "}
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-center text-sm leading-relaxed text-gray-600">
                    <span className="mr-2 inline-flex items-center">
                      <svg
                        className="h-4 w-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    By submitting, you agree to our{" "}
                    <a
                      href="#"
                      className="text-teal-700 underline hover:text-teal-800"
                    >
                      Privacy Policy
                    </a>{" "}
                    & Terms of Service and to receive texts and emails & texts
                    from Dr. Serena Blake.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
