import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "What types of products can you animate or render?",
      answer:
        "We can create photorealistic 3D animations and renders for almost any product — from beauty and skincare to electronics, furniture, and luxury goods. If it exists (or is planned), we can bring it to life.",
    },
    {
      question: "How long does a typical 3D animation take?",
      answer:
        "Timelines vary depending on complexity, but a standard 15–20 second animation usually takes 7–14 working days after final concept approval.",
    },
    {
      question: "Do you work with existing CAD files or need product samples?",
      answer:
        "We can work with both. If you have CAD or 3D models, we can import and refine them. If not, we can create models from physical product samples or detailed reference images.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Pricing is based on animation length, complexity, number of renders, and modeling requirements. You can view our detailed pricing in the pricing section above.",
    },
    {
      question: "Can we request changes after delivery?",
      answer:
        "Yes. All revisions are covered under our revision policy, which ensures smooth updates without unexpected scope creep.",
    },
    {
      question: "Will the renders match our brand's visual style?",
      answer:
        "Absolutely. We customize lighting, materials, camera angles, and animation pacing to fit your brand's identity and marketing needs.",
    },
    {
      question: "What formats do you deliver in?",
      answer:
        "We typically deliver in MP4 (H.264) for videos and high-resolution PNG/JPG for stills. Other formats like MOV, ProRes, or transparent-background renders are available on request.",
    },
    {
      question: "Can you handle large-scale projects or bulk renders?",
      answer:
        "Yes, we regularly work on bulk orders for 10+ animations or 50+ renders. We optimize workflows to maintain quality and meet tight deadlines.",
    },
  ]

  return (
    <section id="faq" className="relative py-24 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-400 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Support Center
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Questions
                </span>
                <div className="absolute -inset-1 bg-purple-500/20 blur-2xl -z-10" />
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our 3D animation and rendering services.
              <br />
              Can't find what you're looking for? Feel free to reach out.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border-0 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:from-gray-900/70 hover:to-gray-900/50"
              >
                <div className="relative">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-800 group-hover:ring-purple-400/50 transition-all duration-300" />
                  
                  <AccordionTrigger className="relative px-6 sm:px-8 py-6 text-left hover:no-underline group/trigger [&[data-state=open]>div>svg]:rotate-45">
                    <div className="flex items-start gap-4 w-full pr-4">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 text-sm font-bold group-hover/trigger:bg-purple-500/20 group-hover/trigger:border-purple-400/40 transition-all duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Question Text */}
                      <span className="text-base sm:text-lg font-semibold text-white group-hover/trigger:text-purple-300 transition-colors duration-300 flex-1">
                        {faq.question}
                      </span>
                      
                      {/* Plus Icon */}
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover/trigger:bg-purple-500/20 transition-all duration-300">
                        <Plus className="w-4 h-4 text-purple-400 transition-transform duration-300" />
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="relative px-6 sm:px-8 pb-6">
                    <div className="pl-12 pr-4">
                      {/* Decorative Line */}
                      <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-purple-400/50 to-transparent" />
                      
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/20 backdrop-blur-sm">
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                <p className="text-gray-400 text-sm">Our team is here to help you get started.</p>
              </div>
              <button className="group/btn relative px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}