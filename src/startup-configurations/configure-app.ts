import { INestApplication, VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';

export function configureApp(app: INestApplication): void {
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
   app.useGlobalFilters(new HttpExceptionFilter());
}
