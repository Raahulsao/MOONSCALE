"use client"

import { useState, useEffect } from "react"
import { Sparkles, Palette, Video, BarChart, Play, Pause, ArrowRight, Check } from "lucide-react"

const ACCENT = "#a78bfa" // purple-400

// Premium auto-changing images for each section
const designImages = [
  "/images/8.webp",
  "/images/web9.webp",
  "/images/web8.png",
  "/images/web7.webp",
  "/images/web6.jpg",
]

const aiMediaImages = [
  "/images/art46.jpeg",
  "/images/art47.jpeg",
  "/images/art48.jpeg",
  "/images/art49.jpeg",
]

const analyticsImages = [
  "/product-animation-horizontal-1.jpg",
  "/product-animation-horizontal-2.jpg",
  "/product-animation-horizontal-3.jpg",
  "/product-animation-vertical-1.jpg",
]

// Logo data for marquee
const techLogos = [
  { name: "React", image: "/icons/react.png" },
  { name: "javascript", image: "/icons/JavaScript.png" },
  { name: "Node js", image: "/icons/Node.js.png" },
  { name: "Tailwind CSS", image: "/icons/tailwind css.png" },
  { name: "Figma", image: "/icons/figma-color.png" },
  { name: "Adobe", image: "/icons/Adobe XD.png" },
  { name: "Angular", image: "/icons/Angular.png" },
  { name: "Bootstrap", image: "/icons/Bootstrap.png" },
  { name: "Django", image: "/icons/Django.png" },
  { name: "Docker", image: "/icons/Docker.png" },
  { name: "jquery", image: "/icons/jQuery.png" },
  { name: "FastAPI", image: "/icons/FastAPI.png" },
  { name: "css", image: "/icons/CSS3.png" },
  { name: "Firebase", image: "/icons/Firebase.png" },
  { name: "HTML", image: "/icons/HTML5.png" },
  { name: "Framer", image: "/icons/Heroku.png" },
]

const aiLogos = [
  { name: "OpenAI", image: "/logos/openai.svg" },
  { name: "Midjourney", image: "/logos/midjourney.svg" },
  { name: "Stable Diffusion", image: "/logos/stablediffusion.svg" },
  { name: "RunwayML", image: "/logos/runway.svg" },
  { name: "DALL-E", image: "/logos/dalle.svg" },
  { name: "Leonardo AI", image: "/logos/leonardo.svg" },
  { name: "Pika", image: "/logos/pika.svg" },
  { name: "Synthesia", image: "/logos/synthesia.svg" },
  { name: "OpenAI", image: "/logos/openai.svg" },
  { name: "Midjourney", image: "/logos/midjourney.svg" },
  { name: "Stable Diffusion", image: "/logos/stablediffusion.svg" },
  { name: "RunwayML", image: "/logos/runway.svg" },
  { name: "DALL-E", image: "/logos/dalle.svg" },
  { name: "Leonardo AI", image: "/logos/leonardo.svg" },
  { name: "Pika", image: "/logos/pika.svg" },
  { name: "Synthesia", image: "/logos/synthesia.svg" },
]

