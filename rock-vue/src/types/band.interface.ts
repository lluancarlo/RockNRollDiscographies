import type { Album } from './album.interface'

export interface Band {
  id: number
  name: string
  members: string[]
  discography: Album[]
}
