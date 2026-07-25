"use client"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const FAQS = [{"q": "How often should I visit the dentist?", "a": "We recommend visiting every 6 months for routine checkups and cleanings to maintain optimal oral health."}, {"q": "Does dental treatment hurt?", "a": "We use modern techniques and anesthesia to ensure your comfort. Most procedures are virtually pain-free."}, {"q": "What payment options do you accept?", "a": "We accept all major credit cards, debit cards, UPI, and cash. We also offer EMI options for major treatments."}, {"q": "How long does a root canal take?", "a": "A typical root canal treatment takes 1-2 visits, with each visit lasting about 60-90 minutes."}, {"q": "Do you accept insurance?", "a": "Yes, we work with most major insurance providers. Please bring your insurance card to your first visit."}, {"q": "What should I do in a dental emergency?", "a": "Call us immediately. We prioritize emergency cases and will see you as soon as possible."}]

export default function FAQ({ config }: { config: any }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="section-padding bg-bg-site">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Frequently Asked Questions</h2>
        </Motion>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <Motion key={i} variants={fadeUp} delay={i} className="border border-border-color rounded-xl overflow-hidden bg-white">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{faq.q}</span>
                </div>
                <ChevronDown className={`"w-5 h-5 text-primary flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}"`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pl-14 text-foreground-muted leading-relaxed">{faq.a}</div>
              )}
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
