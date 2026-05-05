import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Service } from "@/types"

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
        <CardTitle className="text-center font-bold tracking-tight text-balance">
          {serviceDetails.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-7 not-first:mt-6">
          {serviceDetails.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
