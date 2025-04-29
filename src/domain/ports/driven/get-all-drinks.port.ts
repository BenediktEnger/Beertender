import { DrinkEntity } from '../../entities/drink.entity.ts';

export default interface GetAllDrinksPort {
    getAllDrinks(): Promise<DrinkEntity[]>
};