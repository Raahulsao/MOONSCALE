"use client"
import HeroGrid from "@/components/HeroGrid" 
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faSun,
} from "@fortawesome/free-solid-svg-icons"
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

// ----- Constants -----
const CARD_SIZE = 200
const CARD_GAP = 15

const teamMembers = [
  {
    name: "Ethan Clarke",
    role: "Creative Director",
    image: "/team/roshni.jpg",
  },
  {
    name: "Sophia Bennett",
    role: "UX/UI Designer",
    image: "/team/art17.jpeg",
  },
  {
    name: "Mia Carter",
    role: "Brand Manager",
    image: "/team/team1.jpeg",
  },
  {
    name: "Arnold Lee",
    role: "Web Developer",
    image: "/team/team2-re.png",
  },
  {
    name: "Leo Harris",
    role: "Marketing Director",
    image: "/team/leo.jpg",
  },
  {
    name: "Natalie Chen",
    role: "Product Designer",
    image: "/team/natalie.jpg",
  },
  {
    name: "Jackson White",
    role: "Motion Artist",
    image: "/team/jackson.jpg",
  },
  {
    name: "Ava Brooks",
    role: "UI Developer",
    image: "/team/ava.jpg",
  },
]

const leftCards = [
  {
    icon: faPhone,
    title: "Call Us",
    description: "+1 (123) 456-7890",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "info@moonscale.com",
  },
  {
    icon: faMapMarkerAlt,
    title: "Office",
    description: "Build. 7, Tech Park,\nCalifornia, USA",
  },
  {
    icon: faSun,
    title: "Support",
    description: "Mon - Fri\n9am - 6pm",
  },
]

const rightCards = [
  {
    icon: faMapMarkerAlt,
    title: "HQ Address",
    description: "45 Grand Central Terminal,\nNew York, 10017",
  },
  {
    icon: faPhone,
    title: "Sales",
    description: "+1 (222) 123-4567",
  },
  {
    icon: faEnvelope,
    title: "Press",
    description: "media@moonscale.com",
  },
  {
    icon: faSun,
    title: "Follow Us",
    socials: true,
  },
]

const getGridPosition = (i: number) => {
  const offset = CARD_SIZE / 2 + CARD_GAP / 2
  return [
    { x: -offset, y: -offset },
    { x: offset, y: -offset },
    { x: -offset, y: offset },
    { x: offset, y: offset },
  ][i]
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  })

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-black text-white py-2">
        <HeroGrid />
      </section>

      {/* ---------------- OUR TEAM SECTION ---------------- */}
      <section id="our-team" className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#7B68EE]">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-neutral-800 shadow-md bg-[#111] transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center text-center">
  <div className="text-white text-lg font-bold">{member.name}</div>
  <div className="text-neutral-300 text-sm mb-3">{member.role}</div>
  <div className="flex items-center justify-center gap-4 text-white">
    <a href="#" aria-label="Instagram">
      <FontAwesomeIcon icon={faInstagram} className="hover:text-purple-400 transition" />
    </a>
    <a href="#" aria-label="X">
      <FontAwesomeIcon icon={faXTwitter} className="hover:text-purple-400 transition" />
    </a>
    <a href="#" aria-label="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} className="hover:text-purple-400 transition" />
    </a>
  </div>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION W/ 2x2 Contact Cards ---------------- */}
      <section
        id="about"
        className="relative bg-black text-white pt-36 pb-32 scroll-mt-24 z-10"
      >
        <div className="container mx-auto px-4 mb-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#7B68EE] mb-4">
            About Moon Scale
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We are redefining 3D animation for cutting-edge brands. Our studio delivers vivid, impactful visual storytelling that drives engagement and creates unforgettable user experiences.
          </p>
        </div>

        <div
          ref={containerRef}
          className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4"
        >
          {/* LEFT CARD GRID */}
          <div
            className="relative mx-auto"
            style={{
              width: `${CARD_SIZE * 2 + CARD_GAP}px`,
              height: `${CARD_SIZE * 2 + CARD_GAP}px`,
            }}
          >
            {leftCards.map((card, i) => {
              const { x, y } = getGridPosition(i)
              const motionX = useTransform(scrollYProgress, [0, 1], [0, x])
              const motionY = useTransform(scrollYProgress, [0, 1], [0, y])
              const scale = useTransform(scrollYProgress, [0, 1], [1 - i * 0.02, 1])
              return (
                <motion.div
                  key={i}
                  style={{
                    x: motionX,
                    y: motionY,
                    scale,
                    zIndex: 100 - i,
                    width: CARD_SIZE,
                    height: CARD_SIZE,
                  }}
                  className="absolute rounded-2xl overflow-hidden border border-neutral-800 bg-[#111] shadow-xl flex flex-col items-center justify-center text-center p-4"
                >
                  <div className="w-12 h-12 mb-3 rounded-full bg-[#222] flex items-center justify-center">
                    <FontAwesomeIcon icon={card.icon} className="text-purple-500 text-xl" />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-neutral-400 text-sm whitespace-pre-line leading-snug">
                    {card.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* RIGHT CARD GRID */}
          <div
            className="relative mx-auto"
            style={{
              width: `${CARD_SIZE * 2 + CARD_GAP}px`,
              height: `${CARD_SIZE * 2 + CARD_GAP}px`,
            }}
          >
            {rightCards.map((card, i) => {
              const { x, y } = getGridPosition(i)
              const motionX = useTransform(scrollYProgress, [0, 1], [0, x])
              const motionY = useTransform(scrollYProgress, [0, 1], [0, y])
              const scale = useTransform(scrollYProgress, [0, 1], [1 - i * 0.02, 1])
              return (
                <motion.div
                  key={i}
                  style={{
                    x: motionX,
                    y: motionY,
                    scale,
                    zIndex: 100 - i,
                    width: CARD_SIZE,
                    height: CARD_SIZE,
                  }}
                  className="absolute rounded-2xl overflow-hidden border border-neutral-800 bg-[#111] shadow-xl flex flex-col items-center justify-center text-center p-4"
                >
                  <div className="w-12 h-12 mb-3 rounded-full bg-[#222] flex items-center justify-center">
                    <FontAwesomeIcon icon={card.icon} className="text-purple-500 text-xl" />
                  </div>
                  {card.socials ? (
                    <>
                      <h4 className="text-sm text-purple-500 font-semibold mb-2">Follow Us:</h4>
                      <div className="flex gap-3 mt-1 text-white justify-center">
                        <FontAwesomeIcon icon={faXTwitter} className="hover:text-purple-500 transition" />
                        <FontAwesomeIcon icon={faLinkedin} className="hover:text-purple-500 transition" />
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-purple-500 transition" />
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-purple-500 transition" />
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {card.title}
                      </h4>
                      <p className="text-neutral-400 text-sm whitespace-pre-line leading-snug">
                        {card.description}
                      </p>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}