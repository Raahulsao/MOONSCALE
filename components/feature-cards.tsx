"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const features = [
  {
    category: "ADAPTABILITY",
    title: "Make the experience truly intuitive",
    image: "/images/feature-cards.png",
    description: "Seamless integration with cutting-edge technology",
  },
  {
    category: "CLIENT LOVE",
    title: "Their work didn't just look good, it moved the needle — our audience felt the difference instantly.",
    rating: 4.9,
    image: "/images/feature-cards.png",
    description: "Exceptional results that drive engagement",
  },
  {
    category: "INNOVATION",
    title: "Pushing boundaries with creative excellence",
    image: "/images/feature-cards.png",
    description: "Revolutionary approaches to visual storytelling",
  },
  {
    category: "PRECISION",
    title: "Every detail crafted to perfection",
    image: "/images/feature-cards.png",
    description: "Meticulous attention to quality and detail",
  },
  {
    category: "PERFORMANCE",
    title: "Lightning-fast delivery without compromising quality",
    image: "/images/feature-cards.png",
    description: "Optimized workflows for maximum efficiency",
  },
  {
    category: "CREATIVITY",
    title: "Transforming ideas into visual masterpieces",
    image: "/images/feature-cards.png",
    description: "Unique artistic vision meets technical expertise",
  },
  {
    category: "RELIABILITY",
    title: "Consistent excellence you can count on",
    rating: 4.8,
    image: "/images/feature-cards.png",
    description: "Trusted by industry leaders worldwide",
  },
  {
    category: "SCALABILITY",
    title: "Growing with your business needs",
    image: "/images/feature-cards.png",
    description: "Flexible solutions that adapt and expand",
  },
]

export function FeatureCards() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(123,104,238,0.12)", color: "#7B68EE" }}
          >
            Why Choose Us
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What makes us the best studio for you.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
            Discover what makes our work stand out from the competition
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="min-w-[350px] max-w-[350px] bg-neutral-900/50 border-neutral-800 rounded-2xl overflow-hidden backdrop-blur-sm snap-start flex-shrink-0"
              >
                <div className="p-6">
                  <div className="text-xs font-medium text-neutral-400 mb-3 tracking-wider">{feature.category}</div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>

                  {feature.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-3xl font-bold" style={{ color: "#7B68EE" }}>
                        {feature.rating}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#7B68EE" }} />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "#7B68EE" }}></div>
                      </div>
                    </div>
                    <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                        <div className="text-xs text-neutral-400 text-center px-2">{feature.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {features.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-neutral-600"
                style={{ backgroundColor: index < 2 ? "#7B68EE" : "rgb(82, 82, 91)" }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
