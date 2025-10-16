import Image from "next/image"
import { Star } from "lucide-react"

export function TalentSpotlightSection() {
  const talents = [
    {
      id: 1,
      name: "Augusta P",
      role: "Software Developer",
      rating: 5,
      avatar: "/woman-software-developer.jpg",
    },
    {
      id: 2,
      name: "Selena K",
      role: "Data Analyst",
      rating: 4,
      avatar: "/woman-data-analyst.png",
    },
    {
      id: 3,
      name: "Johnny H",
      role: "Ful Stack Developer",
      rating: 5,
      avatar: "/man-developer.png",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex items-center gap-8 justify-center lg:justify-start">
            {/* Profile Cards - Vertically stacked on the left */}
            <div className="flex flex-col gap-6">
              {talents.map((talent) => (
                <div key={talent.id} className="flex items-center gap-3 bg-white rounded-lg shadow-lg p-3 w-[320px]">
                  <span className="text-base font-bold text-gray-900 min-w-[20px]">{talent.id}.</span>
                  <Image
                    src={talent.avatar || "/placeholder.svg"}
                    alt={talent.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm">{talent.name}</h4>
                    <p className="text-xs text-gray-600">{talent.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < talent.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <button className="bg-[#B83A3A] text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-[#9a2f2f] transition-colors whitespace-nowrap">
                    Hire Now
                  </button>
                </div>
              ))}
            </div>

            {/* Woman Image - Positioned to the right of cards */}
            <div className="hidden lg:block">
              <Image
                src="/images/talent-woman.png"
                alt="Professional woman working"
                width={380}
                height={520}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:pl-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Discover Untapped Talent
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Connect with a diverse array of professionals ready to bring their rich life experiences, renewed
              perspective, and mature talent back to the workforce. Join us in crafting returnship programs that not
              only fill your talent gaps but enrich your organizational culture.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-gray-900 font-medium text-base lg:text-lg hover:text-[#B83A3A] transition-colors"
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
