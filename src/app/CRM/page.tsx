import Image from "next/image";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M10.5 3a7.5 7.5 0 1 1 4.8 13.3l3.2 3.2a.75.75 0 1 1-1.06 1.06l-3.2-3.2A7.5 7.5 0 0 1 10.5 3Zm0 1.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
    </svg>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M12.7 2.1a1 1 0 0 1 .8.5l3.8 6.4a1 1 0 0 1-.4 1.4l-2.9 1.7 2 7.6a1 1 0 0 1-1.7 1l-8.1-9.3a1 1 0 0 1 .3-1.6l4.1-2.2-1.2-3.9a1 1 0 0 1 .8-1.3Z" />
    </svg>
  );
}

function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M4 13a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0v-6Zm6-4a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V9Zm6-6a1 1 0 0 1 2 0v16a1 1 0 1 1-2 0V3Z" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-primary-600/20 text-primary-200 text-[10px] h-5 min-w-5 px-1.5">{children}</span>
  );
}

export default function CRMPage() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-text-strong">CRM AI</h1>
          <p className="text-sm text-text-secondary">Gestión inteligente de relaciones con clientes</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-btn-primary text-btn-primary-text px-3.5 py-2 text-sm font-medium hover:bg-btn-primary-hover active:bg-btn-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4"><path fill="currentColor" d="M11 5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5Z"/></svg>
          <span>Nuevo Cliente</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Panel izquierdo: Clientes recientes */}
        <section className="rounded-2xl border border-border-subtle bg-bg-900/70 p-3 sm:p-4">
          <h2 className="text-sm font-medium text-text-primary mb-3">Clientes Recientes</h2>
          <div className="relative mb-3">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="search"
              placeholder="Buscar clientes..."
              className="w-full rounded-lg bg-bg-800/70 border border-border-subtle pl-10 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="Buscar clientes"
            />
          </div>

          <ul className="flex flex-col divide-y divide-divider/60">
            {[{
              name: "María González", email: "maria@email.com", status: "Activo", amount: "$1,250", tag: "VIP"
            },{
              name: "Carlos Ruiz", email: "carlos@email.com", status: "Seguimiento", amount: "$890", tag: "Regular"
            },{
              name: "Ana López", email: "ana@email.com", status: "Nuevo", amount: "$340", tag: "Nuevo"
            },{
              name: "Pedro Martín", email: "pedro@email.com", status: "Activo", amount: "$2,100", tag: "VIP"
            }].map((c, idx) => (
              <li key={idx} className="flex items-center gap-3 py-3">
                <Image src="/user-perfil.jpeg" alt={c.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-text-strong">{c.name}</p>
                  <p className="truncate text-xs text-text-secondary">{c.email}</p>
                  <div className="mt-0.5 flex items-center gap-2 text-xs">
                    <span className="text-text-muted">{c.status}</span>
                    <span className="text-info-500">{c.amount}</span>
                  </div>
                </div>
                <Badge>{c.tag}</Badge>
              </li>
            ))}
          </ul>
        </section>

        {/* Panel derecho: Insights AI */}
        <section className="rounded-2xl border border-border-subtle bg-bg-900/70 p-3 sm:p-4">
          <h2 className="text-sm font-medium text-text-primary mb-2">Insights AI</h2>
          <p className="text-xs text-text-secondary mb-3">Análisis inteligente de tus clientes</p>

          {/* Recomendación AI */}
          <div className="rounded-xl border border-border-subtle bg-bg-800/70 p-3 sm:p-4 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-600/20 text-primary-300 ring-1 ring-inset ring-primary-600/30">
                <BoltIcon className="w-3.5 h-3.5" />
              </span>
              <p className="text-sm font-medium text-text-primary">Recomendación AI</p>
            </div>
            <p className="text-sm text-text-secondary mb-2">María González no ha comprado en 15 días. Basado en su historial, es buen momento para ofrecerle el nuevo producto de skincare.</p>
            <button className="inline-flex items-center rounded-md bg-bg-800/90 border border-border-subtle px-2.5 py-1.5 text-xs text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Crear Seguimiento</button>
          </div>

          {/* Oportunidad de Venta */}
          <div className="rounded-xl border border-border-subtle bg-bg-800/70 p-3 sm:p-4 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-600/20 text-primary-300 ring-1 ring-inset ring-primary-600/30">
                <ChartIcon className="w-3.5 h-3.5" />
              </span>
              <p className="text-sm font-medium text-text-primary">Oportunidad de Venta</p>
            </div>
            <p className="text-sm text-text-secondary mb-2">Pedro Martín ha visto productos similares 3 veces. Probabilidad de compra: 85%</p>
            <button className="inline-flex items-center rounded-md bg-bg-800/90 border border-border-subtle px-2.5 py-1.5 text-xs text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Contactar Ahora</button>
          </div>

          {/* Segmentación */}
          <div>
            <h3 className="text-sm font-medium text-text-primary mb-2">Segmentación Automática</h3>
            <ul className="space-y-2">
              {[{ label: "Clientes VIP", count: 23 }, { label: "Regulares", count: 67 }, { label: "Nuevos", count: 37 }].map((s) => (
                <li key={s.label} className="flex items-center justify-between rounded-lg border border-border-subtle bg-bg-800/60 px-3 py-2">
                  <span className="text-sm text-text-primary">{s.label}</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-primary-600/20 text-primary-200 text-[10px] h-5 min-w-5 px-1.5">{s.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}