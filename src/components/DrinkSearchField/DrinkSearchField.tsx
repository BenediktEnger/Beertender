import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { DrinkDto } from '../../dtos/drink.dto.ts';

interface DrinkSearchFieldProps {
    drinkSelections: DrinkDto[]
    onAddDrink: (drink: DrinkDto) => void
}
const DrinkSearchField: React.FC<DrinkSearchFieldProps> = ({ drinkSelections, onAddDrink }) => {
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
        gap: 2,
        alignItems: 'center',
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
        renderInput={(params) => <TextField
          {...params}
          label="Search or add a drink"
          variant="outlined"
          autoFocus
        />
        }
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        type="submit"
        disabled={!selectedDrink}
        sx={{ whiteSpace: 'nowrap' }}
      >Add</Button>
    </Box>
  );
};

export default DrinkSearchField;