import { Module } from '@nestjs/common';
import { BandController } from './controllers/band.controller';
import { BandService } from './services/band.service';

@Module({
  controllers: [BandController],
  providers: [BandService],
})
export class BandModule {}
