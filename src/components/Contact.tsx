"use client"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

export default function Contact({ config }: { config: any }) {
  return (
    <section id="contact" className="section-padding bg-bg-dark">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Get In Touch</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">Book your appointment today</p>
        </Motion>
        <div className="grid lg:grid-cols-2 gap-12">
          <Motion variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-primary" /></div>
              <div><h3 className="font-semibold font-heading">Address</h3><p className="text-foreground-muted text-sm mt-1">Mandi Bazar, Warangal, Warangal - 506002</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-primary" /></div>
              <div><h3 className="font-semibold font-heading">Phone</h3><p className="text-foreground-muted text-sm mt-1"><a href="tel:{config.phone}" className="hover:text-primary">{config.phone}</a></p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-primary" /></div>
              <div><h3 className="font-semibold font-heading">Email</h3><p className="text-foreground-muted text-sm mt-1"><a href="mailto:" className="hover:text-primary">info@royaldentalclinic.com</a></p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-primary" /></div>
              <div><h3 className="font-semibold font-heading">Working Hours</h3><p className="text-foreground-muted text-sm mt-1">Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 2:00 PM</p></div>
            </div>
          </Motion>
          <Motion variants={fadeUp} delay={2} className="bg-white border border-border-color rounded-xl p-8">
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" required />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" required />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" required />
              <select className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>General Checkup</option><option>Root Canal</option><option>Teeth Whitening</option><option>Dental Implants</option><option>Orthodontics</option><option>Other</option>
              </select>
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"></textarea>
              <button type="submit" className="w-full bg-primary text-white py-3.5 font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </Motion>
        </div>
      </div>
    </section>
  )
}
