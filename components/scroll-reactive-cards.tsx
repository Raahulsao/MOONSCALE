"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const ScrollUnstackCards = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'], // animate during scroll into viewport
  })

  const cards = [
    {
      id: 1,
      image: "/images/art1.jpeg",
    },
    {
      id: 2,
      image: "/images/art3.jpeg",
    },
    {
      id: 3,    
      image: "/images/art22.jpeg",
    },
    {
      id: 4,
      image: "/images/art16.jpeg",
    },
  ]

  return (
    <section className="relative py-40 w-full bg-transparent">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-gray-900/50 dark:to-gray-800/50" />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-24">
          Our Work
        </h2>

        <div
          ref={containerRef}
          className="relative min-h-[600px] w-full flex items-center justify-center"
        >
          {/* Card container */}
          <div className="relative h-[480px] w-full max-w-[1440px] flex items-center justify-center">
            {cards.map((card, index) => {
              const total = cards.length
              const reverseIndex = total - index - 1

              // Final ideal horizontal position and perfect 10px gap
              const finalGap = 10
              const cardWidth = 300 // Set card width
              const totalSpace = finalGap * (total - 1) + cardWidth * total
              const centerShift = totalSpace / 2 - cardWidth / 2

              // final horizontal position of each card (spread evenly with 10px gap)
              const finalX = index * (cardWidth + finalGap) - centerShift
              const startX = reverseIndex * -40 // stacked slight offset

              const x = useTransform(scrollYProgress, [0, 0.8], [startX, finalX])
              const y = useTransform(scrollYProgress, [0, 0.8], [reverseIndex * 20, 0])
              const scale = useTransform(scrollYProgress, [0, 0.8], [1 - index * 0.03, 1])
              const opacity = useTransform(scrollYProgress, [0, 0.8], [1 , 1])

              return (
                <motion.div
                  key={card.id}
                  style={{ x, y, scale, opacity, zIndex: 100 - index }}
                  className="absolute rounded-2xl overflow-hidden shadow-xl aspect-[9/16] w-[300px]"
                >
                  <img
                    src={card.image}
                    alt={`Card ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollUnstackCards