// app/reparaciones-manitas/page.tsx
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export const metadata: Metadata = {
  title: "Reparaciones y servicio manitas en Madrid y Barcelona | ServiPlusUltra",
  description:
    "Reparaciones del hogar y servicio manitas a domicilio en Madrid y Barcelona: arreglos, montaje, pequeños remates y mejoras. Llámanos al +34 655 099 298.",
};

export default function ReparacionesManitasPage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <Section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Reparaciones del hogar y servicio manitas en Madrid y Barcelona, sin dejar “pendientes”
        </h1>

        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
          Ese grifo que gotea, la puerta que roza, el mueble que sigue en la caja o el remate de obra
          que nunca se termina. Vamos a domicilio en Madrid y Barcelona, lo arreglamos bien y te lo
          dejamos listo para olvidar que existía.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar para reparaciones
          </ButtonLink>

          {WHATSAPP_ENABLED && (
            <ButtonLink href="https://wa.me/34655099298" external>
              WhatsApp (fotos)
            </ButtonLink>
          )}

          <ButtonLink href="/contacto">Pedir presupuesto</ButtonLink>
        </div>
      </Section>

      {/* QUÉ HACEMOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Qué tipo de reparaciones hacemos?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Trabajos de reparación y “puesta a punto” del hogar: lo cotidiano, lo que molesta y lo que
          conviene dejar bien para evitar que vaya a más. Si algo requiere un especialista concreto,
          te lo diremos antes de empezar.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Arreglos y ajustes</CardTitle>
            <CardText>
              Puertas que rozan, persianas que fallan, bisagras, tiradores, cierres, siliconas,
              pequeñas filtraciones y remates que “cantan”.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Montaje e instalación</CardTitle>
            <CardText>
              Montaje de muebles, colgado de estanterías, soportes de TV, barras de cortina, cuadros,
              espejos y accesorios de baño/cocina.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Pequeñas mejoras</CardTitle>
            <CardText>
              Sellados, ajustes de juntas, cambios de herrajes, pequeños retoques para que la casa
              funcione mejor (y se note).
            </CardText>
          </Card>
        </div>
      </Section>

      {/* CÓMO TRABAJAMOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Para ir a la primera, pedimos lo justo
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Cuanta más claridad tengamos antes de ir, menos vueltas damos y más rápido lo dejamos
          resuelto. Si puedes, envía 1–2 fotos y una frase explicando qué quieres conseguir.
        </p>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>1) Nos dices qué pasa</CardTitle>
            <CardText>
              Qué es, dónde está (Madrid o Barcelona) y qué te gustaría (reparar, ajustar, montar,
              rematar).
            </CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>2) Te orientamos</CardTitle>
            <CardText>
              Te decimos si es viable en una visita, si hace falta material extra y la estimación de
              tiempos.
            </CardText>
          </Card>
          <Card className="shadow-none">
            <CardTitle>3) Vamos y lo dejamos listo</CardTitle>
            <CardText>
              Protegemos, trabajamos con orden, revisamos contigo y te explicamos lo hecho en claro.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* PRIORIDAD / TIEMPOS */}
      <Section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Prioridad cuando hace falta, sin vender humo</h2>
        <p className="text-sm text-slate-100 sm:text-base">
          Si es una reparación que no puede esperar (por ejemplo, algo que compromete seguridad o
          causa un problema mayor), lo tratamos como prioritario. En Barcelona, cuando hay técnico
          disponible, intentamos atender en menos de 4 horas; en Madrid y el resto de casos, te
          damos un plazo realista y lo agendamos lo antes posible.
        </p>
      </Section>

      {/* ZONAS + LINKS INTERNOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Servicio a domicilio</h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Trabajamos en Madrid y Barcelona (ciudad y alrededores). Si nos dices tu zona, te
          confirmamos disponibilidad y el mejor horario.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/madrid">Ver servicios en Madrid</ButtonLink>
          <ButtonLink href="/barcelona">Ver servicios en Barcelona</ButtonLink>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Preguntas frecuentes</h2>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>¿Hacéis “manitas por horas”?</CardTitle>
            <CardText>
              Podemos agrupar varios arreglos en una misma visita para que sea más eficiente.
              Cuéntanos la lista y te proponemos la mejor forma de hacerlo.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>¿Podéis dar precio exacto sin ver?</CardTitle>
            <CardText>
              En cosas muy simples a veces sí, pero lo habitual es darte una orientación y cerrar
              al ver el estado real y el acceso.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>¿También hacéis electricidad o climatización?</CardTitle>
            <CardText>
              Sí, somos multiservicios. Si durante una reparación aparece algo eléctrico o de
              climatización, te lo podemos revisar y plantear solución.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="rounded-2xl border border-dashed border-brand-600/40 bg-brand-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Te quitamos esa reparación de encima?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Llámanos o envíanos una foto por WhatsApp. Te decimos rápido si tiene solución en una
          visita y qué necesitaríamos para dejarlo bien.
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
