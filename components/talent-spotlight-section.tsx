import Image from "next/image"

export function TalentSpotlightSection() {
  return (
    <section className="py-0 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Static promotional image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[480px] aspect-[3/4] group">
              <Image
                src="/images/talent.png"
                alt="Talent spotlight"
                fill
                sizes="(max-width: 1024px) 80vw, 520px"
                className="object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6 lg:pl-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
              Discover Untapped Talent
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Connect with a diverse array of professionals ready to bring their rich life experiences, renewed
              perspective, and mature talent back to the workforce. Join us in crafting returnship programs that not
              only fill your talent gaps but enrich your organizational culture.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gray-900 font-medium text-sm sm:text-base lg:text-lg hover:text-[#B83A3A] transition-colors"
            >
              Learn more
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
