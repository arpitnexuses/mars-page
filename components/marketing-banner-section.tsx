import Image from "next/image"
import { Star } from "lucide-react"

export function MarketingBannerSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Align with MARS Returnship for ESG Excellence:
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Joining forces with MARS Returnship not only enhances your talent acquisition strategy but also aligns
              with your ESG objectives.
            </p>
          </div>

          {/* Right Image with Floating Cards */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Woman Image */}
              <Image
                src="/images/marketing-woman.png"
                alt="Professional woman"
                width={450}
                height={520}
                className="relative z-10"
              />

              {/* APPLE Job Card - Top Right */}
              <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg p-4 w-64 z-20">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">APPLE</h3>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">(5.0)</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors">
                  APPLY NOW
                </button>
              </div>

              {/* Candidate Card - Bottom Left */}
              <div className="absolute bottom-12 left-0 bg-white rounded-lg shadow-lg p-4 w-72 z-20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Candidate #1</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Test Score</p>
                    <p className="text-2xl font-bold text-green-600">94%</p>
                    <p className="text-xs text-gray-500">Experience: 3+ years</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Video</p>
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-400 border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">Test Score</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
