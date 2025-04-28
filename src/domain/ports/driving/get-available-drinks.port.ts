import {DrinkEntity} from "../../entities/drink.entity.ts";

export default interface GetAvailableDrinksPort {
    getAvailableDrinks(): Promise<DrinkEntity[]>
}