import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/user.repository';
import { NewUserDto } from './dto/newUser.dto';
import { EditUserDto } from './dto/editUser.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async getAll() {
    return this.userRepository.getAll();
  }

  async createUser(data: NewUserDto) {
    return this.userRepository.create(data);
  }

  async update(id: string, data: EditUserDto) {
    return this.userRepository.updateUser(id, data);
  }

  async delete(id: string) {
    return this.userRepository.deleteUser(id);
  }
}
