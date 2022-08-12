import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import {AppController} from './app.controller';

// register controller to main app class
@Module({
  controllers: [AppController]
})
export class AppModule {

}