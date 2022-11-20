import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostgresService } from './postgres.service';
import { NewUserDto } from './dto/newUser.dto';
import { EditUserDto } from './dto/editUser.dto';

@Controller('postgres')
export class PostgresController {
  constructor(private postgresService: PostgresService) {}

  @Get()
  async get() {
    return this.postgresService.getAll();
  }

  @Post()
  async createUser(@Body() data: NewUserDto) {
    return this.postgresService.createUser(data);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: EditUserDto,
  ) {
    return this.postgresService.update(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.postgresService.delete(id);
  }
}
