import { SiteHeader } from "@/components/site-header"
import  Footer  from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Moon Scale",
  description: "Privacy policy for Moon Scale's 3D animation services.",
}

export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <div className="pt-20">
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                <span style={{ color: "#7B68EE" }}>Privacy</span> Policy
              </h1>

              <div className="prose prose-invert max-w-none">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7B68EE" }}>
                      Information We Collect
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      We collect information you provide directly to us, such as when you create an account, make a
                      purchase, or contact us for support. This may include your name, email address, phone number, and
                      payment information.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7B68EE" }}>
                      How We Use Your Information
                    </h2>
                    <p className="text-neutral-300 leading-relaxed mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside text-neutral-300 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Communicate with you about products, services, and events</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7B68EE" }}>
                      Information Sharing
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without
                      your consent, except as described in this policy. We may share your information with trusted
                      service providers who assist us in operating our website and conducting our business.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7B68EE" }}>
                      Data Security
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      We implement appropriate security measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                      over the internet is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7B68EE" }}>
                      Cookies
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      We use cookies and similar tracking technologies to enhance your experience on our website. You
                      can choose to disable cookies through your browser settings, but this may affect the functionality
                      of our website.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: "#7B68EE" }}>
                      Contact Us
                    </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at{" "}
                      <a href="mailto:privacy@moonscale.com" className="underline" style={{ color: "#7B68EE" }}>
                        privacy@moonscale.com
                      </a>
                    </p>
                  </div>

                  <div className="text-sm text-neutral-400 pt-8 border-t border-neutral-800">
                    <p>Last updated: December 20, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
