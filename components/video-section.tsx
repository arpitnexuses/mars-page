"use client"

import Image from "next/image"

export function VideoSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Image
          src="/funnel.png"
          alt="MARS funnel process"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}


