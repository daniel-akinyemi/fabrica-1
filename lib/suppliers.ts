import type { FabricType, LagosArea } from "./fabrics";

export type SwatchPattern = "solid" | "stripes" | "grid" | "dots" | "weave" | "zigzag";

export interface Swatch {
  name: string;
  bg: string;       // tailwind background utility (e.g. "bg-amber")
  fg?: string;      // pattern color utility (e.g. "text-ink")
  pattern?: SwatchPattern;
}

export interface Supplier {
  slug: string;
  name: string;
  tagline: string;
  area: LagosArea;
  market?: string;
  fabrics: FabricType[];
  moqMeters: number;
  priceFromNgn: number; // ₦ / meter
  priceToNgn: number;
  responseTime: string;
  whatsapp: string; // E.164, no "+"
  verified: boolean;
  yearsInBusiness: number;
  description: string;
  highlights: string[];
  swatches: Swatch[];
  accentColor: "green-primary" | "amber" | "clay" | "magenta" | "ink";
}

export const SUPPLIERS: Supplier[] = [
  {
    slug: "mama-tope-textiles",
    name: "Mama Tope Textiles",
    tagline: "Wax prints from the heart of Idumota.",
    area: "Idumota",
    market: "Idumota Market, Line 4 Stall 23",
    fabrics: ["Ankara", "Kampala", "Guinea"],
    moqMeters: 12,
    priceFromNgn: 2200,
    priceToNgn: 4800,
    responseTime: "Replies in ~2 hrs",
    whatsapp: "2348012345001",
    verified: true,
    yearsInBusiness: 14,
    description:
      "Family-run wholesaler stocking 200+ Ankara designs from Vlisco, Hitarget, and ABC Wax. Strong on classic patterns and seasonal drops. Walk-ins welcome on Tuesdays and Fridays.",
    highlights: [
      "200+ wax print SKUs in stock",
      "Half-piece (6yd) MOQ accepted",
      "Bulk discount from 50m+",
    ],
    swatches: [
      { name: "Vlisco Classic", bg: "bg-amber", fg: "text-ink", pattern: "dots" },
      { name: "Hitarget Tropical", bg: "bg-green-primary", fg: "text-cream", pattern: "zigzag" },
      { name: "ABC Floral", bg: "bg-clay", fg: "text-ink", pattern: "stripes" },
    ],
    accentColor: "amber",
  },
  {
    slug: "balogun-base-fabrics",
    name: "Balogun Base Fabrics",
    tagline: "Lace, brocade, and trims since 2003.",
    area: "Balogun",
    market: "Balogun Market, Lane 7",
    fabrics: ["Lace", "Brocade", "Guinea"],
    moqMeters: 8,
    priceFromNgn: 5500,
    priceToNgn: 22000,
    responseTime: "Replies in ~30 min",
    whatsapp: "2348012345002",
    verified: true,
    yearsInBusiness: 21,
    description:
      "Premium lace and Swiss voile importer. Strong relationships with Austrian and Swiss mills. Carries cord lace, French lace, and tulle in 80+ colorways. Custom dyeing available on bulk orders.",
    highlights: [
      "Direct importer — no middleman markup",
      "Custom dyeing from 30m",
      "Bridal & ceremonial specialist",
    ],
    swatches: [
      { name: "Cord Lace Ivory", bg: "bg-bone", fg: "text-ink", pattern: "grid" },
      { name: "French Lace Rose", bg: "bg-magenta", fg: "text-cream", pattern: "dots" },
      { name: "Swiss Voile Sky", bg: "bg-green-soft", fg: "text-ink", pattern: "weave" },
    ],
    accentColor: "magenta",
  },
  {
    slug: "adire-oke-collective",
    name: "Adire Oke Collective",
    tagline: "Hand-dyed Adire from Abeokuta.",
    area: "Yaba",
    fabrics: ["Adire", "Cotton"],
    moqMeters: 5,
    priceFromNgn: 4500,
    priceToNgn: 9500,
    responseTime: "Replies in ~4 hrs",
    whatsapp: "2348012345003",
    verified: true,
    yearsInBusiness: 7,
    description:
      "Cooperative of 12 Adire artisans based in Itoku, Abeokuta with a Lagos showroom in Yaba. Indigo, eko, and modern colorway capabilities. Each piece is hand-stamped or tied — slight variance is part of the craft.",
    highlights: [
      "Hand-dyed, ethical sourcing",
      "Custom motif on 20m+ orders",
      "Showroom by appointment",
    ],
    swatches: [
      { name: "Indigo Eleko", bg: "bg-green-deep", fg: "text-cream", pattern: "zigzag" },
      { name: "Sun Burst", bg: "bg-amber", fg: "text-ink", pattern: "dots" },
      { name: "Modern Slate", bg: "bg-ink", fg: "text-cream", pattern: "grid" },
    ],
    accentColor: "green-primary",
  },
  {
    slug: "mushin-mill-direct",
    name: "Mushin Mill Direct",
    tagline: "Bulk cotton, linen, and basics.",
    area: "Mushin",
    fabrics: ["Cotton", "Linen", "Guinea"],
    moqMeters: 50,
    priceFromNgn: 1800,
    priceToNgn: 6500,
    responseTime: "Replies in ~1 hr",
    whatsapp: "2348012345004",
    verified: true,
    yearsInBusiness: 11,
    description:
      "Direct from a mid-size mill on the Mushin–Isolo axis. Strong on plain weaves, twills, and uniform fabric. Best for production runs above 50m. Sample swatches mailed within Lagos for ₦2,000.",
    highlights: [
      "Production-grade quality control",
      "50m MOQ, breakpoints at 100m & 500m",
      "Cut & roll service available",
    ],
    swatches: [
      { name: "Cotton Bone", bg: "bg-bone", fg: "text-muted", pattern: "weave" },
      { name: "Linen Cream", bg: "bg-cream", fg: "text-muted", pattern: "weave" },
      { name: "Twill Green", bg: "bg-green-primary", fg: "text-cream", pattern: "stripes" },
    ],
    accentColor: "ink",
  },
  {
    slug: "surulere-deadstock-co",
    name: "Surulere Deadstock Co.",
    tagline: "Last-season fabric. Designer prices.",
    area: "Surulere",
    fabrics: ["Deadstock", "Cotton", "Lace", "Linen"],
    moqMeters: 3,
    priceFromNgn: 1200,
    priceToNgn: 5500,
    responseTime: "Replies in ~6 hrs",
    whatsapp: "2348012345005",
    verified: false,
    yearsInBusiness: 3,
    description:
      "We salvage end-of-roll and overstock from Lagos garment factories — small lots, real designer fabrics, deeply discounted. Stock changes weekly. First-come, first-served.",
    highlights: [
      "3m MOQ — perfect for samples",
      "Stock list updated weekly",
      "One-of-one — no reorders",
    ],
    swatches: [
      { name: "Mystery Roll #14", bg: "bg-clay", fg: "text-ink", pattern: "stripes" },
      { name: "Mystery Roll #21", bg: "bg-green-soft", fg: "text-ink", pattern: "dots" },
      { name: "Mystery Roll #08", bg: "bg-magenta", fg: "text-cream", pattern: "grid" },
    ],
    accentColor: "clay",
  },
  {
    slug: "iya-bukky-aso-oke",
    name: "Iya Bukky Aso-Oke",
    tagline: "Hand-woven Aso-oke. Made in Iseyin.",
    area: "Lagos Island",
    market: "Lagos Island Aso-oke Hub",
    fabrics: ["Aso-oke"],
    moqMeters: 6,
    priceFromNgn: 12000,
    priceToNgn: 45000,
    responseTime: "Replies in ~8 hrs",
    whatsapp: "2348012345006",
    verified: true,
    yearsInBusiness: 28,
    description:
      "Three generations of weavers from Iseyin. Specialises in Sanyan, Alaari, and Etu in heritage and modern colorways. Custom commissions from 6 yards (5.5m). Wedding bookings open 8 weeks ahead.",
    highlights: [
      "Custom wedding sets",
      "Heritage Sanyan & Alaari",
      "Master weaver oversight",
    ],
    swatches: [
      { name: "Sanyan", bg: "bg-amber", fg: "text-ink", pattern: "weave" },
      { name: "Alaari Deep", bg: "bg-clay", fg: "text-cream", pattern: "weave" },
      { name: "Etu Indigo", bg: "bg-green-deep", fg: "text-cream", pattern: "weave" },
    ],
    accentColor: "amber",
  },
  {
    slug: "lekki-linen-house",
    name: "Lekki Linen House",
    tagline: "European linen. Lagos pricing.",
    area: "Lekki",
    fabrics: ["Linen", "Cotton"],
    moqMeters: 15,
    priceFromNgn: 7800,
    priceToNgn: 14500,
    responseTime: "Replies in ~3 hrs",
    whatsapp: "2348012345007",
    verified: true,
    yearsInBusiness: 5,
    description:
      "European-mill linen and cotton-linen blends, imported in 50m rolls. 12 colorways always in stock — natural, bone, sand, olive, navy, charcoal, oxblood, tan, ivory, sage, mustard, black.",
    highlights: [
      "Pre-washed, garment-ready",
      "12 in-stock colorways",
      "Showroom on Admiralty Way",
    ],
    swatches: [
      { name: "Natural", bg: "bg-bone", fg: "text-muted", pattern: "weave" },
      { name: "Sage", bg: "bg-green-soft", fg: "text-green-deep", pattern: "weave" },
      { name: "Oxblood", bg: "bg-clay", fg: "text-cream", pattern: "weave" },
    ],
    accentColor: "green-primary",
  },
  {
    slug: "yaba-young-textiles",
    name: "Yaba Young Textiles",
    tagline: "Streetwear-ready cotton & jersey.",
    area: "Yaba",
    fabrics: ["Cotton", "Deadstock"],
    moqMeters: 25,
    priceFromNgn: 2100,
    priceToNgn: 5800,
    responseTime: "Replies in ~5 hrs",
    whatsapp: "2348012345008",
    verified: false,
    yearsInBusiness: 2,
    description:
      "Heavyweight cottons, French terry, and jersey for streetwear and contemporary brands. Perfect for hoodies, tees, and trousers. Working with 6+ emerging Lagos labels.",
    highlights: [
      "300–400 GSM cottons",
      "French terry & jersey in stock",
      "Designer-friendly MOQs",
    ],
    swatches: [
      { name: "French Terry Cream", bg: "bg-cream", fg: "text-muted", pattern: "grid" },
      { name: "Heavy Tee Black", bg: "bg-ink", fg: "text-cream", pattern: "grid" },
      { name: "Jersey Olive", bg: "bg-green-deep", fg: "text-cream", pattern: "grid" },
    ],
    accentColor: "ink",
  },
  {
    slug: "ikeja-import-house",
    name: "Ikeja Import House",
    tagline: "Bridal lace, sequins, embellishment.",
    area: "Ikeja",
    fabrics: ["Lace", "Brocade"],
    moqMeters: 5,
    priceFromNgn: 9500,
    priceToNgn: 38000,
    responseTime: "Replies in ~1 hr",
    whatsapp: "2348012345009",
    verified: true,
    yearsInBusiness: 9,
    description:
      "Sequinned lace, beaded tulle, and stoned net for bridal and ceremonial wear. Sourced from India, Turkey, and France. Showroom at Allen Avenue. Ships nationwide via GIG Logistics.",
    highlights: [
      "Bridal & couture specialist",
      "5m MOQ on most laces",
      "Stoned net in 30+ colors",
    ],
    swatches: [
      { name: "Sequin Champagne", bg: "bg-amber", fg: "text-ink", pattern: "dots" },
      { name: "Beaded Ivory", bg: "bg-bone", fg: "text-muted", pattern: "dots" },
      { name: "Stoned Rose", bg: "bg-magenta", fg: "text-cream", pattern: "dots" },
    ],
    accentColor: "magenta",
  },
  {
    slug: "mainland-mill-co",
    name: "Mainland Mill Co.",
    tagline: "Brocade, damask, and ceremonial weaves.",
    area: "Mushin",
    fabrics: ["Brocade", "Guinea", "Kampala"],
    moqMeters: 20,
    priceFromNgn: 3400,
    priceToNgn: 11000,
    responseTime: "Replies in ~2 hrs",
    whatsapp: "2348012345010",
    verified: true,
    yearsInBusiness: 17,
    description:
      "Long-standing brocade and damask wholesaler with stock from Austria, China, and the UAE. Strong on traditional ceremonial palettes. Cash and bank transfer accepted; no card payments at the warehouse.",
    highlights: [
      "Traditional ceremonial colorways",
      "20m starter MOQ",
      "Volume pricing from 100m",
    ],
    swatches: [
      { name: "Royal Damask", bg: "bg-green-deep", fg: "text-amber", pattern: "zigzag" },
      { name: "Wine Brocade", bg: "bg-clay", fg: "text-amber", pattern: "zigzag" },
      { name: "Cream Guinea", bg: "bg-cream", fg: "text-green-deep", pattern: "weave" },
    ],
    accentColor: "green-primary",
  },
];

export function getSupplier(slug: string): Supplier | undefined {
  return SUPPLIERS.find((s) => s.slug === slug);
}

export function getAllSupplierSlugs(): string[] {
  return SUPPLIERS.map((s) => s.slug);
}

/**
 * Static maps so Tailwind v4's class scanner picks every utility up.
 * Never interpolate Tailwind class names dynamically — the scanner won't see them.
 */
export const accentBgClass: Record<Supplier["accentColor"], string> = {
  "green-primary": "bg-green-primary",
  amber: "bg-amber",
  clay: "bg-clay",
  magenta: "bg-magenta",
  ink: "bg-ink",
};

export const accentRingClass: Record<Supplier["accentColor"], string> = {
  "green-primary": "shadow-brutal-green",
  amber: "shadow-brutal-amber",
  clay: "shadow-brutal-clay",
  magenta: "shadow-brutal",
  ink: "shadow-brutal",
};
