import { useQuery } from '@tanstack/react-query';
import { useDomainServices } from '../shared/contexts/ServiceContext';
import { DrinkDto } from '../dtos/drink.dto.ts';

const useGetAllDrinks = () => {
  const { getUserDrinks } = useDomainServices();
  const query = useQuery({
    queryKey: ['userDrinks'],
    queryFn: async () => {
      const receivedDrinks = await getUserDrinks.getUserDrinks();
      const drinkDtos: DrinkDto[] = receivedDrinks.map((drinkEntity) => ({
        name: drinkEntity.name,
        price: drinkEntity.getSinglePrice(),
        category: drinkEntity.category,
        count: drinkEntity.count,
      }));
      return drinkDtos;
    },
  });
  return query;
};
export default useGetAllDrinks;