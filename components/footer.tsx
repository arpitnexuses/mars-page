"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12">
          {/* Left Column - CTA Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black mb-3 sm:mb-4 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
              Empowering Your Healthcare Team with Exceptional Talent
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">Partner with MARS Healthcare Staffing</p>
            <button 
              className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              style={{ backgroundColor: "#B71C1C" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1818"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B71C1C"}
            >
              CONTACT US TODAY
            </button>
          </div>

          {/* Right Column - Links */}
          <div className="flex-shrink-0">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-black hover:text-[#B3262F] transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-black hover:text-[#B3262F] transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Terms & Conditions
              </Link>
              <Link href="/find-jobs" className="text-black hover:text-[#B3262F] transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                Find Jobs
              </Link>
              <Link href="/about-us" className="text-black hover:text-[#B3262F] transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                About Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
