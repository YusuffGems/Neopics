export const faqs = [
  {
    q: "What areas do you cover for wedding photography?",
    a: "We are based in Chennai and cover weddings, pre-weddings and events across Tamil Nadu and pan-India. Destination shoots are available on request.",
  },
  {
    q: "How do I book a photography package?",
    a: "Tap any 'Book on WhatsApp' button or call +91 87545 42121. We confirm your date once a small advance is paid.",
  },
  {
    q: "How many edited photos do I get and when?",
    a: "Each package lists the deliverables. Edited photos are delivered within 2–3 weeks of the shoot via a private online gallery.",
  },
  {
    q: "Do you offer cinematic videos and drone coverage?",
    a: "Yes. Drone shots are included from the Standard package, and full cinematic highlight films are part of the Premium package.",
  },
  {
    q: "Can I customise a package?",
    a: "Absolutely. Choose the Custom / Bespoke package and message us your event details — we'll tailor coverage, crew and output to fit.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-10 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent">FAQ</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">Frequently Asked</h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6 px-1">
            <summary className="cursor-pointer list-none flex justify-between items-center gap-6">
              <h3 className="font-serif text-lg md:text-xl">{f.q}</h3>
              <span className="text-accent text-2xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4 max-w-prose">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
