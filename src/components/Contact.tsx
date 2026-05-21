import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";

import {
  buildWaUrl,
  trackWaClick,
  TEL_HREF,
  trackCallClick,
} from "@/lib/wa";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi! I'm ${form.name} (${form.phone}). Event date: ${form.date}. ${form.message}`;

    trackWaClick("contact", {
      has_date: String(Boolean(form.date)),
    });

    window.open(
      buildWaUrl({
        message: text,
        source: "contact",
        campaign: "contact_form",
      }),
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-10 bg-surface"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

        {/* LEFT SIDE */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            Get in Touch
          </span>

          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-8 text-balance">
            Let's create{" "}
            <i className="text-accent/90">
              something beautiful.
            </i>
          </h2>

          <p className="text-muted-foreground mb-10 max-w-prose">
            Drop us a message for custom inquiries or to check
            availability for your dates. We reply within a few hours.
          </p>

          {/* FORM */}
          <form onSubmit={submit} className="space-y-5">

            <input
              required
              type="text"
              placeholder="FULL NAME"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full bg-transparent border-b border-border py-4 text-xs tracking-widest focus:outline-none focus:border-accent transition-colors"
            />

            <input
              required
              type="tel"
              placeholder="PHONE NUMBER"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="w-full bg-transparent border-b border-border py-4 text-xs tracking-widest focus:outline-none focus:border-accent transition-colors"
            />

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value,
                })
              }
              className="w-full bg-transparent border-b border-border py-4 text-xs tracking-widest focus:outline-none focus:border-accent transition-colors uppercase [color-scheme:dark]"
            />

            <textarea
              placeholder="TELL US ABOUT YOUR EVENT"
              rows={3}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full bg-transparent border-b border-border py-4 text-xs tracking-widest focus:outline-none focus:border-accent transition-colors resize-none"
            />

            <div className="flex flex-wrap gap-4 mt-4">

              <button
                type="submit"
                className="bg-accent text-accent-foreground px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Send Inquiry
              </button>

              <a
                href={TEL_HREF}
                onClick={() => trackCallClick("contact")}
                aria-label="Call Neopics"
                className="border border-foreground/30 px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/10 transition-all inline-flex items-center gap-2"
              >
                <Phone size={12} />
                Call Instead
              </a>

            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* MAP */}
          <div className="aspect-square w-full overflow-hidden rounded-2xl">
            <iframe
              title="Neopics studio location, Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26139.25007293149!2d80.19309298352076!3d13.123067392494633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264f99c6e9479%3A0x7ffdefc349de898e!2sNEOPICS!5e0!3m2!1sen!2sin!4v1778667682699!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-6 text-sm">

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <MapPin
                className="text-accent shrink-0"
                size={18}
              />

              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Studio
                </div>

                130, 4th Street, F Block,
                Thanikachalam Nagar,
                Ponniammam Medu,
                Chennai,
                Tamil Nadu 600110
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <Phone
                className="text-accent shrink-0"
                size={18}
              />

              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Call / WhatsApp
                </div>

                <a
                  href="tel:+918754542121"
                  className="hover:text-accent transition-colors"
                >
                  +91 87545 42121
                </a>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="flex items-start gap-4">
              <Instagram
                className="text-accent shrink-0"
                size={18}
              />

              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Instagram
                </div>

                <a
                  href="https://www.instagram.com/jayarajs2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >

                  <div className="size-10 rounded-full border border-foreground/15 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                    <Instagram size={16} />
                  </div>

                  <div>
                   

                    <div className="text-xs text-muted-foreground">
                      Wedding • Portrait • Cinematic Photography
                    </div>
                  </div>

                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <Mail
                className="text-accent shrink-0"
                size={18}
              />

              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Email
                </div>

                <a
                  href="Jayarajs2006@gmail.com "
                  className="hover:text-accent transition-colors"
                >
                  Jayarajs2006@gmail.com 
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}