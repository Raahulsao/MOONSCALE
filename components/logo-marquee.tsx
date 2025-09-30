"use client"

import Image from "next/image"

export function LogoMarquee() {
  const logos = [
    { name: "Cursor", image: "/icons/cursor.png" },
    { name: "Bytedance", image: "/icons/bytedance-color.png" },
    { name: "Kling", image: "/icons/kling-color.svg" },
    { name: "V0", image: "/icons/v0.png" },
    { name: "Perplexity AI", image: "/icons/perplexity-ai-icon.png" },
    { name: "Gemini", image: "/icons/gemini-color.png" },
    { name: "Trae", image: "/icons/trae-color.svg" },
    { name: "Anthropic", image: "/icons/anthropic (1).png" },
    { name: "Deepseek", image: "/icons/deepseek-color.png" },
    { name: "Figma", image: "/icons/figma-color.png" },
    { name: "GitHub Copilot", image: "/icons/githubcopilot.png" },
    { name: "Ideogram", image: "/icons/ideogram.png" },
    { name: "Grok", image: "/icons/grok-icon.png" },
    { name: "Krea", image: "/icons/kera.png" },
    { name: "Kimi", image: "/icons/kimi-color.png" },
    { name: "Lovable", image: "/icons/lovable-color.png" },
    { name: "Midjourney", image: "/icons/midjourney.png" },
    { name: "Qwen", image: "/icons/qwen-color.png" },
    { name: "RunwayML", image: "/icons/runway.png" },
  ]

  const LogoItem = ({ logo }: { logo: { name: string; image: string } }) => (
    <div className="flex items-center space-x-0 pr-12 shrink-0 grayscale hover:grayscale-0 transition duration-300">
      <div className="relative w-28 h-12">
        <Image
          src={logo.image}
          alt={logo.name}
          fill
          className="object-contain"
          sizes="98px"
        />
      </div>
      <span className="text-white text-xl font-bold">{logo.name}</span>
    </div>
  )

  return (
    <section className="bg-black py-12 overflow-hidden">
      <div className="mx-auto px-4">
        <h2 className="text-center text-sm text-gray-100 uppercase mb-10 tracking-wide">
          Most Advanced AI Tools
        </h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee gap-12 w-max max-w-none whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={i} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Styles for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  )
}