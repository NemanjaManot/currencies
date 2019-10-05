import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'react-native-paper';
/* Components */
import FooterTabIcon from '../FooterTabIcon/FooterTabIcon';
/* Styles */
import { styles } from './symbolItemStyle';
import { TOUCHABLE_AREA } from '../../assets/globalStyle';
/* Colors */
import { otherColors } from '../../assets/theme';

const { container, rightBoxStyle, valueStyle, labelStyle } = styles;

class SymbolItem extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        isFavorite: PropTypes.bool,
        onLabelPress: PropTypes.func,
        onIconPress: PropTypes.func
    };

    render() {
        const { name, isFavorite, value } = this.props;
        return (
            <View style={ container }>
                <TouchableOpacity
                    onPress={ this.props.onLabelPress }
                    hitSlop={ TOUCHABLE_AREA }
                >
                    <Text style={ labelStyle }>{ name }</Text>
                </TouchableOpacity>
                <View style={ rightBoxStyle }>
                    <Text style={ valueStyle }>$ { value }</Text>
                    <TouchableOpacity
                        onPress={ this.props.onIconPress }
                        hitSlop={ TOUCHABLE_AREA }
                    >
                        { FooterTabIcon('favorite', isFavorite ? otherColors.secondaryColor : Colors.grey400) }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SymbolItem;
