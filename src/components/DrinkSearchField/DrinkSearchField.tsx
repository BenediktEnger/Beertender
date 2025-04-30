import { Autocomplete, CircularProgress, InputAdornment } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import { AddButton, SearchForm, StyledTextField } from './DrinkSearchField.styles.tsx';
import { LoadingContainer, SectionPaper, SectionTitle } from '../../pages/DrinksMainPage.styles.tsx';
import useGetAllDrinks from '../../hooks/useGetAllDrinks.ts';
import useAddUserDrink from '../../hooks/useAddUserDrink.ts';
import { useTranslation } from 'react-i18next';

const DrinkSearchField = () => {
  const { t } = useTranslation();

  const initializeSelectedDrink = () => ({
    name: '',
    category: '',
    price: 0,
    count: 0,
  });

  const { mutate: addUserDrink } = useAddUserDrink();
  const { data: allDrinksDto } = useGetAllDrinks();
  const [selectedDrink, setSelectedDrink] = useState<DrinkDto>(initializeSelectedDrink);

  return (
    <SectionPaper elevation={3}>
      <SectionTitle variant="h6" gutterBottom>
              {t('search.title')}
      </SectionTitle>

      {!allDrinksDto ?
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
        :
        <SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            addUserDrink(selectedDrink);
            setSelectedDrink(initializeSelectedDrink());
          }}
        >
          <Autocomplete
            sx={{ flex: 1 }}
            getOptionLabel={(option) => option.name}
            options={allDrinksDto}
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
              label={t('search.placeholder')}
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
                      {t('search.addButton')}
          </AddButton>
        </SearchForm>
      }
    </SectionPaper>


  );
};

export default DrinkSearchField;
