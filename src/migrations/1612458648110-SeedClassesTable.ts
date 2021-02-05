import { MigrationInterface, QueryRunner } from 'typeorm';
import { random, lorem } from 'faker';
import { Class } from '../classes/models';
import { plainToClass } from 'class-transformer';

export class SeedClassesTable1612458648110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const getClassBody = () => ({
      title: random.words(5),
      description: lorem.sentences(3),
    });

    await queryRunner.manager.save([
      plainToClass(Class, {
        id: 1,
        ...getClassBody(),
      }),
      plainToClass(Class, {
        id: 2,
        ...getClassBody(),
      }),
      plainToClass(Class, {
        id: 3,
        ...getClassBody(),
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .delete()
      .from(Class, 'c')
      .where('c.id IN (:...ids)', { ids: [1, 2, 3] })
      .execute();
  }
}
