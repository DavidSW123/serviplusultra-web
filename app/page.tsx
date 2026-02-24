// app/page.tsx
export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Multiservicios en Madrid y Barcelona: solucionamos averías, no solo
            las reparamos
          </h1>
          <p className="text-base text-slate-700">
            Electricidad, climatización y reparaciones del hogar a domicilio.
            Nos movemos por Madrid y Barcelona para que tú no tengas que
            hacerlo.
          </p>
          <ul className="space-y-1 text-sm text-slate-700">
            <li>
              • Electricistas y técnicos de climatización que hablan claro y
              trabajan mejor.
            </li>
            <li>
              • Servicio manitas y pequeñas obras para ese “ya que estás…” que
              nunca se hace.
            </li>
            <li>
              • Atención prioritaria en urgencias y soluciones con sentido
              común, no con prisas vacías.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="tel:+34655099298"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Llamar ahora
            </a>
            <a
              href="https://wa.me/34655099298"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            ¿Qué te arreglamos hoy?
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Cuenta con nosotros para electricidad, climatización y reparaciones
            del hogar en Madrid y Barcelona. Cuanto antes nos llames, antes
            podemos darte solución.
          </p>
          <div className="mt-4 space-y-2 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900">
                Teléfono directo
              </span>
              <a
                href="tel:+34655099298"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                +34 655 099 298
              </a>
            </div>
            <div>
              <span className="font-medium text-slate-900">
                Servicio a domicilio
              </span>
              <div>Madrid y Barcelona (ciudad y alrededores).</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Electricidad, climatización y manitas: tu equipo de confianza a
          domicilio
        </h2>
        <p className="text-sm text-slate-700">
          ServiPlusUltra Solutions S.L. nace para hacerte la vida más fácil en
          casa y en tu negocio. Trabajamos en Madrid y Barcelona con un equipo
          de técnicos que saben de electricidad, climatización y pequeñas
          reparaciones, pero sobre todo saben escuchar lo que necesitas. No
          vendemos reformas imposibles: reparamos, mejoramos y dejamos todo
          funcionando para que puedas seguir con tu día.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Electricidad
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Desde “no va esta luz” hasta cambios de enchufes, cuadros
              eléctricos o iluminación completa. Revisamos, explicamos lo que
              pasa y te proponemos la solución más segura y razonable para tu
              vivienda o local.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Climatización
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Instalamos y mantenemos aire acondicionado y bombas de calor para
              que no sufras ni en agosto ni en enero. Limpieza de filtros,
              revisiones y mejoras para que tu climatización consuma menos y
              funcione mejor.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Reparaciones y servicio manitas
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Puertas que rozan, grifos que gotean, muebles sin montar o remates
              de obra que se eternizan. Nosotros nos encargamos de todo eso que
              siempre se deja para “otro día” y nunca llega.
            </p>
          </div>
        </div>
      </section>

      {/* URGENCIAS */}
      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50">
        <h2 className="text-xl font-semibold">
          Urgencias sí, promesas vacías no
        </h2>
        <p className="text-sm text-slate-100">
          Cuando algo falla en casa o en el negocio, el reloj corre. Por eso
          ofrecemos atención prioritaria en urgencias, sin vender servicios
          24/7 imposibles de cumplir. En Barcelona nos comprometemos, siempre
          que haya técnico disponible, a acudir en menos de 4 horas. En el
          resto de casos buscamos contigo un horario cómodo y realista, y si la
          situación exige ir antes y podemos hacerlo, movemos agenda para llegar
          lo antes posible.
        </p>
        <ul className="text-xs text-slate-200">
          <li>• Te decimos el tiempo estimado desde la primera llamada.</li>
          <li>• Si algo se retrasa, te avisamos, no desaparecemos.</li>
          <li>
            • Preferimos llegar a tiempo de verdad que prometer imposibles.
          </li>
        </ul>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          De la llamada al “ya está arreglado” en tres pasos
        </h2>
        <p className="text-sm text-slate-700">
          No necesitas saber de electricidad ni de herramientas. Para eso
          estamos nosotros. Nuestro proceso está pensado para que entiendas lo
          justo: qué pasa, qué vamos a hacer y cuánto te va a costar.
        </p>
        <ol className="space-y-3 text-sm text-slate-700">
          <li>
            <span className="font-semibold">1. Nos llamas o nos escribes</span>
            <br />
            Nos cuentas qué ocurre, dónde estás (Madrid o Barcelona) y qué
            nivel de urgencia tienes. Si puedes mandarnos fotos o vídeo, aún
            mejor.
          </li>
          <li>
            <span className="font-semibold">2. Te damos una orientación</span>
            <br />
            Te explicamos las opciones, el rango de precio aproximado y el
            tiempo estimado de atención según la urgencia y la ciudad.
          </li>
          <li>
            <span className="font-semibold">
              3. Vamos, solucionamos y revisamos contigo
            </span>
            <br />
            Hacemos el trabajo, comprobamos que todo funciona como debe y te
            explicamos con palabras normales qué hemos hecho.
          </li>
        </ol>
      </section>

      {/* ZONAS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Nos movemos por Madrid y Barcelona, tú no
        </h2>
        <p className="text-sm text-slate-700">
          Somos un servicio a domicilio. No tenemos tienda ni exposición porque
          preferimos invertir ese tiempo en llegar hasta tu casa o tu negocio.
          Trabajamos en Madrid y Barcelona y alrededores, y vamos ampliando
          zonas según la demanda.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="/madrid"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-800 hover:border-sky-400 hover:bg-sky-50"
          >
            Ver servicios en Madrid
          </a>
          <a
            href="/barcelona"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-800 hover:border-sky-400 hover:bg-sky-50"
          >
            Ver servicios en Barcelona
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          ¿Qué te arreglamos hoy?
        </h2>
        <p className="text-sm text-slate-700">
          Si tienes una avería, una instalación pendiente o simplemente algo en
          casa que no deja de molestarte, escríbenos o llámanos. Cuanto antes
          hablemos, antes podemos darte una solución.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            Llamar ahora
          </a>
          <a
            href="https://wa.me/34655099298"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
          >
            Enviar WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
