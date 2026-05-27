export interface Prices {
  title: string
  description: string
  unitPrice: number
  startingPrice?: number
}

export interface Service {
  id: string
  name: string
  title: string
  description: string
  details: string[]
  prices?: Prices[]
  image: string
}

export interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
}

export interface OpeningHours {
  day: string
  hours: string
}
