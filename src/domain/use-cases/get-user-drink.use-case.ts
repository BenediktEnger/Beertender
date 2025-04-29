import { DrinkEntity } from '../entities/drink.entity.ts';
import UserDrinksPort from '../ports/driven/user-drinks.port.ts';
import GetUserDrinksPort from '../ports/driving/get-user-drinks.port.ts';

export class GetUserDrinkUseCase implements GetUserDrinksPort{
  constructor(private readonly userDrinksPort: UserDrinksPort) {}

  public getUserDrinks(): Promise<DrinkEntity[]> {
    return this.userDrinksPort.getUserDrinks();
  }
}