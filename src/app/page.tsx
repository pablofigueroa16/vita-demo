
"use client";

import { useState } from "react";

function CRMIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v6.75a.75.75 0 0 1-1.5 0V10H5.5v6.5A2.5 2.5 0 0 0 8 19h7.5a.75.75 0 0 1 0 1.5H8A4 4 0 0 1 4 16.5v-11Z"/>
      <path fill="currentColor" d="M8.75 7.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"/>
    </svg>
  );
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M2.75 6A.75.75 0 0 1 3.5 5.25h10a.75.75 0 0 1 .75.75V9h2.88c.24 0 .47.11.62.3l2.5 3.25c.09.12.13.27.13.42V16a2 2 0 0 1-2 2h-.56a2.25 2.25 0 1 1-4.44 0H9.5a2.25 2.25 0 1 1-4.44 0H4a2 2 0 0 1-2-2V6.75A.75.75 0 0 1 2.75 6ZM14 10.5V6.75h-9V16c0 .28.22.5.5.5h.56a2.25 2.25 0 0 1 4.44 0h4.44a2.25 2.25 0 0 1 4.44 0H19.5a.5.5 0 0 0 .5-.5v-2.38l-2.14-2.62H14Z"/>
    </svg>
  );
}

function PaymentsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M3.5 6.75A2.75 2.75 0 0 1 6.25 4h11.5A2.75 2.75 0 0 1 20.5 6.75v10.5A2.75 2.75 0 0 1 17.75 20H6.25A2.75 2.75 0 0 1 3.5 17.25V6.75Zm1.5 2h14V6.75c0-.69-.56-1.25-1.25-1.25H6.25c-.69 0-1.25.56-1.25 1.25V8.75Zm0 1.5V17.25c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V10.25h-14Z"/>
      <rect width="6.5" height="1.5" x="6.75" y="13" rx="0.75" fill="currentColor"/>
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M13.5 2.75c3.72 0 7.75 3.01 7.75 7.75 0 2.26-1.2 4.63-3.23 6.83a.75.75 0 0 1-.5.24l-3.33.23a.75.75 0 0 1-.53-.2l-5.73-5.2a.75.75 0 0 1-.21-.77l.94-2.88a.75.75 0 0 1 .2-.33C10.5 5.06 12.05 2.75 13.5 2.75Zm-6.47 9.48L3.7 15.56a1.5 1.5 0 0 0 2.12 2.12l3.33-3.33-2.12-1.12Z"/>
    </svg>
  );
}

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M13.47 5.97a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H5.75a.75.75 0 0 1 0-1.5h10.94l-3.22-3.22a.75.75 0 0 1 0-1.06Z"/>
    </svg>
  );
}

const cards = [
  {
    id: "crm-pro",
    label: "CRM Pro",
    title: "Gestiona clientes a escala",
    desc: "Automatiza tu pipeline y cierra más ventas con plantillas y analíticas en tiempo real.",
    accent: "from-primary-700 to-primary-900",
    Icon: CRMIcon,
    cta: "Descubrir",
  },
  {
    id: "envios-24h",
    label: "Envíos 24h",
    title: "Logística ultrarrápida",
    desc: "Tarifas planas desde $2.99 con tracking y recolección en puerta.",
    accent: "from-success-500/20 to-transparent",
    Icon: TruckIcon,
    cta: "Ver opciones",
  },
  {
    id: "pagos-0",
    label: "Pagos",
    title: "Cobra sin fricción",
    desc: "Pago 1‑click, links y QR. Promoción: 0% comisión por lanzamiento.",
    accent: "from-primary-400/20 to-transparent",
    Icon: PaymentsIcon,
    cta: "Activar ahora",
  },
  {
    id: "ads-boost",
    label: "Ads Boost",
    title: "Duplica tus visitas",
    desc: "Posiciona tus productos con IA y obtén 7 días de prueba.",
    accent: "from-accent-violet-500/20 to-transparent",
    Icon: RocketIcon,
    cta: "Probar 7 días",
  },
] as const;

function EventsSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-4 sm:mt-6 md:mt-8">
      <div
        className="flex gap-2 sm:gap-4 lg:gap-6 h-56 sm:h-60 md:h-64 lg:h-72 select-none overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 pr-4 sm:px-3 md:px-0"
        onMouseLeave={() => setActive(0)}
        aria-label="Eventos y promociones del marketplace"
        role="list"
      >
        {cards.map((card, i) => {
          const Icon = card.Icon;
          const isActive = active === i;
          return (
            <article
              key={card.id}
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={[
                "group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-800/80 backdrop-blur-sm",
                "transition-all duration-300 ease-out snap-start shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
                "min-w-[70%] sm:min-w-[55%] md:min-w-0 md:flex-1",
                isActive ? "md:flex-[2_1_0%] ring-1 ring-primary-400/60 shadow-xl" : "md:flex-[1_1_0%] opacity-90",
              ].join(" ")}
            >
              <div className={`absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br ${card.accent} opacity-20`} />
              <div className="relative overflow-hidden p-4 sm:p-5 md:p-6 flex h-full flex-col gap-2.5 sm:gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-900/60 px-2.5 py-1 text-[11px] sm:text-xs text-text-secondary">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-400" />
                    {card.label}
                  </span>
                </div>
                <h3
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-text-strong"
                  style={!isActive ? ({
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties) : undefined}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm sm:text-base md:text-base text-text-secondary leading-relaxed flex-1 overflow-hidden"
                  style={!isActive ? ({
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties) : undefined}
                >
                  {card.desc}
                </p>
                <button
                  className="self-start mt-auto inline-flex items-center gap-2 rounded-lg bg-primary-600 px-3 py-1.5 sm:px-3.5 sm:py-2 text-sm md:text-sm lg:text-base font-medium text-text-on-primary transition-colors hover:bg-primary-500 active:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 max-w-full break-words text-left"
                  aria-label={card.cta}
                >
                  {card.cta}
                  <ArrowIcon className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8 md:py-12">
      <section aria-labelledby="events-title">
        <header className="mb-3 sm:mb-4 md:mb-6">
          <h2 id="events-title" className="text-lg sm:text-xl md:text-2xl font-semibold text-text-strong">
            Eventos y promociones del marketplace
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">Descubre novedades, oportunidades y beneficios para impulsar tus ventas.</p>
        </header>
        <EventsSection />
      </section>

      {/* Nueva sección de productos */}
      <section aria-labelledby="products-title" className="mt-8 sm:mt-10 md:mt-14">
        <header className="mb-3 sm:mb-4 md:mb-6">
          <h2 id="products-title" className="text-lg sm:text-xl md:text-2xl font-semibold text-text-strong">
            Productos destacados
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">Filtra por categoría o busca por nombre para encontrar lo que necesitas.</p>
        </header>
        <ProductsSection />
      </section>

      {/* Nueva sección de tiendas */}
      <section aria-labelledby="stores-title" className="mt-8 sm:mt-10 md:mt-14">
        <header className="mb-3 sm:mb-4 md:mb-6">
          <h2 id="stores-title" className="text-lg sm:text-xl md:text-2xl font-semibold text-text-strong">Tiendas</h2>
          <p className="text-sm sm:text-base text-text-secondary">Explora tiendas destacadas, conoce a sus creadores y sus mejores métricas.</p>
        </header>
        <StoresSection />
      </section>
    </main>
  );
}

// Nueva sección: Productos con buscador y filtros
function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M12 3.5c.3 0 .57.17.7.44l2.05 4.16 4.59.67a.75.75 0 0 1 .41 1.28l-3.32 3.24.78 4.53a.75.75 0 0 1-1.09.79L12 16.98l-4.12 2.16a.75.75 0 0 1-1.09-.79l.78-4.53L4.25 10.05a.75.75 0 0 1 .41-1.28l4.59-.67 2.05-4.16c.13-.27.4-.44.7-.44Z" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M10.5 3a7.5 7.5 0 1 1 4.8 13.3l3.2 3.2a.75.75 0 1 1-1.06 1.06l-3.2-3.2A7.5 7.5 0 0 1 10.5 3Zm0 1.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/>
    </svg>
  );
}

// Iconos para categorías de productos/tiendas
function DeviceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <rect x="6" y="3" width="12" height="18" rx="2" fill="currentColor" className={props.className} />
      <circle cx="12" cy="18" r="1" fill="#fff"/>
    </svg>
  );
}
function HomeCatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M3 11 12 4l9 7v8a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-8Z" fill="currentColor" className={props.className} />
    </svg>
  );
}
function ShirtIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M8 4 12 6l4-2 3 3-3 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9L5 7l3-3Z" fill="currentColor" className={props.className} />
    </svg>
  );
}
function HealthIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 21s-7-4.35-9.33-8.2C1 10.1 2.5 7 5.6 7c2 0 3.15 1.26 3.9 2.35C10.25 8.26 11.4 7 13.4 7c3.1 0 4.6 3.1 2.93 5.8C19 16.65 12 21 12 21Z" fill="currentColor" className={props.className} />
    </svg>
  );
}

