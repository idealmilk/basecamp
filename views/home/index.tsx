import { Footer } from "@/components/footer"
import Header from "@/components/header"

import { Retreats } from "./components/retreats"
import { Philosophy } from "./components/philosophy"
import { Location } from "./components/location"
import Hero from "./components/hero"
import About from "./components/about"
import Audience from "./components/audience"
import Experience from "./components/experience"

export default function HomeView() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Audience />
      <Experience />
      <Retreats />
      <Philosophy />
      <Location />
      <Footer />
    </div>
  )
}
