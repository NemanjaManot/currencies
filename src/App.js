import React, { Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
/* Store */
import store from './store';
/* Router */
import Router from './router/router';
/* Services */
import NavigationService from './services/navigationService';
/* Styles */
import { globalStyles } from './assets/globalStyle';
/* Theme */
import { theme } from './assets/theme';

const { globalContainer } = globalStyles;

const App = () => {
    return (
        <PaperProvider theme={ theme }>
            <Provider store={ store }>
                <Fragment>
                    <SafeAreaView style={ globalContainer }>
                        <Router
                            ref={ navigatorRef => {
                                NavigationService.setTopLevelNavigator(navigatorRef);
                            } }
                        />
                    </SafeAreaView>
                </Fragment>
            </Provider>
        </PaperProvider>
    )
};

export default App;
