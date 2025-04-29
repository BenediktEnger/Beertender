import styled from '@emotion/styled';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import BeerIcon from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';

const iconStyles = `
  font-size: 36px;
`;

export const SoftDrinkIcon = styled(LocalDrinkIcon)`
  ${iconStyles}
  color: #1976d2;
`;

export const JuiceIcon = styled(EmojiFoodBeverageIcon)`
  ${iconStyles}
  color: #ff9800;
`;

export const AlcoholicIcon = styled(BeerIcon)`
  ${iconStyles}
  color: #ffb300;
`;

export const HotDrinkIcon = styled(EmojiFoodBeverageIcon)`
  ${iconStyles}
  color: #a0522d;
`;

export const NonAlcoholicIcon = styled(LocalDrinkIcon)`
  ${iconStyles}
  color: #43a047;
`;

export const WineIcon = styled(WineBarIcon)`
  ${iconStyles}
  color: #b71c1c;
`;

export const DefaultDrinkIcon = styled(LocalDrinkIcon)`
  ${iconStyles}
`;