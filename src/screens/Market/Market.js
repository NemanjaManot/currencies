import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
/* Styles */
import { styles } from './marketStyle';
import { globalStyles } from '../../assets/globalStyle';

const { TOUCHABLE_AREA } = globalStyles;
const { container } = styles;

class Market extends PureComponent {
    onBtnPress = () => {
        this.props.navigation.navigate('SingleSymbol')
    };

    render() {
        return (
            <View style={ container }>
                <Text>Market screen</Text>
                <TouchableOpacity
                    hitSlop={ TOUCHABLE_AREA }
                    onPress={ this.onBtnPress }
                >
                    <Text>Go to single symbol screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Market;
