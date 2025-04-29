import GetAvailableDrinksPort from '../ports/driving/get-available-drinks.port.ts';
import { DrinkEntity } from '../entities/drink.entity.ts';
import GetAllDrinksPort from '../ports/driven/get-all-drinks.port.ts';

export default class GetAvailableDrinksUseCase implements GetAvailableDrinksPort {
  constructor(private readonly getAllDrinksPort: GetAllDrinksPort) {
  }

  public getAvailableDrinks(): Promise<DrinkEntity[]> {
    return this.getAllDrinksPort.getAllDrinks();
  }
}