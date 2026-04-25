"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition } from "react";
import { FABRIC_TYPES, LAGOS_AREAS, MOQ_BANDS } from "@/lib/fabrics";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

export function DirectoryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const activeFabric = params.get("fabric") ?? "";
  const activeArea = params.get("area") ?? "";
  const activeMoq = params.get("moq") ?? "";
  const activeVerified = params.get("verified") === "1";

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params.toString());
    if (value === null || value === "") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    const qs = next.toString();
    startTransition(() => {
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    });
  };

  const clearAll = () => {
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  };

  const hasFilters =
    activeFabric || activeArea || activeMoq || activeVerified;

  return (
    <aside
      className={cn(
        "sticky top-20 self-start space-y-6",
        isPending && "opacity-70"
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-display uppercase text-lg">Filters</h2>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="font-mono text-[11px] uppercase tracking-wider underline decoration-2 underline-offset-4 hover:text-clay"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterGroup label="Fabric">
        <ChipRow>
          <Chip
            active={activeFabric === ""}
            onClick={() => update("fabric", null)}
          >
            All
          </Chip>
          {FABRIC_TYPES.map((f) => (
            <Chip
              key={f}
              active={activeFabric === f}
              onClick={() => update("fabric", f)}
            >
              {f}
            </Chip>
          ))}
        </ChipRow>
      </FilterGroup>

      <FilterGroup label="Lagos area">
        <ChipRow>
          <Chip
            active={activeArea === ""}
            onClick={() => update("area", null)}
          >
            All
          </Chip>
          {LAGOS_AREAS.map((a) => (
            <Chip
              key={a}
              active={activeArea === a}
              onClick={() => update("area", a)}
            >
              {a}
            </Chip>
          ))}
        </ChipRow>
      </FilterGroup>

      <FilterGroup label="MOQ">
        <ChipRow>
          <Chip
            active={activeMoq === ""}
            onClick={() => update("moq", null)}
          >
            Any
          </Chip>
          {MOQ_BANDS.map((b) => (
            <Chip
              key={b.id}
              active={activeMoq === b.id}
              onClick={() => update("moq", b.id)}
            >
              {b.label}
            </Chip>
          ))}
        </ChipRow>
      </FilterGroup>

      <FilterGroup label="Trust">
        <ChipRow>
          <Chip
            active={!activeVerified}
            onClick={() => update("verified", null)}
          >
            All suppliers
          </Chip>
          <Chip
            active={activeVerified}
            onClick={() => update("verified", "1")}
          >
            ✓ Verified only
          </Chip>
        </ChipRow>
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

function ChipRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-1.5">{children}</div>;
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "border-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider rounded-xs transition-colors cursor-pointer",
        active
          ? "bg-ink text-cream border-ink"
          : "bg-paper text-ink border-ink hover:bg-bone"
      )}
    >
      {children}
    </button>
  );
}

