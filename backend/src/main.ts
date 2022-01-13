import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addSecurity('bearer',{
      type:'http',
      scheme:'bearer'
    })
    .setTitle('Todo App')
    .setDescription('This is todo application in NestJS, TypeORM, PostgreSQL, TypeScript')
    .setVersion('1.0')
    .addTag('Todo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
