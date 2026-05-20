import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Link } from "react-router-dom"

import { useTranslation } from "react-i18next"

export function CTO() {
  const { t } = useTranslation()
  return (
    <div className="py-12">
      <h1 className="mb-12 text-center text-3xl font-extrabold uppercase">
        {t("cto.companyName")}
      </h1>
      <blockquote className="mt-6 border-l-2 pl-4 text-center text-xl italic">
        {t("cto.CTO")}
      </blockquote>
      <div className="mt-6 grid place-content-center">
        <Button variant="outline">
          <Link to="tel:+60127196133" className="flex items-center gap-2">
            <Phone />
            {t("cto.buttonText")}
          </Link>
        </Button>
      </div>
    </div>
  )
}
