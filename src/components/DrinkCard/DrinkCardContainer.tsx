import {Grid, Typography} from "@mui/material";
import DrinkCard from "./DrinkCard.tsx";
import React from "react";
import {CurrentDrink, Drink} from "../../pages/DrinksMainPage.tsx";

interface DrinkCardContainerProps {
    currentDrinks: CurrentDrink[]
    onIncreaseDrinkCount: (drink: Drink) => void;
}

const DrinkCardContainer: React.FC<DrinkCardContainerProps> = ({currentDrinks, onIncreaseDrinkCount}) => {

    return(
    <Grid container spacing={3}>
        {currentDrinks.map((group) =>
            <Grid size={{xs:12, sm:6 }}  key={group.drink.name + group.drink.type}>
                <DrinkCard
                    drinkGroup={group}
                    onIncrease={() => onIncreaseDrinkCount(group.drink)}
                />
            </Grid>,
        )}
        {currentDrinks.length === 0 &&
            <Typography variant="body1" sx={{
                ml: 1,
                mt: 2,
            }}>
                No drinks added yet.
            </Typography>
        }
    </Grid>
    )
}

export default DrinkCardContainer;