import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDomainServices } from '../shared/contexts/ServiceContext';
import { DrinkDto } from '../dtos/drink.dto.ts';
import { DrinkEntity } from '../domain/entities/drink.entity.ts';

const useReduceUserDrink = () => {
  const { reduceUserDrink } = useDomainServices();
  const queryClient = useQueryClient();

  const reduceDrink = useMutation({
    mutationFn: async (updatedDrink: DrinkDto) => {
      const drinkEntity = new DrinkEntity(
        updatedDrink.name,
        updatedDrink.category,
        updatedDrink.price,
      );

      await reduceUserDrink.reduceDrink(drinkEntity);

      return updatedDrink;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDrinks'] });
    },
  });

  return reduceDrink;
};
export default useReduceUserDrink;