import { NestFactory } from '@nestjs/core';
import { AppModule } from './trpc.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable CORS with default settings
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  await app.listen(3000);
}
bootstrap();
