import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { NewUserDto } from './dto/newUser.dto';
import { EditUserDto } from './dto/editUser.dto';

@Injectable()
export class PostgresService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async getAll() {
    return this.userRepository.getAll();
  }

  async createUser(data: NewUserDto) {
    return this.userRepository.createUser(data);
  }

  async update(id: number, data: EditUserDto) {
    return this.userRepository.updateUser(id, data);
  }

  async delete(id: number) {
    return this.userRepository.deleteUser(id);
  }
}
