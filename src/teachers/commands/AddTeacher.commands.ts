import { getRepository, QueryRunner } from 'typeorm';
import { Teacher } from '../models';

import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

export class AddTeacherCommand {
  public constructor(
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}

@CommandHandler(AddTeacherCommand)
export class AddTeacherCommandHandler
  implements ICommandHandler<AddTeacherCommand> {
  public queryRunner: QueryRunner;
  public constructor() {}

  public async execute({ email, firstName, lastName }: AddTeacherCommand) {
    const teacher = await getRepository(Teacher).insert({
      email,
      firstName,
      lastName,
    });

    return teacher;
  }
}
