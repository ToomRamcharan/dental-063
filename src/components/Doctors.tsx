"use client"
import { motion } from "framer-motion"
import { Star, GraduationCap, Briefcase } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const DOCTORS = [{"name": "Dr. Arjun Reddy", "spec": "MDS - Orthodontics", "exp": "15+ years", "img": "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"}, {"name": "Dr. Priya Sharma", "spec": "MDS - Periodontics", "exp": "12+ years", "img": "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827761.jpg"}, {"name": "Dr. Suresh Kumar", "spec": "MDS - Prosthodontics", "exp": "18+ years", "img": "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_23-2148827885.jpg"}, {"name": "Dr. Ananya Gupta", "spec": "BDS - Cosmetic Dentistry", "exp": "8+ years", "img": "https://img.freepik.com/free-photo/woman-doctor-wearing-coat-holding-stethoscope_1303-27704.jpg"}]

export default function Doctors({ config }: { config: any }) {
  return (
    <section id="doctors" className="section-padding bg-bg-site">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">Experienced specialists dedicated to your smile</p>
        </Motion>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc, i) => (
            <Motion key={i} variants={fadeUp} delay={i} className="bg-white border border-border-color rounded-xl overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img src="{doc.img}" alt="{doc.name}" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-heading">{doc.name}</h3>
                <div className="flex items-center gap-1 text-foreground-muted text-sm mt-1">
                  <GraduationCap className="w-4 h-4" /> {doc.spec}
                </div>
                <div className="flex items-center gap-1 text-foreground-muted text-sm mt-1">
                  <Briefcase className="w-4 h-4" /> {doc.exp}
                </div>
                <div className="flex items-center gap-1 mt-3 text-yellow-500">
                  {[...Array(5)].map((_,j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
