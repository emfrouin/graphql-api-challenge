import { ClassRepository } from '../repositories';

export class GetClassQuery {
  public constructor(public readonly id: number) {}
}

export class GetClassQueryHandler {
  public constructor(private readonly classRepository: ClassRepository) {}

  public async execute({ id }: GetClassQuery) {
    return this.classRepository.findOne(id);
  }
}
