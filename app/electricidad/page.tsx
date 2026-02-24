const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export default function ElectricidadPage() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Electricistas a domicilio en Madrid y Barcelona que dan la cara
        </h1>

        <p className="text-sm text-slate-700">
          Averías eléctricas, enchufes que fallan, cuadros antiguos o instalaciones
          que no dan confianza. Vamos a tu casa o negocio en Madrid y Barcelona,
          revisamos lo que pasa y te proponemos la solución más segura y razonable,
          sin sustos en la factura.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 no-underline"
          >
            Llamar a un electricista
          </a>

          {WHATSAPP_ENABLED && (
            <a
              href="https://wa.me/34655099298"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
            >
              Enviar fotos por WhatsApp
            </a>
          )}

          <a
            href="/contacto"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
          >
            Pedir presupuesto
          </a>
        </div>
      </section>

      {/* SERVICIOS ELÉCTRICOS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          ¿Qué tipo de trabajos eléctricos hacemos?
        </h2>

        <p className="text-sm text-slate-700">
          Cubrimos desde pequeñas incidencias hasta trabajos eléctricos más completos,
          siempre con técnicos cualificados y material adecuado para tu instalación.
          Si algo no lo hacemos nosotros, te lo diremos antes de intentarlo.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Averías y cortes de luz
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Saltan los diferenciales, un circuito deja de funcionar o una zona se
              queda sin luz. Localizamos el problema, lo reparamos y te explicamos
              qué ha pasado para que lo entiendas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Enchufes, puntos de luz y mecanismos
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Instalación y cambio de enchufes, interruptores, regletas, tomas de TV
              o datos, lámparas y apliques. Dejamos todo bien fijado y ordenado, sin
              cables colgando ni chapuzas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Cuadros eléctricos y mejoras de seguridad
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Revisión y actualización de cuadros antiguos, instalación de protecciones
              diferenciales y magnetotérmicos y mejoras para que tu instalación sea más
              segura y fiable.
            </p>
          </div>
        </div>
      </section>

      {/* URGENCIAS */}
      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50">
        <h2 className="text-xl font-semibold">
          Urgencias eléctricas con tiempos reales
        </h2>
        <p className="text-sm text-slate-100">
          Un problema eléctrico puede ser algo serio. Por eso damos prioridad a las
          urgencias, pero sin jugar con tu tiempo. En Barcelona, siempre que haya
          técnico disponible, podemos acudir en menos de 4 horas. En Madrid y en el
          resto de servicios te damos una estimación honesta y agendamos lo antes posible.
        </p>
      </section>

      {/* PREPARACIÓN */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Antes de ir, queremos entender qué pasa
        </h2>
        <p className="text-sm text-slate-700">
          Cuanta más información tengamos antes de salir, mejor podremos ayudarte a la
          primera. Por eso, si puedes, envíanos fotos o un breve vídeo.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• ¿Cuándo empezó el problema? ¿Es la primera vez?</li>
          <li>• ¿Afecta a toda la vivienda o solo a una zona/punto?</li>
          <li>• ¿Ha habido cambios recientes en la instalación o una reforma?</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold">
              ¿Cuánto tardáis en venir?
            </h3>
            <p>
              Depende de la ciudad, la franja horaria y la carga de trabajo. En Barcelona,
              cuando hay técnico disponible, podemos llegar en menos de 4 horas. En el resto
              de casos te daremos una estimación honesta antes de que decidas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Podéis dar un precio cerrado por teléfono?
            </h3>
            <p>
              En trabajos sencillos a veces sí, pero en averías complejas necesitamos ver la
              instalación. Aun así, siempre te damos un rango orientativo antes de desplazarnos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Trabajáis para hogares y negocios?
            </h3>
            <p>
              Sí. Atendemos viviendas particulares, pequeños comercios y oficinas. Cuéntanos tu caso
              y te decimos la forma más razonable de resolverlo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          ¿Necesitas un electricista en Madrid o Barcelona?
        </h2>
        <p className="text-sm text-slate-700">
          Llámanos, cuéntanos qué ocurre y te diremos cómo podemos ayudarte y en qué plazo.
          Si nos mandas fotos o vídeo por WhatsApp, afinamos aún más la respuesta.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 no-underline"
          >
            Llamar ahora
          </a>

          {WHATSAPP_ENABLED && (
            <a
              href="https://wa.me/34655099298"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
            >
              Enviar WhatsApp
            </a>
          )}

          <a
            href="/contacto"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
          >
            Ir a contacto
          </a>
        </div>
      </section>
    </div>
  );
}
