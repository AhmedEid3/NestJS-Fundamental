import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CoffeesModule } from './coffees/coffees.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoffeesModule, CoffeeRatingModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
