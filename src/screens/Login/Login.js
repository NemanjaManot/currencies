import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Text, TextInput, HelperText } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
/* Actions */
import { tryLoginAction } from './loginActions';
/* Helpers */
import { NO_SPACE_REGEX, EMAIL_VALIDATION_REGEX } from '../../utils/regex';
/* Styles */
import { styles } from './loginStyle';
/* Colors*/
import { colors } from '../../assets/colors';

const { primaryColor } = colors;
const { container, headerTitle, inputStyle, loginButton, textInputStyle, loginErrorStyle } = styles;
const resetScrollToCoords = { x: 0, y: 0 };

class Login extends PureComponent {
    static propTypes = {
        tryLogin: PropTypes.func
    };

    state = {
        password: '',
        email: '',
        touched: {
            password: false,
            email: false,
        },
    };

    componentDidMount() {
        this.props.tryLogin('new new test');
    }

    onChangeEmail = email => this.setState({ email });

    onChangePassword = password => this.setState({ password });

    onSubmit = () => {
        this.props.tryLogin(this.state.email, this.state.password);
        //this.props.navigation.navigate('Symbols');
    };

    handleBlur = field => () => {
        this.setState(prevState => ({
            touched: { ...prevState.touched, [field]: true },
        }));
    };

    isEmailValid = email => this.state.touched.email
        && (!NO_SPACE_REGEX.test(email) || !EMAIL_VALIDATION_REGEX.test(email));

    isPasswordValid = password => this.state.touched.password && !password.length > 0;

    render() {
        const { email, password } = this.state;

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
                                onChangeText={ this.onChangeEmail }
                                onBlur={ this.handleBlur('email') }
                                autoCapitalize="none"
                                style={ textInputStyle }
                            />
                            <HelperText
                                type="error"
                                visible={ this.isEmailValid(email) }
                            >
                                E-Mail is invalid
                            </HelperText>
                        </View>
                        <View style={ inputStyle }>
                            <TextInput
                                label="Password"
                                value={ password }
                                onChangeText={ this.onChangePassword }
                                onBlur={ this.handleBlur('password') }
                                secureTextEntry
                                autoCapitalize="none"
                                style={ textInputStyle }
                            />
                            <HelperText
                                type="error"
                                visible={ this.isPasswordValid(password) }
                            >
                                Password is required
                            </HelperText>
                        </View>
                    </View>
                    <View>
                        { /*<HelperText
                                type="error"
                                visible={ false }
                                style={ loginErrorStyle }
                            >
                                { 'loginError' }
                            </HelperText>*/ }
                        <Button
                            contentStyle={ loginButton }
                            color={ primaryColor }
                            mode="contained"
                            onPress={ this.onSubmit }
                            //loading={ isLoading }
                            //disabled={ isLoading}
                        >
                            Sign In
                        </Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        testState: store.loginReducer.testState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tryLogin: testState => dispatch(tryLoginAction(testState))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
