import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesRepository } from './coffees.repository';
import { CoffeesService } from './coffees.service';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, CoffeesRepository],
  exports: [CoffeesService],
})
export class CoffeesModule {}
