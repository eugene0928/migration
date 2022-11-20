import { Column, Entity } from 'cassandra-orm4nest';

@Entity({
  keyspace: 'najot',
  table: 'user',
})
export default class UsersEntity {
  @Column({ name: 'id' })
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'login' })
  login: string;
}
