import { DrinkEntity } from '../entities/drink.entity.ts';
import UserDrinksPort from '../ports/driven/user-drinks.port.ts';
import { ReduceUserDrinkCountPort } from '../ports/driving/reduce-user-drink-count.port.ts';

export class ReduceUserDrinkUseCase implements ReduceUserDrinkCountPort {
  constructor(private readonly userDrinksPort: UserDrinksPort) {}

  public async reduceDrink(drink: DrinkEntity) {
    const currentUserDrinks = await this.userDrinksPort.getUserDrinks();

    const foundDrink = currentUserDrinks.find((userDrink) => userDrink.name === drink.name && drink.category === userDrink.category);
    if (foundDrink) {
      foundDrink.decreaseCount();
      if (foundDrink.count === 0) {
        return this.userDrinksPort.removeDrink(foundDrink);
      }
      return this.userDrinksPort.updateDrink(foundDrink);
    }

    return Promise.resolve();
  }
}