"use client"
import { MapPin, Phone, Mail, Heart } from "lucide-react"

export default function Footer({ config }: { config: any }) {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">{config.clinicName}</h3>
            <p className="text-white/70 text-sm leading-relaxed">Providing premium dental care in {config.city} with advanced technology and compassionate service.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-white/70">
              {["Home","About","Services","Doctors","Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-white/70">
              {["General Dentistry","Root Canal","Teeth Whitening","Implants","Orthodontics"].map(s => <p key={s}>{s}</p>)}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>{config.address}, {config.city}</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><a href="tel:{config.phone}" className="hover:text-white">{config.phone}</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 flex-shrink-0" /><span>info@royaldentalclinic.com</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2024 {config.clinicName}. All rights reserved. Made with <Heart className="w-4 h-4 inline text-red-400" /> for your smile.</p>
        </div>
      </div>
    </footer>
  )
}
