import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  @Get()
  listTickets() {}

  @Get('/:id')
  getTickets(@Param('id') id: string) {
    console.log("id", id);
  }

  @Post()
  createTickets(@Body() body: any) {
    console.log("body", body);
  }
}
