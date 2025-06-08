import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Rooms() {
  return(
     <section id="stay" className="py-32 bg-stone-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Cozy room with wood beams and warm light"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </div>
              <div className="space-y-12">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight tracking-wide">
                    SIMPLE ROOMS.
                    <br />
                    WARM LIGHT.
                    <br />
                    DEEP REST.
                  </h2>
                  <div className="w-16 h-px bg-stone-300"></div>
                  <p className="text-lg text-stone-600 leading-relaxed font-light">
                    Each room is a quiet sanctuary with handcrafted wood details, soft linens, and views of the forest.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="text-2xl font-light text-stone-900 tracking-wide">FROM ¥8,000 / NIGHT</div>
                  <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-sm tracking-wide">
                    CHECK AVAILABILITY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }