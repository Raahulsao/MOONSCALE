"use client"

import React, { useRef } from "react"

const testimonials = [
  {
    name: "Ronald Richards",
    role: "Laravel developer",
    avatar: "/professional-woman-artist.jpg",
    content:
      "Working with Emma Taylor was one of the best decisions we made for our brand. The entire process was smooth, collaborative.",
    rating: 4.9
  },
  {
    name: "Liam Parker",
    role: "Marketing Director",
    avatar: "/professional-man-graphic-designer.jpg",
    content:
      "From the very first call, I knew I was in good hands. The attention to detail, clean design.",
    rating: 4.9
  },
  {
    name: "Ronald Richards",
    role: "Laravel developer",
    avatar: "/professional-woman-artist.jpg",
    content:
      "Working with Emma Taylor was one of the best decisions we made for our brand. The entire process was smooth, collaborative.",
    rating: 4.9
  },
  {
    name: "Ronald Richards",
    role: "Laravel developer",
    avatar: "/professional-woman-artist.jpg",
    content:
      "Working with Emma Taylor was one of the best decisions we made for our brand. The entire process was smooth, collaborative.",
    rating: 4.9
  },
  {
    name: "Ronald Richards",
    role: "Laravel developer",
    avatar: "/professional-woman-artist.jpg",
    content:
      "Working with Emma Taylor was one of the best decisions we made for our brand. The entire process was smooth, collaborative.",
    rating: 4.9
  },
  {
    name: "Sophia Bennett",
    role: "Editor",
    avatar: "/professional-woman-editor.png",
    content:
      "MoonScale AI Animation Studio is a great way to generate illustrations for articles. I love using it in my workflow.",
    rating: 4.8
  }
]

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeft.current = scrollRef.current?.scrollLeft || 0
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseLeave = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="bg-black px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          What Our <span className="text-purple-500">Clients Say</span>
        </h2>
      </div>

      {/* Cards Row - Scroll on drag */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar select-none"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#212529] min-w-[360px] max-w-[360px] rounded-2xl p-6 relative flex-shrink-0"
          >
            {/* Stars */}
            <div className="text-purple-400 text-sm mb-2">★★★★★</div>

            {/* Rating in top-right */}
            <div className="absolute top-4 right-4 text-white-400 text-sm">
              {testimonial.rating}/5
            </div>

            {/* Content */}
            <p className="text-[18px] font-semibold text-white leading-snug mb-6">
              “{testimonial.content}”
            </p>

            {/* User info */}
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Testimonials