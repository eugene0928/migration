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
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() dto: NewUserDto) {
    return this.userService.create(dto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: EditUserDto) {
    return this.userService.edit(id, data);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
