import { PartialType } from '@nestjs/mapped-types';
import { CreatCoffeeDto } from './create-coffee.dto';

// PartialType make all properties of CreatCoffeeDto are optional
export class UpdateCoffeeDto extends PartialType(CreatCoffeeDto) {}
