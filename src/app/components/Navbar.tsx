"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
const items: NavItem[] = [
  { name: "Marketplace", href: "#", Icon: MarketplaceIcon },
  { name: "Tiendas", href: "#", Icon: StoreIcon },
  { name: "Chat", href: "#", Icon: ChatIcon },
  { name: "Notificaciones", href: "#", Icon: BellIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
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
              <li className="relative">
                <button
                  id="more-toggle"
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  aria-label={expanded ? "Contraer" : "Expandir"}
                  aria-expanded={expanded}
                  className="group flex items-center justify-center gap-2 rounded-lg px-2.5 sm:px-3 py-2 transition-colors outline-none text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800"
                >
                  <CaretIcon className={`size-5 sm:size-[22px] text-current transition-transform ${expanded ? "rotate-180" : "rotate-0"}`} />
                  <span className="hidden sm:inline text-sm font-medium">Menú</span>
                </button>

                {/* Submenú compacto */}
                <div
                  role="menu"
                  aria-labelledby="more-toggle"
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-56 sm:w-64 rounded-xl border border-border-subtle bg-bg-800/95 backdrop-blur p-2 shadow-lg shadow-black/30 transition-all duration-150 ease-out origin-top ${
                    expanded ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <ul className="grid grid-cols-3 gap-2 sm:gap-3">
                    <li>
                      <a
                        href="#"
                        role="menuitem"
                        className="group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
                      >
                        <CRMIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">CRM</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        role="menuitem"
                        className="group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
                      >
                        <FriendsIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">Amigos</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        role="menuitem"
                        className="group flex flex-col items-center gap-1 rounded-md p-2 text-text-secondary hover:text-text-strong hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
                      >
                        <PaymentsIcon className="size-5 sm:size-6 text-current" />
                        <span className="text-xs sm:text-[13px] font-medium">Pagos</span>
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

          {/* Derecha: Avatar en círculo */}
          <div className="flex items-center">
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