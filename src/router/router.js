import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
/* Icon */
import FooterTabIcon from '../components/FooterTabIcon/FooterTabIcon';
/* Screens */
import Favorites from '../screens/Favorites/Favorites';
/* Stack navigator screens */
import { LoginScreen, FavoritesScreen, MarketScreen } from './screens';
/* Theme */
import { theme } from '../assets/theme';

const Navigator = createMaterialBottomTabNavigator(
    {
        Symbol: {
            screen: MarketScreen,
            navigationOptions: () => ({
                tabBarIcon: FooterTabIcon,
                tabBarLabel: 'Market Search',
                activeTintColor: theme.colors.primary
            }),
        },
        Watchlist: {
            screen: FavoritesScreen,
            navigationOptions: () => ({
                tabBarIcon: FooterTabIcon,
                tabBarLabel: 'Favorites',
                activeTintColor: theme.colors.primary
            }),
        },
    },
    {
        barStyle: { backgroundColor: theme.colors.background }
    },
);

const Router = createAppContainer(
    createSwitchNavigator({
        Login: LoginScreen,
        App: Navigator,
    }),
);

export default Router;