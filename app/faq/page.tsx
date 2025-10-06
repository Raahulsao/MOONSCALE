import { SiteHeader } from "@/components/site-header"
import { FAQ } from "@/components/faq"
import  Footer  from "@/components/footer"

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
        <Footer />
      </main>
    </>
  )
}
