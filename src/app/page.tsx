
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
        className="flex gap-3 sm:gap-4 lg:gap-6 h-56 sm:h-60 md:h-64 lg:h-72 select-none overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 sm:px-3 md:px-0"
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
                "transition-all duration-300 ease-out snap-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
                "min-w-[85%] sm:min-w-[60%] md:min-w-0 md:flex-1",
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
    </main>
  );
}
