import Image from "next/image"

export function SplitLayoutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md">
              {/* Label */}
              <p className="text-red-600 font-semibold text-sm tracking-wider mb-4">CUSTOM, SCALABLE, TECH-ENABLED</p>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">
                Hire skilled nursing and allied health <span className="text-gray-600">professionals</span> on demand.
              </h2>

              {/* Form */}
              <form className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  placeholder="What positions are you looking for?"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors"
                >
                  REQUEST A CALL BACK
                </button>
              </form>

              {/* Footer Text */}
              <p className="text-sm text-gray-600">
                Know someone who&apos;s looking for a job?{" "}
                <a href="#" className="text-black font-semibold underline hover:text-red-600">
                  Refer here
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Image with Cards */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Red Geometric Shapes */}
              <div className="absolute top-16 right-0 w-64 h-64 bg-red-600 rounded-tl-[100px]" />
              <div className="absolute bottom-0 right-32 w-48 h-48 bg-red-600 rounded-tr-[80px]" />

              {/* Woman Image */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <Image
                  src="/images/professional-woman.png"
                  alt="Professional woman"
                  width={400}
                  height={600}
                  className="object-contain"
                />
              </div>

              {/* Floating Profile Cards */}
              <div className="absolute left-0 bottom-32 z-20 bg-white rounded-lg shadow-lg p-4 w-64">
                <div className="space-y-3">
                  {/* Card 1 */}
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Johnny Hamilton"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-black">Johnny Hamilton</p>
                      <p className="text-xs text-gray-600">Highway manager</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded whitespace-nowrap">
                      HIRE NOW
                    </button>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Emily Klein"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-black">Emily Klein</p>
                      <p className="text-xs text-gray-600">Systems Analyst</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded whitespace-nowrap">
                      HIRE NOW
                    </button>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Augusto Pena"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-black">Augusto Pena</p>
                      <p className="text-xs text-gray-600">Drip Specialist</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded whitespace-nowrap">
                      HIRE NOW
                    </button>
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
