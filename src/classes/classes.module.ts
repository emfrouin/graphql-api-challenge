import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './models';
import { GetClassQueryHandler } from './queries';
import { ClassResolvers } from './resolvers';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([
      /** Entities */
      Class,
    ]),
  ],
  providers: [
    /** Query Handlers */
    GetClassQueryHandler,

    /** GraphQL Resolvers */
    ClassResolvers,
  ],
})
export class ClassesModule {}
