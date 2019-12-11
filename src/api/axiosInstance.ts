import * as axios from 'axios';

// @ts-ignore
export const axiosInstance = axios.create({
    baseURL: 'https://frontapi.vinchain.io/auth/api/',
    headers: {
      'Content-Type': 'application/json',
    },
});