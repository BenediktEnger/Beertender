import { DrinkEntity } from '../../domain/entities/drink.entity';
import UserDrinksPort from '../../domain/ports/driven/user-drinks.port.ts';

export interface StorageDrinkModel {
  name: string;
  category: string;
  price: number;
  count: number;
}

export class LocalUserStorageDrinksAdapter implements UserDrinksPort {
  private readonly storageKey: string;

  constructor(storageKey: string = 'drinks') {
    this.storageKey = storageKey;
  }

  public removeDrink(drink: DrinkEntity): Promise<any> {
    try {
      const currentDrinks = this.getLocalUserDrinks();

      const drinkIndex = currentDrinks.findIndex(
        (storedDrink) => storedDrink.name === drink.name && storedDrink.category === drink.category,
      );
      if (drinkIndex !== -1) {
        currentDrinks.splice(drinkIndex, 1);

        window.localStorage.setItem(this.storageKey, JSON.stringify(currentDrinks));
      } else {
        console.warn(`Drink ${drink.name} not found in storage, cannot update.`);
      }

      return Promise.resolve();
    } catch (error) {
      console.error(`Error updating drink in localStorage: ${error}`);
      return Promise.reject(error);
    }
  }

  public updateDrink(drink: DrinkEntity): Promise<void> {
    try {
      const currentDrinks = this.getLocalUserDrinks();

      const drinkIndex = currentDrinks.findIndex(
        (storedDrink) => storedDrink.name === drink.name && storedDrink.category === drink.category,
      );

      if (drinkIndex !== -1) {
        currentDrinks[drinkIndex] = {
          name: drink.name,
          category: drink.category,
          count: drink.count,
          price: drink.getSinglePrice(),
        };

        window.localStorage.setItem(this.storageKey, JSON.stringify(currentDrinks));
      } else {
        console.warn(`Drink ${drink.name} not found in storage, cannot update.`);
      }

      return Promise.resolve();
    } catch (error) {
      console.error(`Error updating drink in localStorage: ${error}`);
      return Promise.reject(error);
    }
  }


  public addUserDrink(drink: DrinkEntity){
    try {
      const currentDrinks = this.getLocalUserDrinks();
      const newDrink: StorageDrinkModel = {
        name: drink.name,
        category: drink.category,
        count: drink.count,
        price: drink.getSinglePrice(),
      };
      currentDrinks.push(newDrink);
      window.localStorage.setItem(this.storageKey, JSON.stringify(currentDrinks));
    } catch (error) {
      console.error(`Error retrieving drinks from localStorage: ${error}`);
    }

    return Promise.resolve();
  }

  public getUserDrinks(): Promise<DrinkEntity[]> {
    try {
      const storedDrinks = this.getLocalUserDrinks();
      const drinkEntities: DrinkEntity[] = storedDrinks.map((drink: any) => new DrinkEntity(drink.name, drink.category, drink.price, drink.count));
      return Promise.resolve(drinkEntities);
    } catch (error) {
      console.error(`Error retrieving drinks from localStorage: ${error}`);
      return Promise.resolve([]);
    }
  }

  private getLocalUserDrinks(): StorageDrinkModel[]{
    try {
      const storedDrinksJson = window.localStorage.getItem(this.storageKey);

      if (!storedDrinksJson) {
        return [];
      }

      const storedDrinks: StorageDrinkModel[] = JSON.parse(storedDrinksJson);

      return storedDrinks;
    } catch (error) {
      console.error(`Error retrieving drinks from localStorage: ${error}`);
      return [];
    }
  }
}
