import type { Swatch as SwatchData } from "@/lib/suppliers";
import { cn } from "@/lib/cn";

const patternClass: Record<NonNullable<SwatchData["pattern"]>, string> = {
  solid: "",
  stripes: "swatch-stripes",
  grid: "swatch-grid",
  dots: "swatch-dots",
  weave: "swatch-weave",
  zigzag: "swatch-zigzag",
};

export function Swatch({
  swatch,
  className,
  showLabel = true,
}: {
  swatch: SwatchData;
  className?: string;
  showLabel?: boolean;
}) {
  const pattern = swatch.pattern ?? "solid";
  return (
    <div
      className={cn(
        "relative aspect-square border-2 border-ink rounded-sm overflow-hidden",
        swatch.bg,
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          swatch.fg ?? "text-ink",
          patternClass[pattern]
        )}
        aria-hidden="true"
      />
      {showLabel && (
        <div className="absolute inset-x-0 bottom-0 bg-ink/90 text-cream font-mono text-[10px] uppercase tracking-wider px-2 py-1 truncate">
          {swatch.name}
        </div>
      )}
    </div>
  );
}
