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
import { useTranslation } from 'react-i18next';

interface DrinkCardContainerProps {
    currentDrinks: DrinkDto[]
    onIncreaseDrinkCount: (drink: DrinkDto) => void;
    onDecreaseDrinkCount: (drink: DrinkDto) => void;
}

const DrinkCardContainer: React.FC<DrinkCardContainerProps> = 
({ currentDrinks, onIncreaseDrinkCount, onDecreaseDrinkCount }) => {
  const { t } = useTranslation();

  return (
    <CardGrid container spacing={3}>
      {currentDrinks.map((drink) => <Grid size={{
        xs: 6,
        sm: 4,
        md: 4, 
      }} key={drink.name + drink.category}>
        <DrinkCard
          drink={drink}
          onIncrease={() => onIncreaseDrinkCount(drink)}
          onDecrease={() => onDecreaseDrinkCount(drink)}
        />
      </Grid>,
      )}

      {currentDrinks.length === 0 && 
        <EmptyStateContainer>
          <EmptyStateIcon>
            <LocalBarIcon />
          </EmptyStateIcon>
          <EmptyStateTitle variant="h6" align="center">
            {t('emptyState.title')}
          </EmptyStateTitle>
          <EmptyStateSubtitle variant="body2" align="center">
            {t('emptyState.subtitle')}
          </EmptyStateSubtitle>
        </EmptyStateContainer>
      }
    </CardGrid>
  ); 
};
export default DrinkCardContainer;
