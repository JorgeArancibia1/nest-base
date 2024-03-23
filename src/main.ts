import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Que se admita la lista blanca (DTO)
      forbidNonWhitelisted: true, // Puede emitir un error si el cliente envía una propiedad de un tipo que no corresponde.
      transform: true, // Convierte el tipo de dato que viene en la petición al tipo de dato que se espera mientras se pueda.
    }),
  );

  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
