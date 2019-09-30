import React, { Fragment } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text
} from 'react-native';

const App = () => {
    return (
        <Fragment>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <Text>Welcome!</Text>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

export default App;
