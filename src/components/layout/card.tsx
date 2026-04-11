import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Service } from "@/types"

interface ServiceCardProps {
  serviceDetails?: Service
}

export function ServiceCard({ serviceDetails }: ServiceCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{serviceDetails?.name || "Test"}</CardTitle>
        <CardDescription>{serviceDetails?.details || "Test"}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              {serviceDetails?.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
