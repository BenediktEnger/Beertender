import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';

export const CardGrid = styled(Grid)``;

export const EmptyStateContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
  color: ${props => props.theme.palette.text.secondary};
  opacity: 0.8;
`;

export const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 8px;
  opacity: 0.6;
`;

export const EmptyStateTitle = styled(Typography)`
  font-weight: 500;
  text-align: center;
`;

export const EmptyStateSubtitle = styled(Typography)`
  margin-top: 4px;
  text-align: center;
`;