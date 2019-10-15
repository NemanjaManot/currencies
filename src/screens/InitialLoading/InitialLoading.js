import React, { useEffect } from 'react';
/* Components */
import Loader from '../../components/Loader/Loader';
/* Services */
import AsyncStorageService from "../../services/asyncStorageService";

const InitialLoading = ({ navigation }) => {
    useEffect(() => {
        navigateToAppropriateScreen();
    }, []);

    const navigateToAppropriateScreen = async () => {
        const accessToken = await AsyncStorageService.getAccessToken();
        if (accessToken) {
            navigation.navigate('App');
        } else {
            navigation.navigate('Login');
        }
    };

    return <Loader/>;
};

export default InitialLoading;
