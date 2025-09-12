"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "./CartContext";

// Tipado de item de navegación
type NavItem = {
  name: string;
  href: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
};

// Conjunto de íconos inline (sin dependencias extra)
const MarketplaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    {/* Icono de Home */}
    <path d="M3 10l9-7 9 7" />
    <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
    <path d="M10 22V12h4v10" />
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

// Íconos nuevos para el botón de menú y cerrar
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="9" cy="21" r="1.5" />
    <circle cx="18" cy="21" r="1.5" />
    <path d="M2 3h3l2.4 12.5A2 2 0 0 0 9.36 17H18a2 2 0 0 0 2-1.6l1.2-6H6" />
  </svg>
);

const items: NavItem[] = [
  { name: "Home", href: "/", Icon: MarketplaceIcon },
  { name: "Tiendas", href: "/tiendas", Icon: StoreIcon },
  { name: "Chat", href: "/chat", Icon: ChatIcon },
  { name: "Notificaciones", href: "#", Icon: BellIcon },
];

// Enlaces a mostrar en el modal vertical (incluye los principales y adicionales)
const modalLinks: NavItem[] = [
  ...items,
  { name: "CRM", href: "/CRM", Icon: CRMIcon },
  { name: "Pagos", href: "/Pagos", Icon: PaymentsIcon },
  { name: "Buscar", href: "#", Icon: SearchIcon },
  { name: "Amigos", href: "#", Icon: FriendsIcon },
  { name: "Configuración", href: "#", Icon: SettingsIcon },
];

