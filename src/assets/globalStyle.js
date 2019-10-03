import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    globalContainer: {
        flex: 1,
        zIndex: 1
    },
    flexOne: {
        flex: 1
    },
    backgroundTransparent: { backgroundColor: 'transparent' },
});

export const TOUCHABLE_AREA = {
    top: 18,
    bottom: 18,
    left: 20,
    right: 25
};
