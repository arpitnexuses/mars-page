import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
      <div className="mx-auto flex max-w-7xl items-center py-20 pl-6 lg:pl-8 lg:py-32">
        {/* Left Column - Content */}
        <div className="max-w-3xl flex-1 pr-6 lg:pr-8">
          {/* Main Heading */}
          <h1 className="mb-8 text-balance font-sans text-6xl font-black leading-tight tracking-tight lg:text-7xl">
            <span className="text-gray-900">REIGNITE. RENEW.</span>
            <br />
            <span className="text-[#7cb342]">RETURN.</span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-gray-600 lg:text-xl">
            MARS Returnship offers a powerful pathway for professionals to re-engage with the workforce. Your time away
            isn't a gap—it's an asset. We provide the tools, support, and opportunities to ensure your transition back
            is as smooth and successful as possible.
          </p>

          <div className="flex gap-4">
            <Button
              className="bg-red-700 px-8 py-6 text-base font-bold uppercase tracking-wide text-white hover:bg-red-800"
              size="lg"
            >
              Partner With Us
            </Button>
            <Button
              className="bg-[#2c3e7d] px-8 py-6 text-base font-bold uppercase tracking-wide text-white hover:bg-[#1f2d5c]"
              size="lg"
            >
              For Returners
            </Button>
          </div>
        </div>

        <div className="relative hidden flex-1 lg:flex lg:justify-end">
          <div className="relative h-[600px] w-full">
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
