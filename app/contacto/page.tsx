"use client"

import { useMemo, useState } from "react"

const EMAIL_TO = "serviplusultrasolutionssl@gmail.com"

// WhatsApp (wa.me): número completo en formato internacional, solo dígitos (sin +, espacios, guiones). 
const WHATSAPP_NUMBER_DIGITS = "34655099298"

// tel: en formato global (empieza por +), típico E.164.
const PHONE_E164 = "+34655099298"

const AVERIAS = [
  "Electricidad",
  "Climatización",
  "Urgencia",
  "Reparación",
  "Solicitud de presupuesto a medida",
] as const

type Averia = (typeof AVERIAS)[number]

export default function ContactoPage() {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [averia, setAveria] = useState<Averia>("Electricidad")
  const [descripcion, setDescripcion] = useState("")
  const [error, setError] = useState<string | null>(null)

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent("Hola, quiero información / asistencia.")
    return `https://wa.me/${WHATSAPP_NUMBER_DIGITS}?text=${text}`
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!nombre.trim() || !telefono.trim() || !email.trim() || !descripcion.trim()) {
      setError("Por favor, rellena nombre, teléfono, correo y la descripción.")
      return
    }

    const subject = `Contacto web - ${averia}`
    const bodyLines = [
      "Nueva solicitud desde la web:",
      "",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      `Tipo de avería: ${averia}`,
      "",
      "Descripción:",
      descripcion,
    ]
    const body = bodyLines.join("\n")

    const mailtoUrl = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-2 text-gray-600">
        Llámanos, escríbenos por WhatsApp o envíanos un correo con el formulario.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          className="rounded-xl border p-5 hover:bg-gray-50"
          href={`tel:${PHONE_E164}`}
          aria-label="Llamar por teléfono"
        >
          <p className="text-sm text-gray-500">Teléfono</p>
          <p className="mt-1 text-lg font-semibold">{PHONE_E164}</p>
          <p className="mt-2 text-sm text-gray-600">Toca para llamar.</p>
        </a>

        <a
          className="rounded-xl border p-5 hover:bg-gray-50"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir WhatsApp"
        >
          <p className="text-sm text-gray-500">WhatsApp</p>
          <p className="mt-1 text-lg font-semibold">{PHONE_E164}</p>
          <p className="mt-2 text-sm text-gray-600">Abrir chat por WhatsApp.</p>
        </a>

        <a
          className="rounded-xl border p-5 hover:bg-gray-50 sm:col-span-2"
          href={`mailto:${EMAIL_TO}`}
        >
          <p className="text-sm text-gray-500">Correo</p>
          <p className="mt-1 text-lg font-semibold">{EMAIL_TO}</p>
          <p className="mt-2 text-sm text-gray-600">
            También puedes escribirnos directamente por email.
          </p>
        </a>
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Formulario de contacto</h2>
        <p className="mt-1 text-sm text-gray-600">
          Al enviar, se preparará un email con todos los datos.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          {error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Nombre *</span>
              <input
                className="rounded-lg border px-3 py-2"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="name"
                required
              />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">Teléfono *</span>
              <input
                className="rounded-lg border px-3 py-2"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                autoComplete="tel"
                required
              />
            </label>
          </div>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Correo electrónico *</span>
            <input
              type="email"
              className="rounded-lg border px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Tipo de avería</span>
            <select
              className="rounded-lg border px-3 py-2"
              value={averia}
              onChange={(e) => setAveria(e.target.value as Averia)}
            >
              {AVERIAS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Descripción *</span>
            <textarea
              className="min-h-[140px] rounded-lg border px-3 py-2"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Cuéntanos qué necesitas, dirección aproximada, urgencia, etc."
              required
            />
          </label>

          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Enviar por correo
          </button>

          <p className="text-xs text-gray-500">
            Nota: este envío usa <code>mailto:</code> y abrirá tu app de correo con el mensaje rellenado.
          </p>
        </form>
      </div>
    </div>
  )
}
