import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/mars-logo.png"
            alt="MARS Solutions Group"
            width={140}
            height={60}
            className="h-auto w-32 lg:w-36"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/employers" className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900">
            Employers
          </Link>
          <Link href="/returners" className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900">
            Returners
          </Link>
          <Link href="/volunteer" className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900">
            Volunteer
          </Link>
          <Link href="/about" className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900">
            About us
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="bg-red-700 px-6 py-2 text-base font-semibold text-white hover:bg-red-800" size="lg">
          Learn More
        </Button>
      </div>
    </nav>
  )
}
