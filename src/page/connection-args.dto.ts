import { IsNumber, IsOptional } from 'class-validator';

export class ConnectionArgsDto {
  @IsOptional()
  @IsNumber()
  first: number;

  @IsOptional()
  @IsNumber()
  last: number;

  after: string;
  before: string;
}
