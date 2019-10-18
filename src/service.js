import axios from 'axios';
const ROOT_URL = 'http://localhost:3000/';

export const getCameraRecords = async () => {
    try {
        const result = await axios.get(ROOT_URL);
        return result.data;
    } catch (error) {
        throw error;
    }
}
export const getImageRecord = async () => {
    try {
        const result = await axios.get(ROOT_URL);
        return result.data;
    } catch (error) {
        throw error;
    }
}