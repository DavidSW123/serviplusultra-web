// app/urgencias/page.tsx
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export const metadata: Metadata = {
  title:
    "Urgencias en Madrid y Barcelona | Electricidad, climatización y reparaciones | ServiPlusUltra",
  description:
    "Urgencias a domicilio en Madrid y Barcelona: electricidad, climatización y reparaciones. Atención prioritaria con tiempos realistas. Tel: +34 655 099 298.",
  alternates: { canonical: "/urgencias" },
};

export default function UrgenciasPage() {
  const waText = encodeURIComponent(
    "Hola, tengo una urgencia. Ciudad (Madrid/Barcelona): ____. Zona aproximada: ____. Problema: ____. ¿Podéis darme un tiempo estimado?"
  );

  return (
    <div className="space-y-12">
      {/* HERO */}
      <Section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Urgencias a domicilio en Madrid y Barcelona, con tiempos realistas
        </h1>

        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
          Cuando algo falla, lo peor no es la avería: es la duda de “¿cuándo vienen?”.
          Aquí jugamos limpio: te decimos un tiempo estimado, te explicamos el plan y
          priorizamos lo urgente sin vender promesas imposibles.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar ahora
          </ButtonLink>

          <ButtonLink href="/contacto">Pedir presupuesto</ButtonLink>

          {WHATSAPP_ENABLED && (
            <ButtonLink href={`https://wa.me/34655099298?text=${waText}`} external>
              Enviar WhatsApp (con datos)
            </ButtonLink>
          )}
        </div>
      </Section>

      {/* CIUDADES (enlaces útiles) */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Es en Madrid o en Barcelona?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Si estás comparando opciones, en estas páginas verás el enfoque por ciudad y
          los servicios más habituales en cada zona.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-none">
            <CardTitle>Urgencias en Madrid</CardTitle>
            <CardText>
              Te confirmamos disponibilidad y te damos un horario realista según el tipo
              de urgencia y la carga del día.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/madrid">Ver servicios en Madrid</ButtonLink>
            </div>
          </Card>

          <Card className="shadow-none">
            <CardTitle>Urgencias en Barcelona</CardTitle>
            <CardText>
              Cuando hay técnico disponible, buscamos atender urgencias en menos de 4 horas.
              Si no, agendamos rápido con hora clara.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/barcelona">Ver servicios en Barcelona</ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      {/* QUÉ ES URGENCIA */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Qué consideramos una urgencia?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Si tienes dudas, llámanos y te orientamos en 1 minuto. Estos son casos típicos
          donde conviene actuar rápido.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Electricidad</CardTitle>
            <CardText>
              Saltan diferenciales, olor a quemado, chispazos, zonas sin luz, cuadro antiguo
              que da problemas o enchufes que se calientan.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Climatización</CardTitle>
            <CardText>
              Aire que no enfría/calienta en días críticos, equipo que gotea, hace hielo,
              se apaga solo o repite el mismo fallo.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Reparaciones</CardTitle>
            <CardText>
              Fugas, cierres que no funcionan, persianas atascadas o problemas que impiden
              usar una estancia o pueden empeorar si se dejan.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* COMPROMISO */}
      <Section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Nuestro compromiso (sin vender humo)</h2>

        <p className="max-w-3xl text-sm text-slate-100 sm:text-base">
          Priorizamos urgencias y te damos una estimación clara. En Barcelona, siempre que haya
          técnico disponible, buscamos atender en menos de 4 horas. En Madrid y en el resto de
          casos, agendamos lo antes posible con un horario realista.
        </p>

        <ul className="space-y-1 text-sm text-slate-200">
          <li>• Te decimos el tiempo estimado desde la primera llamada.</li>
          <li>• Si se complica, te avisamos; no desaparecemos.</li>
          <li>• Preferimos resolver bien a la primera que correr y volver dos veces.</li>
        </ul>
      </Section>

      {/* CHECKLIST */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Para ir más rápido, dinos esto
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Si puedes, envíanos fotos o un vídeo corto. Con eso salimos con la idea clara y con
          el material adecuado para acertar a la primera.
        </p>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>Ubicación</CardTitle>
            <CardText>Ciudad (Madrid o Barcelona) y zona aproximada.</CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>Síntoma</CardTitle>
            <CardText>Qué pasa exactamente y desde cuándo.</CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>Señales importantes</CardTitle>
            <CardText>
              Si salta el diferencial/magneto, si hay olor a quemado o si hay agua cerca.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* SI NO ES URGENTE */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Si no es urgente, mejor: lo agendamos bien
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Muchas incidencias no requieren “correr”, pero sí requieren hacerlo con cabeza.
          Aquí tienes las páginas de servicio para ver exactamente qué cubrimos.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/electricidad">Electricidad</ButtonLink>
          <ButtonLink href="/climatizacion">Climatización</ButtonLink>
          <ButtonLink href="/reparaciones-manitas">Reparaciones y manitas</ButtonLink>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="space-y-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Es urgente? Lo vemos contigo
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Llámanos al +34 655 099 298 y te diremos el siguiente paso. Si no es urgente, también:
          te damos una estimación honesta y lo dejamos agendado.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar ahora
          </ButtonLink>

          <ButtonLink href="/contacto">Ir a contacto</ButtonLink>

          {WHATSAPP_ENABLED && (
            <ButtonLink href={`https://wa.me/34655099298?text=${waText}`} external>
              WhatsApp
            </ButtonLink>
          )}
        </div>
      </Section>
    </div>
  );
}
