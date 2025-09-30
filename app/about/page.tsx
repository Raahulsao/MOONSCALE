import { SiteHeader } from "@/components/site-header"
import About from "@/components/about"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata = {
  title: "About Us | Moon Scale",
  description: "Learn about Moon Scale's mission to deliver high-impact 3D animation for brands worldwide.",
}

export default function AboutPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <div className="pt-20">
          <About />
        </div>
        <AppverseFooter />
      </main>
    </>
  )
}
