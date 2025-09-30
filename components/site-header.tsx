'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Briefcase, Tag, HelpCircle, FileText, Info } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Briefcase },
    { href: "#pricing", label: "Pricing", icon: Tag },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/about", label: "About", icon: Info },
  ]

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full max-w-5xl px-2">
      <div
        className="flex h-16 items-center justify-between px-4 bg-black/30 backdrop-blur-xl border border-white/10 
                   rounded-full shadow-xl text-white"
        style={{
          background: "linear-gradient(90deg, rgba(28,18,50,0.55) 0%, rgba(10,10,15,0.55) 100%)", // more transparent
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* 👾 Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icons/logo.png" alt="Moon Scale logo" width={36} height={36} className="w-9 h-9" />
          <span className="font-semibold tracking-wide text-lg">
            <span className="text-purple-400 font-bold">MOON</span>
            <span className="text-white font-light"> SCALE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-purple-300 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-purple-400 hover:bg-lime-300 text-black font-semibold px-5 py-2 rounded-lg transition"
          >
            <Link href="https://wa.me/918839720548">Chat With Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border border-white/20 bg-black/30 text-white hover:bg-black/50"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-black/80 text-white backdrop-blur-md border-l border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <Image src="/icons/logo.png" alt="Moon Scale logo" width={28} height={28} />
                <span className="font-semibold tracking-wide text-lg">
                  <span className="text-purple-400">MOON</span> <span className="text-white">SCALE</span>
                </span>
              </div>

              <nav className="flex flex-col gap-1 text-base">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 transition"
                  >
                    <l.icon className="h-5 w-5 opacity-60" />
                    <span>{l.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <Button
                  asChild
                  className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold py-2 rounded-lg"
                >
                  <Link href="https://wa.link/65mf3i">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}