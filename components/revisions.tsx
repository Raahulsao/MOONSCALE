export function Revisions() {
  return (
    <section id="revisions" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(123,104,238,0.10),transparent_55%)]" />
            <div className="relative space-y-12">
              <header className="space-y-4 text-center">
                <h2 className="text-4xl font-bold tracking-tight" style={{ color: "#7B68EE" }}>
                  Revision Policy
                </h2>
                <p className="text-neutral-400 text-lg">
                  Our revision policy ensures transparency and fairness for all clients while maintaining the quality
                  and efficiency of our work.
                </p>
              </header>

              <div className="space-y-8">
                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">1. Included Revisions</h3>
                  <p className="text-neutral-300">
                    Each plan includes a set number of revisions as listed in its respective tier:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                    <li>Startup Plan: 2 revisions included</li>
                    <li>Pro Plan: 4 revisions included</li>
                    <li>Premium Plan: Unlimited revisions within the agreed project scope</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">2. Additional Revisions</h3>
                  <p className="text-neutral-300">
                    Any revisions beyond the included amount will be charged at the following hourly rates:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                    <li>Startup Plan: $35/hour</li>
                    <li>Pro Plan: $55/hour</li>
                    <li>Premium Plan: $60/hour</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">3. Scope of Revisions</h3>
                  <p className="text-neutral-300">
                    Revisions are meant to refine and adjust the agreed deliverables, not to expand the original scope
                    of work. Significant changes or additions will require a new project agreement.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">4. Contact Us</h3>
                  <p className="text-neutral-300">For questions regarding our revision policy, please contact us at:</p>
                  <p className="text-neutral-300">
                    Email:{" "}
                    <a href="mailto:hello@moonscale.com" className="underline" style={{ color: "#7B68EE" }}>
                      hello@moonscale.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
