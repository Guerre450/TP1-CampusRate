import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureApp } from './startup-configurations/configure-app';
import { configureSwagger } from './startup-configurations/configure-swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureApp(app);
  configureSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
