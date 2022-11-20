import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { PostUserEntity } from '../postgres/entity/user.entity';

export const configuration = {
  getTypeOrmConf(): TypeOrmModuleOptions {
    return {
      type: process.env['DB_TYPE_POSTGRES'] as any,
      host: process.env['DB_HOST'],
      port: parseInt(process.env['POSTGRES_DB_PORT']),
      username: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD'],
      database: process.env['DB_POSTGRES_NAME'],
      entities: [PostUserEntity],
      migrations: [join(__dirname, `../migrations/**/*{.ts,.js}`)],
      synchronize: true,
      migrationsRun: false,
      logging: false,
    };
  },
};
