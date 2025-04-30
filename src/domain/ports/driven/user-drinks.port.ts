import { DrinkEntity } from '../../entities/drink.entity.ts';

export default interface UserDrinksPort {
    addUserDrink(drink: DrinkEntity): Promise<any>
    getUserDrinks(): Promise<DrinkEntity[]>
    updateDrink(drink: DrinkEntity): Promise<any>
    removeDrink(drink: DrinkEntity): Promise<any>
    removeAllDrinks(): Promise<any>
};