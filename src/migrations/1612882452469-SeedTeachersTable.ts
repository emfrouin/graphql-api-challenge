import { MigrationInterface, QueryRunner } from 'typeorm';
import { name, internet } from 'faker';
import { Teacher } from '../teachers/models';
import { plainToClass } from 'class-transformer';

export class SeedTeachersTable1612882452469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const getTeacherBody = () => ({
      firstName: name.firstName(),
      lastName: name.lastName(),
      email: internet.email(),
    });

    await queryRunner.manager.save([
      plainToClass(Teacher, {
        id: 1,
        ...getTeacherBody(),
      }),
      plainToClass(Teacher, {
        id: 2,
        ...getTeacherBody(),
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder()
      .delete()
      .from(Teacher)
      .where('id IN (:...ids)', { ids: [1, 2] })
      .execute();
  }
}
