'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ProjectPageCard() {
  const containerRef = useRef<HTMLDivElement>(null)

  const cards = [
    {
      id: 1,
      image:
        '/images/art23.jpeg',
    },
    {
      id: 2,
      image:
        '/images/art25.jpeg',
    },
    {
      id: 3,
      image:
        '/images/art26.jpeg',
    },
    {
      id: 4,
      image:
        '/images/art16.jpeg',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kill existing triggers if any
      ScrollTrigger.getAll().forEach(t => t.kill())

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.card-stack-section',
          start: 'top top',
          end: `+=${cards.length * 100}vh`, // length for all cards
          scrub: 1.5,
          pin: true,
          markers: false,
        },
      })

      // Animate each card Y entry in sequence
      cards.forEach((_, index) => {
        const selector = `.card-${index}`

        // start from bottom
        gsap.set(selector, { yPercent: 100 })

        // animate into view one at a time
        timeline.to(selector, {
          yPercent: 0,
          ease: 'power2.out',
        }, index * 0.7) // adjust spacing between cards
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative z-10 bg-black text-white">
      {/* Section Title */}
      <div className="w-full text-center pt-20 pb-10 bg-black">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Our Projects
        </h2>
      </div>

      {/* STACKED cards pinned in center */}
      <div className="card-stack-section h-screen w-full relative overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card-${index} absolute top-0 left-0 h-full w-full flex items-center justify-center`}
            style={{
              zIndex: index + 1, // 👈 newer cards on top
            }}
          >
            <div
              className="w-[95%] h-[95%] rounded-xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}