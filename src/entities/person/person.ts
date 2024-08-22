import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'person' })
export class Person {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
