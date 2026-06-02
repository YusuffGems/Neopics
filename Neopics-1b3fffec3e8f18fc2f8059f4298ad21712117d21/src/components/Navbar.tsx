import { useEffect, useState } from "react";
import { Menu, X, Instagram, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";
import Neopics from "@/assets/logo.png";


const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },

  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/jayarajs2006";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggle } = useTheme();

  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-500 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
        }`}
    >
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

      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover:text-accent transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram profile"
          className="size-9 rounded-full border border-foreground/15 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
        >
          <Instagram size={15} />
        </a>

        {/* THEME TOGGLE */}
        <button
          type="button"
          onClick={toggle}
          aria-label={
            isDark ? "Switch to light mode" : "Switch to dark mode"
          }
          aria-pressed={isDark}
          className={`size-9 rounded-full border flex items-center justify-center transition-all ${isDark
              ? "border-white/20 text-white bg-white/5 hover:bg-white/10"
              : "border-foreground/20 text-foreground bg-foreground/5 hover:bg-foreground/10"
            }`}
        >
          {isDark ? (
            <Moon
              size={15}
              className="text-white fill-white/10"
              strokeWidth={1.75}
            />
          ) : (
            <Sun
              size={15}
              className="text-foreground"
              strokeWidth={2}
            />
          )}
        </button>

        <a
          href="#contact"
          className="hidden md:inline-block border border-foreground/20 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
        >
          Inquire
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border md:hidden flex flex-col py-6 px-6 gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.3em]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}