import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/income-statment")({
  head: () => ({ meta: [{ title: "Income Statement 20X5 | Kissena Baked Goods" }] }),
  component: IncomeStatement,
})

function IncomeStatement() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
      <h1 className="font-display text-4xl leading-tight">Income Statement</h1>
      <p className="mt-2 text-lg text-ink-soft">For the year ended December 31, 20X5</p>
    </div>
  )
}


