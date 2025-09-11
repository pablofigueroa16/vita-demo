import Link from "next/link";

// Íconos inline coherentes con el sistema
function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5Z" />
    </svg>
  );
}
function GearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm9 4c0 .7-.08 1.38-.23 2.03l2.03 1.57a1 1 0 0 1 .22 1.36l-1.93 3.34a1 1 0 0 1-1.22.45l-2.39-.96c-.97.74-2.06 1.32-3.23 1.68l-.36 2.54a1 1 0 0 1-.99.86H10.3a1 1 0 0 1-1-.86l-.36-2.54a9.96 9.96 0 0 1-3.23-1.68l-2.4.96a1 1 0 0 1-1.22-.45L.16 17.0a1 1 0 0 1 .22-1.36l2.03-1.57A9.93 9.93 0 0 1 2.18 12c0-.7.08-1.38.23-2.03L.38 8.4A1 1 0 0 1 .16 7.04L2.1 3.7a1 1 0 0 1 1.22-.45l2.39.96c.97-.74 2.06-1.32 3.23-1.68l.36-2.54A1 1 0 0 1 10.3.13h3.4a1 1 0 0 1 1 .86l.36 2.54c1.17.36 2.26.94 3.23 1.68l2.39-.96a1 1 0 0 1 1.22.45l1.94 3.34a1 1 0 0 1-.22 1.36l-2.03 1.57c.15.65.23 1.33.23 2.03Z"/>
    </svg>
  );
}
function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M1.5 12S5.5 5.5 12 5.5 22.5 12 22.5 12 18.5 18.5 12 18.5 1.5 12 1.5 12Zm10.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    </svg>
  );
}

const stores = [
  {
    id: "s-1",
    name: "Belleza Natural",
    slug: "belleza-natural",
    status: "Activa",
    productsUsed: 4,
    productsLimit: 5,
    monthSales: 1890,
    visits: 234,
  },
  {
    id: "s-2",
    name: "Tech Accesorios",
    slug: "tech-accesorios",
    status: "Activa",
    productsUsed: 3,
    productsLimit: 5,
    monthSales: 560,
    visits: 89,
  },
] as const;

export default function TiendasPage() {
  const used = stores.length;
  const limit = 3; // según la captura: versión gratuita 3
  return (
    <main className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8 md:py-10">
      {/* Encabezado */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-text-strong">Mis Tiendas</h1>
          <p className="text-sm sm:text-base text-text-secondary">Gestiona tus tiendas instantáneas</p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary px-3.5 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        >
          <PlusIcon className="w-4 h-4" />
          Nueva Tienda
        </Link>
      </div>

      {/* Aviso de uso / upgrade */}
      <div className="mt-6 rounded-xl border border-border-subtle bg-[rgba(120,72,32,0.18)]/50 text-[inherit] p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-block w-2 h-2 rounded-full bg-warning-400"></span>
          <p className="text-sm sm:text-base text-text-primary">
            Tiendas utilizadas: <span className="font-medium">{used}/{limit}</span> (Versión Gratuita) 
            <span className="mx-1">•</span>
            <Link href="#" className="underline underline-offset-2 text-warning-300 hover:text-warning-200">Actualizar a Pro para tiendas ilimitadas</Link>
          </p>
        </div>
      </div>

      {/* Grid de tarjetas */}
      <section className="mt-6 sm:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stores.map((s) => (
            <article key={s.id} className="relative rounded-2xl border border-border-subtle bg-bg-900/60 p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
              {/* Estado */}
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-success-600/20 text-success-300 px-2 py-0.5 text-xs font-medium">{s.status}</span>
                <button aria-label={`Ajustes de ${s.name}`} className="text-text-muted hover:text-text-primary">
                  <GearIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Título y URL */}
              <h3 className="mt-3 text-lg font-semibold text-text-strong">{s.name}</h3>
              <p className="text-sm text-text-secondary">vita.com/usuario/{s.slug}</p>

              {/* Métricas */}
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-text-secondary">Productos:</dt>
                  <dd className="text-text-strong font-medium">{s.productsUsed}/{s.productsLimit}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-text-secondary">Ventas del mes:</dt>
                  <dd>
                    <Link href="#" className="text-primary-400 hover:text-primary-300 font-medium">${" "}{s.monthSales.toLocaleString("en-US")}</Link>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-text-secondary">Visitas:</dt>
                  <dd className="text-text-strong font-medium">{s.visits}</dd>
                </div>
              </dl>

              {/* Acciones */}
              <div className="mt-5 flex items-center gap-3">
                <Link
                  href={`/${s.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-subtle bg-bg-900/60 hover:bg-bg-hover px-3.5 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                >
                  <EyeIcon className="w-4 h-4" /> Ver
                </Link>
                <Link
                  href={`#/editar/${s.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary px-3.5 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                >
                  Editar
                </Link>
              </div>
            </article>
          ))}

          {/* Card para crear nueva tienda */}
          <article className="rounded-2xl border-2 border-dashed border-border-subtle/70 bg-bg-900/40 p-6 sm:p-8 text-center flex flex-col items-center justify-center">
            <div className="grid place-items-center w-14 h-14 rounded-full bg-bg-800/70">
              <PlusIcon className="w-6 h-6 text-text-primary" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-text-strong">Crear Nueva Tienda</h3>
            <p className="text-sm text-text-secondary mt-1">Tienda {limit}/{limit} disponible en versión gratuita</p>
            <Link
              href="#"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary px-4 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              Crear Tienda
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}