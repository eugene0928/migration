import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { NewUserDto } from './dto/newUser.dto';
import { EditUserDto } from './dto/editUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('cassandra')
  async getAll() {
    return this.usersService.getAll();
  }

  @Post('cassandra')
  async create(@Body() data: NewUserDto) {
    return this.usersService.createUser(data);
  }

  @Put('cassandra/:id')
  async updateUser(@Param('id') id: string, @Body() data: EditUserDto) {
    return this.usersService.update(id, data);
  }

  @Delete('cassandra/:id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
