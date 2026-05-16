import { ServiceCard } from "@/components/layout/card"
import { Link } from "react-router-dom"
import type { Service } from "@/types"

import { useTranslation } from "react-i18next"

export function Services() {
  const { t } = useTranslation()
  const services = t("services.services", { returnObjects: true }) as Service[]
  return (
    <div>
      <h2 className="mb-12 text-center text-3xl font-semibold">
        {t("services.title")}
      </h2>
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
