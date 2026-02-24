// app/madrid/page.tsx
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export const metadata: Metadata = {
  title: "Multiservicios a domicilio en Madrid | Electricidad, climatización y reparaciones",
  description:
    "Servicios a domicilio en Madrid: electricidad, climatización y reparaciones/manitas. Te damos tiempos reales y presupuesto claro. Llámanos al +34 655 099 298.",
};

export default function MadridPage() {
  return (
    <div className="space-y-12">
      <Section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Multiservicios a domicilio en Madrid: electricidad, climatización y reparaciones
        </h1>

        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
          Si en Madrid algo falla, incomoda o directamente te corta el ritmo (un enchufe que “hace cosas raras”,
          un aire que no rinde o una puerta que no cierra), vamos a tu casa o negocio y lo dejamos resuelto
          con orden y explicaciones claras.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar (Madrid)
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
          Qué hacemos en Madrid
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Madrid tiene de todo: pisos antiguos con cuadros para actualizar, locales con necesidades de iluminación,
          y casas donde siempre aparece el “ya que estás…”. Nosotros vamos a domicilio y priorizamos seguridad,
          comodidad y soluciones que duren.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Electricidad en Madrid</CardTitle>
            <CardText>
              Averías, cuadros eléctricos, enchufes, puntos de luz e iluminación. Diagnóstico claro y arreglo seguro.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/electricidad">Ver electricidad</ButtonLink>
            </div>
          </Card>

          <Card>
            <CardTitle>Climatización en Madrid</CardTitle>
            <CardText>
              Puesta a punto, mantenimiento y solución de fallos en aire acondicionado y bomba de calor.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/climatizacion">Ver climatización</ButtonLink>
            </div>
          </Card>

          <Card>
            <CardTitle>Reparaciones / Manitas</CardTitle>
            <CardText>
              Montajes, ajustes, remates y reparaciones del hogar. Lo dejamos terminado y recogido.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/reparaciones-manitas">Ver reparaciones</ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Tiempos realistas en Madrid</h2>
        <p className="text-sm text-slate-100 sm:text-base">
          En Madrid te damos una estimación honesta desde el primer contacto y agendamos lo antes posible según
          urgencia y disponibilidad. Si la situación exige ir antes y podemos hacerlo, ajustamos agenda para llegar
          cuanto antes.
        </p>
      </Section>

      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Zonas habituales (y alrededores)
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Nos movemos por Madrid ciudad y, según trabajo y agenda, por zonas cercanas. Si nos dices tu barrio o
          municipio, te confirmamos al momento.
        </p>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
          <li>• Madrid centro y distritos (según disponibilidad).</li>
          <li>• Alrededores: consúltanos y te decimos si llegamos.</li>
        </ul>
      </Section>

      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Preguntas frecuentes</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>¿Trabajáis para pisos y locales?</CardTitle>
            <CardText>
              Sí. Atendemos viviendas, comercios y oficinas. Cuéntanos el caso y te proponemos la forma más
              razonable de resolverlo.
            </CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>¿Podéis ir hoy?</CardTitle>
            <CardText>
              Depende de la carga de trabajo. Si es urgente, lo tratamos como prioritario y te damos un tiempo
              estimado realista.
            </CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>¿Qué necesitáis antes de ir?</CardTitle>
            <CardText>
              Una frase con el problema, la zona y, si puedes, una foto o vídeo. Eso ayuda a llevar material y
              acertar a la primera.
            </CardText>
          </Card>
        </div>
      </Section>

      <Section className="rounded-2xl border border-dashed border-brand-600/40 bg-brand-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Necesitas un técnico en Madrid?
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Llámanos o escríbenos y te diremos el mejor horario y el enfoque para tu caso, sin rodeos.
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
