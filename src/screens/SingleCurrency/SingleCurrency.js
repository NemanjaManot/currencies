import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
/* Styles */
import { styles } from './singleCurrencyStyle';

const { container } = styles;

class SingleCurrency extends PureComponent {
    render() {
        return (
            <View style={ container }>
                <Text>Single Currency screen</Text>
            </View>
        )
    }
}

export default SingleCurrency;
