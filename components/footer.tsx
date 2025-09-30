"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Services: [
      { name: "3D Animation", href: "#services" },
      { name: "Motion Graphics", href: "#services" },
      { name: "Visual Effects", href: "#services" },
      { name: "Product Visualization", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "/blog" },
    ],
    Support: [
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "#contact" },
      { name: "Help Center", href: "#help" },
      { name: "Documentation", href: "#docs" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Refund Policy", href: "/revisions" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icons/logo.png" alt="Moon Scale logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-xl">
                <span style={{ color: "#7B68EE" }}>MOON</span>
                <span className="text-white"> SCALE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Transforming ideas into stunning visual experiences through cutting-edge 3D animation and AI-powered
              creative solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>moonscale@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 8839720548</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Gurgaon Haryana, INDIA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        {/*<div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Get the latest updates on our services and industry insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg 
                          text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 
                          transition-colors text-sm"
              />
              <button
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 
                          text-white rounded-lg hover:from-purple-600 hover:to-blue-600 
                          transition-all duration-200 text-sm font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>*/}

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} <span style={{ color: "#7B68EE" }}>Moon</span>{" "}
            <span className="text-white">Scale</span>. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center
                          text-gray-400 hover:text-white hover:bg-purple-500 
                          transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
