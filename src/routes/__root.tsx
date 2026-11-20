import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute, HeadContent, Link, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    title: 'Kissena Baked Goods',
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <header className="border-b border-edge">
  <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center justify-between">
    <Link to="/" className="font-display text-xl">Kissena Baked Goods</Link>
    <nav className="flex flex-wrap gap-6" aria-label="Site menu">
  <Link to="/" className="text-ink-soft hover:text-ink"
    activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
    activeOptions={{ exact: true }}>Home</Link>
</nav>
<Link to="/income-statment" className="text-ink-soft hover:text-ink"
  activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}>
  Income Statement
</Link>
<Link to="/balance-sheet" className="text-ink-soft hover:text-ink"
  activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}>
  Balance Sheet
</Link>
  </div>
</header>
        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
        <footer className="border-t border-edge mt-16">
  <div className="max-w-4xl mx-auto px-6 py-8 text-ink-soft">
    <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
    <p>© 20X5 Kissena Baked Goods Inc.</p>
    <p>A fictional company used for accounting examples.</p>
  </div>
</footer>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
