import GetAvailableDrinksPort from "../ports/driving/get-available-drinks.port.ts";
import {DrinkEntity} from "../entities/drink.entity.ts";

export default class GetAvailableDrinksUseCase implements GetAvailableDrinksPort {
    public getAvailableDrinks(): Promise<DrinkEntity[]> {
        return Promise.resolve([]);
    }

}