import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // by default sql table name is 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true }) // make flavors array as json and make column optional
  flavors: Array<string>;
}
