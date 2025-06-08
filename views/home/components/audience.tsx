import { Mountain, Users, Sun } from "lucide-react"

export default function Audience() {
  return(
  <section className="py-32 bg-stone-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center space-y-8">
                <div className="w-20 h-20 mx-auto border border-stone-300 rounded-full flex items-center justify-center">
                  <Mountain className="h-8 w-8 text-stone-700" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-light tracking-wide text-stone-900">TRAIL RUNNERS</h3>
                  <p className="text-stone-600 font-light">Run, recover, repeat</p>
                </div>
              </div>
              <div className="text-center space-y-8">
                <div className="w-20 h-20 mx-auto border border-stone-300 rounded-full flex items-center justify-center">
                  <Sun className="h-8 w-8 text-stone-700" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-light tracking-wide text-stone-900">CREATIVES</h3>
                  <p className="text-stone-600 font-light">Think clearly, make slowly</p>
                </div>
              </div>
              <div className="text-center space-y-8">
                <div className="w-20 h-20 mx-auto border border-stone-300 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-stone-700" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-light tracking-wide text-stone-900">LONG-STAYERS</h3>
                  <p className="text-stone-600 font-light">Live in the rhythm of the forest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    }