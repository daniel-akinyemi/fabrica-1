"use client";

import { useMemo, useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { buildRfqMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import type { FabricType } from "@/lib/fabrics";

export function RfqForm({
  supplierName,
  supplierWhatsapp,
  fabrics,
  minMoq,
}: {
  supplierName: string;
  supplierWhatsapp: string;
  fabrics: readonly FabricType[];
  minMoq: number;
}) {
  const [designerName, setDesignerName] = useState("");
  const [brand, setBrand] = useState("");
  const [fabric, setFabric] = useState<string>(fabrics[0] ?? "");
  const [quantity, setQuantity] = useState<string>(String(Math.max(minMoq, 10)));
  const [neededBy, setNeededBy] = useState("");
  const [useCase, setUseCase] = useState("");
  const [notes, setNotes] = useState("");

  const qtyNum = Number(quantity) || 0;
  const qtyBelowMoq = qtyNum > 0 && qtyNum < minMoq;

  const message = useMemo(
    () =>
      buildRfqMessage({
        supplierName,
        designerName: designerName || "[Your name]",
        brand: brand || undefined,
        fabric,
        quantityMeters: qtyNum,
        neededBy: neededBy || undefined,
        useCase: useCase || undefined,
        notes: notes || undefined,
      }),
    [supplierName, designerName, brand, fabric, qtyNum, neededBy, useCase, notes]
  );

  const formValid =
    designerName.trim().length > 1 && fabric.length > 0 && qtyNum > 0;

  const link = formValid
    ? buildWhatsAppLink(supplierWhatsapp, message)
    : "#";

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_360px] items-start">
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" htmlFor="name" required>
            <Input
              id="name"
              value={designerName}
              onChange={(e) => setDesignerName(e.target.value)}
              placeholder="e.g. Tola Adebayo"
              required
            />
          </Field>
          <Field label="Brand (optional)" htmlFor="brand">
            <Input
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g. Studio Adebayo"
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Fabric" htmlFor="fabric" required>
            <Select
              id="fabric"
              value={fabric}
              onChange={(e) => setFabric(e.target.value)}
              required
            >
              {fabrics.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </Select>
          </Field>
          <Field
            label="Quantity (meters)"
            htmlFor="quantity"
            hint={`This supplier's MOQ is ${minMoq}m`}
            required
          >
            <Input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Needed by" htmlFor="needed-by">
            <Input
              id="needed-by"
              type="date"
              value={neededBy}
              onChange={(e) => setNeededBy(e.target.value)}
            />
          </Field>
          <Field label="Use case" htmlFor="use-case">
            <Input
              id="use-case"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              placeholder="e.g. SS26 capsule, 80 dresses"
            />
          </Field>
        </div>

        <Field
          label="Notes for the supplier"
          htmlFor="notes"
          hint="Color, weight, certifications, or anything else."
        >
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Looking for soft hand-feel, around 180 GSM, cream/sand colorway."
          />
        </Field>

        {qtyBelowMoq && (
          <div className="brutal-card p-4 bg-amber border-ink">
            <p className="font-mono text-[11px] uppercase tracking-wider">
              Heads up
            </p>
            <p className="mt-1 text-sm">
              Your quantity is below this supplier&apos;s MOQ ({minMoq}m). They
              may decline or quote a higher per-meter price. Consider asking
              about deadstock or sample lengths in the notes.
            </p>
          </div>
        )}
      </form>

      <aside className="md:sticky md:top-20 space-y-4">
        <Card className="p-5 bg-cream">
          <div className="flex items-center justify-between">
            <Tag tone="green">Live preview</Tag>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              WhatsApp
            </span>
          </div>
          <pre className="mt-3 whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-ink/90 max-h-80 overflow-y-auto">
            {message}
          </pre>
        </Card>

        {formValid ? (
          <ButtonLink
            href={link}
            external
            variant="whatsapp"
            size="lg"
            className="w-full"
          >
            Open WhatsApp →
          </ButtonLink>
        ) : (
          <Button variant="whatsapp" size="lg" className="w-full" disabled>
            Fill the required fields
          </Button>
        )}

        <p className="font-mono text-[10px] uppercase tracking-wider text-muted text-center">
          You&apos;ll review the message in WhatsApp before sending.
        </p>
      </aside>
    </div>
  );
}
