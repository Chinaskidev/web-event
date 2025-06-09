import Navbar from "../app/components/navbar"
import Hero from "../app/components/sections/Hero"
import About from "../app/components/sections/About"
import Services from "../app/components/sections/Services"
import Packages from "./components/sections/Packages"
import Gallery from "../app/components/sections/Gallery"
import {Footer} from "../app/components/sections/Footer"


export default function EventLandingPage() {
  return (
    <div className="min-h-screen bg-pastel-bg">
      <Navbar />      
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}