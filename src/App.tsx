import { BrowserRouter, Link } from "react-router-dom"
import { HamburgerMenu } from "@/components/layout/hamburger"
import { services } from "./data/services"
import { ServiceCard } from "./components/layout/card"

function Services() {
  return (
    <div>
      <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {services.map((service) => (
          <Link
            to={`/services/${service.id}`}
            key={service.id}
            className="block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <div id={service.id}>
              <ServiceCard serviceDetails={service} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 z-50 flex justify-between bg-background/80 backdrop-blur">
        <Link to={"/"}>
          <h1 className="p-4 text-2xl font-bold">MB AUTO</h1>
        </Link>
        <div className="p-4">
          <HamburgerMenu />
        </div>
      </div>
      <Services />
    </BrowserRouter>
  )
}

export default App
