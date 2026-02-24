// app/climatizacion/page.tsx
import { BrandBannerDark } from "../../components/BrandBanners";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export default function ClimatizacionPage() {
  return (
    <div className="space-y-8">
      {/* BANDA DE MARCA (logo oscuro integrado, sin bordes) */}
      <BrandBannerDark />

      {/* HERO */}
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Climatización y aire acondicionado en Madrid y Barcelona, sin líos
        </h1>

        <p className="text-sm text-slate-700">
          Instalación, mantenimiento y solución de problemas de aire acondicionado
          y bombas de calor. Vamos a domicilio en Madrid y Barcelona y te
          ayudamos a conseguir confort sin disparar el consumo.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            Llamar para climatización
          </a>

          {WHATSAPP_ENABLED && (
            <a
              href="https://wa.me/34655099298"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
            >
              WhatsApp (fotos/vídeo)
            </a>
          )}

          <a
            href="/contacto"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
          >
            Pedir presupuesto
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          ¿Qué hacemos en climatización?
        </h2>

        <p className="text-sm text-slate-700">
          Trabajamos con un enfoque práctico: primero entendemos el espacio, el
          uso y el problema real, y luego proponemos una solución que tenga
          sentido (técnicamente y en consumo).
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Mantenimiento y puesta a punto
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Limpieza, revisión y ajustes para que el equipo rinda mejor, haga
              menos ruido y consuma menos. Ideal antes de verano o invierno.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Instalación y sustitución
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              Si toca cambiar el equipo o instalar uno nuevo, te orientamos en
              potencia y uso para no sobredimensionar ni quedarte corto.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Fallos y averías
            </h3>
            <p className="mt-1 text-xs text-slate-700">
              No enfría, no calienta, gotea, hace hielo, huele mal o salta el
              diferencial: revisamos, diagnosticamos y te proponemos el arreglo.
            </p>
          </div>
        </div>
      </section>

      {/* TIEMPOS */}
      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50">
        <h2 className="text-xl font-semibold">
          Atención prioritaria cuando hace falta
        </h2>
        <p className="text-sm text-slate-100">
          Cuando un equipo falla en pleno calor o en días fríos, entendemos la
          urgencia. Damos prioridad a estos casos con tiempos realistas: en
          Barcelona, siempre que haya técnico disponible, buscamos atender en
          menos de 4 horas. En Madrid y en el resto de casos, te damos una
          estimación clara y agendamos lo antes posible.
        </p>
      </section>

      {/* CONSEJOS (SEO + valor real) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Señales de que tu aire necesita revisión
        </h2>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Enfría/calienta poco aunque lo pongas al máximo.</li>
          <li>• Hace más ruido de lo normal o vibra.</li>
          <li>• Gotea o deja humedad donde no debe.</li>
          <li>• Sale olor desagradable al encenderlo.</li>
          <li>• Te sube la factura sin haber cambiado hábitos.</li>
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
              ¿Hacéis aire acondicionado y bomba de calor?
            </h3>
            <p>
              Sí. Trabajamos con sistemas de climatización para frío y calor y
              te orientamos según el uso real del espacio.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Cada cuánto conviene hacer mantenimiento?
            </h3>
            <p>
              Depende del uso, pero suele ser buena idea revisar antes de la
              temporada fuerte (verano/invierno) para evitar fallos cuando más
              lo necesitas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              ¿Trabajáis a domicilio en Madrid y Barcelona?
            </h3>
            <p>
              Sí, trabajamos a domicilio en ambas ciudades y alrededores. Si nos
              dices tu zona por teléfono, te confirmamos disponibilidad y tiempo
              estimado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          ¿Necesitas climatización en Madrid o Barcelona?
        </h2>
        <p className="text-sm text-slate-700">
          Llámanos y cuéntanos qué equipo tienes y qué notas. Si puedes, prepara
          marca/modelo y una foto del equipo para ayudarte mejor.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            Llamar ahora
          </a>

          {WHATSAPP_ENABLED && (
            <a
              href="https://wa.me/34655099298"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
            >
              WhatsApp
            </a>
          )}

          <a
            href="/contacto"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
          >
            Ir a contacto
          </a>
        </div>
      </section>
    </div>
  );
}
