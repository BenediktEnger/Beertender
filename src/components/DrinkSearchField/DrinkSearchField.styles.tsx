import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';

export const SearchForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  margin-bottom: 12px;
  
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

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

export const AddButton = styled(Button)`
  white-space: nowrap;
  border-radius: 8px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  background: ${props => props.theme.palette.primary.main};
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  
  @media (max-width: 599px) {
    width: 100%;
  }
  
  @media (min-width: 600px) {
    min-width: auto;
  }
`;