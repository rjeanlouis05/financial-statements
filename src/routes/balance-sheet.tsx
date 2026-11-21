import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/balance-sheet")({
  head: () => ({ meta: [{ title: "Balance Sheet 20X5 | Kissena Baked Goods" }] }),
  component: BalanceSheet,
})

function BalanceSheet() {
  return (
    <>
      <div>
        <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
        <h1 className="font-display text-4xl leading-tight">Balance Sheet</h1>
        <p className="mt-2 text-lg text-ink-soft">December 31, 20X5</p>
        <p className="mt-4 text-ink-soft">Amounts are whole US dollars. Equipment and vehicles are reported net of accumulated depreciation.</p>
      </div>
      <div className="max-w-2xl mx-auto mt-10 border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <caption className="text-left font-semibold px-5 py-3">Assets</caption>
          <thead><tr><th scope="col" className="text-left px-5 py-3">Account</th><th scope="col" className="text-right px-5 py-3 whitespace-nowrap">Amount (USD)</th></tr></thead>
          <tbody>
            <tr><th colSpan={2} className="text-left px-5 py-3 bg-raised">Current assets</th></tr>
            <tr>
              <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Cash</th>
              <td id="cash" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">$200,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Accounts receivable</th>
              <td id="accounts-receivable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">150,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Inventory</th>
              <td id="inventory" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">50,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal font-semibold">Total current assets</th>
              <td id="total-current-assets" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold">400,000</td>
            </tr>
            <tr><th colSpan={2} className="text-left px-5 py-3 bg-raised">Property and equipment</th></tr>
            <tr>
              <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Equipment and vehicles, net</th>
              <td id="equipment" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">400,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t-4 border-double border-edge font-normal font-semibold bg-raised">Total assets</th>
              <td id="total-assets" className="text-right px-5 py-3 border-t-4 border-double border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">$800,000</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 text-ink-soft">Retained earnings equals this example's net income because beginning retained earnings is zero, no dividends are paid, and no other retained earnings adjustments occur.</p>
       <div className="max-w-2xl mx-auto mt-10 border border-edge rounded-md bg-surface overflow-x-auto">
<table className="w-full">
  <caption className="text-left font-semibold px-5 py-3">Liabilities and stockholders' equity</caption>
  <thead><tr><th scope="col" className="text-left px-5 py-3">Account</th><th scope="col" className="text-right px-5 py-3 whitespace-nowrap">Amount (USD)</th></tr></thead>
  <tbody>
  <tr><th colSpan={2} className="text-left px-5 py-3 bg-raised">Liabilities</th></tr>
  <tr>
    <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Accounts payable</th>
    <td id="accounts-payable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">$70,000</td>
  </tr>
  <tr>
    <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal font-semibold">Total liabilities</th>
    <td id="total-liabilities" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold">70,000</td>
  </tr>
  <tr><th colSpan={2} className="text-left px-5 py-3 bg-raised">Stockholders' equity</th></tr>
  <tr>
    <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Common stock</th>
    <td id="common-stock" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">500,000</td>
  </tr>
  <tr>
    <th scope="row" className="text-left pl-9 pr-5 py-3 border-t border-edge font-normal">Retained earnings</th>
    <td id="retained-earnings" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">230,000</td>
  </tr>
  <tr>
    <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal font-semibold">Total equity</th>
    <td id="total-equity" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold">730,000</td>
  </tr>
  <tr>
    <th scope="row" className="text-left px-5 py-3 border-t-4 border-double border-edge font-normal font-semibold bg-raised">Total liabilities and equity</th>
    <td id="total-liab-equity" className="text-right px-5 py-3 border-t-4 border-double border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">$800,000</td>
  </tr>
  </tbody>
</table>
</div> 
<p className="mt-6 text-ink-soft">The displayed totals are typed. Recalculate $70,000 plus $730,000 and compare the $800,000 result with total assets. This page does not perform that calculation.</p>
      </div>
    </>
  )
}
