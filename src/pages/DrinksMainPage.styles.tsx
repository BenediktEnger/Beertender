import styled from '@emotion/styled';
import { AppBar, Avatar, Box, Container, Paper, Toolbar, Typography } from '@mui/material';

export const PageContainer = styled(Box)`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  padding-bottom: max(16px, env(safe-area-inset-bottom, 16px));
`;

export const StyledAppBar = styled(AppBar)`
  background: ${(props) => props.theme.palette.primary.main};
  margin-bottom: 16px;
  padding-top: env(safe-area-inset-top, 0);
  top: 0;
  z-index: 1100;
`;

export const HeaderContainer = styled(Toolbar)`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    width: 100%;
    padding: 8px 16px;

    @media (max-width: 600px) {
        padding: 8px;
    }
`;

export const HeaderIcon = styled.div`
    grid-column: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const HeaderTitle = styled(Typography)`
    grid-column: 2;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;


export const ContentContainer = styled(Container)`
  max-width: 900px;
`;

export const SectionPaper = styled(Paper)`
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled(Typography)`
  font-weight: 600;
  color: ${(props) => props.theme.palette.primary.main};
  margin-bottom: 8px;
`;


export const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const StyledAppLogo = styled(Avatar)`
  height: 40px;
  width: auto;
  margin-right: 8px;

  & img {
    object-fit: contain;
  }
`;
