import { DrinkEntity } from '../../entities/drink.entity.ts';

export default interface AddUserDrinkPort {
    addUserDrink(drink: DrinkEntity): Promise<any>
};