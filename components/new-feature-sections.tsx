"use client"

import { useState, useEffect } from "react"
import { Shield, Users, Zap, Play, Pause } from "lucide-react"

const ACCENT = "#7B68EE"

// Premium auto-changing images for each section
const premiumImages = [
  "/3d-product-animation-horizontal-1.jpg",
  "/3d-product-animation-horizontal-2.jpg",
  "/3d-product-animation-horizontal-3.jpg",
  "/3d-product-animation-horizontal-4.jpg",
]

const taskImages = [
  "/3d-product-animation-vertical-1.jpg",
  "/3d-product-animation-vertical-2.jpg",
  "/3d-product-animation-vertical-3.jpg",
  "/3d-product-animation-square.jpg",
]

const securityImages = [
  "/product-animation-horizontal-1.jpg",
  "/product-animation-horizontal-2.jpg",
  "/product-animation-horizontal-3.jpg",
  "/product-animation-vertical-1.jpg",
]

function PremiumImageCard({ images, className = "" }: { images: string[]; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10" />
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt="Premium feature showcase"
        className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-110"
      />
      <div className="absolute bottom-4 left-4 z-20">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function PremiumVideoCard({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null)

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause()
      } else {
        videoRef.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 z-10" />
      <video
        ref={setVideoRef}
        className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110"
        loop
        muted
        playsInline
        poster="/3d-product-animation-horizontal-1.jpg"
      >
        <source src="/demo-video.mp4" type="video/mp4" />
      </video>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 z-20 flex items-center justify-center
                   bg-black/20 hover:bg-black/30 transition-all duration-300
                   group-hover:bg-black/40"
      >
        <div
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm 
                        flex items-center justify-center hover:bg-white/30 
                        transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
        </div>
      </button>

      {/* Premium overlay effects */}
      <div className="absolute top-4 right-4 z-20">
        <div
          className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 
                        rounded-full text-white text-xs font-medium"
        >
          Premium
        </div>
      </div>
    </div>
  )
}

export function NewFeatureSections() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What makes us the <span style={{ color: ACCENT }}>best studio</span> for you.
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Experience premium features designed to elevate your creative workflow
          </p>
        </div>

        {/* Real-Time Creative Collaboration */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                              rounded-full border border-purple-500/30"
              >
                <Zap className="w-4 h-4" style={{ color: ACCENT }} />
                {/*<span className="text-sm font-medium" style={{ color: ACCENT }}>
                  Real-Time Collaboration
                </span>*/}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Creative Sync in Real-Time</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience seamless collaboration with instant creative feedback, live editing sessions, and synchronized
              project updates that keep your entire team aligned and productive.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Instant creative feedback loops</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Live collaborative editing sessions</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Synchronized project timelines</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <PremiumImageCard images={premiumImages} className="h-96 lg:h-[500px]" />
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 
                            rounded-full blur-3xl opacity-30"
            />
          </div>
        </div>

        {/* Advanced Project Management with Video */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <PremiumVideoCard className="h-96 lg:h-[500px]" />
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 
                            rounded-full blur-3xl opacity-30"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                              rounded-full border border-blue-500/30"
              >
                <Users className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-sm font-medium" style={{ color: ACCENT }}>
                  Advanced Management
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Intelligent Project Flow</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Streamline complex creative projects with AI-powered task management, automated workflows, and intelligent
              resource allocation that adapts to your team's unique creative process.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">AI-powered task prioritization</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Automated creative workflows</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Smart resource optimization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Security */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 
                              rounded-full border border-green-500/30"
              >
                <Shield className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-sm font-medium" style={{ color: ACCENT }}>
                  Enterprise Security
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Bank-Level Protection</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Protect your creative assets with military-grade encryption, advanced access controls, and comprehensive
              audit trails that meet the highest industry security standards.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">End-to-end encryption for all assets</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Advanced role-based access control</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="text-gray-300">Comprehensive security audit trails</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <PremiumImageCard images={securityImages} className="h-96 lg:h-[500px]" />
            <div
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 
                            rounded-full blur-3xl opacity-30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
