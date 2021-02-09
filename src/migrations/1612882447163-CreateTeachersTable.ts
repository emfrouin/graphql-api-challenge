import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTeachersTable1612882447163 implements MigrationInterface {
  private readonly teachersTable = new Table({
    name: 'teachers',
    columns: [
      {
        name: 'id',
        isPrimary: true,
        isGenerated: true,
        type: 'int',
      },
      {
        name: 'email',
        isNullable: false,
        type: 'nvarchar',
      },
      {
        name: 'firstName',
        isNullable: false,
        type: 'nvarchar',
      },
      {
        name: 'lastName',
        isNullable: false,
        type: 'nvarchar',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.teachersTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.teachersTable);
  }
}
