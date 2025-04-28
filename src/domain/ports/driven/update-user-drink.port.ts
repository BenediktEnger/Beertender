import { DrinkEntity } from '../../entities/drink.entity.ts';

export default interface UpdateUserDrinkPort {
    updateDrink(drink: DrinkEntity): Promise<any>
};