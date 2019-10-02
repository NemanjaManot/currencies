import { createStackNavigator } from 'react-navigation-stack';
/* Screens */
import Login from '../screens/Login/Login';
import Market from '../screens/Market/Market';
import SingleCurrency from '../screens/SingleCurrency/SingleCurrency';
import Favorites from '../screens/Favorites/Favorites';
/* Colors */
import { colors } from '../assets/colors';

const { primaryColor, mainColor } = colors;

export const LoginScreen = createStackNavigator(
    { Login: Login },
    { headerMode: 'none' },
);

export const MarketScreen = createStackNavigator({
    Symbols: {
        screen: Market,
        navigationOptions: () => ({
            title: 'Market Search',
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: mainColor
        }),
    },
    SingleSymbol: {
        screen: SingleCurrency,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: mainColor
        }),
    },
});

export const FavoritesScreen = createStackNavigator({
    Watchlist: {
        screen: Favorites,
        navigationOptions: () => ({
            title: 'Favorites',
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: mainColor
        }),
    },
});
