import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClassesTable1612882465976 implements MigrationInterface {
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
      {
        name: 'teacherId',
        isNullable: false,
        type: 'int',
      },
    ],
    foreignKeys: [
      {
        columnNames: ['teacherId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teachers',
        onDelete: 'CASCADE',
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
