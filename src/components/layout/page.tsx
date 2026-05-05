import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import type { Service } from "@/types"

interface ServiceDetailPageProps {
  serviceCardDetails: Service
}

export function ServiceDetailPage({
  serviceCardDetails,
}: ServiceDetailPageProps) {
  const buttonText = "Book This Service"
  return (
    <div>
      <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
        {serviceCardDetails.name}
      </h1>
      <blockquote className="mt-6 border-l-2 pl-4 italic">
        {serviceCardDetails.description}
      </blockquote>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {serviceCardDetails.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <div className="grid place-content-center">
        <Button variant="outline">
          <Link to="/contact" state={{ serviceName: serviceCardDetails.title }}>
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  )
}
