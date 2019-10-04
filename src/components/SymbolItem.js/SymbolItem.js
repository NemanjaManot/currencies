import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
/* Components */
import FooterTabIcon from '../FooterTabIcon/FooterTabIcon';
/* Styles */
import { styles } from './symbolItemStyle';

const { container, rightBoxStyle, valueStyle, labelStyle } = styles;

class SymbolItem extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        iconColor: PropTypes.string
    };

    render() {
        const { name, iconColor, value } = this.props;
        return (
            <View style={ container }>
                <Text style={ labelStyle }>{ name }</Text>
                <View style={ rightBoxStyle }>
                    <Text style={ valueStyle }>$ { value }</Text>
                    { FooterTabIcon('favorite', iconColor) }
                </View>
            </View>
        )
    }
}

export default SymbolItem;
