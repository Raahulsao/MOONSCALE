'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const images = [
  '/images/art5.jpeg',
  '/images/art20.jpeg',
  '/team/team1.jpeg',
  '/team/team2-re.png',
  '/images/art27.jpeg',
  '/images/art28.jpeg',
  '/images/art29.jpeg',
  '/images/art30.jpeg',
  '/images/art31.jpeg',
  '/images/art32.jpeg',
  '/images/art33.jpeg',
  '/images/art34.jpeg',
]

const COLUMNS = 4
const GAP = 10
const CARD_WIDTH = 300
const CARD_HEIGHT = CARD_WIDTH / (16 / 9)

const getGridPosition = (index: number) => {
  const col = index % COLUMNS
  const row = Math.floor(index / COLUMNS)

  const x = col * (CARD_WIDTH + GAP)
  const y = row * (CARD_HEIGHT + GAP)

  return { x, y }
}

const Gallery: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i: number) => {
      const { x, y } = getGridPosition(i)

      return {
        x,
        y,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: i * 0.15, // stagger for asteroid effect
          duration: 2, // slow arrival
          ease: [0.22, 1, 0.36, 1], // cinematic easing
        },
      }
    })
  }, [controls])

  // Grid dimensions
  const totalGridWidth = COLUMNS * CARD_WIDTH + (COLUMNS - 1) * GAP
  const rows = Math.ceil(images.length / COLUMNS)
  const totalGridHeight = rows * CARD_HEIGHT + (rows - 1) * GAP

  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{
        perspective: 3000, // 3D space effect
      }}
    >
      <div
        className="relative"
        style={{
          width: totalGridWidth,
          height: totalGridHeight,
        }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{
              x: 0,
              y: 0,
              rotateX: -90,
              opacity: 0,
              scale: 0.1,
              transformOrigin: 'top center',
            }}
            animate={controls}
            className="absolute rounded-lg overflow-hidden shadow-lg"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              backgroundColor: '#111',
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={src}
              alt={`Card ${index}`}
              className="w-full h-full object-cover backface-hidden"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery