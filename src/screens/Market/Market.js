import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
/* Styles */
import { styles } from './marketStyle';

const { container } = styles;

class Market extends PureComponent {
    render() {
        return (
            <View style={ container }>
                <Text>Market screen</Text>
            </View>
        )
    }
}

export default Market;
