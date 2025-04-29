import { useQuery } from '@tanstack/react-query';
import { useDomainServices } from '../shared/contexts/ServiceContext';
import { DrinkDto } from '../dtos/drink.dto.ts';

const useGetAllDrinks = () => {
  const { getDrinks } = useDomainServices();
  const query = useQuery({
    queryKey: ['allDrinks'],
    queryFn: async () => {
      const receivedDrinks = await getDrinks.getAvailableDrinks();
      const drinkDtos: DrinkDto[] = receivedDrinks.map((drinkEntity) => ({
        name: drinkEntity.name,
        price: drinkEntity.getSinglePrice(),
        category: drinkEntity.category,
      }));
      return drinkDtos;
    },
  });
  return query;
};
export default useGetAllDrinks;