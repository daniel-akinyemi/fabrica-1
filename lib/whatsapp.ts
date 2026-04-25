/**
 * Build a wa.me deep link with a prefilled message.
 * `phone` must be E.164 digits without the leading "+".
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const cleaned = phone.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

export interface RfqDetails {
  supplierName: string;
  designerName: string;
  brand?: string;
  fabric: string;
  quantityMeters: number;
  neededBy?: string;
  useCase?: string;
  notes?: string;
}

export function buildRfqMessage(rfq: RfqDetails): string {
  const lines = [
    `Hello ${rfq.supplierName},`,
    "",
    "I found you on Fabrica.",
    "",
    "I'm looking for:",
    `• Fabric: ${rfq.fabric}`,
    `• Quantity: ${rfq.quantityMeters} meters`,
  ];

  if (rfq.neededBy) lines.push(`• Needed by: ${rfq.neededBy}`);
  if (rfq.useCase) lines.push(`• Use: ${rfq.useCase}`);

  if (rfq.notes && rfq.notes.trim().length > 0) {
    lines.push("", "Notes:", rfq.notes.trim());
  }

  lines.push(
    "",
    `— ${rfq.designerName}${rfq.brand ? ` (${rfq.brand})` : ""}`
  );

  return lines.join("\n");
}

export function buildSupplierGreeting(supplierName: string): string {
  return [
    `Hello ${supplierName},`,
    "",
    "I found you on Fabrica and would like to ask about your fabrics.",
  ].join("\n");
}
