"use client"

const testimonials = [
  {
    name: "Sarah Jones",
    role: "Artist",
    avatar: "/professional-woman-artist.jpg",
    content:
      "MoonScale is the best AI animation studio! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Specialist",
    avatar: "/professional-woman-marketing.png",
    content:
      "MoonScale is a fantastic AI animation studio for creating social media graphics and marketing materials. It helps me generate eye-catching visuals that resonate with our target audience.",
  },
  {
    name: "Katherine Lee",
    role: "Musician",
    avatar: "/professional-woman-musician.jpg",
    content: "MoonScale AI Animation Studio inspires me to create new music videos and album covers.",
  },
  {
    name: "Isabelle Dubois",
    role: "Fashion Designer",
    avatar: "/professional-woman-fashion-designer.jpg",
    content:
      "MoonScale is like having a virtual mood board at my fingertips. I can generate different clothing styles and fabric textures, helping me create unique and cohesive fashion collections.",
  },
  {
    name: "David Lee",
    role: "Graphic Designer",
    avatar: "/professional-man-graphic-designer.jpg",
    content:
      "I use MoonScale to create mockups and concept art for clients. It saves me tons of time and allows for a wider range of creative exploration.",
  },
  {
    name: "Noah Miller",
    role: "Product Developer",
    avatar: "/professional-man-product-developer.jpg",
    content:
      "We use MoonScale to prototype product designs and user interfaces. It allows us to quickly iterate and test different concepts before investing time and resources into physical prototypes.",
  },
  {
    name: "Peter Jackson",
    role: "Gamer",
    avatar: "/professional-man-gamer.jpg",
    content:
      "MoonScale takes my gaming experience to the next level. I use it to visualize character designs and environments, making games even more immersive.",
  },
  {
    name: "Omar Garcia",
    role: "Web Developer",
    avatar: "/professional-man-web-developer.jpg",
    content: "MoonScale is a helpful tool for generating website mockups.",
  },
  {
    name: "Maria Garcia",
    role: "Architect",
    avatar: "/professional-woman-architect.png",
    content: "MoonScale has become an invaluable tool. Simply the best AI animation studio I have used.",
  },
  {
    name: "Aisha Patel",
    role: "Blogger",
    avatar: "/professional-woman-blogger.jpg",
    content:
      "MoonScale helps me create captivating visuals for my blog posts. It allows me to illustrate complex concepts and make my content more engaging.",
  },
  {
    name: "William Johnson",
    role: "Hobbyist",
    avatar: "/professional-man-hobbyist.jpg",
    content:
      "MoonScale is a fun and easy way to explore my creativity. I can create fantastical landscapes, portraits, and even abstract art – all with just a few words.",
  },
  {
    name: "Sophia Bennett",
    role: "Editor",
    avatar: "/professional-woman-editor.png",
    content:
      "MoonScale AI Animation Studio is a great way to generate illustrations for articles, but sometimes the artistic style might not be a perfect fit. It requires some browsing and refinement to find the right image.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span style={{ color: "#7B68EE" }}>Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Trusted by creative professionals worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                         border border-gray-800 rounded-xl p-6 
                         hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10
                         transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
