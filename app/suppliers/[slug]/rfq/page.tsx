import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSupplier, getAllSupplierSlugs } from "@/lib/suppliers";
import { Tag } from "@/components/ui/Tag";
import { RfqForm } from "@/components/suppliers/RfqForm";

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
    title: `Send RFQ — ${supplier.name}`,
    description: `Request a quote from ${supplier.name} on WhatsApp. Specify your fabric, quantity, and deadline in seconds.`,
  };
}

export default async function RfqPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Link
        href={`/suppliers/${supplier.slug}`}
        className="inline-block font-mono text-[11px] uppercase tracking-wider underline decoration-2 underline-offset-4"
      >
        ← Back to {supplier.name}
      </Link>

      <header className="mt-6">
        <Tag tone="ink" className="mb-3">
          New RFQ
        </Tag>
        <h1 className="font-display uppercase text-3xl sm:text-4xl tracking-tight leading-[0.95]">
          Request a quote from
          <br />
          <span className="text-green-deep">{supplier.name}</span>
        </h1>
        <p className="mt-3 text-muted max-w-xl">
          Fill in the details below. We&apos;ll open WhatsApp with a clear,
          pre-formatted message — review it before sending.
        </p>
      </header>

      <div className="mt-10">
        <RfqForm
          supplierName={supplier.name}
          supplierWhatsapp={supplier.whatsapp}
          fabrics={supplier.fabrics}
          minMoq={supplier.moqMeters}
        />
      </div>
    </div>
  );
}
