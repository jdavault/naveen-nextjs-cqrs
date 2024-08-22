import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPersonsQuery } from './queries/impl/get-persons.query';

@Controller('persons')
export class PersonController {
  constructor(private queryBus: QueryBus) {}

  @Get('all')
  async getAllPersons() {
    return await this.queryBus.execute(new GetPersonsQuery()); //execute will invoke the registered handler for the query
  }
}
