import React from 'react';
import { Divider, Tooltip } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import { useTranslation } from 'react-i18next';
import {
  ActionContainer,
  AddButton,
  CardHeader,
  CardTitle,
  ContentRow,
  CountContainer,
  IconContainer,
  LeftCountValue,
  ReduceButton,
  RightPriceValue,
  StyledCard,
  StyledCardContent,
} from './DrinkCard.styles.tsx';
import {
  AlcoholicIcon,
  CocktailIcon,
  DefaultDrinkIcon,
  HotDrinkIcon,
  JuiceIcon,
  NonAlcoholicIcon,
  SoftDrinkIcon,
  SpiritIcon,
  WineIcon,
} from './DrinkIcons.styles.tsx'; // We're keeping the original category strings in the switch statement

// We're keeping the original category strings in the switch statement
// because these are used as keys in the data and shouldn't be translated
function getDrinkIcon(type: string) {
  switch (type) {
  case 'Soft Drinks': return <SoftDrinkIcon />;
  case 'Juice': return <JuiceIcon />;
  case 'Beer': return <AlcoholicIcon />;
  case 'Hot Drinks': return <HotDrinkIcon />;
  case 'Non-Alcoholic': return <NonAlcoholicIcon />;
  case 'Wine': return <WineIcon />;
  case 'Spirit': return <SpiritIcon/>;
  case 'Cocktail': return <CocktailIcon/>;
  default: return <DefaultDrinkIcon />;
  }
}

interface DrinkCardProps {
    drink: DrinkDto;
    onIncrease: () => void;
    onDecrease: () => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink, onIncrease, onDecrease }) => {
  const { t } = useTranslation();
  const categoryIcon = getDrinkIcon(drink.category);

  return (
    <StyledCard elevation={2}>
      <CardHeader>
        <IconContainer>
          {categoryIcon}
        </IconContainer>
        <CardTitle variant="h6">
          {drink.name}
        </CardTitle>
      </CardHeader>

      <StyledCardContent>
        <ContentRow>
          <CountContainer>
            <LeftCountValue variant="h6">
              {drink.count}
            </LeftCountValue>
            <RightPriceValue variant="h6" gutterBottom>
              €{drink.price.toFixed(2)}
            </RightPriceValue>
          </CountContainer>
        </ContentRow>
      </StyledCardContent>

      <Divider />

      <ActionContainer>
        <Tooltip title={t('drinkCard.removeOneTooltip')}>
          <ReduceButton
            color="primary"
            onClick={onDecrease}
            aria-label={t('drinkCard.increaseCountAriaLabel')}
          >
            <RemoveCircleOutlineIcon/>
          </ReduceButton>
        </Tooltip>
        <Tooltip title={t('drinkCard.addOneTooltip')}>
          <AddButton 
            color="primary" 
            onClick={onIncrease} 
            aria-label={t('drinkCard.increaseCountAriaLabel')}
          >
            <AddCircleOutlineIcon />
          </AddButton>
        </Tooltip>
      </ActionContainer>
    </StyledCard>
  );
};
export default DrinkCard;
