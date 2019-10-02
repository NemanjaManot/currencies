import React, { Fragment, Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
/* Store */
import store from './store';
/* Router */
import Router from './router/router';
/* Services */
import NavigationService from './services/navigationService';
/* Styles */
import { globalStyles } from './assets/globalStyle';

const { globalContainer } = globalStyles;

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;
