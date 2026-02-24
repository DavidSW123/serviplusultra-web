"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type NavItem = { href: string; label: string };

export function MobileMenu({
  nav,
  services,
}: {
  nav: NavItem[];
  services: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const menuId = useId();
  const servicesId = useId();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!open) return;
      const target = e.target as Node;

      if (buttonRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;

      setOpen(false);
      setServicesOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="select-none rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800"
      >
        Menú
      </button>

      {open && (
        <div
          ref={panelRef}
          id={menuId}
          className="absolute right-0 top-full z-50 mt-2 w-[min(92vw,22rem)] rounded-2xl border border-slate-200 bg-white p-2 shadow-lg"
        >
          <nav
            className="grid max-h-[55vh] gap-1 overflow-y-auto overscroll-contain text-sm"
            aria-label="Navegación móvil"
          >
            {/* Servicios primero */}
            <div>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls={servicesId}
                onClick={() => setServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 font-semibold text-slate-800 hover:bg-slate-50"
              >
                <span>Servicios</span>
                <span className="text-slate-500">{servicesOpen ? "–" : "+"}</span>
              </button>

              {servicesOpen && (
                <div id={servicesId} className="mt-1 grid gap-1 pl-2">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className="rounded-lg px-2 py-2 text-slate-700 hover:bg-slate-50 hover:text-sky-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resto de items */}
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAll}
                className="rounded-lg px-2 py-2 text-slate-700 hover:bg-slate-50 hover:text-sky-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-2 border-t border-slate-200 pt-2">
            <div className="px-2 text-xs font-semibold text-sky-800">
              +34 655 099 298
            </div>
            <a
              href="tel:+34655099298"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
