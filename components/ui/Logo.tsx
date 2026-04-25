import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 group",
        className
      )}
      aria-label="Fabrica home"
    >
      <span
        className="grid place-items-center w-9 h-9 bg-green-primary text-cream border-2 border-ink rounded-sm font-display text-lg leading-none shadow-brutal-xs"
        aria-hidden="true"
      >
        F
      </span>
      <span className="font-display text-xl tracking-tight uppercase text-ink">
        Fabrica
      </span>
    </Link>
  );
}
