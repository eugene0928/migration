import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schema/users.schema';
import { Model } from 'mongoose';
import { NewUserDto } from '../dto/newUser.dto';
import { EditUserDto } from '../dto/editUser.dto';
import { BadRequestException } from '@nestjs/common';

export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(data: NewUserDto): Promise<User> {
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  async edit(id: string, data: EditUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, data, {
      returnOriginal: false,
    });

    if (!updatedUser) {
      throw new BadRequestException('User is not found!');
    }

    return updatedUser;
  }

  async delete(id: string): Promise<{ success: boolean }> {
    try {
      const data = await this.userModel.deleteOne({ _id: id });

      if (!data.deletedCount) {
        throw new BadRequestException('User is not found!');
      }

      return { success: true };
    } catch (err) {
      return { success: false };
    }
  }
}
