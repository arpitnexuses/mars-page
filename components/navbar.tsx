"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-br from-[#f5f0eb] via-[#ede8f0] to-[#e8e5f5]">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-6 lg:px-8">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-12 lg:gap-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/mars-logo.png"
              alt="MARS Solutions Group"
              width={130}
              height={52}
              className="h-auto w-[130px]"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/employers" className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F]">
              Employers
            </Link>
            <Link href="/returners" className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F]">
              Returners
            </Link>
            <Link href="/volunteer" className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F]">
              Volunteer
            </Link>
            <Link href="https://marssg.com/about-2/" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F]">
              About us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button and CTA Button */}
        <div className="ml-auto flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#B3262F] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button */}
          <Button
            className="hidden md:inline-flex px-8 py-6 text-base font-semibold uppercase tracking-wide text-white bg-[#B3262F] hover:bg-[#9A1F28] transition-colors duration-200 rounded-md"
            size="lg"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/employers"
              className="block text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Employers
            </Link>
            <Link
              href="/returners"
              className="block text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Returners
            </Link>
            <Link
              href="/volunteer"
              className="block text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              href="https://marssg.com/about-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-medium text-gray-700 transition-colors duration-200 hover:text-[#B3262F] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
