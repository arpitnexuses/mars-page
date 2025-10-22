"use client"

import Image from "next/image"

export function VideoSection() {
  return (
    <section className="w-full pt-16 pb-8 px-4 sm:px-6">
      <div className="w-full relative">
        <Image
          src="/funnel.png"
          alt="MARS funnel process"
          width={1200}
          height={600}
          className="block w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}


