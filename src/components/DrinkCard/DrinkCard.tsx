import React from 'react';
import {Box, Card, CardContent, Divider, IconButton, Stack, Tooltip, Typography} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import BeerIcon from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import {CurrentDrink} from "../../pages/DrinksMainPage.tsx";

function getDrinkIcon(type: string) {
  switch (type) {
  case 'Soft Drinks': return <LocalDrinkIcon sx={{
    fontSize: 36,
    color: '#1976d2', 
  }} />;
  case 'Juice': return <EmojiFoodBeverageIcon sx={{
    fontSize: 36,
    color: '#ff9800', 
  }} />;
  case 'Alcoholic': return <BeerIcon sx={{
    fontSize: 36,
    color: '#ffb300', 
  }} />;
  case 'Hot Drinks': return <EmojiFoodBeverageIcon sx={{
    fontSize: 36,
    color: '#a0522d', 
  }} />;
  case 'Non-Alcoholic': return <LocalDrinkIcon sx={{
    fontSize: 36,
    color: '#43a047', 
  }} />;
  case 'Wine': return <WineBarIcon sx={{
    fontSize: 36,
    color: '#b71c1c', 
  }} />;
  default: return <LocalDrinkIcon sx={{ fontSize: 36 }} />;
  }
}

interface DrinkCardProps {
    drinkGroup: CurrentDrink;
    onIncrease: () => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drinkGroup , onIncrease}) => <Card
  variant="outlined"
  sx={{
    borderRadius: 3,
    boxShadow: 3,
    p: 1.5,
    bgcolor: 'background.paper',
    transition: '0.2s',
    ':hover': {
      boxShadow: 6,
      transform: 'scale(1.02)', 
    },
  }}
>
  <CardContent>
    <Stack direction="row" alignItems="center" spacing={2} mb={1}>
      {getDrinkIcon(drinkGroup.drink.type)}
      <Box>
        <Typography variant="h6" component="div">
          {drinkGroup.drink.name}
        </Typography>
      </Box>
    </Stack>
    <Divider sx={{ my: 1 }} />
    <Stack direction="row" alignItems="center" spacing={1} mt={1}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Count: {drinkGroup.count}
      </Typography>
      <Tooltip title="Add one more">
        <IconButton color="primary" onClick={onIncrease} aria-label="increase count">
          <AddCircleOutlineIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  </CardContent>
</Card>;
export default DrinkCard;