"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Left Column - Content */}
        <div className="max-w-3xl flex-1 pr-0 lg:pr-8 mb-8 lg:mb-0">
          {/* Main Heading */}
          <h1 className="mb-6 sm:mb-8 text-balance font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
            <span className="text-gray-900 whitespace-nowrap">REIGNITE. RENEW.</span>
            <br />
            <span className="text-[#7cb342]">RETURN.</span>
          </h1>

          {/* Description */}
          <p className="mb-8 sm:mb-10 max-w-2xl text-pretty text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
            MARS Returnship offers a powerful pathway for professionals to re-engage with the workforce. Your time away
            isn't a gap—it's an asset. We provide the tools, support, and opportunities to ensure your transition back
            is as smooth and successful as possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              style={{ backgroundColor: "#B3262F" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
              size="lg"
            >
              Partner With Us
            </Button>
            <Button
              className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              style={{ backgroundColor: "#2c3e7d" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1f2d5c"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2c3e7d"}
              size="lg"
            >
              For Returners
            </Button>
          </div>
        </div>

        <div className="relative flex-1 lg:flex lg:justify-end mt-8 lg:mt-0">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cards%201-t1TXdzAi7istOGfY1icgWQT0RhMQUV.png"
              alt="Candidate profile cards showing diverse returners"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
