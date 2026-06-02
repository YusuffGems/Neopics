import { Phone } from "lucide-react";
import { TEL_HREF, trackCallClick } from "@/lib/wa";

type Source = "hero" | "navbar" | "floating" | "package" | "contact" | "footer";

interface Props {
  source: Source;
  className?: string;
  label?: string;
  extra?: Record<string, string>;
  iconOnly?: boolean;
}

/**
 * Click-to-call fallback for users where wa.me is blocked
 * (corporate networks, in-app browsers, no WhatsApp installed).
 */
export function CallButton({
  source,
  className = "",
  label = "Call",
  extra,
  iconOnly = false,
}: Props) {
  return (
    <a
      href={TEL_HREF}
      onClick={() => trackCallClick(source, extra)}
      aria-label="Call Neopics"
      className={className}
    >
      <Phone size={iconOnly ? 18 : 14} className={iconOnly ? "" : "inline mr-2 -mt-0.5"} />
      {!iconOnly && label}
    </a>
  );
}
