import React, { Fragment } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text
} from 'react-native';
/* Components */
import Login from './screens/Login/Login';

const App = () => {
    return (
        <Fragment>
            <SafeAreaView>
                <Login/>
            </SafeAreaView>
        </Fragment>
    );
};

export default App;
