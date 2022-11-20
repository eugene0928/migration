import { Module } from '@nestjs/common';
import { CassandraOrmModule } from 'cassandra-orm4nest';
import { UsersController } from './users.controller';
import UsersEntity from './entitty/user.entity';
import { UsersService } from './users.service';
import { UsersRepository } from './repository/user.repository';
import { CassandraModule } from '../cassandra/cassandra.module';

@Module({
  imports: [CassandraOrmModule.forFeature([UsersEntity]), CassandraModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
