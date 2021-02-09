import { QueryHandler } from '@nestjs/cqrs';
import { Class } from '../../classes/models';
import { TeacherRepository } from '../repositories';

export class GetTeacherByClassQuery {
  public constructor(public readonly classId: number) {}
}

@QueryHandler(GetTeacherByClassQuery)
export class GetTeacherByClassHandler {
  public constructor(private readonly teacherRepository: TeacherRepository) {}

  public async execute({ classId }: GetTeacherByClassQuery) {
    return this.teacherRepository
      .createQueryBuilder('t')
      .innerJoin(Class, 'c', 'c.teacher.id = t.id')
      .where('c.id = :classId', { classId })
      .getOne();
  }
}
