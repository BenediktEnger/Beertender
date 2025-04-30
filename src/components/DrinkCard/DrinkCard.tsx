import React from 'react';
import { Divider, Tooltip } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import {
  ActionContainer,
  AddButton,
  CardHeader,
  CardTitle,
  CategoryContainer,
  CategoryLabel,
  CategoryValue,
  ContentRow,
  CountContainer,
  CountLabel,
  CountValue,
  IconContainer,
  ReduceButton,
  StyledCard,
  StyledCardContent,
} from './DrinkCard.styles.tsx';
import {
  AlcoholicIcon,
  DefaultDrinkIcon,
  HotDrinkIcon,
  JuiceIcon,
  NonAlcoholicIcon,
  SoftDrinkIcon,
  WineIcon,
} from './DrinkIcons.styles.tsx';

function getDrinkIcon(type: string) {
  switch (type) {
  case 'Soft Drinks': return <SoftDrinkIcon />;
  case 'Juice': return <JuiceIcon />;
  case 'Bier': return <AlcoholicIcon />;
  case 'Hot Drinks': return <HotDrinkIcon />;
  case 'Non-Alcoholic': return <NonAlcoholicIcon />;
  case 'Wine': return <WineIcon />;
  default: return <DefaultDrinkIcon />;
  }
}

interface DrinkCardProps {
    drink: DrinkDto;
    onIncrease: () => void;
    onDecrease: () => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink, onIncrease, onDecrease }) => {
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
          <CategoryContainer>
            <CategoryLabel variant="body2" gutterBottom>
              Category
            </CategoryLabel>
            <CategoryValue variant="body1">
              {drink.category}
            </CategoryValue>
          </CategoryContainer>

          <CountContainer>
            <CountLabel variant="body2" gutterBottom>
              Count
            </CountLabel>
            <CountValue variant="h6">
              {drink.count}
            </CountValue>
          </CountContainer>
        </ContentRow>
      </StyledCardContent>

      <Divider />

      <ActionContainer>
        <Tooltip title="Remove one">
          <ReduceButton
            color="primary"
            onClick={onDecrease}
            aria-label="increase count"
          >
            <RemoveCircleOutlineIcon/>
          </ReduceButton>
        </Tooltip>
        <Tooltip title="Add one more">
          <AddButton 
            color="primary" 
            onClick={onIncrease} 
            aria-label="increase count"
          >
            <AddCircleOutlineIcon />
          </AddButton>
        </Tooltip>
      </ActionContainer>
    </StyledCard>
  );
};
export default DrinkCard;
