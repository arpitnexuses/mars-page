import Image from "next/image"

export function ElevateCareerSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Elevate Your Career</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Effortlessly restart your career with our specialized program. Refresh your skills, acquire new knowledge,
              and explore exciting opportunities through mentorship and skill development. Unlock your potential and
              confidently navigate your professional journey with our dedicated support. Your success awaits!
            </p>
          </div>

          {/* Right Column - Profile Cards Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl aspect-[16/9]">
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
