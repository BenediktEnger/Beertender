import { AppBar, Box, CircularProgress, Container, Divider, Paper, Toolbar, Typography, useTheme } from '@mui/material';
import DrinkSearchField from '../components/DrinkSearchField/DrinkSearchField.tsx';
import useGetAllDrinks from '../hooks/useGetAllDrinks.ts';
import { DrinkDto } from '../dtos/drink.dto.ts';
import useAddUserDrink from '../hooks/useAddUserDrinks.ts';
import useGetUserDrinks from '../hooks/useGetUserDrinks.ts';
import DrinkCardContainer from '../components/DrinkCard/DrinkCardContainer.tsx';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const DrinksMainPage = () => {
  const { data: allDrinksDto } = useGetAllDrinks();
  const { mutate: addUserDrink } = useAddUserDrink();
  const { data: userDrinksDto } = useGetUserDrinks();
  const theme = useTheme();

  const handleAddDrink = (drink: DrinkDto) => {
    if (drink) {
      addUserDrink(drink);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      pb: 4,
    }}>
      {/* Modern AppBar Header */}
      <AppBar position="static" elevation={0} sx={{ 
        background: theme.palette.primary.main,
        mb: 4,
      }}>
        <Toolbar>
          <Box display="flex" alignItems="center" width="100%" justifyContent="center">
            <LocalBarIcon sx={{
              fontSize: 32,
              mr: 2, 
            }} />
            <Typography variant="h4" component="h1" sx={{ 
              fontWeight: 700,
              letterSpacing: '0.5px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}>
              Beertender
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        {/* Search Section */}
        <Paper elevation={3} sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}>
          <Typography variant="h6" gutterBottom sx={{ 
            fontWeight: 600, 
            color: theme.palette.primary.main,
            mb: 2,
          }}>
            Find Your Drink
          </Typography>

          {!allDrinksDto ? 
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
            : 
            <DrinkSearchField drinkSelections={allDrinksDto} onAddDrink={handleAddDrink} />
          }
        </Paper>

        {/* Drinks List Section */}
        <Paper elevation={3} sx={{ 
          p: 3, 
          borderRadius: 2,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}>
          <Typography variant="h6" gutterBottom sx={{ 
            fontWeight: 600, 
            color: theme.palette.primary.main,
            mb: 2,
          }}>
            Your Drinks
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {!userDrinksDto ? 
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
            : 
            <DrinkCardContainer currentDrinks={userDrinksDto} onIncreaseDrinkCount={handleAddDrink} />
          }
        </Paper>
      </Container>
    </Box>
  );
};

export default DrinksMainPage;
