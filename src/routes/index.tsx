import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="border-b border-gray-800 pb-5 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xl font-semibold tracking-wider text-amber-400 uppercase bg-amber-950/60 border border-amber-800/50 px-2.5 py-1 rounded-full">
            Welcome to Kissena Baked Goods
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Financial Statements
          </h1>
          <p className="mx-20 text-lg text-green-400">
            We are a new company. Year 2025 is our first full year of operations. On this site, we will share our financial statements and reports.
          </p>
        </div>
      </div>
    </div>
  )
}
