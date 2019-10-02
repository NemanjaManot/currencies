import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
/* Styles */
import { styles } from './favoritesStyle';

const { container } = styles;

class Favorites extends PureComponent {
    render() {
        return (
            <View style={ container }>
                <Text>Favorites screen</Text>
            </View>
        )
    }
}

export default Favorites;
