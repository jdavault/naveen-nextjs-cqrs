import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonsHandler } from './queries/handler/get-persons.handler';
import { Person } from 'src/entities/person/person';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Person]), // Register the Person entity
  ],
  controllers: [PersonController],
  providers: [GetPersonsHandler],
})
export class PersonModule {}
