import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // .env configuration
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 8888;
  await app.listen(port);
}
bootstrap();
