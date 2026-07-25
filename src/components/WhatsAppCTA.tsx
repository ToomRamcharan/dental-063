"use client"
import { MessageCircle, Phone } from "lucide-react"

export default function WhatsAppCTA({ config }: { config: any }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+918702456789"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="{config.waLink}"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
