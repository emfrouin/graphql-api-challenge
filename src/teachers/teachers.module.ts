import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './models';
import { GetTeacherByClassHandler } from './queries';
import { ClassResolvers } from './resolvers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Teacher])],
  providers: [GetTeacherByClassHandler, ClassResolvers],
})
export class UsersModule {}
