import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Nest Base')
    .setDescription('API Example with NestJS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
