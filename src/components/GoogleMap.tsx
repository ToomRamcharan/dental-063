"use client"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

export default function GoogleMap({ config }: { config: any }) {
  return (
    <section id="map" className="py-12 bg-bg-site">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-8">
          <h2 className="text-2xl font-bold font-heading">Find Us on Map</h2>
          <p className="text-foreground-muted mt-2">Visit our clinic at {config.address}, {config.city}</p>
        </Motion>
        <Motion variants={fadeUp} className="w-full h-[400px] rounded-xl overflow-hidden border border-border-color">
          <iframe
            src="https://www.google.com/maps?q=Mandi+Bazar,+Warangal+Warangal&output=embed"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          ></iframe>
        </Motion>
      </div>
    </section>
  )
}
