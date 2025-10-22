"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export function MarketingBannerSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8f5f5" }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              It's Time to Shift, Not Sift
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stop spending hours sifting through endless resumes. Focus on selling your brand vision to culture-fit candidates who align with your goals.
            </p>
          </div>

          {/* Right Image with Floating Cards */}
          <div className="flex-1 max-w-xl relative">
            <div className="relative w-full mx-auto">
              {/* Main Woman Image */}
              <Image
                src="/images/marketing-woman.png"
                alt="Professional woman"
                width={310}
                height={310}
                className="relative z-10"
              />

              {/* APPLE Job Card - Top Right */}
              <div className="absolute top-6 right-12 bg-white rounded-lg shadow-lg p-4 w-56 z-20">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900">APPLE</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Data Analyst</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">(5.0)</span>
                  </div>
                </div>
                <button className="w-full text-white font-semibold py-2.5 px-4 rounded-lg bg-[#B3262F] hover:bg-[#9A1F28] transition-colors duration-200 text-sm">
                  APPLY NOW
                </button>
              </div>

              {/* Candidate Card - Bottom Left (refined to match design) */}
              <div className="absolute bottom-6 left-2 lg:left-[-190px] z-20 w-[280px] lg:w-[323px] rounded-xl bg-white shadow-lg">
                <div className="p-2 pb-1">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] leading-5 font-semibold text-[#1f2937]">Candidate #1</h3>
                    {/* small toggle */}
                    <label className="relative inline-flex h-5 w-10 cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" defaultChecked />
                      <span className="absolute inset-0 rounded-full bg-gray-200 transition-colors peer-checked:bg-[#7cb342]" />
                      <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
                    </label>
                  </div>
                </div>
                {/* Divider */}
                <div className="h-px w-full bg-gray-200" />
                <div className="p-2 pt-1">
                  {/* Middle metrics row */}
                  <div className="grid grid-cols-3 gap-4 mb-1">
                    <div>
                      <p className="text-[10px] text-gray-500 mb-1">Test Score</p>
                      <p className="text-[22px] leading-6 font-bold" style={{ color: "#7cb342" }}>94%</p>
                      <p className="text-[10px] text-gray-500">Experience: 3+ years</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[10px] text-gray-500 mb-1">Video</p>
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-100">
                        <div className="ml-0.5 h-0 w-0 border-b-[6px] border-l-[10px] border-t-[6px] border-b-transparent border-t-transparent border-l-gray-400" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-[10px] text-gray-500 mb-1">Test Score</p>
                      <div className="flex gap-1 -ml-5 sm:ml-0">
                        {[1,2,3,4,5].map((s)=> (
                          <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
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
