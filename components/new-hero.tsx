'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export function NewHero() {
  const imageOptions = [
    '/images/heroart.png',
    '/images/art40.jpg',
    '/images/art38.jpeg',
    '/images/art38.jpg',
    '/images/art26.jpeg',
    '/images/art23.jpeg',
    '/images/art24.jpeg',
    '/images/art25.jpeg',
  ]

  const [currentImage, setCurrentImage] = useState(imageOptions[0])
  const [prevImage, setPrevImage] = useState<string | null>(null)

  // Smooth transition on hover without double/flicker
  const handleHover = (img: string) => {
    if (img === currentImage) return
    setPrevImage(currentImage)
    setCurrentImage(img)
    setTimeout(() => {
      setPrevImage(null) // clear prev after transition
    }, 300)
  }

  return (
    <section
      className="relative w-full bg-black"
      style={{ height: '98vh', marginTop: '6px' }}
    >
      <div className="flex h-full w-full items-center justify-center px-1 sm:px-2 md:px-4">
        <div className="relative w-full h-full max-w-[1540px] rounded-[30px] shadow-2xl overflow-hidden bg-black">
          {/* ✅ Only fade out previous image */}
          {prevImage && (
            <div
              className="absolute inset-0 bg-cover bg-center z-10 transition-opacity duration-300 opacity-100"
              style={{ backgroundImage: `url('${prevImage}')` }}
            />
          )}

          {/* ✅ Current image always visible — no flicker */}
          <div
            className="absolute inset-0 bg-cover bg-center z-20 transition-opacity duration-300 opacity-100"
            style={{ backgroundImage: `url('${currentImage}')` }}
          />

          {/* Thumbnails */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 z-30"
            style={{ bottom: '0px' }}
          >
            <div className="flex gap-4">
              {imageOptions.map((img, index) => (
                <button
                  key={index}
                  onMouseEnter={() => handleHover(img)}
                  className={clsx(
                    'shrink-0 transition-transform duration-300 rounded-xl border-2 border-transparent overflow-hidden',
                    currentImage === img
                      ? 'border-purple-500 scale-105'
                      : 'hover:scale-105 hover:border-white/30'
                  )}
                  style={{ width: 90, height: 90 }}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index}`}
                    width={90}
                    height={90}
                    className="object-cover w-[90px] h-[90px] rounded-xl pointer-events-none"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}