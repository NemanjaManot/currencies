import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Actions */
import { tryLoginAction } from './loginActions';
/* Styles */
import { styles } from './loginStyle';
import { TOUCHABLE_AREA } from '../../assets/globalStyle';

const { container } = styles;

class Login extends PureComponent {
    static propTypes = {
        tryLogin: PropTypes.func
    };

    componentDidMount() {
        this.props.tryLogin('new new test');
    }

    onLoginBtnPress = () => {
        this.props.navigation.navigate('Symbols')
    };

    render() {
        return (
            <View style={ container }>
                <TouchableOpacity
                    hitSlop={ TOUCHABLE_AREA }
                    onPress={ this.onLoginBtnPress }
                >
                    <Text>Login screen</Text>
                </TouchableOpacity>
            </View>
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
