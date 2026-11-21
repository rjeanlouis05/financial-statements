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
<h2 className="font-display text-2xl mt-10 mb-3">Equipment and vehicles</h2>
<div className="max-w-2xl mx-auto border border-edge rounded-md bg-surface overflow-x-auto">
<table className="w-full">
  <thead><tr>
    <th scope="col" className="text-left px-5 py-3 bg-raised">Account</th>
    <th scope="col" className="text-right px-5 py-3 bg-raised">Amount (USD)</th>
  </tr></thead>
  <tbody>
    <tr>
      <th scope="row" className="text-left px-5 py-3 border-t border-edge">Cost</th>
      <td id="note-equipment-cost" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">645,000</td>
    </tr>
    <tr>
      <th scope="row" className="text-left px-5 py-3 border-t border-edge">Accumulated depreciation</th>
      <td id="note-accumulated-depreciation" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">(245,000)</td>
    </tr>
    <tr>
      <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Equipment and vehicles, net</th>
      <td id="note-net-equipment" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">400,000</td>
    </tr>
  </tbody>
</table>
<h2 className="font-display text-2xl mt-10 mb-3">Accounts receivable</h2>
<div className="max-w-2xl mx-auto border border-edge rounded-md bg-surface overflow-x-auto">
<table className="w-full">
  <thead><tr>
    <th scope="col" className="text-left px-5 py-3 bg-raised">Account</th>
    <th scope="col" className="text-right px-5 py-3 bg-raised">Amount (USD)</th>
  </tr></thead>
  <tbody>
    <tr>
      <th scope="row" className="text-left px-5 py-3 border-t border-edge">Receivables A</th>
      <td id="note-receivables-a" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">59,750</td>
    </tr>
    <tr>
      <th scope="row" className="text-left px-5 py-3 border-t border-edge">Receivables B</th>
      <td id="note-receivables-b" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">90,250</td>
    </tr>
    <tr>
      <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total receivables</th>
      <td id="note-receivables-total" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">150,000</td>
    </tr>
  </tbody>
</table>
</div>
</div>
    </div>
  )
}

