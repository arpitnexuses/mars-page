"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Column - CTA Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Empowering Your Team with Top Talent
            </h2>
            <p className="text-gray-600 text-lg mb-8">Partner with MARS TalentFlex</p>
            <Button
              className="px-8 py-6 text-base font-semibold uppercase tracking-wide text-white bg-[#B3262F] hover:bg-[#9A1F28] transition-colors duration-200 rounded-md"
              size="lg"
            >
              CONTACT US TODAY
            </Button>
          </div>

          {/* Right Column - Links */}
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-200 text-base">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-200 text-base">
                Terms & Conditions
              </Link>
              <Link href="/find-jobs" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-200 text-base">
                Find Jobs
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-[#B3262F] transition-colors duration-200 text-base">
                About Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
