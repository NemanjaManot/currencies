import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
/* Styles */
import { styles } from './loaderStyles';

const { container } = styles;

class Loader extends PureComponent {
    render() {
        return (
            <View style={ container }>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default Loader;
