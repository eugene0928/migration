import { IsNotEmpty, IsNumber } from 'class-validator';

export class NewUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: string;

  @IsNotEmpty()
  login: string;
}
