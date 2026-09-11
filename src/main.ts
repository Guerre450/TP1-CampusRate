import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configureApp } from './startup-configurations/configure-app';
import { closeJsonDataFile, openJsonDataFile } from './common/json/json-operations';
import { objectToPropertyKeyList } from './common/repository/json-repository';
import { TestClass } from './common/repository/test-class';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureApp(app);
  // const fileHandler = await openJsonDataFile(process.env.DATA_FILE_PATH ?? "./dammit/","test.json")
  // fileHandler.truncate();
  // fileHandler.writeFile(JSON.stringify([]));
  // await closeJsonDataFile(fileHandler)
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
