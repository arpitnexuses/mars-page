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
        className="absolute inset-0 w-full h-full object-cover"
        priority={false}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-end px-6 lg:px-8 py-20">
        <div className="max-w-2xl text-right text-white">
          <h2 className="mb-8 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Rise Above the Noise,
            <br />
            Find the Right Talent.
          </h2>
          <div className="flex justify-end">
            <Button
              size="lg"
              className="px-8 py-6 text-base font-semibold uppercase tracking-wide text-white bg-[#B3262F] hover:bg-[#9A1F28] transition-colors duration-200 rounded-md"
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
