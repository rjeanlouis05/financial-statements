import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/disclosures" as never)({
  head: () => ({ meta: [{ title: "Disclosures | Kissena Baked Goods" }] }),
  component: Disclosures,
})

function Disclosures() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
      <h1 className="font-display text-4xl">Disclosures</h1>
      <p className="mt-2 text-lg text-ink-soft">December 31, 20X5</p>
      <p className="mt-4 text-ink-soft">Amounts are whole US dollars.</p>
    </div>
  )
}