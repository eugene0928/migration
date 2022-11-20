import { Injectable } from '@nestjs/common';
import { User } from './schema/users.schema';
import { NewUserDto } from './dto/newUser.dto';
import { EditUserDto } from './dto/editUser.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async create(data: NewUserDto): Promise<User> {
    return this.userRepository.create(data);
  }

  async edit(id: string, data: EditUserDto): Promise<User> {
    return this.userRepository.edit(id, data);
  }

  async delete(id: string): Promise<{ success: boolean }> {
    return this.userRepository.delete(id);
  }
}
