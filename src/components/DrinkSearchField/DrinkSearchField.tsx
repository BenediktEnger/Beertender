import { Autocomplete, InputAdornment } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import { AddButton, SearchForm, StyledTextField } from './DrinkSearchField.styles.tsx';

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
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        onAddDrink(selectedDrink);
        setSelectedDrink(initializeSelectedDrink());
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
        renderInput={(params) => <StyledTextField
          {...params}
          label="Search or add a drink"
          variant="outlined"
          autoFocus
          InputProps={{
            ...params.InputProps,
            startAdornment: 
                <>
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>,
              
          }}
        />
        }
      />
      <AddButton
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        type="submit"
        disabled={!selectedDrink.name}
      >
        Add Drink
      </AddButton>
    </SearchForm>
  );
};

export default DrinkSearchField;
