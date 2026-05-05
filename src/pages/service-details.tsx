import { Link, useParams } from "react-router-dom"
import { services } from "@/data/services"
import { ServiceDetailPage } from "@/components/layout/page"

export function ServiceDetail() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    const errorTitle = "Service Not Found"
    const errorDescription =
      "Sorry, we couldn't find the service you were looking for."
    const errorLink = "Back to All Services"
    return (
      // style this later
      <div className="py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">{errorTitle}</h1>
        <p className="mb-8 text-gray-600">{errorDescription}</p>
        <Link to="/" className="text-blue-600 hover:underline">
          {errorLink}
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12">
      <ServiceDetailPage serviceCardDetails={service} />
    </div>
  )
}
