import AsyncStorage from '@react-native-community/async-storage';

const tokens = {
    access: 'accessToken'
};

class AsyncStorageService {
    async getItem(item) {
        try {
            const value = await AsyncStorage.getItem(item);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            return error;
        }
    };

    async getAccessToken() {
        return await this.getItem(tokens.access);
    }

    async setAccessToken(accessToken) {
        try {
            await AsyncStorage.setItem(tokens.access, accessToken);
        } catch (error) {
            return error;
        }
    }

}

export default new AsyncStorageService();
