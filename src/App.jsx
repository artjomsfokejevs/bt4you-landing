import Nav from "./components/Nav"
import Hero from "./components/Hero"
import TrustStrip from "./components/TrustStrip"
import Thesis from "./components/Thesis"
import OperatingModel from "./components/OperatingModel"
import Control from "./components/Control"
import Systems from "./components/Systems"
import ProductsDeepDive from "./components/ProductsDeepDive"
import ControlRoom from "./components/ControlRoom"
import Security from "./components/Security"
import About from "./components/About"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Thesis />
        <OperatingModel />
        <Control />
        <Systems />
        <ControlRoom />
        <ProductsDeepDive />
        <Security />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
