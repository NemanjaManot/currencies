import { StyleSheet } from 'react-native';
/* Theme */
import { theme } from '../../assets/theme';
/* Font */
import { fontSizeXXL } from '../../assets/font';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: '10%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    headerTitle: {
        fontSize: fontSizeXXL,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60,
        color: theme.colors.accent
    },
    inputStyle: {
        marginBottom: 15
    },
    loginButton: {
        padding: 15
    },
    textInputStyle: {
        backgroundColor: 'transparent'
    },
    loginErrorStyle: {
        textAlign: 'center',
        marginBottom: 20
    }
});
