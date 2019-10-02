import React, { Fragment, Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
/* Store */
import store from './store';
/* Styles */
import { globalStyles } from './assets/globalStyle';
/* Router */
import Router from './router/router';

const { globalContainer } = globalStyles;

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Fragment>
                    <SafeAreaView style={ globalContainer }>
                        <Router/>
                    </SafeAreaView>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
