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
      <div className="mx-auto flex max-w-7xl items-center px-8 py-6 lg:px-12">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-[100px]">
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/mars-logo.png"
            alt="MARS Solutions Group"
            width={130}
            height={52}
            className="h-auto w-30 transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-md"
          />
        </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/employers" className="text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105">
              Employers
            </Link>
            <Link href="/returners" className="text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105">
              Returners
            </Link>
            <Link href="/volunteer" className="text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105">
              Volunteer
            </Link>
            <Link href="https://marssg.com/about-2/" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105">
              About us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button and CTA Button */}
        <div className="ml-auto flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#B3262F] hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button */}
          <Button 
            className="px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto" 
            size="lg" 
            style={{ backgroundColor: "#B3262F" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#9A1F28"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#B3262F"}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <div className="px-8 py-6 space-y-4">
            <Link 
              href="/employers" 
              className="block text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Employers
            </Link>
            <Link 
              href="/returners" 
              className="block text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Returners
            </Link>
            <Link 
              href="/volunteer" 
              className="block text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link 
              href="https://marssg.com/about-2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-base font-medium text-gray-700 transition-all duration-300 hover:text-[#B3262F] hover:scale-105 py-2"
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
