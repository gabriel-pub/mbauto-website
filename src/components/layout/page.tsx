import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Link } from "react-router-dom"
import type { Prices, Service } from "@/types"

import { useTranslation } from "react-i18next"

interface ServiceDetailPageProps {
  serviceCardDetails: Service
}

function ServiceBodyContent({ serviceCardDetails }: ServiceDetailPageProps) {
  return (
    <>
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
    </>
  )
}

interface PricesProps {
  prices?: Prices[]
}

function FeaturedProduct({ prices }: PricesProps) {
  if (!prices) {
    return <></>
  }
  const productCount = prices.length
  let featuredProduct: number[] = []
  for (let index = 0; index < productCount; index++) {
    // Only products with a startingPrice field are considered "featured"
    if (prices[index].startingPrice) {
      featuredProduct.push(index)
    }
  }
  const { t } = useTranslation()
  return (
    <div className="mt-6 mb-6">
      <h2 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
        {t("page.serviceDetailPage.featuredSection")}
      </h2>
      {featuredProduct.map((productIndex) => (
        <>
          {/* TODO: Add image links for the products
		  <img src=""/>*/}
          <h3 className="mt-6 text-center text-xl font-bold text-balance">
            {prices[productIndex].title}
          </h3>
          <p className="mt-3 text-center text-xl text-balance">
            {t("page.serviceDetailPage.starting") +
              " : " +
              t("page.serviceDetailPage.currency") +
              " " +
              prices[productIndex].startingPrice}
          </p>
          <p className="mt-3 mb-3 pl-4 text-center text-sm italic">
            {prices[productIndex].description}
          </p>
        </>
      ))}
    </div>
  )
}

function UserActionButton() {
  const { t } = useTranslation()
  return (
    <>
      <div className="flex place-content-center items-center gap-2">
        <Button variant="outline">
          <Link
            to="tel:+60127196133"
            className="flex items-center gap-2"
            // state={{ serviceName: serviceCardDetails.title }}
          >
            <Phone />
            {t("page.serviceDetailPage.buttonBookService")}
          </Link>
        </Button>
        <Button variant="outline">
          <Link
            to="/"
            className="flex items-center gap-2"
            // state={{ serviceName: serviceCardDetails.title }}
            //
            // Usage: The useLocation() hook can extract state.serviceName and
            // get the value of serviceCardDetails.title
            //
            // Example:
            // export default function SomeFunc() {
            //   const location = useLocation()
            //   return <div>{location.state.serviceName}</div>
            // }
          >
            {t("page.serviceDetailPage.buttonBack")}
          </Link>
        </Button>
      </div>
    </>
  )
}

export function ServiceDetailPage({
  serviceCardDetails,
}: ServiceDetailPageProps) {
  return (
    <>
      <ServiceBodyContent serviceCardDetails={serviceCardDetails} />
      {/* WARN: For scalability and sanity's sake, consider setting up an API to
 serve the data outside of this project.*/}
      <FeaturedProduct prices={serviceCardDetails.prices} />
      <UserActionButton />
    </>
  )
}
