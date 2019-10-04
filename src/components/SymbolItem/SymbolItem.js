import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'react-native-paper';
/* Components */
import FooterTabIcon from '../FooterTabIcon/FooterTabIcon';
/* Styles */
import { styles } from './symbolItemStyle';
/* Colors */
import { otherColors } from '../../assets/theme';

const { container, rightBoxStyle, valueStyle, labelStyle } = styles;

class SymbolItem extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        isFavorited: PropTypes.bool
    };

    render() {
        const { name, isFavorited, value } = this.props;
        return (
            <View style={ container }>
                <Text style={ labelStyle }>{ name }</Text>
                <View style={ rightBoxStyle }>
                    <Text style={ valueStyle }>$ { value }</Text>
                    { FooterTabIcon('favorite', isFavorited ? otherColors.secundaryColor : Colors.grey400) }
                </View>
            </View>
        )
    }
}

export default SymbolItem;
