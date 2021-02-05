import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClassesTable1612457425563 implements MigrationInterface {
  private readonly classTable = new Table({
    name: 'classes',
    columns: [
      {
        name: 'id',
        isPrimary: true,
        isGenerated: true,
        type: 'int',
      },
      {
        name: 'title',
        isNullable: false,
        type: 'nvarchar',
      },
      {
        name: 'description',
        isNullable: false,
        type: 'nvarchar',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.classTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.classTable);
  }
}
