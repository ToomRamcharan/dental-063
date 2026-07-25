"use client"
import { motion } from "framer-motion"
import { Stethoscope, Award, Users, BadgeCheck } from "lucide-react"
import Motion from "./Motion"
import { fadeUp, staggerContainer } from "./Motion"

const STATS = [
  {icon: Award, value: "15+", label: "Years Experience"},
  {icon: Users, value: "5000+", label: "Happy Patients"},
  {icon: Stethoscope, value: "50+", label: "Procedures"},
  {icon: BadgeCheck, value: "4.8", label: "Patient Rating"},
]

export default function About({ config }: { config: any }) {
  return (
    <section id="about" className="section-padding bg-bg-site">
      <div className="section-container">
        <Motion variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
          <Motion variants={fadeUp}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🦷</div>
                  <p className="text-2xl font-bold font-heading text-primary">{config.clinicName}</p>
                  <p className="text-foreground-muted">{config.city}</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-lg shadow-xl hidden lg:block">
                <p className="text-2xl font-bold">{config.rating}</p>
                <p className="text-sm text-white/80">Patient Rating</p>
              </div>
            </div>
          </Motion>
          <Motion variants={fadeUp} delay={2}>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mt-3 mb-6">
              Your Trusted Dental Partner in {config.city}
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              At {config.clinicName}, we believe everyone deserves a beautiful, healthy smile. 
              Our team of experienced dentists uses the latest technology to provide pain-free, 
              compassionate care. From routine checkups to advanced cosmetic procedures, 
              we treat every patient like family.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-foreground-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-medium hover:opacity-90 transition-all">
              Know More About Us
            </a>
          </Motion>
        </Motion>
      </div>
    </section>
  )
}
