import React, { Fragment, Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
/* Store */
import store from './store';
/* Components */
import Login from './screens/Login/Login';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Fragment>
                    <SafeAreaView>
                        <Login/>
                    </SafeAreaView>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
