import { DefaultTheme } from 'react-native-paper';

const turquoise = '#088B7E';
const white = '#ffffff';
const gray = '#666666';
const pink = '#E6327A';
const black = '#000000';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: turquoise,
        accent: gray,
        background: white,
        text: black
    }
};

export const otherColors = {
    secondaryColor: pink
};
