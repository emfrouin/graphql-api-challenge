import { QueryBus } from '@nestjs/cqrs';
import { Query, Resolver, Root } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { Class } from '../../classes/types';
import { GetTeacherByClassQuery } from '../queries';
import { Teacher } from '../types';

@Resolver(of => Class)
export class ClassResolvers {
  public constructor(private readonly queryBus: QueryBus) {}

  @Query(returns => Teacher)
  public async teacher(@Root() cls: Class) {
    const t = await this.queryBus.execute(new GetTeacherByClassQuery(cls.id));

    return plainToClass(Teacher, t);
  }
}