function categoryVisuals(cat: string) {
  switch (cat) {
    case "Tecnología":
      return { gradient: "from-primary-600/30 to-primary-900/20", Icon: DeviceIcon };
    case "Hogar":
      return { gradient: "from-success-500/25 to-transparent", Icon: HomeCatIcon };
    case "Moda":
      return { gradient: "from-accent-violet-500/25 to-transparent", Icon: ShirtIcon };
    case "Salud":
      return { gradient: "from-warning-500/25 to-transparent", Icon: HealthIcon };
    default:
      return { gradient: "from-bg-700 to-transparent", Icon: DeviceIcon };
  }
}

function ProductImage({ category }: { category: string }) {
  const { gradient, Icon } = categoryVisuals(category);
  return (
    <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${gradient} border border-border-subtle`}>{/* Imagen representativa */}
      <div className="absolute inset-0 grid place-items-center text-primary-300/90">
        <Icon className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
    </div>
  );
}
const productCategories = [
  "Todos",
  "Tecnología",
  "Hogar",
  "Moda",
  "Salud",
] as const;

type Product = {
  id: string;
  name: string;
  category: typeof productCategories[number] | Exclude<string, "Todos">;
  price: number;
  rating: number; // 0..5
};

const products: Product[] = [
  { id: "p-1", name: "Auriculares Bluetooth", category: "Tecnología", price: 39.99, rating: 4 },
  { id: "p-2", name: "Smartwatch Pro", category: "Tecnología", price: 129.0, rating: 5 },
  { id: "p-3", name: "Cafetera Espresso", category: "Hogar", price: 89.5, rating: 4 },
  { id: "p-4", name: "Set de Sábanas 400 hilos", category: "Hogar", price: 59.9, rating: 5 },
  { id: "p-5", name: "Zapatillas Urban", category: "Moda", price: 49.0, rating: 4 },
  { id: "p-6", name: "Chaqueta Impermeable", category: "Moda", price: 79.9, rating: 5 },
  { id: "p-7", name: "Suplemento Omega-3", category: "Salud", price: 19.9, rating: 4 },
  { id: "p-8", name: "Báscula Inteligente", category: "Salud", price: 34.9, rating: 3 },
];

function formatCurrency(n: number) {
  try {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
  } catch {
    return `$${n.toFixed(2)}`;
  }
}

function ProductsSection() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<typeof productCategories[number]>("Todos");
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const filtered = products.filter((p) => {
    const matchCat = activeCat === "Todos" ? true : p.category === activeCat;
    const q = query.trim().toLowerCase();
    const matchQuery = q ? (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : true;
    return matchCat && matchQuery;
  });

  const toggleAdd = (id: string) => {
    setAdded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mt-8 sm:mt-10 md:mt-12">
      {/* Controles: buscador + categorías */}
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full rounded-xl bg-bg-800/80 border border-border-subtle pl-10 pr-3 py-2.5 text-sm sm:text-base text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Buscar productos"
          />
        </div>
 
        <div className="flex items-center gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-1 px-1">
          {productCategories.map((cat) => {
            const active = activeCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={[
                  "shrink-0 snap-start inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors",
                  active ? "bg-primary-600 text-text-on-primary border-transparent" : "bg-bg-900/60 text-text-secondary border-border-subtle hover:bg-bg-hover",
                ].join(" ")}
                aria-pressed={active}
                aria-label={`Filtrar por ${cat}`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
 
      {/* Título antes de la lista de productos */}
      <h3 className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl font-semibold text-text-strong">Productos destacados</h3>
 
      {/* Lista de productos */}
      <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-800/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 flex flex-col"
          >
            {/* Imagen representativa */}
            <ProductImage category={p.category} />
 
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-900/60 px-2.5 py-1 text-[11px] sm:text-xs text-text-secondary">
                {p.category}
              </span>
            </div>
            <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-text-strong" style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as React.CSSProperties}>{p.name}</h3>
 
            <div className="mt-2 flex items-center gap-1" aria-label={`Calificación: ${p.rating} de 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={(i < p.rating ? "text-warning-500" : "text-text-muted") + " w-4 h-4"}
                />
              ))}
            </div>
 
            <div className="mt-3 sm:mt-4 flex items-center justify-between">
              <span className="text-base sm:text-lg font-semibold text-text-strong">{formatCurrency(p.price)}</span>
              <button
                onClick={() => toggleAdd(p.id)}
                className={[
                  "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
                  added[p.id]
                    ? "bg-primary-700 text-text-on-primary"
                    : "bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary",
                ].join(" ")}
                aria-pressed={!!added[p.id]}
                aria-label={added[p.id] ? "Agregado" : "Agregar"}
              >
                {added[p.id] ? "Agregado" : "Agregar"}
              </button>
            </div>
          </article>
        ))}
 
        {filtered.length === 0 && (
          <div className="col-span-full py-10 text-center text-text-secondary">No se encontraron productos.</div>
        )}
      </div>
    </div>
  );
}

