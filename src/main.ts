import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://main.d3t57klxdpk85z.amplifyapp.com/'],
    methods: ['GET'],
    credentials: true,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
