import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
/* Styles */
import { globalStyles } from '../../assets/globalStyle';

const FooterTabIcon = (icon, color) => {
    return (
        <MaterialIcons
            style={ globalStyles.backgroundTransparent }
            name={ icon }
            color={ color }
            size={ 25 }
        />
    );
};

export default FooterTabIcon;
