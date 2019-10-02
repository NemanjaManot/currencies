import { DefaultTheme } from 'react-native-paper';

const turquoise = '#088B7E';
const white = '#ffffff';
const red = '#FF0C16';
const gray = '#666666';
const pink = 'E22770';
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
