"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl items-center px-6 lg:px-8 py-16 lg:py-20">
        {/* Left Column - Content */}
        <div className="max-w-3xl flex-1 lg:pr-12 mb-12 lg:mb-0">
          {/* Main Heading */}
          <h1 className="mb-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            <span className="text-gray-900">Cut through the AI noise.</span>
            <br />
            <span className="text-[#B3262F]">Find real talent, faster.</span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg lg:text-xl leading-relaxed text-gray-600">
            MARS TalentFlex is a subscription-based sourcing engine that helps you rise above AI-generated clutter. We merge technology and human insight to deliver verified, ranked candidates—so your team can focus on what truly matters: engaging and hiring the best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="px-8 py-6 text-base font-semibold uppercase tracking-wide text-white bg-[#B3262F] hover:bg-[#9A1F28] transition-colors duration-200 rounded-md"
              size="lg"
            >
              Learn How It Works
            </Button>
          </div>
        </div>

        <div className="relative w-full lg:flex-1 flex justify-center lg:justify-end">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full max-w-md lg:max-w-2xl">
            <Image
              src="/images/candidate-cards.png"
              alt="Candidate profile cards showing diverse returners"
              width={800}
              height={600}
              className="object-contain object-center lg:object-right w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
