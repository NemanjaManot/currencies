import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Actions */
import { tryLoginAction } from './loginActions';
/* Styles */
import { styles } from './loginStyle';

const { container } = styles;

class Login extends PureComponent {
    static propTypes = {
        tryLogin: PropTypes.func
    };

    componentDidMount() {
        this.props.tryLogin('new new test');
    }

    render() {
        return (
            <View style={ container }>
                <Text>Login screen</Text>
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
