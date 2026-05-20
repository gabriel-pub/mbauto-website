import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Link } from "react-router-dom"
import type { Service } from "@/types"

import { useTranslation } from "react-i18next"

interface ServiceDetailPageProps {
  serviceCardDetails: Service
}

export function ServiceDetailPage({
  serviceCardDetails,
}: ServiceDetailPageProps) {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
        {serviceCardDetails.name}
      </h1>
      <blockquote className="mt-6 border-l-2 pl-4 text-xl italic">
        {serviceCardDetails.description}
      </blockquote>
      <ul className="my-6 ml-6 list-disc text-xl [&>li]:mt-2">
        {serviceCardDetails.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <div className="grid place-content-center">
        <Button variant="outline">
          <Link
            to="tel:+60127196133"
            className="flex items-center gap-2"
            // state={{ serviceName: serviceCardDetails.title }}
          >
            <Phone />
            {t("page.service-detail-page.buttonText")}
          </Link>
        </Button>
      </div>
    </div>
  )
}
