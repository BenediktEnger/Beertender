import {Container, Typography} from "@mui/material";
import DrinkSearchField from "../components/DrinkSearchField/DrinkSearchField.tsx";
import DrinkCardContainer from "../components/DrinkCard/DrinkCardContainer.tsx";
import {PinteDrinks} from "../data/pinte-drinks.fixture.ts";
import useLocalStorage from "../hooks/useLocalStorage.ts";

export interface CurrentDrink {
    drink: Drink
    count: number
}

const DrinksMainPage = () => {
    const [currentDrinks, setCurrentDrinks] = useLocalStorage<CurrentDrink[]>('currentDrinks', []);

    const increaseDrinkCount = (drinkToIncrease: Drink) => {
        setCurrentDrinks(previousDrinks =>
            previousDrinks.map(drink =>
                drink.drink.name === drinkToIncrease.name && drink.drink.type === drinkToIncrease.type
                    ? { ...drink, count: drink.count + 1 }
                    : drink
            )
        );
    };

    const handleAddDrink = (drink: string) => {
        const newDrinkObject = PinteDrinks.find((d) => d.name === drink);
        if (newDrinkObject) {
            setCurrentDrinks(prev => [...prev, { drink: newDrinkObject, count: 1 }])
        }
    };

    return(
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                Drink Tracker
            </Typography>
            <DrinkSearchField drinkSelections={PinteDrinks.map((d) => d.name)} onAddDrink={handleAddDrink} />

            <DrinkCardContainer currentDrinks={currentDrinks} onIncreaseDrinkCount={increaseDrinkCount} />
        </Container>
    )
}

export default DrinksMainPage;