"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number
    let position = 0
    const speed = 0.5 // pixels per frame

    const animate = () => {
      if (!isHovered) {
        position -= speed
        
        // Reset position when we've scrolled exactly one set of logos
        const totalWidth = scrollElement.scrollWidth / 2 // Half because we have duplicates
        if (position <= -totalWidth) {
          position = 0
        }
        
        scrollElement.style.transform = `translateX(${position}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isHovered])

  // Actual company logos
  const logos = [
    { name: "Rockwell Automation", src: "/conveyor-logos/rockwell.png" },
    { name: "Johnson Controls", src: "/conveyor-logos/johnson controls.png" },
    { name: "Baird", src: "/conveyor-logos/baird.png" },
    { name: "Thrivent", src: "/conveyor-logos/thrivent.png" },
    { name: "Catholic Financial Life", src: "/conveyor-logos/catholic fin.png" },
    { name: "Keurig DrPepper", src: "/conveyor-logos/drpepper.png" },
    { name: "Webster Bank", src: "/conveyor-logos/webster bank.png" },
    { name: "GE", src: "/conveyor-logos/ge.png" },
    { name: "US Foods", src: "/conveyor-logos/usfoods.png" },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="flex"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex items-center justify-center h-16 w-40 shrink-0 mx-8">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`logo-dup-${index}`} className="flex items-center justify-center h-16 w-40 shrink-0 mx-8">
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
