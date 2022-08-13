import { Injectable } from '@nestjs/common';
import { TicketsRepository} from './tickets.repository';

@Injectable()
export class TicketsService {
  
  constructor(public ticketRepo : TicketsRepository) {}

  async findOne(id: string) {
    return this.ticketRepo.findOne(id);
  }

  async findAll() {
    return this.ticketRepo.findAll();
  }

  async create(ticket: string) {
    return this.ticketRepo.create(ticket);
  }
}