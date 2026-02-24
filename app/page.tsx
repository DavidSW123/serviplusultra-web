// app/page.tsx
import { Section } from "@/components/ui/Section";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <Section className="grid gap-6 lg:grid-cols-[3fr,2fr] lg:items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Multiservicios en Madrid y Barcelona: solucionamos averías, no solo las reparamos
          </h1>

          <p className="max-w-2xl text-base text-slate-700 sm:text-lg">
            Electricidad, climatización y reparaciones del hogar a domicilio. Nos movemos por
            Madrid y Barcelona para que tú no tengas que hacerlo.
          </p>

          <ul className="grid gap-2 text-sm text-slate-700 sm:text-base">
            <li>• Electricistas y técnicos de climatización que hablan claro y trabajan mejor.</li>
            <li>• Servicio manitas y pequeñas obras para ese “ya que estás…” que nunca se hace.</li>
            <li>• Atención prioritaria en urgencias y soluciones con sentido común.</li>
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="tel:+34655099298" variant="primary" external>
              Llamar ahora
            </ButtonLink>
            <ButtonLink href="https://wa.me/34655099298" external>
              WhatsApp
            </ButtonLink>
          </div>
        </div>

        <Card className="p-5">
          <CardTitle>¿Qué te arreglamos hoy?</CardTitle>
          <p className="mt-2 text-sm text-slate-700">
            Cuenta con nosotros para electricidad, climatización y reparaciones del hogar en
            Madrid y Barcelona. Cuanto antes nos llames, antes podemos darte solución.
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-slate-900">Teléfono directo</span>
              <a
                href="tel:+34655099298"
                className="font-semibold text-brand-700 hover:text-brand-600"
              >
                +34 655 099 298
              </a>
            </div>

            <div>
              <div className="font-semibold text-slate-900">Servicio a domicilio</div>
              <div>Madrid y Barcelona (ciudad y alrededores).</div>
            </div>

            <div className="pt-1">
              <ButtonLink href="/contacto">Pedir presupuesto</ButtonLink>
            </div>
          </div>
        </Card>
      </Section>

      {/* SERVICIOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Electricidad, climatización y manitas: tu equipo de confianza a domicilio
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          ServiPlusUltra Solutions S.L. nace para hacerte la vida más fácil en casa y en tu
          negocio. Trabajamos en Madrid y Barcelona con un equipo de técnicos que saben de
          electricidad, climatización y pequeñas reparaciones, pero sobre todo saben escuchar
          lo que necesitas. No vendemos reformas imposibles: reparamos, mejoramos y dejamos
          todo funcionando para que puedas seguir con tu día.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Electricidad</CardTitle>
            <CardText>
              Desde “no va esta luz” hasta cambios de enchufes, cuadros eléctricos o
              iluminación completa. Revisamos, explicamos lo que pasa y te proponemos una
              solución segura.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/electricidad">Ver electricidad</ButtonLink>
            </div>
          </Card>

          <Card>
            <CardTitle>Climatización</CardTitle>
            <CardText>
              Instalamos y mantenemos aire acondicionado y bombas de calor. Limpieza de
              filtros, revisiones y mejoras para que consuma menos y funcione mejor.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/climatizacion">Ver climatización</ButtonLink>
            </div>
          </Card>

          <Card>
            <CardTitle>Reparaciones y servicio manitas</CardTitle>
            <CardText>
              Puertas que rozan, grifos que gotean, muebles sin montar o remates de obra que
              se eternizan. Nos encargamos de lo pendiente.
            </CardText>
            <div className="mt-3">
              <ButtonLink href="/reparaciones-manitas">Ver reparaciones</ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      {/* URGENCIAS */}
      <Section className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Urgencias sí, promesas vacías no</h2>
        <p className="text-sm text-slate-100 sm:text-base">
          Cuando algo falla en casa o en el negocio, el reloj corre. Por eso ofrecemos
          atención prioritaria en urgencias, sin vender servicios 24/7 imposibles de cumplir.
          En Barcelona nos comprometemos, siempre que haya técnico disponible, a acudir en
          menos de 4 horas. En el resto de casos buscamos contigo un horario cómodo y realista.
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
          <li>• Te decimos el tiempo estimado desde la primera llamada.</li>
          <li>• Si algo se retrasa, te avisamos, no desaparecemos.</li>
          <li>• Preferimos llegar a tiempo de verdad que prometer imposibles.</li>
        </ul>
      </Section>

      {/* CÓMO TRABAJAMOS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          De la llamada al “ya está arreglado” en tres pasos
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          No necesitas saber de electricidad ni de herramientas. Nuestro proceso está pensado
          para que entiendas lo justo: qué pasa, qué vamos a hacer y cuánto te va a costar.
        </p>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="shadow-none">
            <CardTitle>1) Nos llamas o nos escribes</CardTitle>
            <CardText>
              Nos cuentas qué ocurre, dónde estás (Madrid o Barcelona) y qué nivel de urgencia
              tienes. Si puedes mandarnos fotos o vídeo, mejor.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>2) Te damos una orientación</CardTitle>
            <CardText>
              Te explicamos opciones, rango aproximado y tiempo estimado según la urgencia y
              la ciudad.
            </CardText>
          </Card>

          <Card className="shadow-none">
            <CardTitle>3) Vamos y lo dejamos funcionando</CardTitle>
            <CardText>
              Hacemos el trabajo, comprobamos que todo funciona como debe y te explicamos qué
              se hizo con palabras normales.
            </CardText>
          </Card>
        </div>
      </Section>

      {/* ZONAS */}
      <Section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          Nos movemos por Madrid y Barcelona, tú no
        </h2>

        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Somos un servicio a domicilio. No tenemos tienda ni exposición porque preferimos
          invertir ese tiempo en llegar hasta tu casa o tu negocio. Trabajamos en Madrid y
          Barcelona y alrededores.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/madrid">Ver servicios en Madrid</ButtonLink>
          <ButtonLink href="/barcelona">Ver servicios en Barcelona</ButtonLink>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="rounded-2xl border border-dashed border-brand-600/40 bg-brand-50 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Qué te arreglamos hoy?
        </h2>
        <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
          Si tienes una avería, una instalación pendiente o simplemente algo en casa que no
          deja de molestarte, escríbenos o llámanos. Cuanto antes hablemos, antes podemos
          darte una solución.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="tel:+34655099298" variant="primary" external>
            Llamar ahora
          </ButtonLink>
          <ButtonLink href="https://wa.me/34655099298" external>
            Enviar WhatsApp
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
