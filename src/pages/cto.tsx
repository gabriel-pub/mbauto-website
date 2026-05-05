import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Link } from "react-router-dom"

export function CTO() {
  const companyName = "MB AUTO Service Centre"
  const CTO = "Need assistance? Call us now!"
  const buttonText = "Call Us"
  return (
    <div className="py-12">
      <h1 className="mb-12 text-center text-3xl font-extrabold">
        {companyName}
      </h1>
      <blockquote className="mt-6 border-l-2 pl-4 text-center text-xl italic">
        {CTO}
      </blockquote>
      <div className="mt-6 grid place-content-center">
        <Button variant="outline">
          <Link to="tel:+60127196133" className="flex items-center gap-2">
            <Phone />
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  )
}
