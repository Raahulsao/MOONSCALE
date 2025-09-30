import { SiteHeader } from "@/components/site-header"
import { Terms } from "@/components/terms"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata = {
  title: "Terms & Conditions | Moon Scale",
  description: "Terms and conditions for Moon Scale's 3D animation services.",
}

export default function TermsPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <div className="pt-20">
          <Terms />
        </div>
        <AppverseFooter />
      </main>
    </>
  )
}
