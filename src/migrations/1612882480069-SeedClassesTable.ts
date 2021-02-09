import { MigrationInterface, QueryRunner } from 'typeorm';
import { lorem } from 'faker';
import { Class } from '../classes/models';
import { plainToClass } from 'class-transformer';
import { Teacher } from '../teachers/models';

export class SeedClassesTable1612882480069 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const getClassBody = () => ({
      title: lorem.sentence(1),
      description: lorem.sentences(3),
    });

    const [teacher1, teacher2] = await Promise.all([
      queryRunner.manager.findOne(Teacher, 1),
      queryRunner.manager.findOne(Teacher, 2),
    ]);

    await queryRunner.manager.save([
      plainToClass(Class, {
        id: 1,
        teacher: teacher1,
        ...getClassBody(),
      }),
      plainToClass(Class, {
        id: 2,
        teacher: teacher1,
        ...getClassBody(),
      }),
      plainToClass(Class, {
        id: 3,
        teacher: teacher2,
        ...getClassBody(),
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .delete()
      .from(Class)
      .where('id IN (:...ids)', { ids: [1, 2, 3] })
      .execute();
  }
}
