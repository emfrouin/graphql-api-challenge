import { Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ClassesModule } from './classes';
import { UsersModule } from './teachers';

@Module({
  imports: [
    UsersModule,
    ClassesModule,
    CqrsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'local.db',
      autoLoadEntities: true,
    }),
  ],
  providers: [Logger],
})
export class AppModule {}
