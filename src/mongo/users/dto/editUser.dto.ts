import { IsNumber, IsOptional } from 'class-validator';

export class EditUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNumber()
  age?: string;
}
