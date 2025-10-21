import Image from "next/image"

export function ElevateCareerSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8f5f5" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>Elevate Your Career</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Effortlessly restart your career with our specialized program. Refresh your skills, acquire new knowledge,
              and explore exciting opportunities through mentorship and skill development. Unlock your potential and
              confidently navigate your professional journey with our dedicated support. Your success awaits!
            </p>
          </div>

          {/* Right Column - Profile Cards Image */}
          <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl aspect-[16/9]">
              <Image
                src="/images/profile-cards.png"
                alt="Professional profiles showcasing HR Director, Sr. Security Engineer, and Sr. Manager Cloud positions"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
