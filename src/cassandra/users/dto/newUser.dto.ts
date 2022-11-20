import { IsNotEmpty, IsNumber } from 'class-validator';

export class NewUserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  login: string;
}
