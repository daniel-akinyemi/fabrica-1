import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-cream border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          <Link
            href="/suppliers"
            className="px-3 py-2 hover:bg-bone rounded-sm"
          >
            Suppliers
          </Link>
          <Link
            href="/#how-it-works"
            className="px-3 py-2 hover:bg-bone rounded-sm"
          >
            How it works
          </Link>
          <Link
            href="/#for-suppliers"
            className="px-3 py-2 hover:bg-bone rounded-sm"
          >
            For suppliers
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/suppliers" size="sm" variant="primary">
            Browse
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