const analyticsLogos = [
  { name: "Python", image: "/logos/python.svg" },
  { name: "TensorFlow", image: "/logos/tensorflow.svg" },
  { name: "PyTorch", image: "/logos/pytorch.svg" },
  { name: "Tableau", image: "/logos/tableau.svg" },
  { name: "PowerBI", image: "/logos/powerbi.svg" },
  { name: "Google Analytics", image: "/logos/analytics.svg" },
  { name: "Pandas", image: "/logos/pandas.svg" },
  { name: "scikit-learn", image: "/logos/sklearn.svg" },
  { name: "Python", image: "/logos/python.svg" },
  { name: "TensorFlow", image: "/logos/tensorflow.svg" },
  { name: "PyTorch", image: "/logos/pytorch.svg" },
  { name: "Tableau", image: "/logos/tableau.svg" },
  { name: "PowerBI", image: "/logos/powerbi.svg" },
  { name: "Google Analytics", image: "/logos/analytics.svg" },
  { name: "Pandas", image: "/logos/pandas.svg" },
  { name: "scikit-learn", image: "/logos/sklearn.svg" },
]
function LogoMarquee({ logos, direction = "left" }: { logos: typeof techLogos; direction?: "left" | "right" }) {
  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling Container */}
      <div
        className={`flex gap-8 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{
          width: "max-content",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-20 h-12 flex items-center justify-center grayscale-0 hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = "none"
                e.currentTarget.parentElement!.innerHTML = `<span class="text-neutral-400 font-semibold text-sm">${logo.name}</span>`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function DoubleMarquee({ logos }: { logos: typeof techLogos }) {
  return (
    <div className="mt-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
          Tech stcks & Tools
        </h4>        
      </div>
      
      {/* Marquee rows */}
      <div className="space-y-4">
        {/* First row - scrolls left */}
        <LogoMarquee logos={logos} direction="left" />
        {/* Second row - scrolls right */}
        <LogoMarquee logos={logos} direction="right" />
      </div>
    </div>
  )
}

function PremiumImageCard({ images, className = "" }: { images: string[]; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-neutral-900 ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[4:3] w-full overflow-hidden">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt="Feature showcase"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-6 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-8 bg-white" : "w-1 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function PremiumVideoCard({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Using the same images as the AI media section
  const videoImages = [
   "/images/art46.jpeg",
  "/images/art47.jpeg",
  "/images/art48.jpeg",
  "/images/art49.jpeg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoImages.length)
    }, 1500) // Change every 1.5 seconds

    return () => clearInterval(interval)
  }, [])

 return (
  <section className="relative py-0 pt-0 mt-0 w-full bg-transparent">
    {/* Background gradient */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-400/50 to-purple-400/50 dark:from-gray-900/50 dark:to-gray-800/50" />

    <div className="container mx-auto px-4">
      {/* Main card container (fills the height of screen & centers vertically) */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="relative w-[22vw] h-[80vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-neutral-900 group">
          {/* Image */}
          <img
            src={videoImages[currentIndex] || "/images/art48.jpeg"}
            alt="Feature showcase"
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {videoImages.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "w-6 bg-white" : "w-1 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

function FeatureCard({
  icon: Icon,
  badge,
  title,
  description,
  features,
  images,
  logos,
  video = false,
  reversed = false,
}: {
  icon: any
  badge: string
  title: string
  description: string
  features: string[]
  images: string[]
  logos: typeof techLogos
  video?: boolean
  reversed?: boolean
}) {
  return (
    <div className="space-y-8">
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}>
        {/* Content Side */}
        <div className={`space-y-8 ${reversed ? "lg:col-start-2" : ""}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800">
            <Icon className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-neutral-300">{badge}</span>
          </div>

          {/* Title */}
          <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">{title}</h3>

          {/* Description */}
          <p className="text-lg text-neutral-400 leading-relaxed">{description}</p>

          {/* Feature List */}
          <div className="space-y-4 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-400/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-purple-400" />
                </div>
                <span className="text-neutral-300 group-hover/item:text-white transition-colors duration-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <button className="group/btn inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300">
            <span>Explore solutions</span>
            <ArrowRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        {/* Media Side */}
        <div className={reversed ? "lg:col-start-1 lg:row-start-1" : ""}>
          {video ? (
            <PremiumVideoCard className="w-full" />
          ) : (
            <PremiumImageCard images={images} className="w-full" />
          )}
        </div>
      </div>

      {/* Logo Marquee - Below explore section - NO BACKGROUND CARD */}
      <div className="mt-12">
  <LogoMarquee logos={logos} direction="left" />
</div>
    </div>
  )
}

