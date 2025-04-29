import { Box, CircularProgress, Typography } from '@mui/material';
import DrinkSearchField from '../components/DrinkSearchField/DrinkSearchField.tsx';
import useGetAllDrinks from '../hooks/useGetAllDrinks.ts';
import { DrinkDto } from '../dtos/drink.dto.ts';
import useAddUserDrink from '../hooks/useAddUserDrinks.ts';
import useGetUserDrinks from '../hooks/useGetUserDrinks.ts';
import DrinkCardContainer from '../components/DrinkCard/DrinkCardContainer.tsx';
import {
  ContentContainer,
  HeaderContainer,
  HeaderIcon,
  HeaderTitle,
  LoadingContainer,
  PageContainer,
  SectionPaper,
  SectionTitle,
  StyledAppBar,
  StyledAppLogo,
} from './DrinksMainPage.styles.tsx';
import { useCallback } from 'react';
import BeerLogo from '../assets/Beertender-logo.512x512.png';

const DrinksMainPage = () => {
  const { data: allDrinksDto } = useGetAllDrinks();
  const { mutate: addUserDrink } = useAddUserDrink();
  const { data: userDrinksDto } = useGetUserDrinks();

  const handleAddDrink = (drink: DrinkDto) => {
    if (drink) {
      addUserDrink(drink);
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
    <PageContainer>
      {/* Modern AppBar Header */}
      <StyledAppBar position="static" elevation={0}>
        <HeaderContainer>
          <HeaderIcon>
            <StyledAppLogo
              src={BeerLogo}
              alt="Beertender Logo"
              variant="square"
            />
          </HeaderIcon>
          <HeaderTitle variant="h4">
            Beertender
          </HeaderTitle>
        </HeaderContainer>
      </StyledAppBar>

      <ContentContainer maxWidth="md">
        {/* Search Section */}
        <SectionPaper elevation={3}>
          <SectionTitle variant="h6" gutterBottom>
            Find Your Drink
          </SectionTitle>

          {!allDrinksDto ? 
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
            : 
            <DrinkSearchField drinkSelections={allDrinksDto} onAddDrink={handleAddDrink} />
          }
        </SectionPaper>

        {/* Drinks List Section */}
        <SectionPaper elevation={3}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1, 
          }}>
            <SectionTitle variant="h6">
              Your Drinks
            </SectionTitle>
            <Typography variant="h6" color="primary" fontWeight="bold">
              Total: €{getTotalSum().toFixed(2)}
            </Typography>
          </Box>

          {!userDrinksDto ? 
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
            : 
            <DrinkCardContainer currentDrinks={userDrinksDto} onIncreaseDrinkCount={handleAddDrink} />
          }
        </SectionPaper>
      </ContentContainer>
    </PageContainer>
  );
};

export default DrinksMainPage;
