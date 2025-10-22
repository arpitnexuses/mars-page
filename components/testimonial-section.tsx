"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Background Image */}
      <div className="absolute inset-0 h-[600px]">
        <Image
          src="/images/testimonial-bg.png"
          alt="Diverse professionals in office"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Card - Positioned on Left */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-20 -mt-[120px] sm:mt-0">
        <div
          className="bg-white rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B3262F]/10"
          style={{ maxWidth: "calc(42rem - 30px)", padding: "calc(48px - 15px)", marginLeft: "10px" }}
        >
          {/* Heading */}
          <h2 className="text-4xl font-normal text-gray-900 leading-tight mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
          Empower Your Talent Acquisition 
            <br />
            Team with the <span className="font-bold">World 
              <br />
              Right Tools</span>
          </h2>

          {/* Body Text */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          TalentFlex helps your recruiters do what they do bes; build relationships, engage talent, and close offers while we take care of 
          sourcing.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            style={{ backgroundColor: "#7cb342" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
