import Image from "next/image"

export function TalentSpotlightSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 leading-tight text-[#B3262F]">
          From Job Intake to Candidate Shortlist — All in Days, Not Weeks
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Circular Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dashed border-blue-400 bg-blue-50">
                <Image
                  src="/images/talent.png"
                  alt="Healthcare professional"
                  fill
                  sizes="(max-width: 1024px) 80vw, 520px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Process Chips */}
          <div className="space-y-6 sm:space-y-8">
            {/* Process Steps */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Chip 1 */}
              <div className="relative flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center z-10" style={{ borderColor: "#B3262F" }}>
                  <span className="font-bold text-lg" style={{ color: "#B3262F" }}>1</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Share Your Job Description:</h3>
                  <p className="text-sm sm:text-base text-gray-600">You tell us what you're looking for.</p>
                </div>
              </div>

              {/* Chip 2 */}
              <div className="relative flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center z-10" style={{ borderColor: "#B3262F" }}>
                  <span className="font-bold text-lg" style={{ color: "#B3262F" }}>2</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Activate TalentFlex:</h3>
                  <p className="text-sm sm:text-base text-gray-600">Our sourcing engine kicks off the 3-layer filtration process</p>
                </div>
              </div>

              {/* Chip 3 */}
              <div className="relative flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center z-10" style={{ borderColor: "#B3262F" }}>
                  <span className="font-bold text-lg" style={{ color: "#B3262F" }}>3</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Receive Verified Shortlist:</h3>
                  <p className="text-sm sm:text-base text-gray-600">Within 72 hours, get 5–8 ranked, pre-screened candidates.</p>
                </div>
              </div>

              {/* Chip 4 */}
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center z-10" style={{ borderColor: "#B3262F" }}>
                  <span className="font-bold text-lg" style={{ color: "#B3262F" }}>4</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Start Interviewing:</h3>
                  <p className="text-sm sm:text-base text-gray-600">Your team focuses on interviews and hiring—the heavy lifting is already done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
