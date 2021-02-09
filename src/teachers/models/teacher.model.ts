import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Class } from '../../classes/models';

@Entity('teachers')
export class Teacher {
  @PrimaryColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @OneToMany(type => Class, cls => cls.teacher)
  public classes: Class[];
}
