import { IsString } from "class-validator";
export class createTicketsDto {
  @IsString()
  content: string;
}