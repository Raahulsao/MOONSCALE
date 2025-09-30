import { SiteHeader } from "@/components/site-header"
import { Revisions } from "@/components/revisions"
import { AppverseFooter } from "@/components/appverse-footer"

export const metadata = {
  title: "Revision Policy | Moon Scale",
  description: "Learn about Moon Scale's revision policy for 3D animation projects.",
}

export default function RevisionsPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <div className="pt-20">
          <Revisions />
        </div>
        <AppverseFooter />
      </main>
    </>
  )
}