export function NewFeatureSections() {
  const features = [
    {
      icon: Palette,
      badge: "Design & Development",
      title: "AI-powered website & UI/UX design",
      description:
        "We craft stunning websites and intuitive user experiences for brands of all sizes. From startups to enterprise companies, our AI-enhanced design process delivers pixel-perfect interfaces that convert visitors into customers and elevate your digital presence.",
      features: [
        "Custom website design & development",
        "Modern UI/UX for web and mobile apps",
        "Responsive design optimized for all devices",
        "Brand-aligned design systems and guidelines",
      ],
      images: designImages,
      logos: techLogos,
      video: false,
      reversed: false,
    },
    {
      icon: Video,
      badge: "AI Media Generation",
      title: "AI video & photo generation at scale",
      description:
        "Transform your visual content strategy with cutting-edge AI technology. Generate professional-quality product photos, marketing videos, and creative assets in minutes—not weeks. Perfect for e-commerce brands, marketing agencies, and content creators who need high-volume, high-quality visuals.",
      features: [
        "AI-generated product photography and lifestyle images",
        "Automated video creation for social media and ads",
        "Custom AI models trained on your brand style",
        "Bulk generation for catalogs and campaigns",
      ],
      images: aiMediaImages,
      logos: aiLogos,
      video: true,
      reversed: true,
    },
    {
      icon: BarChart,
      badge: "AI Research & Analytics",
      title: "Data-driven insights & intelligence",
      description:
        "Harness the power of AI to unlock actionable insights from your data. Our advanced analytics and research capabilities help you understand market trends, customer behavior, and competitive landscapes—empowering smarter business decisions backed by real intelligence.",
      features: [
        "AI-powered market research and competitor analysis",
        "Customer behavior analysis and segmentation",
        "Predictive analytics for business forecasting",
        "Custom AI solutions for data processing",
      ],
      images: analyticsImages,
      logos: analyticsLogos,
      video: false,
      reversed: false,
    },
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }

        
      `}</style>

      <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-neutral-300">AI-Powered Solutions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Why leading brands choose our <span className="text-purple-400">AI agency</span>
            </h2>
            <p className="text-lg lg:text-xl text-neutral-400 leading-relaxed">
              From startups to Fortune 500 companies, we deliver cutting-edge AI solutions that transform how businesses
              create, analyze, and scale their digital presence.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4 lg:space-y-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Additional Services Banner */}
          <div className="mt-32 lg:mt-40">
            <div className="max-w-5xl mx-auto">
              <div className="bg-purple-400 rounded-3xl p-8 lg:p-12 border border-neutral-800">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    More AI solutions for your business
                  </h3>
                  <p className="text-neutral-400 max-w-2xl mx-auto">
                    We offer a comprehensive suite of AI-powered services tailored to your unique needs
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Emerging AI Services",
                      description: "Streamline workflows with intelligent automation",
                    },
                    {
                      title: "Content Writing",
                      description: "AI-assisted copywriting and content creation",
                    },
                    {
                      title: "Chatbot Development",
                      description: "Custom AI chatbots for customer engagement",
                    },
                    {
                      title: "Consulting",
                      description: "AI strategy and implementation guidance",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-black rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center mb-4">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                      <p className="text-sm text-neutral-400">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-32 lg:mt-40">
            {/* Main Card Container with Border Radius */}
            <div className="max-w-4xl mx-auto bg-neutral-900 rounded-3xl p-8 lg:p-12 border border-purple-400">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">Ready to transform your business?</h3>
                  <p className="text-neutral-400">
                    Join hundreds of companies leveraging AI to scale faster, create better, and stay ahead of the
                    competition.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                  <a href="https://wa.me/+918839720548" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-neutral-100 transition-colors duration-200 hover:shadow-lg">
                      Get started
                    </button>
                  </a>
                  <a href="/blog" rel="noopener noreferrer">
                    <button className="cursor-pointer px-6 py-3 bg-transparent text-white font-medium rounded-xl border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-200">
                      View case studies
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}