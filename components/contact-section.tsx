"use client"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="px-6 md:px-10">
      <h2 className="font-heading text-sm mb-2">CONTACT</h2>
      
      <div className="bg-black text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 md:p-12 flex flex-col">
            <div className="mb-8">
              <label className="font-heading text-sm block mb-2">NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="mb-8">
              <label className="font-heading text-sm block mb-2">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            
            <div className="mb-8 flex-1">
              <label className="font-heading text-sm block mb-2">MESSAGE</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition-colors resize-none min-h-[120px]"
              />
            </div>
            
            <button
              type="submit"
              className="font-heading text-sm bg-white text-black px-6 py-3 hover:bg-white/90 transition-colors self-start"
            >
              SEND
            </button>
          </form>
          
          {/* Right side content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-2">{"LET'S GET"}</h3>
            <p className="font-body text-2xl md:text-3xl mb-6">Creative Together.</p>
            <p className="font-body text-white/60 max-w-md">
              Auftragsarbeiten, Zusammenarbeiten oder einfach mal Hallo sagen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
