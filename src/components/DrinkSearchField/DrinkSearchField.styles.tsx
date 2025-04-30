import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@mui/material';

export const DropDownElement = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`;

export const DrinkNameLabel = styled(Typography)({ fontWeight: 500 });

export const PriceLabel = styled(Typography)(({ theme }) => ({ color: theme.palette.text.secondary }));

export const StyledTextField = styled(TextField)`
  flex: 1;
  
  .MuiInputBase-root {
    border-radius: 8px;
  }
  
  .MuiOutlinedInput-notchedOutline {
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.12);
  }
  
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.23) !important;
  }
  
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-width: 2px !important;
  }
`;
