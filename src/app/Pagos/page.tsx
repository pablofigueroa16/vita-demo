import Image from "next/image";

import type { ReactNode } from "react";

function Badge({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "success" | "warning" | "danger" }) {
  const tones: Record<string, string> = {
    info: "bg-primary-600/20 text-primary-200",
    success: "bg-success-500/20 text-success-500",
    warning: "bg-warning-500/20 text-warning-500",
    danger: "bg-danger-500/20 text-danger-500",
  };
  return (
    <span className={`inline-flex items-center justify-center rounded-full ${tones[tone]} text-[10px] h-5 min-w-5 px-1.5`}>{children}</span>
  );
}

function Dot({ className = "" }) {
  return <span className={`inline-block w-2 h-2 rounded-full ${className}`} />;
}

export default function PagosPage() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-text-strong">Pagos y Finanzas</h1>
          <p className="text-sm text-text-secondary">Gestiona tus transacciones y tarjeta virtual</p>
        </div>
        <Badge>Conectado con Cregis</Badge>
      </div>

      {/* Balance y tarjeta virtual */}
      <section className="rounded-2xl border border-border-subtle bg-bg-900/70 p-4 sm:p-5 mb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-text-secondary">Saldo Disponible</p>
            <p className="mt-1 text-3xl sm:text-4xl font-semibold text-text-strong">$2,847.50</p>
            <div className="mt-3 flex items-center gap-2">
              <button className="inline-flex items-center rounded-md bg-btn-primary text-btn-primary-text px-3 py-1.5 text-sm font-medium hover:bg-btn-primary-hover active:bg-btn-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Ver Tarjeta</button>
              <button className="inline-flex items-center rounded-md border border-border-subtle bg-bg-800/80 px-3 py-1.5 text-sm text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Retirar Fondos</button>
            </div>
          </div>
          <div className="text-right text-sm text-text-primary hidden sm:block">
            <p className="text-text-secondary">Tarjeta Virtual</p>
            <p className="mt-1 tracking-widest">**** 4521</p>
          </div>
        </div>
      </section>

      {/* Grilla principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Transacciones recientes */}
        <section className="rounded-2xl border border-border-subtle bg-bg-900/70 p-3 sm:p-4">
          <h2 className="text-sm font-medium text-text-primary">Transacciones Recientes</h2>
          <p className="text-xs text-text-secondary mb-3">Últimos movimientos en tu cuenta</p>
          <ul className="divide-y divide-divider/60">
            {[{
              title: "Serum Vitamina C - María G.", ago: "Hace 2h", amount: "+$45.00", status: "Completado", tone: "success"
            },{
              title: "Auriculares BT - Carlos R.", ago: "Hace 5h", amount: "+$89.00", status: "Completado", tone: "success"
            },{
              title: "Comisión VITA (3%)", ago: "Hace 5h", amount: "-$4.02", status: "Procesado", tone: "warning"
            },{
              title: "Transferencia a banco", ago: "Ayer", amount: "-$200.00", status: "Completado", tone: "danger"
            }].map((t, i) => (
              <li key={i} className="flex items-center justify-between gap-3 py-3">
                <div className="flex items-start gap-3">
                  <Dot className={t.tone === "success" ? "bg-success-500" : t.tone === "warning" ? "bg-warning-500" : "bg-danger-500"} />
                  <div>
                    <p className="text-sm text-text-primary">{t.title}</p>
                    <p className="text-xs text-text-muted">{t.ago} • <span className="text-text-secondary">{t.status}</span></p>
                  </div>
                </div>
                <span className={`${t.tone === "success" ? "text-success-500" : t.tone === "warning" ? "text-warning-500" : "text-danger-500"} text-sm font-medium`}>{t.amount}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Configuración de pagos */}
        <section className="rounded-2xl border border-border-subtle bg-bg-900/70 p-3 sm:p-4">
          <h2 className="text-sm font-medium text-text-primary">Configuración de Pagos</h2>
          <p className="text-xs text-text-secondary mb-3">Gestiona tus métodos de pago y comisiones</p>

          {/* Comisión Actual */}
          <div className="rounded-xl border border-border-subtle bg-bg-800/70 p-3 sm:p-4 mb-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-text-primary">Comisión Actual</p>
              <Badge>3.1%</Badge>
            </div>
            <p className="mt-1 text-xs text-text-secondary">Versión gratuita • Actualiza a Pro para comisiones reducidas (2.1%)</p>
            <button className="mt-2 w-full inline-flex items-center justify-center rounded-md bg-bg-800/90 border border-border-subtle px-3 py-2 text-sm text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Actualizar a Pro</button>
          </div>

          {/* Tarjeta virtual */}
          <div className="rounded-xl border border-border-subtle bg-bg-800/70 p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-text-secondary">Tarjeta Virtual VISA</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-bg-900 to-bg-800 border border-border-subtle p-4 text-text-primary">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-text-muted">VITA CARD</p>
                  <p className="mt-2 tracking-widest">**** **** **** 4521</p>
                  <p className="mt-2 text-xs text-text-secondary">Víctor Conalín</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">VISA</p>
                  <p className="text-xs text-text-secondary mt-6">12/27</p>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button className="inline-flex items-center justify-center rounded-md bg-bg-800/90 border border-border-subtle px-3 py-2 text-sm text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Ver Detalles</button>
              <button className="inline-flex items-center justify-center rounded-md bg-bg-800/90 border border-border-subtle px-3 py-2 text-sm text-text-primary hover:bg-bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800">Configurar</button>
            </div>

            {/* Cuenta bancaria */}
            <div className="mt-3">
              <p className="text-sm text-text-primary mb-2">Cuenta Bancaria</p>
              <div className="flex items-center justify-between rounded-lg border border-border-subtle bg-bg-800/60 px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bg-900/80 text-text-primary ring-1 ring-inset ring-border-subtle">B</span>
                  <div>
                    <p className="text-sm text-text-primary">Banco Nacional</p>
                    <p className="text-xs text-text-secondary">****1234</p>
                  </div>
                </div>
                <span className="inline-flex items-center justify-center rounded-full bg-success-500/20 text-success-500 text-[10px] h-5 min-w-5 px-1.5">Verificada</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}