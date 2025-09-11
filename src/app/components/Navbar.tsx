"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Tipado de item de navegación
type NavItem = {
  name: string;
  href: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
};

// Conjunto de íconos inline (sin dependencias extra)
const MarketplaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M3 10l1.8-5.4A2 2 0 0 1 6.7 3h10.6a2 2 0 0 1 1.9 1.6L21 10" />
    <path d="M3 10h18v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7z" />
    <path d="M8 14h8" />
  </svg>
);

const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M4 10l1-5h14l1 5" />
    <path d="M3 10h18v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8z" />
    <path d="M8 14h3v4H8z" />
  </svg>
);

const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v9z" />
    <path d="M7 8h10" />
    <path d="M7 12h7" />
  </svg>
);

const BellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5" />
    <path d="M9 20a3 3 0 0 0 6 0" />
  </svg>
);

// Icono de tema (sol/luna)
const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Nuevo ícono caret (flecha) que rota al abrir/cerrar
const CaretIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// Iconos del submenú: CRM, Amigos, Pagos
const CRMIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M3 12h6v8H3z" />
    <path d="M10.5 8h6v12h-6z" />
    <path d="M18 4h3v16h-3z" />
  </svg>
);

const FriendsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="11" r="3" />
    <path d="M2 20a6 6 0 0 1 12 0" />
    <path d="M11 20a6 6 0 0 1 11 0" />
  </svg>
);

const PaymentsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M7 15h3" />
    <path d="M12 15h5" />
  </svg>
);

