import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TestimonialSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt="Diverse professionals in office"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Card - Positioned on Left */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-2xl">
          {/* Heading */}
          <h2 className="text-5xl font-normal leading-tight mb-6">
            Making Your Workplace Reflective of the <span className="font-bold">World Around You.</span>
          </h2>

          {/* Body Text */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Embrace experienced professionals and build a diverse, perspective-driven workforce that benefits your
            organization.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-[#7CB342] hover:bg-[#689F38] text-white text-lg px-8 py-6 rounded-xl font-medium"
          >
            Find diverse talent
          </Button>
        </div>
      </div>
    </section>
  )
}
