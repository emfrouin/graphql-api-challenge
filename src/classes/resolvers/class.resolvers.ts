import { QueryBus } from '@nestjs/cqrs';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GetClassQuery } from '../queries';
import { Class } from '../types';

@Resolver(of => Class)
export class ClassResolvers {
  public constructor(private readonly queryBus: QueryBus) {}

  @Query(returns => Class)
  public async class(@Args('id', { type: () => Int }) id: number) {
    return this.queryBus.execute(new GetClassQuery(id));
  }
}
