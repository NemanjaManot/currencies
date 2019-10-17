// @flow
import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, TextInput, HelperText } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
/* Actions */
import { tryLoginAction } from './loginActions';
/* Helpers */
import { NO_SPACE_REGEX, EMAIL_VALIDATION_REGEX } from '../../utils/regex';
/* Styles */
import { styles } from './loginStyle';

const { container, headerTitle, inputStyle, loginButton, textInputStyle, loginErrorStyle } = styles;
const resetScrollToCoords = { x: 0, y: 0 };

type Props = {
    errorMessage: string,
    isLoginLoading: boolean,
    tryLogin: Function
};

const Login = ({ errorMessage, isLoginLoading, tryLogin }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);

    const onChangeEmail = email => setEmail(email);

    const onChangePassword = password => setPassword(password);

    const onSubmit = () => {
        if (isFormValid) {
            const loginParams = {
                email,
                password
            };
            tryLogin(loginParams);
        }
    };

    const handleBlur = (field: string) => () => {
        switch (field) {
            case 'email':
                setTouchedEmail(true);
                break;
            case 'password':
                setTouchedPassword(true);
                break;
            default:
                return false;
        }
    };

    const showEmailValidationMsg = (email: string) => touchedEmail && (
        !NO_SPACE_REGEX.test(email) || !EMAIL_VALIDATION_REGEX.test(email));

    const showPasswordValidationMsg = password => password && touchedPassword && !password.length > 0;

    const isFormValid = () => {
        const emailValidation = showEmailValidationMsg(email);
        const passwordValidation = showPasswordValidationMsg(password);

        return (!emailValidation && email.length && !passwordValidation && password.length);
    };

    const validationMessage = (type: string) => {
        let message;
        switch (type) {
            case 'email':
                if (email.length === 0) {
                    message = 'Email is required';
                } else {
                    message = 'Email is invalid';
                }
                break;
            case 'password':
                if (password.length === 0) {
                    message = 'Password is required';
                }
                break;
            case 'loginError':
                message = errorMessage;
                break;
            default:
                return message;
        }
        return message;
    };

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={ resetScrollToCoords }
        >
            <View style={ container }>
                <Text style={ headerTitle }>Welcome</Text>
                <View>
                    <View style={ inputStyle }>
                        <TextInput
                            label="Email"
                            value={ email }
                            onChangeText={ onChangeEmail }
                            onBlur={ handleBlur('email') }
                            autoCapitalize="none"
                            style={ textInputStyle }
                        />
                        <HelperText
                            type="error"
                            visible={ showEmailValidationMsg(email) }
                        >
                            { validationMessage('email') }
                        </HelperText>
                    </View>
                    <View style={ inputStyle }>
                        <TextInput
                            label="Password"
                            value={ password }
                            onChangeText={ onChangePassword }
                            onBlur={ handleBlur('password') }
                            secureTextEntry
                            autoCapitalize="none"
                            style={ textInputStyle }
                        />
                        <HelperText
                            type="error"
                            visible={ showPasswordValidationMsg(password) }
                        >
                            { validationMessage('password') }
                        </HelperText>
                    </View>
                </View>
                <View>
                    <HelperText
                        type="error"
                        visible={ errorMessage }
                        style={ loginErrorStyle }
                    >
                        { validationMessage('loginError') }
                    </HelperText>
                    <Button
                        contentStyle={ loginButton }
                        mode="contained"
                        onPress={ onSubmit }
                        loading={ isLoginLoading }
                    >
                        Sign In
                    </Button>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};


const mapStateToProps = (store) => {
    return {
        errorMessage: store.loginReducer.errorMessage,
        isLoginLoading: store.loginReducer.isLoginLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tryLogin: loginParams => dispatch(tryLoginAction(loginParams))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
