import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class TicketsRepository {
  async findOne(id: string) {
    const fileContents = await readFile('tickets.json', 'utf-8');
    const tickets = JSON.parse(fileContents);
    return tickets[id];
  }

  async findAll() {
    const fileContents = await readFile('tickets.json', 'utf-8');
    const tickets = JSON.parse(fileContents);
    return tickets;
  }

  async create(ticket: string) {
    const fileContents = await readFile('tickets.json', 'utf-8');
    const tickets = JSON.parse(fileContents);

    const id = Math.floor(Math.random() * 19999);
    tickets[id] = { content: ticket, id };
    await writeFile('tickets.json', JSON.stringify(tickets));
  }
}