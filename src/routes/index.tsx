import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Packages } from "@/components/Packages";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQ, faqs } from "@/components/FAQ";
import { SeoDebug } from "@/components/SeoDebug";
import heroImg from "@/assets/hero.jpg";

const SITE_URL = "https://neopics.in";
const SITE_TITLE =
  "Neopics — Wedding, Event & Portrait Photography Studio in Chennai";
const SITE_DESC =
  "Neopics is a Chennai-based cinematic photography & videography studio specialising in weddings, pre-weddings, events, portraits and commercial shoots. Book instantly on WhatsApp.";

const services = [
  {
    name: "Wedding Photography",
    description: "Cinematic story-led wedding photography & videography across India.",
  },
  { name: "Pre-Wedding Shoots", description: "Editorial location-based pre-wedding portraits." },
  { name: "Birthday & Family Events", description: "Joyful candid event photography." },
  { name: "Corporate Event Photography", description: "Polished coverage for brands & galas." },
  { name: "Product & Commercial Photography", description: "High-end commercial product imagery." },
  { name: "Cinematic Videography", description: "Highlight films that feel like cinema." },
];

const reviews = [
  {
    author: "Arun & Priya",
    rating: 5,
    body: "Amazing photography team! They captured our wedding beautifully like a movie.",
  },
  {
    author: "Neha Sharma",
    rating: 5,
    body: "The cinematic highlight video brought us to tears. Worth every rupee.",
  },
  {
    author: "Rohit Mehta",
    rating: 5,
    body: "Professional, calm, and incredibly creative. Editorial-cover quality.",
  },
];

const ldGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#business`,
      name: "Neopics",
      image: `${SITE_URL}/og.jpg`,
      url: SITE_URL,
      description: SITE_DESC,
      telephone: "+91 87545 42121",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "130, 4th Street, F Block, Thanikachalam Nagar, Ponniammam Medu",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600110",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 13.123067, longitude: 80.193093 },
      areaServed: { "@type": "Country", name: "India" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      sameAs: ["https://www.instagram.com/jayarajs2006"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: String(reviews.length),
        bestRating: "5",
        worstRating: "1",
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(r.rating),
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: r.body,
      })),
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: "India",
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      {
        name: "keywords",
        content:
          "Neopics, Chennai photographer, wedding photographer Chennai, candid wedding photography, pre-wedding shoot Chennai, event photography, portrait photographer, commercial photography, videography Chennai, Ponniammam Medu photographer",
      },
      { name: "author", content: "Neopics" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "geo.region", content: "IN-TN" },
      { name: "geo.placename", content: "Chennai" },
      { name: "geo.position", content: "13.123067;80.193093" },
      { name: "ICBM", content: "13.123067, 80.193093" },

      { property: "og:site_name", content: "Neopics" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: heroImg },
      { property: "og:image:alt", content: "Neopics cinematic photography" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ldGraph),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <SeoDebug />
    </div>
  );
}
