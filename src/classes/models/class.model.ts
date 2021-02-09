import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Teacher } from '../../teachers/models';

@Entity('classes')
export class Class {
  @PrimaryColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @ManyToOne(type => Teacher, teacher => teacher.classes)
  public teacher: Teacher;
}
