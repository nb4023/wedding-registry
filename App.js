import React from "react";

export default function WeddingRegistry() {
  const items = [
    { id: 1, category: "Kitchen Upgrade", title: "GE Profile Opal 2.0 Nugget Ice Maker", price: "$450", url: "https://www.bestbuy.com", note: "Fun, high-end hosting upgrade" },
    { id: 2, category: "Coffee & Espresso", title: "Nespresso Vertuo Pop / Vertuo Plus", price: "$150–$250", url: "https://www.nespresso.com", note: "Everyday luxury for mornings" },
    { id: 3, category: "Cookware", title: "Cuisinart MultiClad Pro Stainless Steel (12-piece)", price: "$330", url: "https://www.macys.com", note: "Durable, chemical-free stainless steel" },
    { id: 4, category: "Entertainment", title: "Vankyo Leisure 470 Pro Mini Projector", price: "$170", url: "https://ivankyo.com", note: "Cozy movie nights at home" },
    { id: 5, category: "Drinks", title: "SodaStream Art Sparkling Water Maker", price: "$90", url: "https://sodastream.com", note: "Fun and sustainable beverage option" },
    { id: 6, category: "TV Upgrade", title: "TCL QM8 65\" QLED 4K TV (or Hisense U8N 65\")", price: "$700–$900", url: "https://www.tcl.com", note: "Excellent 4K clarity without overpaying" },
  ];

  const cashGoal = 9000; // total cash goal
  const cashRaised = 0; // start at 0% progress
  const progress = Math.min(100, Math.round((cashRaised / cashGoal) * 100));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <header className="px-6 py-8 sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Noah & Partner</h1>
            <p className="mt-2 text-gray-600">Wedding Registry — thoughtful upgrades & a flexible cash fund</p>
          </div>
          <div className="mt-6 sm:mt-0">
            <a href="#" className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700">Add to registry (example)</a>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-8">
          <section className="lg:col-span-2">
            <div className="rounded-xl border border-gray-100 bg-white p-6">
              <h2 className="text-xl font-semibold">Registry Items</h2>
              <p className="mt-2 text-sm text-gray-600">We’ve chosen a few upgrades we’d love — thank you for considering one!</p>

              <ul className="mt-6 space-y-4">
                {items.map((it) => (
                  <li key={it.id} className="flex items-center justify-between gap-4 p-4 rounded-lg border border-gray-100 hover:shadow">
                    <div>
                      <div className="text-sm text-indigo-600 font-medium">{it.category}</div>
                      <div className="mt-1 text-lg font-semibold">{it.title}</div>
                      <div className="mt-1 text-sm text-gray-500">{it.note}</div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-lg font-medium">{it.price}</div>
                      <a href={it.url} target="_blank" rel="noreferrer" className="mt-2 text-sm text-indigo-600 hover:underline">View product</a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700">Small price-point options</h3>
                <p className="mt-2 text-sm text-gray-500">We’ll add a couple of items under $100 for guests who prefer smaller contributions.</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button className="px-3 py-1 rounded-full border text-sm">Coffee capsules</button>
                  <button className="px-3 py-1 rounded-full border text-sm">Glassware (set)</button>
                  <button className="px-3 py-1 rounded-full border text-sm">Movie-night snacks</button>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-gray-100 bg-white p-6">
              <h2 className="text-xl font-semibold">Registry Wording</h2>
              <p className="mt-3 text-gray-600">We’re so grateful to already have most of the essentials for our home. Our registry includes a few meaningful upgrades we’ve had our eye on, along with a fund to help us save for our honeymoon and future adventures together. Your love and presence mean the most — gifts are completely optional.</p>

              <div className="mt-4">
                <label className="text-sm font-medium">Copy for invites / website</label>
                <textarea readOnly className="mt-2 w-full rounded-lg border p-3 text-sm bg-gray-50">We’re so grateful to already have most of the essentials for our home. Our registry includes a few thoughtful upgrades and a cash fund to help with our honeymoon, future adventures, and home projects. Your presence is the greatest gift—gifts are optional.</textarea>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-gray-100 bg-white p-6 sticky top-6">
              <h2 className="text-lg font-semibold">Cash Fund</h2>
              <p className="mt-2 text-sm text-gray-600">Future adventures, honeymoon & home projects.</p>

              <div className="mt-4">
                <div className="text-sm text-gray-500">Goal</div>
                <div className="mt-1 text-2xl font-bold">${cashGoal.toLocaleString()}</div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div>Raised</div>
                    <div>${cashRaised.toLocaleString()}</div>
                  </div>
                  <div className="mt-2 w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div className="h-3 bg-indigo-600" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">{progress}% of goal</div>
                </div>

                <div className="mt-6">
                  <a href="#" className="w-full inline-flex justify-center items-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">Contribute</a>
                </div>

                <div className="mt-4 text-xs text-gray-500">Suggested categories: Honeymoon ($3.5k), Home Projects ($3.5k), Future Savings ($2k).</div>
              </div>

              <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                <div className="font-medium">Registry Tips</div>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Offer several price points so all guests feel comfortable.</li>
                  <li>Include a short, grateful blurb that emphasizes presence over presents.</li>
                  <li>Update items as things get purchased so guests have fresh options.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <div>Want this as a full site?</div>
              <div className="mt-2">
                <a className="text-indigo-600 hover:underline" href="#">Export to Zola / The Knot guide</a>
              </div>
            </div>
          </aside>
        </main>

        <footer className="border-t border-gray-100 px-6 py-6 text-center text-sm text-gray-500">Made with ❤️ — edit any text or links and plug into your website or a single-page app.</footer>
      </div>
    </div>
  );
}
