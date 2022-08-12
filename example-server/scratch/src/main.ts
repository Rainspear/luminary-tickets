import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  // create instance of application
  const app = await NestFactory.create(AppModule);
  // and set it listen on port
  await app.listen(3000);
}

bootstrap();