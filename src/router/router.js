import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
/* Icon */
import FooterTabIcon from '../components/FooterTabIcon/FooterTabIcon';
/* Screens */
import Favorites from '../screens/Favorites/Favorites';
/* Stack navigator screens */
import { LoginScreen, FavoritesScreen, MarketScreen } from './screens';
/* Colors */
import { colors } from '../assets/colors';

const { primaryColor, mainColor } = colors;

const Navigator = createMaterialBottomTabNavigator(
    {
        Symbol: {
            screen: MarketScreen,
            navigationOptions: () => ({
                tabBarIcon: FooterTabIcon,
                tabBarLabel: 'Market Search',
                activeTintColor: primaryColor
            }),
        },
        Watchlist: {
            screen: FavoritesScreen,
            navigationOptions: () => ({
                tabBarIcon: FooterTabIcon,
                tabBarLabel: 'Favorites',
                activeTintColor: primaryColor
            }),
        },
    },
    {
        barStyle: { backgroundColor: mainColor },
    },
);

const Router = createAppContainer(
    createSwitchNavigator({
        Login: LoginScreen,
        App: Navigator,
    }),
);

export default Router;
