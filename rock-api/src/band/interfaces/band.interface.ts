import { Album } from './Album.interface';

export interface Band {
  id: number;
  name: string;
  members: string[];
  discography: Album[];
}
