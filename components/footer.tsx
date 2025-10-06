'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const linkItems = {
    Company: ['Home', 'About', 'Blog', 'Blog Details'],
    'Quick Links': [
      'Create AI',
      'Contact',
      'Privacy Policy',
      'Terms And Conditions',
    ],
  }

  return (
    <footer
  ref={ref}
  className={`bg-black text-white px-6 md:px-12 pt-16 pb-2 mb-4 transition-all duration-1000 ease-out
    border border-purple-400 rounded-xl shadow-inner
    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
  `}
>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding Section */}
        <div className={`col-span-1 space-y-6`}>
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/logo.png"
              alt="MOON SCALE logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold">
              <span className="text-purple-400">MOON</span>{' '}
              <span>SCALE</span>
            </span>
          </div>
          <p className="text-gray-400 text-base max-w-sm">
            Powered by MOON Scale. Built for businesses. Driven by Professionals.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-4">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:text-purple-400 transition-all duration-300"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Link Sections */}
        {Object.entries(linkItems).map(([title, links], sectionIndex) => (
          <div
            key={title}
            className={`space-y-4 opacity-0 transform translate-y-10 ${
              isVisible
                ? 'animate-fade-in-up animation-delay-' +
                  sectionIndex * 200
                : ''
            }`}
          >
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <ul className="space-y-3">
              {links.map((text, idx) => (
                <li
                  key={text}
                  className={`text-base text-gray-400 transform transition duration-500 ease-in-out group`}
                >
                  <Link
                    href="#"
                    className="relative inline-block overflow-hidden"
                  >
                    <span
                      className="block transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-purple-400"
                    >
                      {text}
                    </span>
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div
          className={`space-y-4 opacity-0 translate-y-10 ${
            isVisible ? 'animate-fade-in-up animation-delay-600' : ''
          }`}
        >
          <h4 className="text-lg font-semibold">Subscribe For Our Newsletter</h4>
          <form className="flex items-center bg-neutral-900 rounded-full px-4 py-2 w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-white text-sm w-full outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              className="text-white hover:text-purple-400 transition"
            >
              ➜
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© MOON SCALE 2025, All Rights Reserved</p>
        
      </div>

      {/* Advanced Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s forwards;
        }

        .animation-delay-0 {
          animation-delay: 0ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </footer>
  )
}