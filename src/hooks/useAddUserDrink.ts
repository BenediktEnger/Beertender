import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDomainServices } from '../shared/contexts/ServiceContext';
import { DrinkDto } from '../dtos/drink.dto.ts';
import { DrinkEntity } from '../domain/entities/drink.entity.ts';

const useAddUserDrink = () => {
  const { addDrink } = useDomainServices();
  const queryClient = useQueryClient();

  const updateDrink = useMutation({
    mutationFn: async (updatedDrink: DrinkDto) => {
      const drinkEntity = new DrinkEntity(
        updatedDrink.name,
        updatedDrink.category,
        updatedDrink.price,
      );

      await addDrink.addDrink(drinkEntity);

      return updatedDrink;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDrinks'] });
    },
  });

  return updateDrink;
};
export default useAddUserDrink;