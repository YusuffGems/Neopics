import { useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Cat = "All" | "Wedding" | "Pre-Wedding" | "Events" | "Portraits" | "Commercial";

const items: { src: string; cat: Exclude<Cat, "All">; alt: string; ratio: string }[] = [
  { src: p1, cat: "Wedding", alt: "Bride and groom hands with ring", ratio: "aspect-[3/4]" },
  { src: p2, cat: "Portraits", alt: "Editorial portrait", ratio: "aspect-[3/2]" },
  { src: p3, cat: "Events", alt: "Corporate gala stage", ratio: "aspect-[2/3]" },
  { src: p4, cat: "Pre-Wedding", alt: "Pre-wedding mountain shoot", ratio: "aspect-[4/5]" },
  { src: p5, cat: "Commercial", alt: "Luxury watch commercial", ratio: "aspect-square" },
  { src: p6, cat: "Wedding", alt: "Candid wedding party", ratio: "aspect-[3/4]" },
];

const cats: Cat[] = ["All", "Wedding", "Pre-Wedding", "Events", "Portraits", "Commercial"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = items.filter((i) => active === "All" || i.cat === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Selected Works</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Our Creative Work</h2>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`pb-1 border-b transition-colors ${
                  active === c
                    ? "text-accent border-accent"
                    : "border-transparent hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item.src)}
              className={`block w-full ${item.ratio} overflow-hidden group relative cursor-zoom-in`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all flex items-end p-5">
                <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.cat}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in cursor-zoom-out"
        >
          <img src={lightbox} alt="Preview" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </section>
  );
}
