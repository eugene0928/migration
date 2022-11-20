import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './mongo/users/users.module';
import { BooksModule } from './mongo/books/books.module';
import { CassandraOrmModule } from 'cassandra-orm4nest';
import { auth } from 'cassandra-driver';
import { UsersModule as CassandraUserModule } from './cassandra/users/users.module';
import { PostgresModule } from './postgres/postgres.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from './config/configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1/najot'),
    CassandraOrmModule.forRoot({
      contactPoints: ['127.0.0.1'],
      authProvider: new auth.PlainTextAuthProvider('cassandra', 'cassandra'),
      localDataCenter: 'datacenter1',
    }),
    TypeOrmModule.forRoot(configuration.getTypeOrmConf()),
    UsersModule,
    BooksModule,
    CassandraUserModule,
    PostgresModule,
  ],
})
export class AppModule {}
