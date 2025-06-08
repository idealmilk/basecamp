import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Retreats() {
  return (
    <section id="retreats" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 tracking-wide mb-8">UPCOMING RETREATS</h2>
            <div className="w-16 h-px bg-stone-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <Image
                src="/images/retreats/trail-sisters.jpg"
                alt="Trail Sisters Weekend"
                width={600}
                height={400}
                className="object-cover w-full"
              />
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-light tracking-wide text-stone-900">TRAIL SISTERS WEEKEND</h3>
                  <p className="text-stone-600 tracking-wide">SEPTEMBER 2025</p>
                </div>
                <p className="text-stone-700 font-light leading-relaxed">
                  A weekend for women who run trails, share stories, and support each other&apos;s journeys.
                </p>
                <Button
                  variant="outline"
                  className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 text-sm tracking-wide"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <Image
                src="/images/retreats/forest-silence.jpg"
                alt="Silence in the Forest"
                width={600}
                height={400}
                className="object-cover w-full"
              />
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-light tracking-wide text-stone-900">SILENCE IN THE FOREST</h3>
                  <p className="text-stone-600 tracking-wide">NOVEMBER 2025</p>
                </div>
                <p className="text-stone-700 font-light leading-relaxed">
                  Five days of mindful movement, forest bathing, and the profound quiet of winter mountains.
                </p>
                <Button
                  variant="outline"
                  className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 text-sm tracking-wide"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 