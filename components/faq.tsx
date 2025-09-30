import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    <section id="faq" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(123,104,238,0.10),transparent_55%)]" />
            <div className="relative space-y-12">
              <header className="space-y-4 text-center">
                <h2 className="text-4xl font-bold tracking-tight" style={{ color: "#7B68EE" }}>
                  Frequently Asked Questions
                </h2>
                <p className="text-neutral-400 text-lg">
                  Answers to common questions we get from brands about 3D animation and rendering for products.
                </p>
              </header>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-neutral-800 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:no-underline hover:text-[#7B68EE] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-300 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
