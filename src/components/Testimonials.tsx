"use client"
import { Star, Quote } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const REVIEWS = [{"name": "Ramesh P.", "text": "Best dental experience I've ever had. The team was professional and made me feel completely at ease.", "rating": 5}, {"name": "Sneha K.", "text": "My smile has transformed completely. The whitening treatment gave me incredible results!", "rating": 5}, {"name": "Venkat R.", "text": "Root canal was painless! I was nervous but the doctor explained everything and I felt no pain.", "rating": 5}, {"name": "Lakshmi M.", "text": "Wonderful pediatric care for my kids. They actually look forward to their dental visits now!", "rating": 5}, {"name": "Anil G.", "text": "Professional, modern, and affordable. Highly recommend for any dental work.", "rating": 5}, {"name": "Divya S.", "text": "The implant procedure was smooth and the results are fantastic. Feels just like natural teeth.", "rating": 5}]

export default function Testimonials({ config }: { config: any }) {
  return (
    <section id="testimonials" className="section-padding bg-bg-site">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">What Our Patients Say</h2>
        </Motion>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Motion key={i} variants={fadeUp} delay={i} className="bg-white border border-border-color rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {[...Array(r.rating)].map((_,j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
              <p className="font-semibold text-foreground">{r.name}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
