"use client"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

export default function Hero({ config }: { config: any }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-primary-light pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6">
            {config.clinicName}
          </h1>
          <p className="text-xl text-white/80 mb-8">{config.city} | {config.address}</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 font-semibold text-lg hover:shadow-xl transition-all">
            <Calendar className="w-5 h-5" /> Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  )
}
