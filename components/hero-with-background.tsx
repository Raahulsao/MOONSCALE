"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Instagram, Twitter, Github } from "lucide-react"

const ACCENT = "#7B68EE"

export function HeroWithBackground() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vUS77CveIJP6zDqtY9tNaJBC2bU4Nr.png')",
          opacity: 0.9,
        }}
      />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          Moon Scale<sup className="text-2xl">®</sup>
        </h1>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-2 mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 rounded-full px-6 py-4"
            />
            <Button className="rounded-full px-6 py-4 text-black font-medium" style={{ backgroundColor: "white" }}>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-lg text-white/90 leading-relaxed mb-8">
            Stay updated with the latest news and exclusive content! Subscribe to our newsletter today and never miss
            out on exciting updates.
          </p>

          <Button className="rounded-full px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all">
            Manifesto
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <Button
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
          >
            <Instagram className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
          >
            <Twitter className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
          >
            <Github className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Newsletter Setup Notice */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          <span>⚠️</span>
          <span>V0 Newsletter Setup</span>
        </div>
      </div>
    </section>
  )
}
