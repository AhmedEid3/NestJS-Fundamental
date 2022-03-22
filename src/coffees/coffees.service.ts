import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesRepository } from './coffees.repository';
import { CreatCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(private readonly coffeeRepository: CoffeesRepository) {}

  findAll(paginationQuery: PaginationQueryDto) {
    return this.coffeeRepository.findAll(paginationQuery);
  }

  findOne(id: number) {
    return this.coffeeRepository.findOne(id);
  }

  create(createCoffeeDto: CreatCoffeeDto) {
    return this.coffeeRepository.create(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeRepository.update(id, updateCoffeeDto);
  }

  remove(id: number) {
    return this.coffeeRepository.remove(id);
  }
}
