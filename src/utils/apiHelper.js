import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
/* Config */
import { BASE_URL } from '../config';

export const createQueryString = (params) => {
    const paramsKeys = Object.entries(params)
        .filter(param => param[1] !== undefined)
        .map(param => param[0]);
    let queryString = '';
    paramsKeys.forEach((key, index) => {
        queryString += index === 0 ? '?' : '&';
        if (Array.isArray(params[key])) {
            params[key].forEach((el, i) => {
                if (i > 0) {
                    queryString += '&';
                }
                queryString += `${encodeURIComponent(`${key}`)}=${encodeURIComponent(
                    el,
                )}`;
            });
        } else {
            queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
                params[key],
            )}`;
        }
    });
    return queryString;
};

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
    async (config) => {
        if (config.headers.noAuth) {
            return config;
        }

        const request = config;

        const accessToken = await AsyncStorage.getItem('accessToken');
        if (accessToken) {
            request.headers.common.Authorization = `Bearer ${accessToken}`;
        }

        return request;
    },
    err => Promise.reject(err),
);

const get = (resourceUrl, params = {}, resourceId, options = {}) => {
    const id = resourceId ? `/${resourceId}` : '';
    const url = `${BASE_URL}/${resourceUrl + id + createQueryString(params)}`;

    return axiosInstance.get(url, options);
};

const post = (resourceUrl, newResource, options = {}) => {
    const url = `${BASE_URL}/${resourceUrl}`;
    return axiosInstance.post(url, newResource, options);
};

export default {
    get,
    post
};
