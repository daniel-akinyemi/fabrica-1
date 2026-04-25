import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-cream/80">
            A Lagos-first marketplace pairing indie fashion designers with
            verified textile suppliers. Browse, message, source — all on
            WhatsApp.
          </p>
        </div>

        <div>
          <h3 className="font-display uppercase text-xs tracking-wider text-amber mb-3">
            Designers
          </h3>
          <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
            <li>
              <Link href="/suppliers" className="hover:text-amber">
                Browse suppliers
              </Link>
            </li>
            <li>
              <Link href="/#how-it-works" className="hover:text-amber">
                How it works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase text-xs tracking-wider text-amber mb-3">
            Suppliers
          </h3>
          <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
            <li>
              <Link href="/#for-suppliers" className="hover:text-amber">
                List your fabrics
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-cream/15 brutal-strip">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px]">
          <span>© {new Date().getFullYear()} Fabrica · Made in Lagos.</span>
          <span>v0.1 — MVP</span>
        </div>
      </div>
    </footer>
  );
}
