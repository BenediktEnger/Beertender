import useAddUserDrink from '../../hooks/useAddUserDrink.ts';
import useReduceUserDrink from '../../hooks/useReduceUserDrink.ts';
import useRemoveAllDrinks from '../../hooks/useRemoveAllDrinks.ts';
import useGetUserDrinks from '../../hooks/useGetUserDrinks.ts';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import { useCallback } from 'react';
import {
  LoadingContainer,
  RemoveAllButton,
  SectionHeaderContainer,
  SectionPaper,
  SectionTitle,
  TitleButtonContainer,
} from './CurrentUserDrinksContainer.styles.tsx';
import { CircularProgress, Tooltip, Typography } from '@mui/material';
import DrinkCardContainer from './DrinkCardContainer.tsx';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const CurrentUserDrinksContainer = () => {
  const { mutate: addUserDrink } = useAddUserDrink();
  const { mutate: reduceUserDrink } = useReduceUserDrink();
  const { mutate: removeAllUserDrinks } = useRemoveAllDrinks();
  const { data: userDrinksDto } = useGetUserDrinks();

  const handleAddDrink = (drink: DrinkDto) => {
    if (drink) {
      addUserDrink(drink);
    }
  };
    
  const handleRemoveDrinkCount = (drink: DrinkDto) => {
    if (drink) {
      reduceUserDrink(drink);
    }
  };

  const getTotalSum = useCallback(() => {
    let sum = 0;
    userDrinksDto?.forEach((drink) => {
      sum += drink.price * drink.count;
    });
    return sum;
  }, [userDrinksDto]);

  return (
    <SectionPaper elevation={3}>
      <SectionHeaderContainer>
        <TitleButtonContainer>
          <SectionTitle variant="h6">
                        Your Drinks
          </SectionTitle>
          {userDrinksDto && userDrinksDto.length > 0 &&
                      <Tooltip title="Remove all drinks">
                        <RemoveAllButton
                          variant="outlined"
                          color="error"
                          size="small"
                          startIcon={<DeleteSweepIcon/>}
                          onClick={() => removeAllUserDrinks()}
                        >
                          Remove All
                        </RemoveAllButton>
                      </Tooltip>
          }
        </TitleButtonContainer>
        <Typography variant="h6" color="primary" fontWeight="bold">
                    Total: €{getTotalSum().toFixed(2)}
        </Typography>
      </SectionHeaderContainer>

      {!userDrinksDto ?
        <LoadingContainer>
          <CircularProgress/>
        </LoadingContainer>
        :
        <DrinkCardContainer currentDrinks={userDrinksDto} onIncreaseDrinkCount={handleAddDrink}
          onDecreaseDrinkCount={handleRemoveDrinkCount}/>
      }
    </SectionPaper>
  );
};
export default CurrentUserDrinksContainer;