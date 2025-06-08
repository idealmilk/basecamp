import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return(
    <section className="relative h-screen overflow-hidden">
      <Image
        src={"/images/hero/sunrise.jpg"}
        alt="Misty forest trail in Nagano mountains"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide leading-tight">
            TRAIL RUNNING
            <br />
            BASECAMP
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 tracking-wide opacity-90">NAGANO, JAPAN</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-stone-900 hover:bg-stone-100 px-12 py-4 text-sm tracking-wide font-medium"
            >
              BOOK A STAY
            </Button>
            <Button
              size="lg"
               className="bg-white text-stone-900 hover:bg-stone-100 px-12 py-4 text-sm tracking-wide font-medium"
            >
              JOIN OUR COMMUNITY
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}