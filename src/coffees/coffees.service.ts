import { Injectable } from '@nestjs/common';
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

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    return this.coffees.find((coffee) => coffee.id === +id);
  }

  create(data: any) {
    this.coffees.push(data);
  }

  update(id: number, data: any) {
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
      // Update here
      console.log({ data });
    }
  }

  remove(id: number) {
    this.coffees = this.coffees.filter((coffee) => coffee.id !== id);
  }
}
