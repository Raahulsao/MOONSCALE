import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { NewFeatureSections } from "@/components/new-feature-sections"
import Services from "@/components/service"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import Script from "next/script"
import ScrollReactiveCards from "@/components/scroll-reactive-cards"
import { ProjectPageCard } from "@/components/project-page-card"
import { NewHero } from "@/components/new-hero"
import LazyVideo from "@/components/lazy-video"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://moonscale.com/#pricing",
    name: "Pricing Plans",
    description: "3D Animation pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://moonscale.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D Animation Services",
      description: "Professional 3D animation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Up to 15s 3D Animation with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Up to 25s 3D Animation with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60s 3D Animation with unlimited revisions",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://moonscale.com/",
    name: "Moon Scale | 3D Animation Made Simple, Reliable & Scalable",
    description:
      "From product launches to full-scale campaigns, Moon Scale delivers 3D animation that's fast, consistent, and built to wow your audience.",
    url: "https://moonscale.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Moon Scale",
      url: "https://moonscale.com",
      sameAs: [
        "https://twitter.com/moonscale",
        "https://www.youtube.com/@moonscale",
        "https://instagram.com/moonscale",
        "https://threads.com/moonscale",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://moonscale.com/#pricing",
        name: "Pricing Section",
        url: "https://moonscale.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <NewHero />
        {/* Video cards section extracted from the old Hero component */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
        <Features />
        {/* Scroll Reactive Cards Section - Added below Features section */}
        <ScrollReactiveCards />
        <NewFeatureSections />
        <Services />
        <LogoMarquee />
        {/* Project Page Card - Added above Pricing section */}
        <ProjectPageCard />
        <Pricing />
        <Testimonials />
        <Footer />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}

// Phone card component extracted from the old Hero component
function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden bg-black rounded-3xl border-0 pl-0 pr-0 pt-0 ml-px mt-0">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div
              className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider"
              style={{ color: "#7B68EE" }}
            >
              {tone === "calm" ? "moon scale app" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Phone data extracted from the old Hero component
const phoneData = [
  {
    title: "",
    sub: "",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    title: "",
    sub: "",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
  },
  {
    title: "",
    sub: "",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
  {
    title: "",
    sub: "",
    tone: "standout",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
  },
  {
    title: "",
    sub: "",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
  },
]