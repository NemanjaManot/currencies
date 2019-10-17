import axios from 'axios';
import AsyncStorageService from '../services/asyncStorageService';
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
                queryString += `${ encodeURIComponent(`${ key }`) }=${ encodeURIComponent(
                    el,
                ) }`;
            });
        } else {
            queryString += `${ encodeURIComponent(key) }=${ encodeURIComponent(
                params[key],
            ) }`;
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
        const accessToken = await AsyncStorageService.getAccessToken();

        if (accessToken) {
            request.headers.common.Authorization = `Bearer ${ accessToken }`;
        }

        return request;
    },
    err => Promise.reject(err),
);

class ApiHelper {
    static async get(resourceUrl, params = {}, resourceId, options = {}) {
        const id = resourceId ? `/${ resourceId }` : '';
        const url = `${ BASE_URL }/${ resourceUrl + id + createQueryString(params) }`;
        return axiosInstance.get(url, options);
    };

    static async post(resourceUrl, newResource, options = {}) {
        const url = `${ BASE_URL }/${ resourceUrl }`;
        return axiosInstance.post(url, newResource, options);
    };

    static async put(resourceUrl, newResource, options = {}) {
        const url = `${ BASE_URL }/${ resourceUrl }`;
        return axiosInstance.put(url, newResource, options);
    };

    static async remove(resourceUrl, resourceId) {
        const url = `${ BASE_URL }/${ resourceUrl }/${ resourceId || '' }`;
        return axiosInstance.delete(url);
    };
}

export default ApiHelper;
