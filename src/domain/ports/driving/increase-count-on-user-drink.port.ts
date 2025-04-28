import {DrinkEntity} from "../../entities/drink.entity.ts";

export default interface IncreaseCountOnUserDrinkPort {
    increaseCountOnUserDrink(drink: DrinkEntity): Promise<any>
}