import useAddUserDrink from '../../hooks/useAddUserDrink.ts';
import useReduceUserDrink from '../../hooks/useReduceUserDrink.ts';
import useRemoveAllDrinks from '../../hooks/useRemoveAllDrinks.ts';
import useGetUserDrinks from '../../hooks/useGetUserDrinks.ts';
import { DrinkDto } from '../../dtos/drink.dto.ts';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LoadingContainer,
  RemoveAllButton,
  SectionHeaderContainer,
  SectionPaper,
  TitleButtonContainer,
  TotalSumContainer,
} from './CurrentUserDrinksContainer.styles.tsx';
import { 
  Button, 
  CircularProgress, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Tooltip 
} from '@mui/material';
import DrinkCardContainer from './DrinkCardContainer.tsx';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const CurrentUserDrinksContainer = () => {
  const { t } = useTranslation();
  const { mutate: addUserDrink } = useAddUserDrink();
  const { mutate: reduceUserDrink } = useReduceUserDrink();
  const { mutate: removeAllUserDrinks } = useRemoveAllDrinks();
  const { data: userDrinksDto } = useGetUserDrinks();
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleAddDrink = (drink: DrinkDto) => {
    if (drink) {
      addUserDrink(drink);
    }
  };

  const handleRemoveDrinkCount = (drink: DrinkDto) => {
    if (drink) {
      reduceUserDrink(drink);
    }
  };

  const handleOpenConfirmDialog = () => {
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setConfirmDialogOpen(false);
  };

  const handleConfirmRemoveAll = () => {
    removeAllUserDrinks();
    setConfirmDialogOpen(false);
  };

  const getTotalSum = useCallback(() => {
    let sum = 0;
    userDrinksDto?.forEach((drink) => {
      sum += drink.price * drink.count;
    });
    return sum;
  }, [userDrinksDto]);

  return (
    <SectionPaper elevation={3}>
      <SectionHeaderContainer>
        <TotalSumContainer variant="h6" color="primary">
          {t('drinks.total', { amount: getTotalSum().toFixed(2) })}
        </TotalSumContainer>
        <TitleButtonContainer>

          {userDrinksDto && userDrinksDto.length > 0 &&
                      <Tooltip title={t('drinks.removeAllTooltip')}>
                        <RemoveAllButton
                          variant="outlined"
                          color="error"
                          size="small"
                          startIcon={<DeleteSweepIcon/>}
                          onClick={handleOpenConfirmDialog}
                        >
                          {t('drinks.removeAll')}
                        </RemoveAllButton>
                      </Tooltip>
          }
        </TitleButtonContainer>

      </SectionHeaderContainer>

      {!userDrinksDto ?
        <LoadingContainer>
          <CircularProgress/>
        </LoadingContainer>
        :
        <DrinkCardContainer currentDrinks={userDrinksDto} onIncreaseDrinkCount={handleAddDrink}
          onDecreaseDrinkCount={handleRemoveDrinkCount}/>
      }
      <Dialog
        open={confirmDialogOpen}
        onClose={handleCloseConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t('drinks.confirmRemoval')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('drinks.confirmRemovalMessage')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="primary">
            {t('drinks.cancel')}
          </Button>
          <Button onClick={handleConfirmRemoveAll} color="error" autoFocus>
            {t('drinks.confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </SectionPaper>
  );
};
export default CurrentUserDrinksContainer;
