import { StyleSheet } from 'react-native';
/* Theme */
import { theme } from '../../assets/theme';
/* Font */
import { fontSizeXL, fontSizeL } from '../../assets/font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 15
    },
    mainHeadingStyle: {
        color: theme.colors.text,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: fontSizeXL
    },
    aboutWrapper: {
        paddingVertical: 10
    },
    aboutTitle: {
        fontSize: fontSizeL,
        paddingBottom: 7,
        color: theme.colors.primary
    },
    aboutDesc: {
        color: theme.colors.accent
    }
});
