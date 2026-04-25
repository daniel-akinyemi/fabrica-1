import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Swatch } from "@/components/ui/Swatch";
import { type Supplier, accentBgClass } from "@/lib/suppliers";

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  return (
    <Link href={`/suppliers/${supplier.slug}`} className="block group">
      <Card hover className="overflow-hidden h-full flex flex-col">
        <div
          className={`relative grid grid-cols-3 border-b-2 border-ink h-32 ${accentBgClass[supplier.accentColor]}`}
        >
          {supplier.swatches.map((sw, i) => (
            <Swatch
              key={i}
              swatch={sw}
              showLabel={false}
              className="border-0 border-r-2 last:border-r-0 rounded-none aspect-auto"
            />
          ))}
          {supplier.verified && (
            <span className="absolute top-2 right-2">
              <Tag tone="green">✓ Verified</Tag>
            </span>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {supplier.area}
              {supplier.market ? ` · ${supplier.market.split(",")[0]}` : ""}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-green-deep">
              ● {supplier.responseTime}
            </span>
          </div>

          <h3 className="mt-2 font-display uppercase text-lg leading-tight group-hover:text-green-deep">
            {supplier.name}
          </h3>
          <p className="mt-1 text-sm text-muted line-clamp-2">
            {supplier.tagline}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {supplier.fabrics.slice(0, 4).map((f) => (
              <Tag key={f}>{f}</Tag>
            ))}
            {supplier.fabrics.length > 4 && (
              <Tag tone="ink">+{supplier.fabrics.length - 4}</Tag>
            )}
          </div>

          <div className="mt-auto pt-4 border-t-2 border-ink flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider">
              MOQ <strong>{supplier.moqMeters}m</strong>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider">
              From{" "}
              <strong>₦{supplier.priceFromNgn.toLocaleString()}</strong>
              <span className="text-muted">/m</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
