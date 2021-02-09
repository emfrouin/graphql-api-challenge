import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Teacher } from '../../teachers/types';

@ObjectType()
export class Class {
  @Field(type => Int)
  public id: number;

  @Field()
  public title: string;

  @Field()
  public description: string;

  @Field(type => Teacher)
  public teacher: Teacher;
}
