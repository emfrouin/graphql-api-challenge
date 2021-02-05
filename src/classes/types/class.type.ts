import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Class {
  @Field(type => Int)
  public id: number;

  @Field()
  public title: string;

  @Field()
  public description: string;
}
