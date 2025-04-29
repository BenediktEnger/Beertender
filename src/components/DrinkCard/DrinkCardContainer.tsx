import { Grid, Typography } from '@mui/material';
import DrinkCard from './DrinkCard.tsx';
import React from 'react';
import { DrinkDto } from '../../dtos/drink.dto.ts';

interface DrinkCardContainerProps {
    currentDrinks: DrinkDto[]
    onIncreaseDrinkCount: (drink: DrinkDto) => void;
}

const DrinkCardContainer: React.FC<DrinkCardContainerProps> = ({ currentDrinks, onIncreaseDrinkCount }) => <Grid container spacing={3}>
  {currentDrinks.map((drink) => <Grid size={{
    xs: 12,
    sm: 6, 
  }} key={drink.name + drink.category}>
    <DrinkCard
      drink={drink}
      onIncrease={() => onIncreaseDrinkCount(drink)}
    />
  </Grid>,
  )}
  {currentDrinks.length === 0 &&
            <Typography variant="body1" sx={{
              ml: 1,
              mt: 2,
            }}>
                No drinks added yet.
            </Typography>
  }
</Grid>;
    

export default DrinkCardContainer;