"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Whether you&apos;re interested in a piece, planning a visit, or have a
            question about our exhibitions, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden mb-12">
                <Image
                  src="/gallery/artwork-7.jpg"
                  alt="Gallery entrance"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-accent" />
                    <h3 className="text-sm uppercase tracking-widest text-foreground">
                      Location
                    </h3>
                  </div>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    123 Gallery Street<br />
                    New York, NY 10001<br />
                    United States
                  </address>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <h3 className="text-sm uppercase tracking-widest text-foreground">
                      Hours
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Tuesday - Sunday<br />
                    10:00 AM - 6:00 PM<br />
                    Closed Mondays
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-accent" />
                    <h3 className="text-sm uppercase tracking-widest text-foreground">
                      Phone
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+12125551234"
                      className="hover:text-foreground transition-colors"
                    >
                      +1 (212) 555-1234
                    </a>
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-accent" />
                    <h3 className="text-sm uppercase tracking-widest text-foreground">
                      Email
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:info@aperture.gallery"
                      className="hover:text-foreground transition-colors"
                    >
                      info@aperture.gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 md:p-12">
              <h2 className="text-2xl font-serif text-foreground mb-6">
                Send us a Message
              </h2>

              {formState === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-serif text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm uppercase tracking-widest text-muted-foreground mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm uppercase tracking-widest text-muted-foreground mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="artwork">Artwork Inquiry</option>
                      <option value="visit">Plan a Visit</option>
                      <option value="commission">Commission Request</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-muted">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm uppercase tracking-widest">
              123 Gallery Street, New York, NY 10001
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
