import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "green" | "amber" | "clay" | "magenta" | "ink";

const tones: Record<Tone, string> = {
  default: "bg-paper text-ink border-ink",
  green: "bg-green-soft text-green-deep border-green-deep",
  amber: "bg-amber text-ink border-ink",
  clay: "bg-clay text-cream border-ink",
  magenta: "bg-magenta text-cream border-ink",
  ink: "bg-ink text-cream border-ink",
};

export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider rounded-xs",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
