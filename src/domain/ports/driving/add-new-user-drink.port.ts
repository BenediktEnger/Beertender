import {DrinkEntity} from "../../entities/drink.entity.ts";

export interface AddNewUserDrinkPort {
    addDrink(drink: DrinkEntity): Promise<any>
}