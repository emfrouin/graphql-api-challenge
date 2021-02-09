import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger);

  await app.listen(3000);

  logger.log(`Nest application listening on port ${3000}`, 'NestApplication');
}

bootstrap();
