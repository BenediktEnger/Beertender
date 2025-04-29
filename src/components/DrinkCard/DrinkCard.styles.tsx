import styled from '@emotion/styled';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

export const StyledCard = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CardHeader = styled(Box)`
  padding: 8px;
  background: ${props => `linear-gradient(45deg, ${props.theme.palette.primary.main}80 0%, ${props.theme.palette.primary.main}20 100%)`};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconContainer = styled(Box)`
  border-radius: 50%;
  padding: 6px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const CardTitle = styled(Typography)`
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
`;

export const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  padding: 8px;
`;

export const ContentRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export const CategoryContainer = styled(Box)``;

export const CountContainer = styled(Box)`
  text-align: right;
`;

export const CategoryLabel = styled(Typography)`
  color: ${props => props.theme.palette.text.secondary};
`;

export const CategoryValue = styled(Typography)`
  font-weight: 500;
`;

export const CountLabel = styled(Typography)`
  color: ${props => props.theme.palette.text.secondary};
`;

export const CountValue = styled(Typography)`
  font-weight: 700;
  color: ${props => props.theme.palette.primary.main};
`;

export const ActionContainer = styled(Box)`
  padding: 6px;
  display: flex;
  justify-content: flex-end;
`;

export const AddButton = styled(IconButton)`
  background-color: rgba(25, 118, 210, 0.08);
  &:hover {
    background-color: rgba(25, 118, 210, 0.15);
  }
`;