import { Link, useParams } from "react-router-dom"
import { ServiceDetailPage } from "@/components/layout/page"
import type { Service } from "@/types"

import { useTranslation } from "react-i18next"

export function ServiceDetail() {
  const { t } = useTranslation()
  const services = t("services.services", { returnObjects: true }) as Service[]
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return (
      // style this later
      <div className="py-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">
          {t("service-details.errorTitle")}
        </h1>
        <p className="mb-8 text-gray-600">
          {t("service-details.errorDescription")}
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          {t("service-details.errorLink")}
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
