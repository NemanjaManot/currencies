import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
/* Styles */
import { styles } from './loginStyle';

const { container } = styles;

class Login extends PureComponent {
    render() {
        return (
            <View style={ container }>
                <Text>Login screen</Text>
            </View>
        )
    }
}

export default Login;
