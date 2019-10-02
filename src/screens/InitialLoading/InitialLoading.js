import React, { PureComponent } from 'react';
/* Services */
import AsyncStorageService from "../../services/asyncStorageService";

class InitialLoading extends PureComponent {
    componentDidMount() {
        this.testFunc();
    };

    testFunc = async () => {
        let tt = await AsyncStorageService.getAccessToken();
        if (tt) {
            this.props.navigation.navigate('App');
        } else {
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        return null;
    }
}

export default InitialLoading;
