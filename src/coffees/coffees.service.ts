import { Injectable, NotFoundException } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreatCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Array<Coffee> = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;

    if (limit >= 0 && offset > 0) {
      return this.coffees.slice(offset - 1, limit);
    } else if (limit >= 0) {
      return this.coffees.slice(0, limit);
    } else if (offset > 0) {
      return this.coffees.slice(offset - 1);
    } else {
      return this.coffees;
    }
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: CreatCoffeeDto) {
    const coffee = {
      id: Math.floor(Math.random() * 100),
      ...createCoffeeDto,
    };
    this.coffees.push(coffee);

    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.findOne(id);

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);

    const updateCoffee = { ...coffee, ...updateCoffeeDto };
    this.coffees[coffeeIndex] = updateCoffee;

    return updateCoffee;
  }

  remove(id: number) {
    this.coffees = this.coffees.filter((coffee) => coffee.id !== id);
  }
}
