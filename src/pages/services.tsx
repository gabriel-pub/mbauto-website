import { services } from "@/data/services"
import { ServiceCard } from "@/components/layout/card"
import { Link } from "react-router-dom"

export function Services() {
  const title = "Our Services"
  return (
    <div>
      <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {services.map((service) => (
          <Link
            to={`/services/${service.id}`}
            key={service.id}
            // styling classes doesn't matter as much in this component
            // consider styling the Card component instead
            // className="block rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
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
