"use client"
import { useState } from "react"
import { Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const TABS = [
  {id:"general",title:"General",icon:Gem,content:"Comprehensive checkups, cleanings, and preventive care. Regular visits keep your smile healthy."},
  {id:"rct",title:"Root Canal",icon:Stethoscope,content:"Pain-free root canal therapy using modern techniques. Save infected teeth and restore your smile."},
  {id:"whitening",title:"Whitening",icon:Sparkles,content:"Professional teeth whitening treatments. Get a brighter, more confident smile in just one session."},
  {id:"implants",title:"Implants",icon:Syringe,content:"Permanent tooth replacement that looks and feels completely natural. Restore your smile permanently."},
  {id:"ortho",title:"Ortho",icon:SmilePlus,content:"Braces and clear aligners to straighten teeth and correct bite issues for all ages."},
  {id:"pediatric",title:"Kids",icon:Baby,content:"Gentle, child-friendly dental care. Making dentistry fun and comfortable for your little ones."},
]

export default function Services({ config }: { config: any }) {
  const [active, setActive] = useState("general")
  const current = TABS.find(t => t.id === active)
  return (
    <section id="services" className="section-padding bg-bg-site">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Services</h2>
        </Motion>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(tab => {
            const Icon = tab.icon
            const isActive = active === tab.id
            return (
              <button key={tab.id} onClick={() => setActive(tab.id)} className={`"flex items-center gap-2 px-5 py-2.5 font-medium text-sm transition-all ${isActive ? "bg-primary text-white" : "bg-gray-100 text-foreground-muted hover:bg-gray-200"}"`}>
                <Icon className="w-4 h-4" /> {tab.title}
              </button>
            )
          })}
        </div>
        <Motion key={active} variants={fadeUp} className="max-w-3xl mx-auto text-center bg-white border border-border-color rounded-2xl p-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            {current && <current.icon className="w-8 h-8 text-primary" />}
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4">{current?.title}</h3>
          <p className="text-foreground-muted leading-relaxed">{current?.content}</p>
        </Motion>
      </div>
    </section>
  )
}
