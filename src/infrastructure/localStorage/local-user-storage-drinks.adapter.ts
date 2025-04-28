import { DrinkEntity } from '../../domain/entities/drink.entity';
import GetUserDrinksPort from '../../domain/ports/driven/get-user-drinks.port.ts';

export class LocalUserStorageDrinksAdapter implements GetUserDrinksPort {
  private readonly storageKey: string;

  constructor(storageKey: string = 'drinks') {
    this.storageKey = storageKey;
  }

  async getUserDrinks(): Promise<DrinkEntity[]> {
    try {
      const storedDrinksJson = window.localStorage.getItem(this.storageKey);

      if (!storedDrinksJson) {
        return [];
      }

      const storedDrinks = JSON.parse(storedDrinksJson);

      return storedDrinks.map((drink: any) => new DrinkEntity(drink._name || drink.name, drink._category || drink.category, drink._price || drink.price),
      );
    } catch (error) {
      console.error(`Error retrieving drinks from localStorage: ${error}`);
      return [];
    }
  }
}
