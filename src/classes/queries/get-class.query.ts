import { QueryHandler } from '@nestjs/cqrs';
import { ClassRepository } from '../repositories';

export class GetClassQuery {
  public constructor(public readonly id: number) {}
}

@QueryHandler(GetClassQuery)
export class GetClassQueryHandler {
  public constructor(private readonly classRepository: ClassRepository) {}

  public async execute({ id }: GetClassQuery) {
    return this.classRepository.findOne(id);
  }
}
