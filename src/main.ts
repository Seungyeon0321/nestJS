import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//swagger
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//여기 appModule이 main module이라고 보면 된다.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /**
   * Swagger setup
   */
  const config = new DocumentBuilder().setTitle('NestJS API')
  .setDescription('NestJS API Description')
  .setTermsOfService('https://example.com/terms')
  .setLicense('MIT', 'https://example.com/license')
  .addServer('http://localhost:3000', 'Local Server')
  .setVersion('1.0').build();
  // Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  // Setup Swagger
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
