import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
/* Styles */
import { styles } from './marketStyle';
import { globalStyles } from '../../assets/globalStyle';

const { TOUCHABLE_AREA } = globalStyles;
const { container } = styles;

class Market extends PureComponent {
    state = {
        query: ''
    };

    onBtnPress = () => {
        this.props.navigation.navigate('SingleSymbol')
    };

    render() {
        return (
            <View style={ container }>
                <Searchbar
                    placeholder="Search here"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    //onChangeText={ this.onSearchChange }
                    value={ this.state.query }
                />


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
