import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BandModule } from './band/band.module';

@Module({
  imports: [ConfigModule.forRoot(), BandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
