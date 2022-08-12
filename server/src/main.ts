import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';

// nest will create route controller 
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Hello World';
  }
}

// register controller to main app class
@Module({
  controllers: [AppController]
})
class AppModule {

}

async function bootstrap() {
  // create instance of application
  const app = await NestFactory.create(AppModule);
  // and set it listen on port
  await app.listen(3000);
}

bootstrap();