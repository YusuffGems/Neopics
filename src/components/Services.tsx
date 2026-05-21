import {
  Camera,
  Heart,
  Cake,
  Building2,
  Package,
  Film,
  Baby,
  Plane,
  Shirt,
  Utensils,
  Home,
  Music,
  GraduationCap,
  Briefcase,
  Gem,
  Car,
  Trees,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    desc: "Luxury cinematic storytelling for timeless wedding memories.",
    points: [
      "Wedding Shoot",
      "Pre-Wedding Shoot",
      "Engagement Photography",
      "Candid Wedding Coverage",
    ],
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    desc: "Creative editorial couple portraits at beautiful locations.",
    points: [
      "Outdoor Couple Shoot",
      "Destination Shoot",
      "Traditional Couple Portraits",
      "Creative Concept Shoots",
    ],
  },
  {
    icon: Cake,
    title: "Birthday Photography",
    desc: "Capturing joyful celebrations and unforgettable moments.",
    points: [
      "Birthday Events",
      "Kids Birthday Shoots",
      "Private Party Coverage",
      "Decoration Photography",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "Professional brand-focused event photography coverage.",
    points: [
      "Business Conferences",
      "Award Functions",
      "Office Branding",
      "Corporate Meetups",
    ],
  },
  {
    icon: Package,
    title: "Product Photography",
    desc: "Premium commercial visuals for products and e-commerce brands.",
    points: [
      "Amazon Product Shoot",
      "E-commerce Photography",
      "Catalog Photography",
      "Creative Product Ads",
    ],
  },
  {
    icon: Film,
    title: "Cinematic Videography",
    desc: "High-end cinematic films crafted with emotional storytelling.",
    points: [
      "Wedding Films",
      "Brand Commercials",
      "Instagram Reels",
      "YouTube Videos",
    ],
  },
  {
    icon: Shirt,
    title: "Fashion Photography",
    desc: "Modern editorial and portfolio shoots for fashion brands.",
    points: [
      "Model Portfolio",
      "Designer Shoot",
      "Editorial Fashion",
      "Lookbook Photography",
    ],
  },
  {
    icon: Utensils,
    title: "Food Photography",
    desc: "Creative restaurant and menu visuals that boost engagement.",
    points: [
      "Restaurant Photography",
      "Menu Photography",
      "Cafe Branding",
      "Food Styling Shoots",
    ],
  },
  {
    icon: Home,
    title: "Real Estate Photography",
    desc: "Luxury property, architecture, and interior photography.",
    points: [
      "Interior Photography",
      "Architecture Photography",
      "Property Showcase",
      "Hotel & Resort Shoot",
    ],
  },
  {
    icon: Baby,
    title: "Baby & Maternity Photography",
    desc: "Soft emotional portraits celebrating motherhood and family.",
    points: [
      "Baby Shoot",
      "Newborn Photography",
      "Maternity Shoot",
      "Kids Photography",
    ],
  },
  {
    icon: Plane,
    title: "Drone Photography",
    desc: "Professional aerial visuals for events and properties.",
    points: [
      "Aerial Photography",
      "Drone Videography",
      "Property Drone Shoot",
      "Event Drone Coverage",
    ],
  },
  {
    icon: Music,
    title: "Concert Photography",
    desc: "Dynamic live music and stage performance photography.",
    points: [
      "Music Festivals",
      "Live Concerts",
      "Stage Performances",
      "Artist Branding",
    ],
  },
  {
    icon: GraduationCap,
    title: "Graduation Shoots",
    desc: "Stylish graduation portraits and campus memories.",
    points: [
      "College Graduation",
      "Friends Group Shoot",
      "Campus Portraits",
      "Convocation Photography",
    ],
  },
  {
    icon: Briefcase,
    title: "Personal Branding",
    desc: "Professional portraits crafted for creators and entrepreneurs.",
    points: [
      "LinkedIn Portraits",
      "Business Branding",
      "Studio Headshots",
      "Social Media Branding",
    ],
  },
  {
    icon: Gem,
    title: "Jewelry Photography",
    desc: "Luxury close-up product visuals with premium detailing.",
    points: [
      "Gold Jewelry Shoot",
      "Diamond Photography",
      "Luxury Product Ads",
      "Catalog Shoots",
    ],
  },
  {
    icon: Car,
    title: "Automobile Photography",
    desc: "High-end cinematic car and bike photography shoots.",
    points: [
      "Car Photography",
      "Bike Shoots",
      "Automobile Reels",
      "Showroom Branding",
    ],
  },
  {
    icon: Trees,
    title: "Travel Photography",
    desc: "Lifestyle and destination storytelling through visuals.",
    points: [
      "Destination Photography",
      "Street Photography",
      "Nature Photography",
      "Lifestyle Visuals",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-10 bg-surface"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            What We Do
          </span>

          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Creative Photography Services
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            We craft premium photography and cinematic visuals designed
            for weddings, brands, products, events, and modern storytelling.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="
                border border-border rounded-3xl bg-background/40 p-8
                hover:bg-background
                transition-all duration-500 ease-out
                group
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-accent/10
                animate-fade-up
                backdrop-blur-sm
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              {/* ICON */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <s.icon
                  className="
                    relative z-10 text-accent
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:-translate-y-1
                  "
                  size={32}
                  strokeWidth={1.2}
                />
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                {s.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* BULLET POINTS */}
              <ul className="space-y-3">
                {s.points.map((point) => (
                  <li
                    key={point}
                    className="
                      flex items-center gap-3 text-sm
                      transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    <Sparkles
                      size={14}
                      className="
                        text-accent shrink-0
                        transition-transform duration-300
                        group-hover:rotate-12
                      "
                    />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}