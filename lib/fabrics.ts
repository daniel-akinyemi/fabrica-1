export const FABRIC_TYPES = [
  "Ankara",
  "Adire",
  "Aso-oke",
  "Lace",
  "Brocade",
  "Kampala",
  "Guinea",
  "Linen",
  "Cotton",
  "Deadstock",
] as const;

export type FabricType = (typeof FABRIC_TYPES)[number];

export const LAGOS_AREAS = [
  "Idumota",
  "Balogun",
  "Mushin",
  "Surulere",
  "Lagos Island",
  "Yaba",
  "Lekki",
  "Ikeja",
] as const;

export type LagosArea = (typeof LAGOS_AREAS)[number];

export const MOQ_BANDS = [
  { id: "low", label: "Under 20m", min: 0, max: 19 },
  { id: "mid", label: "20–50m", min: 20, max: 50 },
  { id: "high", label: "50–200m", min: 50, max: 200 },
  { id: "bulk", label: "200m+", min: 200, max: Infinity },
] as const;
