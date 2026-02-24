// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/ui/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { BrandBannerDark } from "@/components/BrandBanners";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "ServiPlusUltra | Multiservicios a domicilio en Madrid y Barcelona",
    template: "%s | ServiPlusUltra",
  },
  description:
    "Electricidad, climatización y reparaciones del hogar a domicilio en Madrid y Barcelona. Técnicos cercanos y atención prioritaria en urgencias. +34 655 099 298.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <SiteHeader />

        <main className="py-8">
          <Container>
            <div className="space-y-10">
              {/* Banda de marca global (mismo look que en Climatización) */}
              <BrandBannerDark />

              {/* Contenido de cada página */}
              {children}
            </div>
          </Container>
        </main>

        <footer className="mt-8 border-t border-slate-200 bg-slate-900 py-8 text-sm text-slate-200">
          <Container>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <div className="font-semibold">ServiPlusUltra Solutions S.L.</div>
              <div className="text-slate-400">Servicio a domicilio en Madrid y Barcelona</div>
              <div className="text-slate-400">
                Tel:{" "}
                <a
                  href="tel:+34655099298"
                  className="font-semibold text-orange-300 hover:text-orange-200"
                >
                  +34 655 099 298
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}
