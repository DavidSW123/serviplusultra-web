// components/SiteHeader.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/electricidad", label: "Electricidad" },
  { href: "/climatizacion", label: "Climatización" },
  { href: "/reparaciones-manitas", label: "Reparaciones" },
  { href: "/madrid", label: "Madrid" },
  { href: "/barcelona", label: "Barcelona" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Marca */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-sky-800" aria-hidden="true" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">ServiPlusUltra</div>
              <div className="text-xs text-slate-500">Madrid & Barcelona</div>
            </div>
          </Link>

          {/* NAV escritorio */}
          <nav className="hidden items-center gap-5 text-sm md:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-sky-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Tel + CTA (escritorio) */}
          <div className="hidden items-end text-right md:flex md:flex-col">
            <div className="text-xs font-semibold text-sky-800">+34 655 099 298</div>
            <a
              href="tel:+34655099298"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Llamar ahora
            </a>
          </div>

          {/* Menú móvil (sin JS) */}
          <details className="md:hidden">
            <summary className="cursor-pointer select-none rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800">
              Menú
            </summary>

            <div className="mt-3 w-[min(92vw,22rem)] rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <nav className="grid max-h-[60vh] gap-1 overflow-y-auto text-sm" aria-label="Navegación móvil">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-slate-700 hover:bg-slate-50 hover:text-sky-800"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-3 border-t border-slate-200 pt-3">
                <div className="text-xs font-semibold text-sky-800">+34 655 099 298</div>
                <a
                  href="tel:+34655099298"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
