export type Location = 'Suffolk' | 'Norfolk' | 'Epping'

export interface ImageItem {
  id: number
  url: string
}

export interface User {
  id: number
  name: string
  location: Location
  avatar: string
  images: ImageItem[]
}
