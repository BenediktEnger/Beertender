import { Grid, Typography, Box, useTheme } from '@mui/material';
import DrinkCard from './DrinkCard.tsx';
import React from 'react';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import LocalBarIcon from '@mui/icons-material/LocalBar';

interface DrinkCardContainerProps {
    currentDrinks: DrinkDto[]
    onIncreaseDrinkCount: (drink: DrinkDto) => void;
}

const DrinkCardContainer: React.FC<DrinkCardContainerProps> = ({ currentDrinks, onIncreaseDrinkCount }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {currentDrinks.map((drink) => (
        <Grid item xs={12} sm={6} md={4} key={drink.name + drink.category}>
          <DrinkCard
            drink={drink}
            onIncrease={() => onIncreaseDrinkCount(drink)}
          />
        </Grid>
      ))}

      {currentDrinks.length === 0 && (
        <Box 
          width="100%" 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          py={6}
          sx={{
            color: theme.palette.text.secondary,
            opacity: 0.8
          }}
        >
          <LocalBarIcon sx={{ fontSize: 48, mb: 2, opacity: 0.6 }} />
          <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
            No drinks added yet
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            Search for drinks above and add them to your collection
          </Typography>
        </Box>
      )}
    </Grid>
  );
};


export default DrinkCardContainer;
