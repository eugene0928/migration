import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  login: string;
}
