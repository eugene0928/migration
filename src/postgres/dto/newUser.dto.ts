import { IsNotEmpty } from 'class-validator';

export class NewUserDto {
  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  name: string;
}
