"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl items-center px-4 sm:px-6 lg:pl-8 lg:pr-0 py-12 lg:py-20">
        {/* Left Column - Content */}
        <div className="max-w-3xl flex-1 pr-0 lg:pr-8 mb-8 lg:mb-0">
          {/* Main Heading */}
          <h1 className="mb-6 sm:mb-8 text-balance font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
            <span className="text-gray-900 whitespace-nowrap">Cut through the AI 
              <br />
              noise. Find real talent,</span>
            <br />
            <span className="text-[#7cb342]">faster.</span>
          </h1>

          {/* Description */}
          <p className="mb-8 sm:mb-10 max-w-2xl text-pretty text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
          MARS TalentFlex is a subscription-based sourcing engine that helps you rise above AI-generated clutter.
           We merge technology and human insight to deliver verified,
            ranked candidates—so your team can focus on what truly matters: engaging and hiring the best
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto -translate-x-2.5"
              style={{ backgroundColor: "#B3262F" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
              size="lg"
            >
              Learn How It Works
            </Button>
          </div>
        </div>

        <div className="relative w-full lg:flex-1 flex justify-center lg:flex lg:justify-end mt-6 lg:mt-0 lg:-ml-28 lg:mr-0">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] w-full max-w-md lg:max-w-none lg:w-[130%] group">
            <Image
              src="/images/candidate-cards.png"
              alt="Candidate profile cards showing diverse returners"
              width={400}
              height={300}
              className="object-contain object-center lg:object-right w-full h-full transition-all duration-500 group-hover:scale-90"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
