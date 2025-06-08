import Image from "next/image"

export default function About() {
  return(
<section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight tracking-wide">
                    NOT A GUESTHOUSE.
                    <br />
                    NOT A HOSTEL.
                    <br />A BASECAMP.
                  </h2>
                  <div className="w-16 h-px bg-stone-300"></div>
                  <p className="text-lg text-stone-600 leading-relaxed font-light">
                    We are a small-scale refuge where trail runners, creatives, and seekers gather to move through the
                    mountains and find stillness in the forest. This is where adventure begins and recovery deepens.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                    <span className="text-stone-700 tracking-wide">FOREST SAUNA</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                    <span className="text-stone-700 tracking-wide">LOCAL FOOD</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                    <span className="text-stone-700 tracking-wide">MOUNTAIN TRAILS OUT THE DOOR</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/about/lodge.jpg"
                  alt="Japanese house in forest with warm interior light"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }