import Link from "next/link";

export default function GoldRossePage() {
  const products = [
    { id: "gr-1", name: "Dark Ember", price: 79.0, rating: 5, image: "/tiendas/gold-rosse/dark-ember/10.jpg" },
    { id: "gr-2", name: "Drako Red", price: 85.0, rating: 5, image: "/tiendas/gold-rosse/drako-red/1.jpg" },
    { id: "gr-3", name: "Glacier", price: 69.0, rating: 4, image: "/tiendas/gold-rosse/glacier/6.jpg" },
  ];

  const formatCurrency = (n: number) => {
    try {
      return new Intl.NumberFormat("es-ES", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
    } catch {
      return `$${n.toFixed(2)}`;
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8 md:py-10">
      {/* Header de tienda */}
      <header className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-800/80 p-5 sm:p-6 md:p-8">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-border-subtle bg-bg-900/60 shrink-0">
            <img src="/tiendas/gold-rosse/goldrosse-logo.jpg" alt="Logo de Gold Rosse" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-strong truncate">Gold Rosse</h1>
            <p className="mt-1 text-sm sm:text-base text-text-secondary">Por <span className="font-medium text-text-strong">Jose Rubio</span></p>
            <p className="mt-2 text-sm text-text-secondary max-w-3xl">
              Elegancia y carácter. Fragancias y productos de cuidado personal que reflejan estilo propio.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <span><span className="font-medium text-text-strong">24</span> productos</span>
              <span><span className="font-medium text-text-strong">1.200</span> ventas</span>
              <span className="inline-flex items-center gap-1"><span className="font-medium text-text-strong">5.0</span>★</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/tiendas" className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-900/60 hover:bg-bg-hover px-3.5 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">Volver a Tiendas</Link>
            <Link href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary px-3.5 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">Contactar</Link>
          </div>
        </div>
      </header>

      {/* Sección de productos destacados */}
      <section className="mt-8 sm:mt-10">
        <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-text-strong">Productos destacados</h2>
          <Link href="#catalogo" className="text-sm text-primary-400 hover:text-primary-300">Ver catálogo completo</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {products.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-800/80 backdrop-blur-sm p-4 sm:p-5 flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-bg-900/60">
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="mt-3 text-base sm:text-lg font-semibold text-text-strong truncate">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-base sm:text-lg font-semibold text-text-strong">{formatCurrency(p.price)}</span>
                <span className="text-sm text-text-secondary" aria-label={`Calificación: ${p.rating} de 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={"inline-block align-middle " + (i < p.rating ? "text-warning-500" : "text-text-muted")}>★</span>
                  ))}
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary px-3 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">Agregar</button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-900/60 hover:bg-bg-hover text-text-primary px-3 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">Detalles</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Acerca de la marca */}
      <section id="contacto" className="mt-10 sm:mt-12 md:mt-14">
        <div className="rounded-2xl border border-border-subtle bg-bg-800/80 p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-text-strong">Acerca de Gold Rosse</h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-3xl">
            Gold Rosse es una marca dedicada a crear experiencias sensoriales memorables a través de fragancias y productos de cuidado personal. Cada pieza está
            diseñada para destacar tu personalidad con un acabado premium.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Link href="#" className="inline-flex items-center gap-2 rounded-lg bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-text-on-primary px-3.5 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">Seguir tienda</Link>
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-900/60 hover:bg-bg-hover px-3.5 py-2 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">Volver al inicio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}