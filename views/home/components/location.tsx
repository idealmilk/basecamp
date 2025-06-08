import Image from "next/image"

export function Location() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight tracking-wide">
                  DEEP IN THE VALLEY.
                  <br />
                  CLOSE TO YOUR HEART.
                </h2>
                <div className="w-16 h-px bg-stone-300"></div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                  <span className="text-stone-700 tracking-wide">2.5 HOURS FROM TOKYO</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                  <span className="text-stone-700 tracking-wide">PICKUP FROM THE NEAREST STATION</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                  <span className="text-stone-700 tracking-wide">WE&apos;RE REMOTE — WE LIKE IT THAT WAY</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/location/valley.jpg"
                alt="Valley view with mountains"
                width={500}
                height={600}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 