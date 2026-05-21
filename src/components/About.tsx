import aboutImg from "@/assets/jayaraj.jpeg";

const features = [
  { title: "06+ Years", sub: "Of crafted stories" },
  { title: "Pro Team", sub: "Visionary artists" },
  { title: "High-End Edit", sub: "Cinematic grading" },
  { title: "24/7 Care", sub: "Always reachable" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Studio photographer"
            loading="lazy"
            width={800} 
            height={1024}
            className="aspect-[4/5] object-cover w-full"
          />
        <div className="absolute -bottom-8 -right-4 md:-right-8 bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white p-6 md:p-8 rounded-xl">
  <div className="text-3xl md:text-4xl font-serif text-accent">06+</div>
  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
    Years Experience
  </div>
</div>
        </div>
        <div className="space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">About the Studio</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-balance">
            We turn moments <i className="text-accent/90">into memories.</i>
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg max-w-prose">
            We are a creative photography studio specializing in capturing timeless stories
            through the lens. With years of experience in weddings, portraits, events, and
            commercial shoots, we bring creativity, emotion, and perfection to every frame.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            {features.map((f) => (
              <div key={f.title} className="border-l border-accent/40 pl-5">
                <h4 className="text-sm font-semibold mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
