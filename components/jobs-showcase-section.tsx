export function JobsShowcaseSection() {
  const jobs = [
    {
      title: "Sr. Registered Nurse",
      specialty: "Cardiology",
      salary: "$82,000/year",
      location: "Cleveland, OH",
    },
    {
      title: "Registered Nurse",
      specialty: "Neurology",
      salary: "$85,000/year",
      location: "New York City, NY",
    },
    {
      title: "Registered Nurse",
      specialty: "OBGYN",
      salary: "$78,000/year",
      location: "Boston, MA",
    },
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - GIF placeholder with MARS logo */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Horizontal lines extending from circle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px">
                <div className="absolute left-0 w-32 h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-500"></div>
                <div className="absolute right-0 w-32 h-px bg-gradient-to-l from-transparent via-purple-300 to-purple-500"></div>
              </div>

              {/* Circular container for GIF */}
              <div className="relative w-80 h-80 rounded-full bg-white shadow-2xl flex items-center justify-center">
                {/* Placeholder for GIF - will be replaced later */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#B83A3A]">MARS</span>
                    </div>
                    <p className="text-sm text-gray-500">GIF Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Job listings */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-600 mb-3">{job.specialty}</p>
                    <div className="flex gap-8 text-sm">
                      <div>
                        <p className="text-gray-500 uppercase text-xs mb-1">Salary</p>
                        <p className="text-gray-900 font-semibold">{job.salary}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 uppercase text-xs mb-1">Location</p>
                        <p className="text-gray-900 font-semibold">{job.location}</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#7CB342] hover:bg-[#6DA036] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                    APPLY NOW
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
