"use client"
import { useState } from "react"
import { Image, X, ChevronLeft, ChevronRight } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const IMAGES = [
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
  "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
]

export default function Gallery({ config }: { config: any }) {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <section id="gallery" className="section-padding bg-bg-dark">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Our Clinic Gallery</h2>
        </Motion>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((src, i) => (
            <Motion key={i} variants={fadeUp} delay={i} className="cursor-pointer group" onClick={() => setSelected(i)}>
              <div className="relative overflow-hidden rounded-xl">
                <img src="{src}" alt="Gallery image {i+1}" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <Image className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Motion>
          ))}
        </div>
        {selected !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <button className="absolute top-4 right-4 text-white"><X className="w-8 h-8" /></button>
            <button className="absolute left-4 text-white" onClick={(e) => {e.stopPropagation(); setSelected(selected > 0 ? selected-1 : IMAGES.length-1)}}><ChevronLeft className="w-8 h-8" /></button>
            <img src="{IMAGES[selected]}" alt="" className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
            <button className="absolute right-4 text-white" onClick={(e) => {e.stopPropagation(); setSelected(selected < IMAGES.length-1 ? selected+1 : 0)}}><ChevronRight className="w-8 h-8" /></button>
          </div>
        )}
      </div>
    </section>
  )
}
