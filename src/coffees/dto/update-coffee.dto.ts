import { PartialType } from '@nestjs/swagger';
import { CreatCoffeeDto } from './create-coffee.dto';

// PartialType make all properties of CreatCoffeeDto are optional
export class UpdateCoffeeDto extends PartialType(CreatCoffeeDto) {}
