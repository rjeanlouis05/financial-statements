import { createFileRoute } from "@tanstack/react-router"
export const Route = createFileRoute("/disclosures")({
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
      <p className="mt-6 text-ink-soft">These disclosures explain equipment and vehicles and accounts receivable at December 31, 20X5.</p>
<p className="mt-4 text-ink-soft">The details reconcile with the balance sheet and do not change its amounts.</p> 
<ul className="list-disc pl-6 mt-6 space-y-2 text-ink-soft">
  <li>Equipment and vehicles are shown at cost less accumulated depreciation.</li>
  <li>No depreciation method or asset age is calculated here.</li>
  <li>The two receivables components make up the reported balance.</li>
</ul>
<ol className="list-decimal pl-6 mt-6 space-y-2 text-ink-soft">
  <li>Subtract accumulated depreciation from cost.</li>
  <li>Add the two receivables components.</li>
  <li>Compare each total with the balance sheet.</li>
</ol>
    </div>
  )
}

