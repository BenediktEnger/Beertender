import React from 'react';
import { Box, Card, CardContent, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import BeerIcon from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import { DrinkDto } from '../../dtos/drink.dto.ts';

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
    drink: DrinkDto;
    onIncrease: () => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink, onIncrease }) => {
  const categoryIcon = getDrinkIcon(drink.category);

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        ':hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Box 
        sx={{ 
          p: 2, 
          background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}80 0%, ${theme.palette.primary.main}20 100%)`,
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Box 
          sx={{ 
            borderRadius: '50%', 
            p: 1.5, 
            bgcolor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          {categoryIcon}
        </Box>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 600,
            color: 'white',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}
        >
          {drink.name}
        </Typography>
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Category
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {drink.category}
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Count
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              {drink.count}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <Divider />

      <Box sx={{ p: 1.5, display: 'flex', justifyContent: 'flex-end' }}>
        <Tooltip title="Add one more">
          <IconButton 
            color="primary" 
            onClick={onIncrease} 
            aria-label="increase count"
            sx={{
              bgcolor: 'rgba(25, 118, 210, 0.08)',
              '&:hover': {
                bgcolor: 'rgba(25, 118, 210, 0.15)',
              }
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
};
export default DrinkCard;
