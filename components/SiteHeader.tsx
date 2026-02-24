// components/SiteHeader.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/MobileMenu";

const navDesktop = [
  { href: "/", label: "Inicio" },
  { href: "/electricidad", label: "Electricidad" },
  { href: "/climatizacion", label: "Climatización" },
  { href: "/reparaciones-manitas", label: "Reparaciones" },
  { href: "/madrid", label: "Madrid" },
  { href: "/barcelona", label: "Barcelona" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/contacto", label: "Contacto" },
];

const navMobile = [
  { href: "/", label: "Inicio" },
  { href: "/madrid", label: "Madrid" },
  { href: "/barcelona", label: "Barcelona" },
  { href: "/urgencias", label: "Urgencias" },
  { href: "/contacto", label: "Contacto" },
];

const servicesMobile = [
  { href: "/electricidad", label: "Electricidad" },
  { href: "/climatizacion", label: "Climatización" },
  { href: "/reparaciones-manitas", label: "Reparaciones" },
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
            {navDesktop.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700 hover:text-sky-800">
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

          {/* Menú móvil (con cierre fuera + submenú Servicios) */}
          <MobileMenu nav={navMobile} services={servicesMobile} />
        </div>
      </Container>
    </header>
  );
}
