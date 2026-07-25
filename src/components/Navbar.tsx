"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ config }: { config: any }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h)
  }, [])
  return (
    <nav className={`"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`"max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg rounded-full shadow-lg" : "bg-transparent"}"`}>
        <div className="flex items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-bold font-heading text-primary">Royal Dental Clinic</a>
          <div className="hidden lg:flex items-center gap-6">
            {["Home","About","Services","Doctors","Testimonials","FAQ","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-primary transition-colors text-sm">{l}</a>
            ))}
          </div>
          <a href="#contact" className="hidden lg:block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium">Book Now</a>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
