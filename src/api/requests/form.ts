import { axiosInstance } from '../axiosInstance';

export const checkIsEmailExists = async ({email}: any) => {
    const { data } = await axiosInstance.post('./check-email/', {
        email
    });
    return data
};