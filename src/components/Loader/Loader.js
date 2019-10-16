import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
/* Styles */
import { styles } from './loaderStyles';

const { container } = styles;

const Loader = () => {
    return (
        <View style={ container }>
            <ActivityIndicator/>
        </View>
    );
};

export default Loader;
