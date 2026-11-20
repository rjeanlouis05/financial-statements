import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/balance-sheet")({
  head: () => ({ meta: [{ title: "Balance Sheet 20X5 | Kissena Baked Goods" }] }),
  component: BalanceSheet,
})

function BalanceSheet() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
      <h1 className="font-display text-4xl leading-tight">Balance Sheet</h1>
      <p className="mt-2 text-lg text-ink-soft">December 31, 20X5</p>
    </div>
  )
}
