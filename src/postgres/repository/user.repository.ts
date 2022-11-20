import { Repository } from 'typeorm';
import { PostUserEntity } from '../entity/user.entity';
import { CustomRepository } from '../../decorators/typeorm-ex.decorator';
import { NewUserDto } from '../dto/newUser.dto';
import { EditUserDto } from '../dto/editUser.dto';
import { BadRequestException } from '@nestjs/common';

@CustomRepository(PostUserEntity)
export class UserRepository extends Repository<PostUserEntity> {
  async getAll(): Promise<PostUserEntity[]> {
    return await this.find();
  }

  async createUser(data: NewUserDto): Promise<PostUserEntity> {
    const user = this.create(data);
    return this.save(user);
  }

  async updateUser(id: number, data: EditUserDto): Promise<PostUserEntity> {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('User is not found!');
    }

    user.name = data.name;
    await this.save(user);

    return user;
  }

  async deleteUser(id: number): Promise<{ success: boolean }> {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('User is not found!');
    }

    await this.delete(id);

    return { success: true };
  }
}
