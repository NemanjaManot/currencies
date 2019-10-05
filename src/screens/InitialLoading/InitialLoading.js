import React, { PureComponent } from 'react';
/* Components */
import Loader from '../../components/Loader/Loader';
/* Services */
import AsyncStorageService from "../../services/asyncStorageService";

class InitialLoading extends PureComponent {
    componentDidMount() {
        this.navigateToAppropriateScreen();
    };

    navigateToAppropriateScreen = async () => {
        const accessToken = await AsyncStorageService.getAccessToken();
        if (accessToken) {
            this.props.navigation.navigate('App');
        } else {
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        return <Loader/>;
    }
}

export default InitialLoading;
