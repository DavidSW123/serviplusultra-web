// app/climatizacion/page.tsx
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export default function ClimatizacionPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <Section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Climatización y aire acondicionado en Madrid y Barcelona, sin líos
        </h1>

        <p className="max-w-2xl text-base text-slate-700 sm:text-lg">
          Instalación, mantenimiento y solución de problemas de aire acondicionado y bombas de calor.
          Vamos a domicilio en Madrid y Barcelona y te ayudamos a conseguir confort sin disparar el consumo.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar para climatización
          </ButtonLink>

          {WHATSAPP_ENABLED && (
            <ButtonLink href="https://wa.me/34655099298" external>
              WhatsApp (fotos/vídeo)
            </ButtonLink>
          )}

          <ButtonLink href="/contacto">Pedir presupuesto</ButtonLink>
        </div>
      </Section>

      {/* SERVICIOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Qué hacemos en climatización?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Trabajamos con un enfoque práctico: primero entendemos el espacio, el uso y el problema real,
          y luego proponemos una solución que tenga sentido (técnicamente y en consumo).
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Mantenimiento y puesta a punto</CardTitle>
            <CardText>
              Limpieza, revisión y ajustes para que el equipo rinda mejor, haga menos ruido y consuma menos.
              Ideal antes de verano o invierno.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Instalación y sustitución</CardTitle>
            <CardText>
              Si toca cambiar el equipo o instalar uno nuevo, te orientamos en potencia y uso para no
              sobredimensionar ni quedarte corto.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Fallos y averías</CardTitle>
            <CardText>
              No enfría, no calienta, gotea, hace hielo, huele mal o salta el diferencial: revisamos,
              diagnosticamos y te proponemos el arreglo.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* TIEMPOS */}
      <Section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Atención prioritaria cuando hace falta</h2>
        <p className="text-sm text-slate-100 sm:text-base">
          Cuando un equipo falla en pleno calor o en días fríos, entendemos la urgencia. Damos prioridad a
          estos casos con tiempos realistas: en Barcelona, siempre que haya técnico disponible, buscamos
          atender en menos de 4 horas. En Madrid y en el resto de casos, te damos una estimación clara y
          agendamos lo antes posible.
        </p>
      </Section>

      {/* CONSEJOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Señales de que tu aire necesita revisión
        </h2>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
          <li>• Enfría/calienta poco aunque lo pongas al máximo.</li>
          <li>• Hace más ruido de lo normal o vibra.</li>
          <li>• Gotea o deja humedad donde no debe.</li>
          <li>• Sale olor desagradable al encenderlo.</li>
          <li>• Te sube la factura sin haber cambiado hábitos.</li>
        </ul>
      </Section>

      {/* FAQ */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Preguntas frecuentes</h2>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>¿Hacéis aire acondicionado y bomba de calor?</CardTitle>
            <CardText>
              Sí. Trabajamos con sistemas de climatización para frío y calor y te orientamos según el uso real del espacio.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>¿Cada cuánto conviene hacer mantenimiento?</CardTitle>
            <CardText>
              Depende del uso, pero suele ser buena idea revisar antes de la temporada fuerte (verano/invierno) para evitar fallos cuando más lo necesitas.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>¿Trabajáis a domicilio en Madrid y Barcelona?</CardTitle>
            <CardText>
              Sí, trabajamos a domicilio en ambas ciudades y alrededores. Si nos dices tu zona por teléfono, te confirmamos disponibilidad y tiempo estimado.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Necesitas climatización en Madrid o Barcelona?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Llámanos y cuéntanos qué equipo tienes y qué notas. Si puedes, prepara marca/modelo y una foto del equipo para ayudarte mejor.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar ahora
          </ButtonLink>

          {WHATSAPP_ENABLED && (
            <ButtonLink href="https://wa.me/34655099298" external>
              WhatsApp
            </ButtonLink>
          )}

          <ButtonLink href="/contacto">Ir a contacto</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
