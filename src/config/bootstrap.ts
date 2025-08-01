import LocalFixtureDrinksAdapter from '../infrastructure/fixture/local-fixture-drinks.adapter.ts';
import GetAvailableDrinksUseCase from '../domain/use-cases/get-available-drinks.use-case.ts';
import { AddUserDrinkUseCase } from '../domain/use-cases/add-user-drink.use-case.ts';
import { LocalUserStorageDrinksAdapter } from '../infrastructure/localStorage/local-user-storage-drinks.adapter.ts';
import { GetUserDrinkUseCase } from '../domain/use-cases/get-user-drink.use-case.ts';
import { ReduceUserDrinkUseCase } from '../domain/use-cases/reduce-user-drink.use-case.ts';
import { RemoveAllUserDrinksUseCase } from '../domain/use-cases/remove-all-user-drinks.use-case.ts';

const localStorageAdapter = new LocalUserStorageDrinksAdapter();
const localFixtureDrinksAdapter = new LocalFixtureDrinksAdapter();
const getDrinks = new GetAvailableDrinksUseCase(localFixtureDrinksAdapter);
const addDrink = new AddUserDrinkUseCase(localStorageAdapter);
const getUserDrinks = new GetUserDrinkUseCase(localStorageAdapter);
const reduceUserDrink = new ReduceUserDrinkUseCase(localStorageAdapter);
const removeAllUserDrinks = new RemoveAllUserDrinksUseCase(localStorageAdapter);

export const domainService = {
  getDrinks,
  addDrink,
  getUserDrinks,
  reduceUserDrink,
  removeAllUserDrinks,
};

export type DomainServices = typeof domainService;