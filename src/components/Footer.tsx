import { Instagram } from "lucide-react";
import { buildWaUrl, trackWaClick } from "@/lib/wa";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import Neopics from "@/assets/logo.png";

const footerWa = buildWaUrl({
  message: "Hi Neopics, I want to book a photoshoot",
  source: "footer",
  campaign: "footer_link",
});

const grid = [p1, p2, p3, p4, p5, p6];

const INSTAGRAM_URL = "https://www.instagram.com/jayarajs2006";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        {/* TOP SECTION */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            Follow Us
          </span>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 mt-6 group"
          >
            

            <div className="size-10 rounded-full border border-foreground/15 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all">
              <Instagram size={16} />
            </div>

            <div className="text-center">
              

              <p className="text-xs text-muted-foreground mt-1 tracking-wide">
                Wedding • Portrait • Cinematic Photography
              </p>
            </div>
          </a>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-20">
          {grid.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </a>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-border">

          {/* BRAND */}
           <a
        href="#"
        className="flex items-center gap-3 text-xl md:text-2xl font-serif tracking-[0.2em] italic"
      >
        <img
          src={Neopics}
          alt="NEOPICS Logo"
          className="h-30 w-30 object-contain"
        />

      </a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5">

            {/* INSTAGRAM */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              className="size-9 rounded-full border border-foreground/15 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              <Instagram size={15} />
            </a>

            {/* WHATSAPP */}
            <a
              href={footerWa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => trackWaClick("footer")}
              className="size-9 rounded-full border border-foreground/15 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all text-[11px] font-bold"
            >
              W
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Neopics Studio
          </div>
        </div>
      </div>
    </footer>
  );
}