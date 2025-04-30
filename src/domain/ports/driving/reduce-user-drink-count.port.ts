import { DrinkEntity } from '../../entities/drink.entity.ts';

export interface ReduceUserDrinkCountPort {
    reduceDrink(drink: DrinkEntity): Promise<any>
}