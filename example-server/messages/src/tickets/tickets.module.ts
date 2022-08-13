import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsRepository } from './tickets.repository';
import { TicketsService } from './tickets.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsRepository, TicketsService]
  
})
export class TicketsModule {}
