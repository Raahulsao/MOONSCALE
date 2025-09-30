export function Terms() {
  return (
    <section id="terms" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(123,104,238,0.10),transparent_55%)]" />
            <div className="relative space-y-12">
              <header className="space-y-4 text-center">
                <h2 className="text-4xl font-bold tracking-tight" style={{ color: "#7B68EE" }}>
                  Terms and Conditions
                </h2>
                <p className="text-neutral-400 text-lg">
                  Welcome to Moon Scale. By accessing our website, you agree to these terms and conditions. Please read
                  them carefully.
                </p>
              </header>

              <div className="space-y-8">
                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">1. Introduction</h3>
                  <p className="text-neutral-300">
                    These Terms and Conditions govern your use of the Moon Scale website and services. By using our
                    website, you accept these Terms in full.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">2. Intellectual Property Rights</h3>
                  <p className="text-neutral-300">
                    Unless otherwise stated, Moon Scale owns all the project files. This includes all electronic files,
                    drawings, source files, and any materials provided to the client, which remain the sole property of
                    Moon Scale, even if shared.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                    <li>You must not republish material from this site.</li>
                    <li>
                      You must not reproduce, duplicate, or copy material for commercial purposes without permission.
                    </li>
                    <li>You must not edit or modify any content without consent.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">3. Acceptable Use</h3>
                  <p className="text-neutral-300">
                    You must not use this website in any way that causes, or may cause, damage to the website or
                    impairment of the availability or accessibility of the website.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">4. Limitation of Liability</h3>
                  <p className="text-neutral-300">
                    Moon Scale will not be liable for any direct, indirect, or consequential loss or damage arising
                    under these Terms or in connection with our website or services.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">5. Contact Us</h3>
                  <p className="text-neutral-300">If you have any questions about these Terms, please contact us at:</p>
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
