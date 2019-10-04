import { createStackNavigator } from 'react-navigation-stack';
/* Screens */
import Login from '../screens/Login/Login';
import Market from '../screens/Market/Market';
import SingleCurrency from '../screens/SingleCurrency/SingleCurrency';
import Favorites from '../screens/Favorites/Favorites';
/* Theme */
import { theme } from '../assets/theme';

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
                backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.background
        }),
    },
    SingleSymbol: {
        screen: SingleCurrency,
        navigationOptions: () => ({
            title: 'Single Currency',
            headerStyle: {
                backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.background
        }),
    },
});

export const FavoritesScreen = createStackNavigator({
    Watchlist: {
        screen: Favorites,
        navigationOptions: () => ({
            title: 'Favorites',
            headerStyle: {
                backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.background
        }),
    },
});
