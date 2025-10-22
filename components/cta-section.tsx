"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background Image */}
      <Image
        src="/images/cta-background.png"
        alt="Professional team meeting"
        width={1920}
        height={500}
        className="absolute inset-0 w-full h-[500px] object-cover"
        priority={false}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-end px-6 pr-16 lg:px-8 lg:pr-20 py-20">
        <div className="max-w-2xl text-right text-white">
          <h2 className="mb-8 text-4xl font-bold text-white leading-tight">
            <span className="font-bold">Cut Through the
              <br />
              Noise.</span>
            <br />
            <span className="font-light">Find the Right Talent.</span>
          </h2>
          <div className="flex justify-end">
            <Button
              size="lg"
              className="text-white font-bold px-12 py-6 text-lg uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#7cb342" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#689F38"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#7cb342"}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
