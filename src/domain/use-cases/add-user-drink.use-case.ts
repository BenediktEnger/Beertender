import { AddNewUserDrinkPort } from '../ports/driving/add-new-user-drink.port.ts';
import { DrinkEntity } from '../entities/drink.entity.ts';
import UserDrinksPort from '../ports/driven/user-drinks.port.ts';

export class AddUserDrinkUseCase implements AddNewUserDrinkPort{
  constructor(private readonly userDrinksPort: UserDrinksPort) {}

  public async addDrink(drink: DrinkEntity) {
    if (!drink.name){
      Promise.resolve();
    }

    const currentUserDrinks = await this.userDrinksPort.getUserDrinks();

    const foundDrink = currentUserDrinks.find((userDrink) => userDrink.name === drink.name && drink.category === userDrink.category);
    if (foundDrink) {
      foundDrink.increaseCount();
      return this.userDrinksPort.updateDrink(foundDrink);
    }

    return this.userDrinksPort.addUserDrink(drink);
  }
}