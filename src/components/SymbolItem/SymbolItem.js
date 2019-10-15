import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';
/* Components */
import FooterTabIcon from '../FooterTabIcon/FooterTabIcon';
/* Styles */
import { styles } from './symbolItemStyle';
import { TOUCHABLE_AREA } from '../../assets/globalStyle';
/* Colors */
import { otherColors } from '../../assets/theme';

const { container, rightBoxStyle, valueStyle, labelStyle } = styles;

const SymbolItem = ({ name, isFavorite, value, onLabelPress, onIconPress }) => {
    return (
        <View style={ container }>
            <TouchableOpacity
                onPress={ onLabelPress }
                hitSlop={ TOUCHABLE_AREA }
            >
                <Text style={ labelStyle }>{ name }</Text>
            </TouchableOpacity>
            <View style={ rightBoxStyle }>
                <Text style={ valueStyle }>$ { value }</Text>
                <TouchableOpacity
                    onPress={ onIconPress }
                    hitSlop={ TOUCHABLE_AREA }
                >
                    { FooterTabIcon('favorite', isFavorite ? otherColors.secondaryColor : Colors.grey400) }
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default SymbolItem;
