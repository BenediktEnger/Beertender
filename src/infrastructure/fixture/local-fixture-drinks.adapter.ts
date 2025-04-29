import { DrinkEntity } from '../../domain/entities/drink.entity.ts';
import GetAllDrinksPort from '../../domain/ports/driven/get-all-drinks.port.ts';
import { PinteDrinks } from './pinte-drinks.fixture.ts';

export default class LocalFixtureDrinksAdapter implements GetAllDrinksPort {
  // eslint-disable-next-line class-methods-use-this
  public getAllDrinks(): Promise<DrinkEntity[]> {
    const drinks = PinteDrinks;
    const drinkEntities: DrinkEntity[] = drinks.map((drink) => {
      const drinkEntity = new DrinkEntity(drink.name, drink.type, drink.price);
      return drinkEntity;
    });
    return Promise.resolve(drinkEntities);
  }
}