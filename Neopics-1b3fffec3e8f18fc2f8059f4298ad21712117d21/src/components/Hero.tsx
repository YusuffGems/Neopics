import heroImg from "@/assets/hero.jpg";
import { buildWaUrl, trackWaClick, TEL_HREF, trackCallClick } from "@/lib/wa";

const heroWa = buildWaUrl({
  message: "Hi Neopics, I want to book a photoshoot",
  source: "hero",
  campaign: "hero_cta",
});

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Cinematic couple walking through a misty pine forest at sunrise"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-up">
        <span className="text-accent text-xs md:text-sm tracking-[0.5em] uppercase mb-6 block">
          Established 2018
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 max-w-4xl mx-auto leading-[1.05] text-balance">
          Capturing Moments <br />
          <i className="font-normal bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            That Last Forever
          </i>
        </h1>
        <p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.4em] mb-12 font-extralight">
          Wedding · Events · Portrait · Commercial
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          <a
            href="#portfolio"
            className="bg-accent text-accent-foreground px-10 py-4 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-glow"
          >
            View Portfolio
          </a>
          <a
            href={heroWa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("hero")}
            className="border border-foreground/40 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground/10 transition-all"
          >
            Book on WhatsApp
          </a>
          <a
            href={TEL_HREF}
            onClick={() => trackCallClick("hero")}
            className="border border-foreground/20 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-foreground/5 transition-all"
            aria-label="Call Neopics"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/40 z-10">
        Scroll
      </div>
    </section>
  );
}
