import UserDrinksPort from '../ports/driven/user-drinks.port.ts';
import { RemoveAllUserDrinksPort } from '../ports/driving/remove-all-user-drinks.port.ts';

export class RemoveAllUserDrinksUseCase implements RemoveAllUserDrinksPort {
  constructor(private readonly userDrinksPort: UserDrinksPort) {}

  public removeAllDrinks() {
    return this.userDrinksPort.removeAllDrinks();
  }
}