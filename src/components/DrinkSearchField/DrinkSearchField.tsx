import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

interface DrinkSearchFieldProps {
    drinkSelections: string[]
    onAddDrink: (drink: string) => void
}
const DrinkSearchField: React.FC<DrinkSearchFieldProps> = ({ drinkSelections, onAddDrink }) => {
  const [selectedDrink, setSelectedDrink] = useState('');
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onAddDrink(selectedDrink);
        setSelectedDrink('');
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
        options={drinkSelections}
        onInputChange={(_, newInput) => setSelectedDrink(newInput)}
        value={selectedDrink}
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