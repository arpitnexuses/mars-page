export function LogoCarousel() {
  // Placeholder logos - will be replaced with actual images
  const logos = [
    { name: "Rockwell Automation", placeholder: "RA" },
    { name: "Johnson Controls", placeholder: "JC" },
    { name: "Baird", placeholder: "BD" },
    { name: "Thrivent", placeholder: "TH" },
    { name: "Catholic Financial Life", placeholder: "CF" },
    { name: "Keurig DrPepper", placeholder: "KD" },
    { name: "Webster Bank", placeholder: "WB" },
    { name: "GE", placeholder: "GE" },
    { name: "Whole Foods", placeholder: "WF" },
  ]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll hover:pause">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex items-center justify-center h-12 w-40 shrink-0">
                {/* Placeholder - replace with actual logo images */}
                <div className="w-full h-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg text-gray-500 font-medium text-sm">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex items-center justify-center h-12 w-40 shrink-0">
                {/* Placeholder - replace with actual logo images */}
                <div className="w-full h-full flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg text-gray-500 font-medium text-sm">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
