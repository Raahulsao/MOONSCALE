import { SiteHeader } from "@/components/site-header"
import { FAQ } from "@/components/faq"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata = {
  title: "FAQ | Moon Scale",
  description: "Frequently asked questions about Moon Scale's 3D animation services.",
}

export default function FAQPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <div className="pt-20">
          <FAQ />
        </div>
        <AppverseFooter />
      </main>
    </>
  )
}
