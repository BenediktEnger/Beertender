import { DrinkEntity } from '../../entities/drink.entity.ts';

export default interface GetUserDrinksPort {
    getUserDrinks(): Promise<DrinkEntity[]>
};