import Image from "next/image";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M10.5 3a7.5 7.5 0 1 1 4.8 13.3l3.2 3.2a.75.75 0 1 1-1.06 1.06l-3.2-3.2A7.5 7.5 0 0 1 10.5 3Zm0 1.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M11 5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5Z" />
    </svg>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M2.4 11.2 20.5 3.4a1 1 0 0 1 1.3 1.3l-7.8 18.1a1 1 0 0 1-1.9-.2l-1.7-6-6-1.7a1 1 0 0 1-.2-1.9Z" />
    </svg>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <path fill="currentColor" d="M11 2a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2h-1ZM4 9a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v5a4 4 0 0 1-4 4h-2.2l-.8 1.6a1.5 1.5 0 0 1-2.7 0L8.5 18H8a4 4 0 0 1-4-4V9Zm5-2a3 3 0 0 0-3 3v4a2 2 0 0 0 2 2h1.2c.38 0 .72.21.9.55L12 19l1.9-3.45c.18-.34.53-.55.9-.55H16a2 2 0 0 0 2-2v-4a3 3 0 0 0-3-3H9Zm-1 5.25a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0v-.5Zm7 0a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0v-.5Z" />
    </svg>
  );
}

function DotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
      <circle cx="12" cy="12" r="5" fill="currentColor" />
    </svg>
  );
}

export default function ChatPage() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
      {/* Encabezado */}
      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-text-strong">Chat AI</h1>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-btn-primary text-btn-primary-text px-3.5 py-2 text-sm font-medium hover:bg-btn-primary-hover active:bg-btn-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-900"
          aria-label="Nueva Conversación"
        >
          <PlusIcon className="w-4 h-4" />
          <span>Nueva Conversación</span>
        </button>
      </div>

      {/* Contenedor principal */}
      <div className="rounded-2xl border border-border-subtle bg-bg-900/70 p-2 sm:p-3">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
          {/* Columna izquierda: Lista de conversaciones */}
          <aside className="w-full lg:w-80 xl:w-96 shrink-0 rounded-xl bg-bg-800/80 border border-border-subtle p-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-medium text-text-primary">Conversaciones Activas</h2>
            </div>
            <div className="relative mb-3">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="search"
                placeholder="Buscar conversaciones..."
                className="w-full rounded-lg bg-bg-900/70 border border-border-subtle pl-10 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label="Buscar conversaciones"
              />
            </div>

            <ul className="flex flex-col gap-1.5">
              {/* Item 1 */}
              <li>
                <button className="w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors">
                  <Image src="/user-perfil.jpeg" alt="María González" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-text-strong">María González</p>
                      <span className="shrink-0 text-xs text-text-muted">2 min</span>
                    </div>
                    <p className="truncate text-xs text-text-secondary">¿Tienen descuentos disponibles?</p>
                  </div>
                  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-primary-600 text-text-on-primary text-[10px] h-5 min-w-5 px-1.5">2</span>
                </button>
              </li>
              {/* Item 2 */}
              <li>
                <button className="w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors">
                  <Image src="/user-perfil.jpeg" alt="Carlos Ruiz" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-text-strong">Carlos Ruiz</p>
                      <span className="shrink-0 text-xs text-text-muted">15 min</span>
                    </div>
                    <p className="truncate text-xs text-text-secondary">Necesito información sobre…</p>
                  </div>
                </button>
              </li>
              {/* Item 3 */}
              <li>
                <button className="w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors">
                  <Image src="/user-perfil.jpeg" alt="Ana López" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-text-strong">Ana López</p>
                      <span className="shrink-0 text-xs text-text-muted">1h</span>
                    </div>
                    <p className="truncate text-xs text-text-secondary">¡Gracias por la respuesta!</p>
                  </div>
                </button>
              </li>
              {/* Item 4 */}
              <li>
                <button className="w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-left hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors">
                  <Image src="/user-perfil.jpeg" alt="Pedro Martín" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-text-strong">Pedro Martín</p>
                      <span className="shrink-0 text-xs text-text-muted">2h</span>
                    </div>
                    <p className="truncate text-xs text-text-secondary">¿Cuándo llega mi pedido?</p>
                  </div>
                </button>
              </li>
            </ul>
          </aside>

          {/* Columna derecha: Panel de chat */}
          <section className="flex-1 rounded-xl bg-bg-800/80 border border-border-subtle p-3 sm:p-4">
            {/* Header de conversación */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-divider">
              <div className="flex items-center gap-3">
                <Image src="/user-perfil.jpeg" alt="María González" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm sm:text-base font-medium text-text-strong">María González</p>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="inline-flex items-center gap-1 text-success-500">
                      <DotIcon className="w-2.5 h-2.5" /> En línea
                    </span>
                    <span className="text-text-muted">• Última vez hace 2 min</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block text-xs text-text-muted">14:35</div>
            </div>

            {/* Mensajes */}
            <div className="mt-4 space-y-3 sm:space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {/* Entrante */}
              <div className="flex items-start gap-2">
                <Image src="/user-perfil.jpeg" alt="María" width={28} height={28} className="h-7 w-7 rounded-full object-cover mt-0.5" />
                <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-tl-md bg-bg-900/80 border border-border-subtle px-3 py-2 text-sm text-text-primary">
                  <p>¡Hola! ¿Tienen descuentos disponibles para compras al por mayor?</p>
                </div>
              </div>

              {/* Saliente */}
              <div className="flex items-start gap-2 justify-end">
                <div className="max-w-[85%] sm:max-w-[70%] rounded-2xl rounded-tr-md bg-primary-600 text-text-on-primary px-3 py-2 text-sm shadow-sm">
                  <p>¡Hola María! Sí, tenemos descuentos especiales para compras mayores a $500. ¿Te interesa algún producto en particular?</p>
                </div>
              </div>

              {/* Sugerencia AI */}
              <div className="flex items-start gap-2">
                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-violet-500/20 ring-1 ring-inset ring-accent-violet-500/30 text-accent-violet-500">
                  <BotIcon className="w-4 h-4" />
                </div>
                <div className="flex-1 rounded-lg border border-border-subtle bg-bg-900/60 p-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-sm font-medium text-text-primary">Sugerencia AI</p>
                  </div>
                  <p className="text-sm text-text-secondary">Basado en el historial, María suele comprar productos de belleza. Sugiere el pack promocional de skincare.</p>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-800/70 px-2.5 py-1.5 text-sm text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800"
                    >
                      Usar Sugerencia
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <form className="mt-4 flex items-end gap-2">
              <label htmlFor="message" className="sr-only">Escribe tu mensaje</label>
              <textarea
                id="message"
                rows={1}
                placeholder="Escribe tu mensaje..."
                className="min-h-[44px] max-h-40 w-full resize-y rounded-lg bg-bg-900/70 border border-border-subtle px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-btn-primary text-btn-primary-text px-4 py-2 text-sm font-medium hover:bg-btn-primary-hover active:bg-btn-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800"
                aria-label="Enviar"
              >
                <SendIcon className="w-4 h-4" />
                <span>Enviar</span>
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}