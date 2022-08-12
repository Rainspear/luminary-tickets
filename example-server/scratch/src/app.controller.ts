import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';

// nest will create route controller 
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return 'Hello World';
  }
}
