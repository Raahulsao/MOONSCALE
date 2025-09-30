"use client"

import { useState, useEffect } from "react"
import Card from "@/components/card"

interface CardData {
  id: number
  type: "image" | "text" | "mixed"
  src?: string
  title?: string
  description?: string
  width: number
  height: number
}

const MasonryGrid = () => {
  const [cards, setCards] = useState<CardData[]>([])
  const [loading, setLoading] = useState(true)

  // Generate sample cards with different sizes
  useEffect(() => {
    const sampleCards: CardData[] = [
      {
        id: 1,
        type: "image",
        src: "/cinematic-video-of-person-on-beach.jpg",
        title: "Beach Vibes",
        description: "Cinematic shot of a person on the beach at sunset",
        width: 1,
        height: 1
      },
      {
        id: 2,
        type: "image",
        src: "/portrait-of-stylish-person-with-blonde-hair.jpg",
        title: "Fashion Portrait",
        description: "Stylish portrait with dramatic lighting",
        width: 1,
        height: 1
      },
      {
        id: 3,
        type: "mixed",
        src: "/urban-street-scene-with-person-walking.jpg",
        title: "Urban Explorer",
        description: "Person walking through a modern cityscape",
        width: 1,
        height: 1
      },
      {
        id: 4,
        type: "image",
        src: "/artistic-portrait-with-dramatic-lighting.jpg",
        title: "Dramatic Portrait",
        description: "Artistic portrait with creative lighting effects",
        width: 1,
        height: 1
      },
      {
        id: 5,
        type: "text",
        title: "Creative Process",
        description: "How we approach creative projects with our clients",
        width: 1,
        height: 1
      },
      {
        id: 6,
        type: "mixed",
        src: "/creative-portrait-with-artistic-effects.jpg",
        title: "Artistic Vision",
        description: "Creative portrait with artistic effects",
        width: 1,
        height: 1
      },
      {
        id: 7,
        type: "image",
        src: "/stylish-person-in-black-dress.jpg",
        title: "Elegant Fashion",
        description: "Stylish person in elegant black dress",
        width: 1,
        height: 1
      },
      {
        id: 8,
        type: "image",
        src: "/person-with-fire-effects.jpg",
        title: "Fire Effects",
        description: "Person with dramatic fire effects",
        width: 1,
        height: 1
      },
      {
        id: 9,
        type: "mixed",
        src: "/person-taking-selfie.png",
        title: "Selfie Moment",
        description: "Casual selfie in natural lighting",
        width: 1,
        height: 1
      },
      {
        id: 10,
        type: "text",
        title: "Design Trends",
        description: "Latest trends in digital design for 2024",
        width: 1,
        height: 1
      },
      {
        id: 11,
        type: "image",
        src: "/person-on-escalator-in-modern-building.jpg",
        title: "Modern Architecture",
        description: "Person on escalator in modern building",
        width: 1,
        height: 1
      },
      {
        id: 12,
        type: "mixed",
        src: "/video-placeholder.png",
        title: "Video Content",
        description: "Creating engaging video content for social media",
        width: 1,
        height: 1
      }
    ]
    
    setCards(sampleCards)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="w-full">
      <div 
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridAutoRows: "1fr"
        }}
      >
        {cards.map((card) => (
          <div 
            key={card.id}
            className="transition-all duration-300 ease-in-out"
          >
            <Card 
              id={card.id}
              type={card.type}
              src={card.src}
              title={card.title}
              description={card.description}
              width={card.width}
              height={card.height}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MasonryGrid