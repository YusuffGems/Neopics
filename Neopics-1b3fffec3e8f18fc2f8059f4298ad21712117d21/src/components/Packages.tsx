import { Check, Phone } from "lucide-react";
import { buildWaUrl, trackWaClick, TEL_HREF, trackCallClick } from "@/lib/wa";

const packages = [
  {
    name: "Basic",
    tag: "Essence",
    price: "₹8,999",
    features: ["2 Hours Coverage", "1 Photographer", "50 Edited Photos", "Online Delivery"],
    cta: "Book Basic",
    popular: false,
    strike: true,
  },
  {
    name: "Standard",
    tag: "Legacy",
    price: "₹24,999",
    features: ["6 Hours Coverage", "2 Photographers", "Drone Shots Included", "200 Edited Photos"],
    cta: "Book Standard",
    popular: true,
    strike: true,
  },
  {
    name: "Premium",
    tag: "Infinity",
    price: "₹49,999",
    features: [
      "Full Day Coverage",
      "Photo + Cinematic Video",
      "Drone + Candid Shots",
      "Unlimited Edited Photos",
    ],
    cta: "Book Premium",
    popular: false,
    strike: true,
  },
  {
    name: "Custom",
    tag: "Bespoke",
    price: "On Request",
    features: [
      "Fully Customizable",
      "Destination Shoots",
      "Full Crew Options",
      "Tailored Output",
    ],
    cta: "Contact for Quote",
    popular: false,
    strike: false, // ❌ NO STRIKE FOR CUSTOM
  },
];

const waLink = (name: string) =>
  buildWaUrl({
    message: `Hi Neopics, I want to book the ${name} photography package`,
    source: "package",
    campaign: `package_${name.toLowerCase()}`,
  });

export function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">

      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
          Investment
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
          Photography Packages
        </h2>
        <p className="text-muted-foreground text-sm">
          Transparent pricing for your milestones
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`glass p-8 flex flex-col relative ${
              p.popular ? "border-accent/60 shadow-glow lg:scale-[1.03]" : ""
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                Most Popular
              </div>
            )}

            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
              {p.tag}
            </span>

            <h3 className="font-serif text-3xl mb-3">{p.name}</h3>

            {/* PRICE (ONLY STRIKE IF NOT CUSTOM) */}
            <div className="text-2xl font-serif text-accent mb-8">
              {p.strike ? <s>{p.price}</s> : p.price}
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground mb-10 flex-grow">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} className="text-accent mt-1 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(p.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWaClick("package", {
                  package_name: p.name,
                  price: p.price,
                })
              }
              className={`w-full text-center py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                p.popular
                  ? "bg-accent text-accent-foreground hover:brightness-110"
                  : "border border-foreground/15 hover:bg-foreground hover:text-background"
              }`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}