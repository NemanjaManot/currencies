import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
/* Theme */
import { theme } from '../../assets/theme';
/* Font size */
import { fontSizeL } from '../../assets/font';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderBottomColor: Colors.grey300,
        borderBottomWidth: 1
    },
    rightBoxStyle: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center'
    },
    valueStyle: {
        paddingRight: 18,
        color: theme.colors.accent,
        fontSize: fontSizeL
    },
    labelStyle: {
        color: theme.colors.black,
        fontSize: fontSizeL
    }
});
