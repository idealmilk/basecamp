import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Experience() {
  return(
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 tracking-wide mb-8">EXPERIENCES</h2>
            <div className="w-16 h-px bg-stone-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src={"/images/experiences/sunset-run.jpg"}
                alt="Guided sunrise runs"
                width={600}
                height={500}
                className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-light tracking-wide mb-2">GUIDED SUNRISE RUNS</h3>
                <div className="flex items-center text-white/80">
                  <span className="text-sm tracking-wide">LEARN MORE</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src={"/images/experiences/cold-river-dips.jpg"}
                alt="Cold river dips"
                width={600}
                height={500}
                className="object-cover object-bottom w-full h-96 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-light tracking-wide mb-2">COLD RIVER DIPS</h3>
                <div className="flex items-center text-white/80">
                  <span className="text-sm tracking-wide">LEARN MORE</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src={"/images/experiences/sauna.jpg"}
                alt="Sauna & soup rituals"
                width={600}
                height={500}
                className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-light tracking-wide mb-2">SAUNA & SOUP RITUALS</h3>
                <div className="flex items-center text-white/80">
                  <span className="text-sm tracking-wide">LEARN MORE</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
            <div className="relative group cursor-pointer overflow-hidden">
              <Image
                src={"/images/experiences/forest-dinners.jpg"}
                alt="Forest dinners"
                width={600}
                height={500}
                className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-xl font-light tracking-wide mb-2">FOREST DINNERS</h3>
                <div className="flex items-center text-white/80">
                  <span className="text-sm tracking-wide">LEARN MORE</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}