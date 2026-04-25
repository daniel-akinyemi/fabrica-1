import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SUPPLIERS,
  getSupplier,
  getAllSupplierSlugs,
  accentBgClass,
} from "@/lib/suppliers";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Swatch } from "@/components/ui/Swatch";
import { ButtonLink } from "@/components/ui/Button";
import { buildWhatsAppLink, buildSupplierGreeting } from "@/lib/whatsapp";

export function generateStaticParams() {
  return getAllSupplierSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) return { title: "Supplier not found" };
  return {
    title: `${supplier.name} — ${supplier.area}`,
    description: supplier.description,
  };
}

export default async function SupplierProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) notFound();

  const directLink = buildWhatsAppLink(
    supplier.whatsapp,
    buildSupplierGreeting(supplier.name)
  );

  const related = SUPPLIERS.filter(
    (s) =>
      s.slug !== supplier.slug &&
      s.fabrics.some((f) => supplier.fabrics.includes(f))
  ).slice(0, 3);

  return (
    <div>
      {/* — Hero band — */}
      <section
        className={`relative border-b-2 border-ink ${accentBgClass[supplier.accentColor]}`}
      >
        <div className="absolute inset-0 swatch-zigzag text-ink/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <Link
            href="/suppliers"
            className="inline-block font-mono text-[11px] uppercase tracking-wider underline decoration-2 underline-offset-4"
          >
            ← All suppliers
          </Link>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {supplier.verified && <Tag tone="green">✓ Verified</Tag>}
                <Tag tone="ink">{supplier.area}</Tag>
                <Tag>{supplier.yearsInBusiness} yrs in business</Tag>
              </div>
              <h1 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
                {supplier.name}
              </h1>
              <p className="mt-3 text-lg max-w-xl">{supplier.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* — Main content — */}
        <div className="space-y-10">
          <section>
            <h2 className="font-display uppercase text-xl mb-4">
              About this supplier
            </h2>
            <p className="text-base leading-relaxed text-ink/85 max-w-2xl">
              {supplier.description}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {supplier.highlights.map((h) => (
                <li
                  key={h}
                  className="brutal-card p-4 bg-cream"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-green-deep">
                    ●
                  </span>
                  <p className="mt-1 text-sm font-medium leading-snug">{h}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display uppercase text-xl mb-4">
              Stocked fabrics
            </h2>
            <div className="flex flex-wrap gap-2">
              {supplier.fabrics.map((f) => (
                <Tag key={f} tone="ink">
                  {f}
                </Tag>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display uppercase text-xl mb-4">
              Sample swatches
            </h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
              {supplier.swatches.map((sw, i) => (
                <Swatch key={i} swatch={sw} />
              ))}
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              Real swatch books available on request — message to arrange.
            </p>
          </section>

          {related.length > 0 && (
            <section>
              <h2 className="font-display uppercase text-xl mb-4">
                Similar suppliers
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/suppliers/${r.slug}`}
                    className="brutal-card brutal-card-hover p-4 bg-paper block"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {r.area}
                    </p>
                    <p className="mt-1 font-display uppercase text-base leading-tight">
                      {r.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">{r.tagline}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* — Sticky CTA card — */}
        <aside className="lg:sticky lg:top-20 self-start">
          <Card className="p-6 bg-paper">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Quick facts
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <Fact label="MOQ" value={`${supplier.moqMeters}m`} />
              <Fact label="Response" value={supplier.responseTime} />
              <Fact
                label="From"
                value={`₦${supplier.priceFromNgn.toLocaleString()}/m`}
              />
              <Fact
                label="Up to"
                value={`₦${supplier.priceToNgn.toLocaleString()}/m`}
              />
              {supplier.market && (
                <div className="col-span-2">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Location
                  </dt>
                  <dd className="font-medium text-sm mt-0.5">
                    {supplier.market}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-6 space-y-3">
              <ButtonLink
                href={`/suppliers/${supplier.slug}/rfq`}
                size="lg"
                className="w-full"
              >
                Send a structured RFQ →
              </ButtonLink>
              <ButtonLink
                href={directLink}
                external
                variant="whatsapp"
                size="lg"
                className="w-full"
              >
                Chat on WhatsApp
              </ButtonLink>
            </div>

            <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted text-center">
              Indicative prices · confirm with supplier
            </p>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="font-medium text-sm mt-0.5">{value}</dd>
    </div>
  );
}
