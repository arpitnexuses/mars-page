import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column - CTA Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-normal text-black mb-4 leading-tight">
              Empowering Your Healthcare Team with Exceptional Talent
            </h2>
            <p className="text-gray-500 text-lg mb-8">Partner with MARS Healthcare Staffing</p>
            <button className="bg-[#B71C1C] hover:bg-[#9A1818] text-white font-semibold px-8 py-4 rounded-lg transition-colors uppercase text-sm tracking-wide">
              CONTACT US TODAY
            </button>
          </div>

          {/* Right Column - Links */}
          <div className="flex-shrink-0">
            <h3 className="text-xl font-bold text-black mb-6">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-black hover:text-gray-600 transition-colors text-base">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-black hover:text-gray-600 transition-colors text-base">
                Terms & Conditions
              </Link>
              <Link href="/find-jobs" className="text-black hover:text-gray-600 transition-colors text-base">
                Find Jobs
              </Link>
              <Link href="/about-us" className="text-black hover:text-gray-600 transition-colors text-base">
                About Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
