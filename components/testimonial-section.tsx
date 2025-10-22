"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 h-full">
        <Image
          src="/images/testimonial-bg.png"
          alt="Diverse professionals in office"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Card - Positioned on Left */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center py-20">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl p-12">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Empower Your Talent Acquisition Team with the Right Tools
          </h2>

          {/* Body Text */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            TalentFlex helps your recruiters do what they do best: build relationships, engage talent, and close offers while we take care of sourcing.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold uppercase tracking-wide text-white bg-[#B3262F] hover:bg-[#9A1F28] transition-colors duration-200 rounded-md"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
