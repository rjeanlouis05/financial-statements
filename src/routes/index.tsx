import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="border-b border-gray-800 pb-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xl font-semibold tracking-wider text-amber-400 uppercase bg-amber-950/60 border border-amber-800/50 px-2.5 py-1 rounded-full text-red-400 shadow-md shadow-amber-950/50">
              Welcome to Kissena Baked Goods
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent mb-3">
              Financial Statements
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl font-medium leading-relaxed">
              We are a new company. Year 2025 is our first full year of operations. On this site, we will share our financial statements and reports.
            </p>
            <div className="bg-yellow-900 m-10 rounded-lg p-4">
              <button className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold text-sm transition-all shadow-md hover:shadow-amber-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                Click here!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
