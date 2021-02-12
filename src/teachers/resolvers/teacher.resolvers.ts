import { UserInputError } from 'apollo-server-core';

import { CommandBus } from '@nestjs/cqrs';
import {
  Args,
  Context,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';

import { AddTeacherCommand } from '../commands';
import { Teacher } from '../types';

@InputType()
export class AddTeacherInput {
  @Field()
  public email: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;
}

@ObjectType()
export class AddTeacherPayload {
  @Field(type => Teacher)
  public teacher: Teacher;
}

@Resolver(of => Teacher)
export class AddTeacherMutationResolver {
  public constructor(private readonly commandBus: CommandBus) {}

  @Mutation(returns => AddTeacherPayload, {
    description: 'Adds a new teacher to the roster.',
  })
  public async addTeacher(@Args('input') input: AddTeacherInput) {
    const { email, firstName, lastName } = input;

    const newTeacher = await this.commandBus.execute(
      new AddTeacherCommand(email, firstName, lastName),
    );

    return {
      teacher: newTeacher,
    };
  }
}
