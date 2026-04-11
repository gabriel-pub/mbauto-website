export interface Service {
  id: string
  name: string
  title: string
  description: string
  details: string[]
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
