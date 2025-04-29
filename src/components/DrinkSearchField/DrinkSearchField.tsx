import { Autocomplete, Box, Button, TextField, InputAdornment, useTheme } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { DrinkDto } from '../../dtos/drink.dto.ts';

interface DrinkSearchFieldProps {
    drinkSelections: DrinkDto[]
    onAddDrink: (drink: DrinkDto) => void
}
const DrinkSearchField: React.FC<DrinkSearchFieldProps> = ({ drinkSelections, onAddDrink }) => {
  const theme = useTheme();
  const initializeSelectedDrink = () => ({
    name: '',
    category: '',
    price: 0,
    count: 0,
  });

  const [selectedDrink, setSelectedDrink] = useState<DrinkDto>(initializeSelectedDrink);

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onAddDrink(selectedDrink);
        setSelectedDrink(initializeSelectedDrink());
      }}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        alignItems: { xs: 'stretch', sm: 'center' },
        mb: 3,
      }}
    >
      <Autocomplete
        sx={{ flex: 1 }}
        getOptionLabel={(option) => option.name}
        options={drinkSelections}
        value={selectedDrink}
        onChange={(_, selectedOption) => {
          if (selectedOption) {
            setSelectedDrink(selectedOption);
          } else {
            setSelectedDrink(initializeSelectedDrink());
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search or add a drink"
            variant="outlined"
            autoFocus
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
              sx: {
                borderRadius: 2,
                '& fieldset': {
                  borderWidth: '1px',
                  borderColor: 'rgba(0, 0, 0, 0.12)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.23) !important',
                },
                '&.Mui-focused fieldset': {
                  borderWidth: '2px !important',
                },
              }
            }}
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        type="submit"
        disabled={!selectedDrink.name}
        sx={{ 
          whiteSpace: 'nowrap',
          borderRadius: 2,
          py: 1.5,
          px: 3,
          fontWeight: 600,
          boxShadow: 2,
          transition: 'all 0.2s',
          '&:hover': {
            boxShadow: 4,
            transform: 'translateY(-2px)',
          },
          background: theme.palette.primary.main,
          minWidth: { xs: '100%', sm: 'auto' }
        }}
      >
        Add Drink
      </Button>
    </Box>
  );
};

export default DrinkSearchField;