export default function Navbar() {
  const pathname = usePathname();
  // const [expanded, setExpanded] = useState(false);
  // const menuRef = useRef<HTMLLIElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCloseBtnRef = useRef<HTMLButtonElement | null>(null);
  const { state, count, total, setQuantity, removeItem, clear } = useCart();

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

  // Accesibilidad modal: cerrar con Escape y bloquear scroll del body
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(id);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => cartCloseBtnRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(id);
    };
  }, [cartOpen]);

  const formatCurrency = (n: number) => {
    try {
      return new Intl.NumberFormat("es-ES", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
    } catch {
      return `$${n.toFixed(2)}`;
    }
  };

  return (
    <>
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

            {/* Centro: botón de menú (reemplaza el menú previo) */}
            <div className="flex-1" />

            {/* Derecha: Avatar + Interruptor de tema + Carrito */}
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

              {/* Botón de menú junto al cambio de tema */}
              <button
                id="open-nav"
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                aria-controls="nav-modal"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition"
              >
                <MenuIcon className="size-5 text-current" />
                <span className="sr-only">Abrir menú de navegación</span>
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
              {/* Carrito */}
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={cartOpen}
                aria-controls="cart-modal"
                className="relative inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition"
                aria-label="Abrir carrito"
                title="Carrito"
              >
                <CartIcon className="size-5 text-current" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary-600 text-text-on-primary text-[10px] leading-[18px] text-center font-semibold shadow">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Modal de navegación vertical */}
        {false && (
          <div className="fixed inset-x-0 bottom-0 top-16 z-[60]">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="nav-modal-title"
              id="nav-modal"
              className="absolute bottom-4 right-4 w-[min(92vw,480px)] max-w-md rounded-2xl border border-border-subtle bg-bg-800/95 backdrop-blur shadow-xl p-4 sm:p-6 focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h2 id="nav-modal-title" className="text-lg font-semibold text-text-strong">Navegación</h2>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800"
                  aria-label="Cerrar menú"
                >
                  <CloseIcon className="size-5 text-current" />
                </button>
              </div>
        
              <nav className="mt-4">
                <ul className="flex flex-col gap-2">
                  {modalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 border border-transparent hover:border-border-subtle hover:bg-bg-hover text-text-secondary hover:text-text-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 ${
                          pathname === link.href && link.href !== "#" ? "bg-primary-700/15 text-primary-200 border-border-subtle" : ""
                        }`}
                        aria-current={pathname === link.href && link.href !== "#" ? "page" : undefined}
                      >
                        <link.Icon className="size-5 text-current" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </nav>

      <NavbarModalPortal
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        closeBtnRef={closeBtnRef}
        modalLinks={modalLinks}
        pathname={pathname}
      />

      <CartModalPortal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        closeBtnRef={cartCloseBtnRef}
        items={Object.values(state.items)}
        total={total}
        setQuantity={setQuantity}
        removeItem={removeItem}
        clear={clear}
        formatCurrency={formatCurrency}
      />
      </>
    );
}

{/* Modal de navegación vertical: AHORA EN PORTAL, POR DEBAJO DEL NAVBAR */}
{/* Nota: el componente Navbar es client, por lo que document existe en cliente. */}
export function NavbarModalPortal({
  open,
  onClose,
  closeBtnRef,
  modalLinks,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  closeBtnRef: React.RefObject<HTMLButtonElement>;
  modalLinks: { name: string; href: string; Icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement }[];
  pathname: string | null;
}) {
  if (!open || typeof window === "undefined") return null;
  return createPortal(
    <div className="fixed inset-x-0 top-16 bottom-0 z-40">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Contenedor flex para centrar verticalmente y alinear a la derecha */}
      <div className="absolute inset-0 flex items-center justify-end p-4 pointer-events-none">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="nav-modal-title"
          id="nav-modal"
          className="pointer-events-auto w-[min(92vw,480px)] max-w-md rounded-2xl border border-border-subtle bg-bg-800/95 backdrop-blur shadow-xl p-4 sm:p-6 focus:outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <h2 id="nav-modal-title" className="text-lg font-semibold text-text-strong">Navegación</h2>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
              aria-label="Cerrar menú"
            >
              <CloseIcon className="size-5 text-current" />
            </button>
          </div>

          <nav className="mt-4">
            <ul className="flex flex-col gap-2">
              {modalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 border border-transparent hover:border-border-subtle hover:bg-bg-hover text-text-secondary hover:text-text-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors ${
                      pathname === link.href && link.href !== "#" ? "bg-primary-700/15 text-primary-200 border-border-subtle" : ""
                    }`}
                    aria-current={pathname === link.href && link.href !== "#" ? "page" : undefined}
                  >
                    <link.Icon className="size-5 text-current" />
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function CartModalPortal({
  open,
  onClose,
  closeBtnRef,
  items,
  total,
  setQuantity,
  removeItem,
  clear,
  formatCurrency,
}: {
  open: boolean;
  onClose: () => void;
  closeBtnRef: React.RefObject<HTMLButtonElement>;
  items: { id: string; name: string; price: number; image?: string; quantity: number }[];
  total: number;
  setQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  formatCurrency: (n: number) => string;
}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  if (!open || typeof window === "undefined") return null;

  const handleFinalize = () => {
    setError(null);
    if (!items.length) {
      setError("Agrega productos para continuar.");
      return;
    }
    const invalid = items.some((it) => !it.quantity || it.quantity <= 0);
    if (invalid) {
      setError("Revisa las cantidades de tus productos.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      clear();
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return createPortal(
    <div className="fixed inset-x-0 top-16 bottom-0 z-40">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-end p-4 pointer-events-none">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-modal-title"
          id="cart-modal"
          className="pointer-events-auto w-[min(92vw,520px)] max-w-md rounded-2xl border border-border-subtle bg-bg-800/95 backdrop-blur shadow-xl p-4 sm:p-6 focus:outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <h2 id="cart-modal-title" className="text-lg font-semibold text-text-strong">Tu carrito</h2>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-inset ring-border-subtle hover:ring-primary-400/50 hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
              aria-label="Cerrar carrito"
            >
              <CloseIcon className="size-5 text-current" />
            </button>
          </div>

          {success && (
            <div role="status" aria-live="polite" className="mt-3 rounded-lg border border-success-600/40 bg-success-600/15 text-success-300 px-3 py-2 text-sm">
              ¡Compra finalizada con éxito!
            </div>
          )}
          {error && (
            <div role="alert" className="mt-3 rounded-lg border border-warning-600/40 bg-warning-600/15 text-warning-300 px-3 py-2 text-sm">
              {error}
            </div>
          )}

          <div className="mt-4 space-y-3 max-h-[45vh] overflow-y-auto pr-1">
            {items.length === 0 ? (
              <p className="text-sm text-text-secondary">Tu carrito está vacío.</p>
            ) : (
              items.map((it) => (
                <div key={it.id} className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-900/60 p-3">
                  {it.image ? (
                    <Image src={it.image} alt={it.name} width={56} height={56} className="h-14 w-14 rounded-lg object-cover" />
                  ) : (
                    <div className="h-14 w-14 rounded-lg bg-bg-800 flex items-center justify-center text-text-muted text-xs">IMG</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-strong truncate">{it.name}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{formatCurrency(it.price)} c/u</p>
                    <p className="text-xs text-text-secondary mt-0.5">Total: <span className="font-semibold text-text-strong">{formatCurrency(it.price * it.quantity)}</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => (it.quantity > 1 ? setQuantity(it.id, it.quantity - 1) : removeItem(it.id))}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-inset ring-border-subtle hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                      aria-label={`Disminuir cantidad de ${it.name}`}
                    >
                      -
                    </button>
                    <span className="min-w-[1.5ch] text-sm text-text-strong text-center">{it.quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(it.id, it.quantity + 1)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-inset ring-border-subtle hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                      aria-label={`Incrementar cantidad de ${it.name}`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(it.id)}
                      className="ml-1 inline-flex h-8 px-2 items-center justify-center rounded-md border border-border-subtle text-xs text-text-secondary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 border-t border-border-subtle pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Total</span>
              <span className="text-base font-semibold text-text-strong">{formatCurrency(total)}</span>
            </div>
            <button
              type="button"
              onClick={handleFinalize}
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary text-sm font-medium px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}