// Sección: Tiendas
type Store = {
  id: string;
  name: string;
  category: typeof productCategories[number] | string;
  creator: string; // usuario que la creó
  rating: number; // 0..5
  productsCount: number;
  salesCount: number;
};

const stores: Store[] = [
  { id: "s-1", name: "TechNova", category: "Tecnología", creator: "@lucas", rating: 5, productsCount: 120, salesCount: 4300 },
  { id: "s-2", name: "Casa & Confort", category: "Hogar", creator: "@ana", rating: 4, productsCount: 80, salesCount: 2100 },
  { id: "s-3", name: "Urban Outfit", category: "Moda", creator: "@diego", rating: 5, productsCount: 150, salesCount: 5600 },
];

function StoreImage({ category }: { category: string }) {
  const { gradient, Icon } = categoryVisuals(category);
  return (
    <div className={`relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br ${gradient} border border-border-subtle`}>
      <div className="absolute inset-0 grid place-items-center text-primary-300/90">
        <Icon className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
    </div>
  );
}

function StoresSection() {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {stores.map((s) => (
          <article key={s.id} className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-800/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 flex flex-col">
            {/* Imagen */}
            <StoreImage category={s.category} />

            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-900/60 px-2.5 py-1 text-[11px] sm:text-xs text-text-secondary">
                {s.category}
              </span>
            </div>

            <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-text-strong" style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as React.CSSProperties}>{s.name}</h3>

            <p className="text-sm text-text-secondary">Por <span className="font-medium text-text-strong">{s.creator}</span></p>

            <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1" aria-label={`Calificación: ${s.rating} de 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className={(i < s.rating ? "text-warning-500" : "text-text-muted") + " w-4 h-4"} />
                ))}
              </div>
              <div className="text-sm text-text-secondary flex items-center gap-3">
                <span><span className="font-medium text-text-strong">{s.productsCount}</span> productos</span>
                <span><span className="font-medium text-text-strong">{s.salesCount}</span> ventas</span>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 text-sm font-medium bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400" aria-label={`Ver tienda ${s.name}`}>Ver</button>
              <button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 text-sm font-medium bg-bg-900/60 text-text-primary border border-border-subtle hover:bg-bg-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400" aria-label={`Contactar tienda ${s.name}`}>Contactar</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