// Nuevos íconos
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-3.6-3.6" />
  </svg>
);

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l.02.06a2 2 0 1 1-3.38 0l.02-.06A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82-.33l-.06.02a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1.82-.33l-.06.02a2 2 0 1 1 0-3.38l.06.02A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6c.38 0 .75-.14 1-.4a1.65 1.65 0 0 0 .33-1.82l-.02-.06a2 2 0 1 1 3.38 0l-.02.06c-.13.42-.03.88.25 1.22.25.26.6.4.96.4.46 0 .9-.18 1.22-.5l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.32.32-.5.76-.5 1.22 0 .36.14.71.4.96.34.28.8.38 1.22.25l.06-.02a2 2 0 1 1 0 3.38l-.06-.02c-.42-.13-.88-.03-1.22.25-.26.25-.4.6-.4.96z" />
  </svg>
);
const items: NavItem[] = [
  { name: "Marketplace", href: "/", Icon: MarketplaceIcon },
  { name: "Tiendas", href: "/tiendas", Icon: StoreIcon },
  { name: "Chat", href: "/chat", Icon: ChatIcon },
  { name: "Notificaciones", href: "#", Icon: BellIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const menuRef = useRef<HTMLLIElement | null>(null);

  // Estado de tema (derivado del DOM y localStorage)
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const ls = localStorage.getItem("theme");
    if (ls) return ls === "light";
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  // Cerrar al hacer click fuera o al presionar Escape
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [expanded]);
  const Icon0 = items[0].Icon;
  const Icon1 = items[1].Icon;
  const Icon2 = items[2].Icon;
  const Icon3 = items[3].Icon;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg-800/95 backdrop-blur supports-[backdrop-filter]:bg-bg-800/80 border-b border-border-subtle">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Izquierda: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded-md"
          >
            <Image
              src="/vita-logo.png"
              alt="Vita"
              width={62}
              height={62}
              className="h-20 w-20 object-contain"
              priority
            />
          </Link>

          {/* Centro: 5 íconos (con caret toggle) */}
          <div className="flex-1 flex items-center justify-center">
            <ul className="grid grid-cols-5 gap-1 sm:gap-2">
              {/* 1) Primer item */}
              <li>
                <Link
                  href={items[0].href}
                  className={`group flex items-center justify-center sm:justify-start gap-2 rounded-lg px-2.5 sm:px-3 py-2 transition-colors outline-none ${
                    pathname === items[0].href && items[0].href !== "#"
                      ? "bg-primary-700/15 text-primary-200"
                      : "text-text-secondary hover:text-text-strong hover:bg-bg-hover"
                  } focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800`}
                  aria-label={items[0].name}
                >
                  <Icon0 className="size-5 sm:size-[22px] text-current" />
                  <span className="hidden sm:inline text-sm font-medium">{items[0].name}</span>
                </Link>
              </li>

              {/* 2) Segundo item */}
              <li>
                <Link
                  href={items[1].href}
                  className={`group flex items-center justify-center sm:justify-start gap-2 rounded-lg px-2.5 sm:px-3 py-2 transition-colors outline-none ${
                    pathname === items[1].href && items[1].href !== "#"
                      ? "bg-primary-700/15 text-primary-200"
                      : "text-text-secondary hover:text-text-strong hover:bg-bg-hover"
                  } focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800`}
                  aria-label={items[1].name}
                >
                  <Icon1 className="size-5 sm:size-[22px] text-current" />
                  <span className="hidden sm:inline text-sm font-medium">{items[1].name}</span>
                </Link>
              </li>

              {/* 3) Toggle caret (nuevo) */}
              <li ref={menuRef} className="relative">
                 <button
                   id="more-toggle"
                   type="button"
                   onClick={() => setExpanded((v) => !v)}
                   aria-label={expanded ? "Contraer" : "Expandir"}
                   aria-expanded={expanded}
                  aria-controls="more-menu"
                  className={`w-full group flex items-center justify-center sm:justify-start gap-2 rounded-lg px-2.5 sm:px-3 py-2 transition-colors outline-none ${
                    expanded
                      ? "bg-btn-primary text-btn-primary-text ring-2 ring-primary-400/60 ring-offset-2 ring-offset-bg-800 shadow-sm"
                      : "text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800"
                  }`}
                  >
                   <CaretIcon className={`size-5 sm:size-[22px] text-current transition-transform ${expanded ? "rotate-180" : "rotate-0"}`} />
                   <span className="hidden sm:inline text-sm font-medium">Menú</span>
                 </button>

                 {/* Submenú compacto */}
                 <div
                   role="menu"
                   aria-labelledby="more-toggle"
                   id="more-menu"
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-64 sm:w-[560px] rounded-xl border border-border-subtle bg-bg-800/95 backdrop-blur p-2 shadow-lg shadow-black/30 origin-top transform-gpu overflow-hidden ${
                    expanded ? "pointer-events-auto opacity-100 translate-y-0 scale-y-100" : "pointer-events-none opacity-0 -translate-y-1 scale-y-95"
                  } transition-[opacity,transform] duration-200 ease-out`}
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3">
                    {/* Buscar (izquierda de CRM) */}
                    <li>
                      <a
                        href="#"
                        role="menuitem"
                        className={`group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-all duration-200 ${expanded ? "opacity-100 translate-y-0 delay-75" : "opacity-0 translate-y-1 delay-0"}`}
                        onClick={() => setExpanded(false)}
                        aria-label="Buscar"
                      >
                        <SearchIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">Buscar</span>
                      </a>
                    </li>
                    {/* CRM */}
                    <li>
                      <Link
                        href="/CRM"
                        role="menuitem"
                        className={`group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-all duration-200 ${expanded ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-1 delay-0"}`}
                        onClick={() => setExpanded(false)}
                      >
                        <CRMIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">CRM</span>
                      </Link>
                    </li>
                    {/* Amigos */}
                    <li>
                      <a
                        href="#"
                        role="menuitem"
                        className={`group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-all duration-200 ${expanded ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-1 delay-0"}`}
                        onClick={() => setExpanded(false)}
                      >
                        <FriendsIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">Amigos</span>
                      </a>
                    </li>
                    {/* Pagos */}
                    <li>
                      <Link
                        href="/Pagos"
                        role="menuitem"
                        className={`group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-all duration-200 ${expanded ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-1 delay-0"}`}
                        onClick={() => setExpanded(false)}
                      >
                        <PaymentsIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">Pagos</span>
                      </Link>
                    </li>
                    {/* Configuración (derecha de Pagos) */}
                    <li>
                      <a
                        href="#"
                        role="menuitem"
                        className={`group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-all duration-200 ${expanded ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-1 delay-0"}`}
                        onClick={() => setExpanded(false)}
                        aria-label="Configuración"
                      >
                        <SettingsIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">Configuración</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* 4) Tercer item original */}
              <li>
                <Link
                  href={items[2].href}
                  className={`group flex items-center justify-center sm:justify-start gap-2 rounded-lg px-2.5 sm:px-3 py-2 transition-colors outline-none ${
                    pathname === items[2].href && items[2].href !== "#"
                      ? "bg-primary-700/15 text-primary-200"
                      : "text-text-secondary hover:text-text-strong hover:bg-bg-hover"
                  } focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800`}
                  aria-label={items[2].name}
                >
                  <Icon2 className="size-5 sm:size-[22px] text-current" />
                  <span className="hidden sm:inline text-sm font-medium">{items[2].name}</span>
                </Link>
              </li>

              {/* 5) Cuarto item original */}
              <li>
                <Link
                  href={items[3].href}
                  className={`group flex items-center justify-center sm:justify-start gap-2 rounded-lg px-2.5 sm:px-3 py-2 transition-colors outline-none ${
                    pathname === items[3].href && items[3].href !== "#"
                      ? "bg-primary-700/15 text-primary-200"
                      : "text-text-secondary hover:text-text-strong hover:bg-bg-hover"
                  } focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800`}
                  aria-label={items[3].name}
                >
                  <Icon3 className="size-5 sm:size-[22px] text-current" />
                  <span className="hidden sm:inline text-sm font-medium">{items[3].name}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Derecha: Avatar + Interruptor de tema */}
          <div className="flex items-center gap-2">
            {/* Interruptor de tema */}
            <button
              type="button"
              onClick={() => setIsLight((v) => !v)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
              aria-pressed={isLight}
              aria-label={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
              title={isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
            >
              <span className="sr-only">{isLight ? "Modo claro activado" : "Modo oscuro activado"}</span>
              {isLight ? (
                <SunIcon className="size-5 text-current" />
              ) : (
                <MoonIcon className="size-5 text-current" />
              )}
            </button>

            {/* Avatar */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-shadow"
              aria-label="Perfil de usuario"
            >
              <Image
                src="/user-perfil.jpeg"
                alt="Usuario"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}