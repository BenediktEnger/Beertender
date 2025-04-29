import { Box, CircularProgress, Container, Typography } from '@mui/material';
import DrinkSearchField from '../components/DrinkSearchField/DrinkSearchField.tsx';
import useGetAllDrinks from '../hooks/useGetAllDrinks.ts';
import { DrinkDto } from '../dtos/drink.dto.ts';
import useAddUserDrink from '../hooks/useAddUserDrinks.ts';
import useGetUserDrinks from '../hooks/useGetUserDrinks.ts';
import DrinkCardContainer from '../components/DrinkCard/DrinkCardContainer.tsx';

const DrinksMainPage = () => {
  const { data: allDrinksDto } = useGetAllDrinks();
  const { mutate: addUserDrink } = useAddUserDrink();
  const { data: userDrinksDto } = useGetUserDrinks();

  const handleAddDrink = (drink: DrinkDto) => {
    if (drink) {
      addUserDrink(drink);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
                Beertender
      </Typography>

      {!allDrinksDto ?
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
        : 
        <DrinkSearchField drinkSelections={allDrinksDto} onAddDrink={handleAddDrink} />
      }

      {!userDrinksDto ?
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
        :
        <DrinkCardContainer currentDrinks={userDrinksDto} onIncreaseDrinkCount={handleAddDrink} />
      }


    </Container>
  );
};

export default DrinksMainPage;