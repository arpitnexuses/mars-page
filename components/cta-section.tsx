import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/cta-background.png"
        alt="Professional team meeting"
        fill
        className="object-cover"
        priority={false}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-end px-6 lg:px-8">
        <div className="max-w-2xl text-right text-white">
          <h2 className="mb-8 text-5xl leading-tight lg:text-6xl">
            <span className="font-bold">BUILD HIGH PERFORMING</span>
            <br />
            <span className="font-light">Diverse Tech Team</span>
          </h2>
          <div className="flex justify-end">
            <Button
              size="lg"
              className="bg-[#7CB342] hover:bg-[#689F38] text-white font-bold px-12 py-6 text-lg uppercase"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
