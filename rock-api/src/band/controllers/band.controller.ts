import { Controller, Get } from '@nestjs/common';
import { BandService } from '../services/band.service';
import { Band } from '../interfaces/band.interface';

@Controller('bands')
export class BandController {
  constructor(private readonly bandService: BandService) {}

  @Get()
  getHello(): Band[] {
    return this.bandService.getBands();
  }
}
