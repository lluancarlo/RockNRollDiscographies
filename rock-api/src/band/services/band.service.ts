import { Injectable } from '@nestjs/common';
import json from 'src/json/data.json';
import { Band } from '../interfaces/band.interface';

@Injectable()
export class BandService {
  getBands(): Band[] {
    return json.bands as Band[];
  }
}
