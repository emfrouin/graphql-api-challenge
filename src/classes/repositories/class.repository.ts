import { EntityRepository, Repository } from 'typeorm';
import { Class } from '../models';

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {}
