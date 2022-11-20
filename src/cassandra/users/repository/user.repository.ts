import { mapping } from 'cassandra-driver';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { CassandraService } from '../../cassandra/cassandra.service';
import UsersEntity from '../entitty/user.entity';
import { NewUserDto } from '../dto/newUser.dto';
import { EditUserDto } from '../dto/editUser.dto';

@Injectable()
export class UsersRepository implements OnModuleInit {
  constructor(private cassandraService: CassandraService) {}

  userMapper: mapping.ModelMapper<UsersEntity>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        Employee: {
          tables: ['user'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };

    this.userMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('Employee');
  }

  async getAll(): Promise<mapping.Result<UsersEntity>> {
    return (await this.userMapper.findAll())['_rs'].rows;
  }

  async create(data: NewUserDto): Promise<mapping.Result<UsersEntity>> {
    return await this.userMapper.insert(data);
  }

  async updateUser(
    id: string,
    data: EditUserDto,
  ): Promise<mapping.Result<UsersEntity>> {
    return await this.userMapper.update(
      { id },
      { fields: [...Object.keys(data)] },
    );
  }

  async deleteUser(id: string) {
    return await this.userMapper.remove({ id });
  }
}
