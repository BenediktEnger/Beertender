import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDomainServices } from '../shared/contexts/ServiceContext';

const useRemoveAllDrinks = () => {
  const { removeAllUserDrinks } = useDomainServices();
  const queryClient = useQueryClient();

  const removeAllDrinks = useMutation({
    mutationFn: () => removeAllUserDrinks.removeAllDrinks(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDrinks'] });
    },
  });

  return removeAllDrinks;
};
export default useRemoveAllDrinks;