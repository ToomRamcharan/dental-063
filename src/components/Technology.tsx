"use client"
import { Microscope, Scan, Zap, Cpu, Brain, Wind } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const TECH = [{"name": "Digital X-Rays", "desc": "Low-radiation digital imaging for accurate diagnosis"}, {"name": "Laser Dentistry", "desc": "Minimally invasive laser treatments for faster healing"}, {"name": "3D CBCT Scanning", "desc": "Cone beam CT for precise 3D dental imaging"}, {"name": "CAD/CAM", "desc": "Computer-aided design for same-day restorations"}, {"name": "AI Diagnostics", "desc": "AI-powered analysis for early detection"}, {"name": "Sedation Dentistry", "desc": "Comfortable care with advanced sedation options"}]
const TECH_ICONS = [Microscope, Scan, Zap, Cpu, Brain, Wind]

export default function Technology({ config }: { config: any }) {
  return (
    <section id="technology" className="section-padding bg-bg-dark">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Technology</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Modern Dental Technology</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">Cutting-edge equipment for precise, comfortable treatment</p>
        </Motion>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH.map((t, i) => {
            const Icon = TECH_ICONS[i]
            return (
              <Motion key={i} variants={fadeUp} delay={i} className="bg-white border border-border-color rounded-xl p-6 flex gap-4 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold font-heading">{t.name}</h3>
                  <p className="text-sm text-foreground-muted mt-1">{t.desc}</p>
                </div>
              </Motion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
