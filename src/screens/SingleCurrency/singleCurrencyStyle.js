import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
/* Theme */
import { theme } from '../../assets/theme';
/* Font */
import { fontSizeXL, fontSizeL, fontSizeM } from '../../assets/font';

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
        paddingVertical: 8,
        color: theme.colors.primary
    },
    aboutDesc: {
        color: theme.colors.accent
    },
    newsTitleStyle: {
        color: theme.colors.text,
        fontSize: fontSizeL
    },
    newsDateStyle: {
        color: theme.colors.accent,
        fontSize: fontSizeM
    },
    newsWrapper: {
        borderBottomColor: Colors.grey300,
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    showMore: {
        fontSize: fontSizeL,
        paddingVertical: 17,
        color: theme.colors.primary,
        textAlign: 'center'
    },
});
