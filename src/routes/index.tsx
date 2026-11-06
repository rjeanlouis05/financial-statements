
import {
  createFileRoute,
} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    links: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=IBM+Plex+Sans:wght@400;600;700&display=swap',
      },
    ],
  }),
})


function HomePage() {
  return (
    <div>
      <header>
        <h1>Welcome to Kissena Baked Goods</h1>
        <p>Financial statements</p>
      </header>
     <p>
  Kissena Baked Goods is a bakery in{" "}
  <a href="https://en.wikipedia.org/wiki/Astoria,_Queens"
     target="_blank" rel="noopener noreferrer" className="underline">
    Astoria, Queens, New York
  </a>. It sells a wholesale line and accepts custom cake orders, including weddings.
  {" "}<span>(The location link opens a new tab.)</span>
</p>
      <p>
        Kissena Baked Goods Inc. incorporated in New York State in late 20X4
        and opened in January 20X5. It has three ovens, four delivery vans,
        and 14 staff members.
      </p>
      <h2>What we bake</h2>
<ul className="list-disc pl-6">
  <li>Sourdough, semolina, and rye loaves</li>
  <li>Kaiser rolls, hero bread, and dinner rolls</li>
  <li>Croissants, danishes, and morning pastry</li>
  <li>Cheesecake, black and white cookies, and sheet cakes</li>
  <li>Seasonal orders, including hot cross buns and tsoureki</li>
</ul>
<h2>How a wholesale order is completed</h2>
<ol className="list-decimal pl-6">
  <li>A customer places a wholesale order.</li>
  <li>The manager prepares a bake sheet.</li>
  <li>Bakers prepare and bake the ordered goods.</li>
  <li>Drivers deliver the goods to the customer.</li>
  <li>The accountant records the credit sale and accounts receivable.</li>
</ol>
    <h2>The year in brief</h2>
<p>
  In 20X5, net sales were $1,500,000 and net income was $230,000.
  These illustrative financial statements describe the year ended December 31, 20X5.
</p>
    </div>
  );
}








 