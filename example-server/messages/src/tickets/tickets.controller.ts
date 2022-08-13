import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { createTicketsDto } from './dtos/create-tickets.dto';
import { TicketsService } from './tickets.service';
@Controller('tickets')
export class TicketsController {
  constructor(public ticketService: TicketsService) {}

  @Get()
  listTickets() {
    return this.ticketService.findAll();
  }

  @Get('/:id')
  async getTickets(@Param('id') id: string) {
    console.log("id", id);
    const ticket = await this.ticketService.findOne(id);
    if (!ticket) {
      throw new NotFoundException("Ticket Not found")
    }
    return ticket;
  }

  @Post()
  createTickets(@Body() body: createTicketsDto) {
    console.log("body", body);
    return this.ticketService.create(body.content);
  }
}
