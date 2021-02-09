import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Teacher {
  @Field(type => Int)
  public id: number;

  @Field()
  public email: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;
}
