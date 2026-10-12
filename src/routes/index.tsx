import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
   <div className="border-b border-gray-800 pb-5 mb-6">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <div>
      <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-950/60 border border-amber-800/50 px-2.5 py-1 rounded-full">
        Welcome to Kissena Baked Goods
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
        Financial Statements
      </h1>
      <p className="text-md text-green-400">
        We are a new company. Year 2025 is our first full year of operations. On this site, we will share our financial statements and reports.
      </p>
    </div>
    
    {/* Optional: Action button placeholder */}
    <div className="mt-4 sm:mt-0 flex items-center space-x-3">
      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500">
        Export Report
      </button>
    </div>
  </div>
</div>
  )
}
