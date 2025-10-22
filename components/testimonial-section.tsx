"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 h-[600px]">
        <Image
          src="/images/testimonial-bg.jpg"
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
            Making Your Workplace 
            <br />
            Reflective of the <span className="font-bold">World 
              <br />
              Around You.</span>
          </h2>

          {/* Body Text */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Embrace experienced professionals and build a diverse, perspective-driven workforce that benefits your
            organization.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="text-white text-lg px-8 py-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#7cb342" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
          >
            Find diverse talent
          </Button>
        </div>
      </div>
    </section>
  )
}
