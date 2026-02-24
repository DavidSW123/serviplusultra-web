// app/barcelona/page.tsx
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export const metadata: Metadata = {
  title: "Multiservicios a domicilio en Barcelona | Electricidad, climatización y reparaciones",
  description:
    "Servicios a domicilio en Barcelona: electricidad, climatización y reparaciones/manitas. Atención prioritaria en urgencias (hasta 4h si hay técnico disponible). +34 655 099 298.",
};

export default function BarcelonaPage() {
  return (
    <div className="space-y-12">
      <Section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Multiservicios a domicilio en Barcelona: electricidad, climatización y reparaciones
        </h1>

        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
          En Barcelona el confort manda: si el aire no enfría, si algo eléctrico falla o si tienes una reparación
          que te está comiendo tiempo, vamos a domicilio y lo dejamos funcionando (y explicado) para que no se repita.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar (Barcelona)
          </ButtonLink>
          {WHATSAPP_ENABLED && (
            <ButtonLink href="https://wa.me/34655099298" external>
              WhatsApp (fotos/vídeo)
            </ButtonLink>
          )}
          <ButtonLink href="/contacto">Pedir presupuesto</ButtonLink>
        </div>
      </Section>

      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Qué hacemos en Barcelona
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          En Barcelona solemos ver dos cosas: climatización que necesita mantenimiento antes de temporada fuerte,
          y pequeñas incidencias del día a día que conviene arreglar bien. Trabajamos a domicilio con foco en
          eficiencia, seguridad y soluciones prácticas.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Climatización en Barcelona</CardTitle>
            <CardText>
              Mantenimiento, puesta a punto, instalación/sustitución y fallos típicos (no enfría, gotea, huele mal).
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/climatizacion">Ver climatización</ButtonLink>
            </div>
          </Card>

          <Card>
            <CardTitle>Electricidad en Barcelona</CardTitle>
            <CardText>
              Averías, mecanismos, cuadros y mejoras de seguridad. Revisamos y te explicamos el “por qué”.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/electricidad">Ver electricidad</ButtonLink>
            </div>
          </Card>

          <Card>
            <CardTitle>Reparaciones / Manitas</CardTitle>
            <CardText>
              Montaje, ajustes, remates y reparaciones del hogar. Ideal para quitarte pendientes en una sola visita.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/reparaciones-manitas">Ver reparaciones</ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Prioridad en urgencias (Barcelona)
        </h2>
        <p className="text-sm text-slate-100 sm:text-base">
          Cuando hay urgencia real, damos prioridad. En Barcelona, siempre que haya técnico disponible, buscamos
          atender en menos de 4 horas. Si no es urgente, te damos un horario cómodo y un plazo realista.
        </p>
      </Section>

      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Zonas habituales (y alrededores)
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Nos movemos por Barcelona ciudad y, según el tipo de trabajo y agenda, por municipios cercanos. Dinos tu
          zona y te confirmamos disponibilidad.
        </p>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
          <li>• Barcelona ciudad (según disponibilidad).</li>
          <li>• Alrededores: consúltanos y te decimos si llegamos.</li>
        </ul>
      </Section>

      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Preguntas frecuentes</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>¿Os puedo mandar fotos antes?</CardTitle>
            <CardText>
              Sí, y ayuda mucho. Con una foto/vídeo y tu zona podemos orientarte mejor y llevar material adecuado.
            </CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>¿Atendéis vivienda y negocio?</CardTitle>
            <CardText>
              Sí. Viviendas, comercios y oficinas. Nos adaptamos al caso y te explicamos la solución más razonable.
            </CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>¿Hacéis mantenimiento de aire?</CardTitle>
            <CardText>
              Sí. Recomendamos revisión antes de verano/invierno para mejorar rendimiento, reducir ruido y evitar fallos.
            </CardText>
          </Card>
        </div>
      </Section>

      <Section className="rounded-2xl border border-dashed border-brand-600/40 bg-brand-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Necesitas un técnico en Barcelona?
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Llámanos o envíanos WhatsApp con tu zona y una foto: te diremos rápido el mejor plan para solucionarlo.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar ahora
          </ButtonLink>
          {WHATSAPP_ENABLED && (
            <ButtonLink href="https://wa.me/34655099298" external>
              Enviar WhatsApp
            </ButtonLink>
          )}
          <ButtonLink href="/contacto">Ir a contacto</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
