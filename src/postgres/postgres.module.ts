import { Module } from '@nestjs/common';
import { PostgresController } from './postgres.controller';
import { PostgresService } from './postgres.service';
import { TypeOrmExModule } from '../decorators/typeorm-ex.module';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [PostgresController],
  providers: [PostgresService],
})
export class PostgresModule {}
