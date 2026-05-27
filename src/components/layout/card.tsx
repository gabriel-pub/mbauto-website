import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Prices, Service } from "@/types"
import { useTranslation } from "react-i18next"

interface ServiceCardProps {
  serviceDetails: Service
}

export function ServiceCard({ serviceDetails }: ServiceCardProps) {
  return (
    <Card className="w-full max-w-sm">
      {/* WARNING: Data driven design => add image links
      <div className="absolute inset-0 z-30 aspect-video">
        <img />
      </div>*/}
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold tracking-tight text-balance">
          {serviceDetails.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg leading-7 not-first:mt-6">
          {serviceDetails.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

interface FeaturedCardProps {
  prices: Prices
}

export function FeaturedCard({ prices }: FeaturedCardProps) {
  const { t } = useTranslation()
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        {/* TODO: Add image links for the products
		  <img src=""/>*/}
        <CardTitle className="text-center text-xl font-bold tracking-tight text-balance">
          {prices.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-xl leading-7 text-balance not-first:mt-6">
          {t("page.serviceDetailPage.starting") +
            " : " +
            t("page.serviceDetailPage.currency") +
            " " +
            prices.startingPrice}
        </CardDescription>
        <CardDescription className="text-center text-sm leading-7 italic not-first:mt-6">
          {prices.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
