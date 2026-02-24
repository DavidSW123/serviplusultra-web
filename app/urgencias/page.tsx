import type { Metadata } from "next";

const WHATSAPP_ENABLED = process.env.NEXT_PUBLIC_WHATSAPP_ENABLED === "true";

export const metadata: Metadata = {
  title: "Urgencias en Madrid y Barcelona | Electricidad, climatización y reparaciones | ServiPlusUltra",
  description:
    "Urgencias a domicilio en Madrid y Barcelona: electricidad, climatización y reparaciones. Atención prioritaria con tiempos realistas. Tel: +34 655 099 298.",
  alternates: { canonical: "/urgencias" },
};

export default function UrgenciasPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Urgencias a domicilio en Madrid y Barcelona, con tiempos realistas
        </h1>

        <p className="text-sm text-slate-700">
          Cuando algo falla, lo que más fastidia es la incertidumbre. En ServiPlusUltra
          priorizamos urgencias de electricidad, climatización y reparaciones del hogar,
          sin vender promesas imposibles: te decimos un tiempo estimado y lo cumplimos.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 no-underline"
          >
            Llamar ahora
          </a>

          <a
            href="/contacto"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
          >
            Pedir presupuesto
          </a>

          {WHATSAPP_ENABLED && (
            <a
              href="https://wa.me/34655099298"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
            >
              Enviar WhatsApp
            </a>
          )}
        </div>
      </section>

      {/* QUÉ CONSIDERAMOS URGENCIA */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          ¿Qué consideramos una urgencia?
        </h2>

        <p className="text-sm text-slate-700">
          Si tienes dudas, llámanos y te orientamos en 1 minuto. Estos son casos típicos
          en los que conviene actuar rápido.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">Electricidad</h3>
            <p className="mt-1 text-xs text-slate-700">
              Saltan diferenciales, olor a quemado, chispazos, zonas sin luz, cuadro antiguo
              que da problemas o enchufes que se calientan.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">Climatización</h3>
            <p className="mt-1 text-xs text-slate-700">
              Aire que no enfría/calienta en días críticos, equipo que gotea, hace hielo o
              se apaga solo, bombas de calor con fallos repetidos.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">Reparaciones</h3>
            <p className="mt-1 text-xs text-slate-700">
              Fugas, cierres que no funcionan, persianas atascadas, problemas que impiden
              usar una estancia o que pueden empeorar si se dejan.
            </p>
          </div>
        </div>
      </section>

      {/* TIEMPOS REALISTAS */}
      <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50">
        <h2 className="text-xl font-semibold">Nuestro compromiso (sin vender humo)</h2>
        <p className="text-sm text-slate-100">
          Priorizamos urgencias y te damos una estimación clara. En Barcelona, siempre que haya
          técnico disponible, buscamos atender en menos de 4 horas. En Madrid y en el resto de
          casos, agendamos lo antes posible con un horario realista.
        </p>
        <ul className="text-xs text-slate-200">
          <li>• Te decimos el tiempo estimado desde la primera llamada.</li>
          <li>• Si se complica, te avisamos; no desaparecemos.</li>
          <li>• Preferimos resolver bien a la primera que correr y volver dos veces.</li>
        </ul>
      </section>

      {/* CÓMO AYUDARNOS A AYUDARTE */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Para ir más rápido, dinos esto
        </h2>
        <p className="text-sm text-slate-700">
          Si puedes, envíanos fotos o un vídeo corto; así salimos con la idea clara y con el material adecuado.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Ciudad (Madrid o Barcelona) y zona aproximada.</li>
          <li>• Qué pasa exactamente y desde cuándo.</li>
          <li>• Si salta el diferencial/magneto, si hay olor a quemado o si hay agua cerca.</li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">¿Es urgente? Lo vemos contigo</h2>
        <p className="text-sm text-slate-700">
          Llámanos al +34 655 099 298 y te diremos el siguiente paso. Si no es urgente, también:
          te damos una estimación honesta y lo dejamos agendado.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+34655099298"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 no-underline"
          >
            Llamar ahora
          </a>

          <a
            href="/reparaciones-manitas"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 no-underline"
          >
            Ver reparaciones y manitas
          </a>
        </div>
      </section>
    </div>
  );
}
