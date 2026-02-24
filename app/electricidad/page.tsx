// app/electricidad/page.tsx
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export default function ElectricidadPage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <Section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Electricistas a domicilio en Madrid y Barcelona que dan la cara
        </h1>

        <p className="max-w-3xl text-base text-slate-700 sm:text-lg">
          Averías eléctricas, enchufes que fallan, cuadros antiguos o instalaciones que no dan
          confianza. Vamos a tu casa o negocio en Madrid y Barcelona, revisamos lo que pasa y te
          proponemos la solución más segura y razonable, sin sustos en la factura.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar a un electricista
          </ButtonLink>

          {WHATSAPP_ENABLED && (
            <ButtonLink href="https://wa.me/34655099298" external>
              Enviar fotos por WhatsApp
            </ButtonLink>
          )}

          <ButtonLink href="/contacto">Pedir presupuesto</ButtonLink>
        </div>
      </Section>

      {/* SERVICIOS ELÉCTRICOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Qué tipo de trabajos eléctricos hacemos?
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Cubrimos desde pequeñas incidencias hasta trabajos eléctricos más completos, siempre con
          técnicos cualificados y material adecuado para tu instalación. Si algo no lo hacemos
          nosotros, te lo diremos antes de intentarlo.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Averías y cortes de luz</CardTitle>
            <CardText>
              Saltan los diferenciales, un circuito deja de funcionar o una zona se queda sin luz.
              Localizamos el problema, lo reparamos y te explicamos qué ha pasado.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Enchufes, puntos de luz y mecanismos</CardTitle>
            <CardText>
              Instalación y cambio de enchufes, interruptores, tomas de TV/datos, lámparas y apliques.
              Dejamos todo bien fijado y ordenado, sin cables colgando.
            </CardText>
          </Card>

          <Card>
            <CardTitle>Cuadros eléctricos y mejoras de seguridad</CardTitle>
            <CardText>
              Revisión y actualización de cuadros antiguos, instalación de protecciones diferenciales
              y magnetotérmicos, y mejoras para una instalación más segura y fiable.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* URGENCIAS */}
      <Section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Urgencias eléctricas con tiempos reales
        </h2>
        <p className="text-sm text-slate-100 sm:text-base">
          Un problema eléctrico puede ser algo serio. Por eso damos prioridad a las urgencias, pero
          sin jugar con tu tiempo. En Barcelona, siempre que haya técnico disponible, podemos acudir
          en menos de 4 horas. En Madrid y en el resto de servicios te damos una estimación honesta
          y agendamos lo antes posible.
        </p>
      </Section>

      {/* PREPARACIÓN */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Antes de ir, queremos entender qué pasa
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Cuanta más información tengamos antes de salir, mejor podremos ayudarte a la primera. Por
          eso, si puedes, envíanos fotos o un breve vídeo.
        </p>

        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
          <li>• ¿Cuándo empezó el problema? ¿Es la primera vez?</li>
          <li>• ¿Afecta a toda la vivienda o solo a una zona/punto?</li>
          <li>• ¿Ha habido cambios recientes en la instalación o una reforma?</li>
        </ul>
      </Section>

      {/* FAQ */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Preguntas frecuentes
        </h2>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>¿Cuánto tardáis en venir?</CardTitle>
            <CardText>
              Depende de la ciudad, la franja horaria y la carga de trabajo. En Barcelona, cuando hay
              técnico disponible, podemos llegar en menos de 4 horas. En el resto de casos te daremos
              una estimación honesta antes de que decidas.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>¿Podéis dar un precio cerrado por teléfono?</CardTitle>
            <CardText>
              En trabajos sencillos a veces sí, pero en averías complejas necesitamos ver la
              instalación. Aun así, siempre te damos un rango orientativo antes de desplazarnos.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>¿Trabajáis para hogares y negocios?</CardTitle>
            <CardText>
              Sí. Atendemos viviendas particulares, pequeños comercios y oficinas. Cuéntanos tu caso
              y te decimos la forma más razonable de resolverlo.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="rounded-2xl border border-dashed border-brand-600/40 bg-brand-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Necesitas un electricista en Madrid o Barcelona?
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Llámanos, cuéntanos qué ocurre y te diremos cómo podemos ayudarte y en qué plazo. Si nos
          mandas fotos o vídeo por WhatsApp, afinamos aún más la respuesta.
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
