import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
  });
  await app.listen(process.env.PORT);
  //console.log(`Running on port ${process.env.PORT}`);
}
bootstrap();
