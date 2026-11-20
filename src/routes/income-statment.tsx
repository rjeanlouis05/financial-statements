import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/income-statment")({
  head: () => ({ meta: [{ title: "Income Statement 20X5 | Kissena Baked Goods" }] }),
  component: IncomeStatement,
})

function IncomeStatement() {
  return (
    <>
      <div>
        <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
        <h1 className="font-display text-4xl leading-tight">Income Statement</h1>
        <p className="mt-2 text-lg text-ink-soft">For the year ended December 31, 20X5</p>
      </div>
      <p className="mt-4 text-ink-soft">
        Amounts are whole US dollars. Expenses are deductions shown in parentheses.
        This example assumes no other income, expenses, interest, or income taxes.
      </p>
      <div className="max-w-2xl mx-auto mt-10 border border-edge rounded-md bg-surface overflow-x-auto">
       <table className="w-full"> 
          <thead>
            <tr>
             <th scope="col" className="text-left px-5 py-3 bg-raised"> Account</th>
              <th scope="col" className="text-right px-5 py-3 bg-raised whitespace-nowrap">Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal">Net sales</th>
              <td id="net-sales" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">$1,500,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal">Cost of goods sold</th>
              <td id="cogs" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">(600,000)</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal font-semibold">Gross profit</th>
              <td id="gross-profit" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold">900,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-normal">Selling, general, and administrative expenses</th>
              <td id="sga" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">(670,000)</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t-4 border-double border-edge font-normal font-semibold bg-raised">Net income</th>
              <td id="net-income" className="text-right px-5 py-3 border-t-4 border-double border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">$230,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}


