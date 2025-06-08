import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return(
<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-wide text-stone-900">BASECAMP</div>
            <div className="hidden md:flex items-center space-x-12">
              <Link
                href="#stay"
                className="text-sm tracking-wide text-stone-700 hover:text-stone-900 transition-colors uppercase"
              >
                Stay
              </Link>
              <Link
                href="#retreats"
                className="text-sm tracking-wide text-stone-700 hover:text-stone-900 transition-colors uppercase"
              >
                Retreats
              </Link>
              <Link
                href="#story"
                className="text-sm tracking-wide text-stone-700 hover:text-stone-900 transition-colors uppercase"
              >
                Story
              </Link>
              <Link
                href="#journal"
                className="text-sm tracking-wide text-stone-700 hover:text-stone-900 transition-colors uppercase"
              >
                Journal
              </Link>
              <Button
                variant="outline"
                className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8"
              >
                BOOK
              </Button>
            </div>
          </nav>
        </div>
      </header>)}