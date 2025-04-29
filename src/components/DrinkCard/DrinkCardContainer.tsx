import { Grid } from '@mui/material';
import DrinkCard from './DrinkCard.tsx';
import React from 'react';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import {
  CardGrid,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateSubtitle,
  EmptyStateTitle,
} from './DrinkCardContainer.styles.tsx';

interface DrinkCardContainerProps {
    currentDrinks: DrinkDto[]
    onIncreaseDrinkCount: (drink: DrinkDto) => void;
}

const DrinkCardContainer: React.FC<DrinkCardContainerProps> = ({ currentDrinks, onIncreaseDrinkCount }) => <CardGrid container spacing={3}>
  {currentDrinks.map((drink) => <Grid size={{
    xs: 6,
    md: 4, 
  }} key={drink.name + drink.category}>
    <DrinkCard
      drink={drink}
      onIncrease={() => onIncreaseDrinkCount(drink)}
    />
  </Grid>,
  )}

  {currentDrinks.length === 0 && 
        <EmptyStateContainer>
          <EmptyStateIcon>
            <LocalBarIcon />
          </EmptyStateIcon>
          <EmptyStateTitle variant="h6" align="center">
            No drinks added yet
          </EmptyStateTitle>
          <EmptyStateSubtitle variant="body2" align="center">
            Search for drinks above and add them to your collection
          </EmptyStateSubtitle>
        </EmptyStateContainer>
  }
</CardGrid>;
export default DrinkCardContainer;
