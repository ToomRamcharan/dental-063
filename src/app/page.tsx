'use client'

import React, { useState, useEffect } from 'react'
import Motion from '../components/Motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Technology from '../components/Technology'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import GoogleMap from '../components/GoogleMap'
import Footer from '../components/Footer'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  const siteConfig = {
    clinicName: "Royal Dental Clinic",
    phone: "+918702456789",
    email: "",
    address: "Mandi Bazar, Warangal",
    city: "Warangal",
    pincode: "506002",
    rating: "4.1",
    waLink: "https://wa.me/918702456789",
    designFamily: "Organic",
    navType: "Rounded",
    heroType: "Interactive",
    servicesType: "Tabs",
    footerType: "CTA Footer",
    colors: {"primary": "#059669", "primary_light": "#34D399", "secondary": "#D4B895", "secondary_light": "#E8D5B7", "accent": "#047857", "bg": "#FEFCE8", "bg_dark": "#052E16", "fg": "#1E293B", "fg_muted": "#78716C", "border": "#D1FAE5", "white": "#FFFFFF"},
  }

  return (
    <main id="main-content" className="min-h-screen bg-bg-site text-foreground">
      <Navbar config={siteConfig} />
      <Hero config={siteConfig} />
      <About config={siteConfig} />
      <Services config={siteConfig} />
      <Doctors config={siteConfig} />
      <Technology config={siteConfig} />
      <Testimonials config={siteConfig} />
      <Gallery config={siteConfig} />
      <FAQ config={siteConfig} />
      <Contact config={siteConfig} />
      <GoogleMap config={siteConfig} />
      <Footer config={siteConfig} />
      <WhatsAppCTA config={siteConfig} />
    </main>
  )
}
