import { DrinkDto } from '../dtos/drink.dto.ts';
import useAddUserDrink from '../hooks/useAddUserDrink.ts';
import {
  ContentContainer,
  HeaderContainer,
  HeaderIcon,
  HeaderTitle,
  PageContainer,
  StyledAppBar,
  StyledAppLogo,
} from './DrinksMainPage.styles.tsx';
import BeerLogo from '../assets/Beertender-logo.512x512.png';
import DrinkSearchField from '../components/DrinkSearchField/DrinkSearchField.tsx';
import CurrentUserDrinksContainer from '../components/DrinkCard/CurrentUserDrinksContainer.tsx';
import { useTranslation } from 'react-i18next';

const DrinksMainPage = () => {
  const { t } = useTranslation();
  const { mutate: addUserDrink } = useAddUserDrink();

  const handleAddDrink = (drink: DrinkDto) => {
    if (drink) {
      addUserDrink(drink);
    }
  };

  return (
    <PageContainer>
      <StyledAppBar position="static" elevation={0}>
        <HeaderContainer>
          <HeaderIcon>
            <StyledAppLogo
              src={BeerLogo}
              alt={t('app.logoAlt')}
              variant="square"
            />
          </HeaderIcon> 
          <HeaderTitle variant="h4">
            {t('app.title')}
          </HeaderTitle>
        </HeaderContainer>
      </StyledAppBar>

      <ContentContainer maxWidth="md">
        <DrinkSearchField onAddDrink={handleAddDrink} />

        <CurrentUserDrinksContainer />

      </ContentContainer>
    </PageContainer>
  );
};

export default DrinksMainPage;
