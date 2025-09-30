"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const heroCards = [
  "/images/art5.jpeg",
  "/images/art20.jpeg",
  "/team/team1.jpeg",
  "/team/team2-re.png",
  "/images/art27.jpeg",
  "/images/art28.jpeg",
  "/images/art29.jpeg",
  "/images/art30.jpeg",
]

const CARD_WIDTH = 220
const CARD_HEIGHT = 323
const GAP_BETWEEN_ROWS = 100

// Get final position in the 4x2 grid
const getGridPosition = (i: number) => {
  const col = i % 4
  const row = Math.floor(i / 4)

  const x = (col - 1.5) * (CARD_WIDTH + 20)
  const y =
    row === 0
      ? -(CARD_HEIGHT / 2 + GAP_BETWEEN_ROWS / 2)
      : CARD_HEIGHT / 2 + GAP_BETWEEN_ROWS / 2

  return { x, y }
}

export default function HeroGrid() {
  const [stage, setStage] = useState<"entering" | "expand">("entering")
  const heroControls = useAnimation()

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)

    // Phase 1: Fly in from bottom to center stack
    heroControls.start((i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: "easeOut",
      },
    }))

    // Wait ~1.5s, then Phase 2: Separate to grid layout
    setTimeout(() => {
      setStage("expand")

      heroControls.start((i) => {
        const { x, y } = getGridPosition(i)
        const isTopRow = i < 4
        const delay = isTopRow
          ? i * 0.1 + 0.3 // Left to right spread
          : (3 - (i % 4)) * 0.1 + 0.8 // Right to left spread

        return {
          x,
          y,
          scale: 1,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 120,
            delay,
          },
        }
      })
    }, 1600) // Delay before expanding to grid
  }, [])

  return (
    <div className="relative h-[750px] max-w-full flex items-center justify-center">
      {/* Cards */}
      {heroCards.map((img, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{
            y: 800,
            x: 0,
            opacity: 0,
            scale: 0.8,
          }}
          animate={heroControls}
          className="absolute w-[220px] h-[323px] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-[#111] z-10"
        >
          <img
            src={img}
            alt={`Card ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      ))}

      {/* Center heading - revealed in sync with Phase 2 */}
      {stage === "expand" && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#7B68EE]">
            Welcome to MoonScale
          </h2>
        </motion.div>
      )}
    </div>
  )
}