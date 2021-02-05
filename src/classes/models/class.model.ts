import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('classes')
export class Class {
  @PrimaryColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;
}
