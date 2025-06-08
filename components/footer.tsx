import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-light tracking-wide">JOIN THE CIRCLE</h3>
              <p className="text-stone-300 font-light leading-relaxed">
                Stories from the trail, retreat announcements, and seasonal reflections.
              </p>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent border-stone-700 text-white placeholder:text-stone-500 focus:border-white"
                />
                <Button className="bg-white text-stone-900 hover:bg-stone-100 px-8 text-sm tracking-wide">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-2xl font-light tracking-wide">BASECAMP</div>
              <div className="flex flex-wrap gap-8">
                <Link
                  href="#contact"
                  className="text-stone-300 hover:text-white transition-colors text-sm tracking-wide"
                >
                  CONTACT
                </Link>
                <Link
                  href="#instagram"
                  className="text-stone-300 hover:text-white transition-colors text-sm tracking-wide"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="#volunteer"
                  className="text-stone-300 hover:text-white transition-colors text-sm tracking-wide"
                >
                  VOLUNTEER
                </Link>
                <Link href="#faq" className="text-stone-300 hover:text-white transition-colors text-sm tracking-wide">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 