import { EntityRepository, Repository } from 'typeorm';
import { Teacher } from '../models';

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {}
