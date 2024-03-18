import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  // @Column({ type: 'int', primary: true, name: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 255, name: 'password' })
  password: string;

  @Column({ type: 'varchar', length: 255, name: 'role', default: 'user' })
  role: string;

  // @Column({ type: 'datetime', name: 'created_at' })
  // created_at: Date;

  // @Column({ type: 'datetime', name: 'updated_at' })
  // updated_at: Date;

  @DeleteDateColumn({ type: 'datetime', name: 'deleted_at' })
  deleted_at: Date;
}
