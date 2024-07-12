import axios from 'axios';

export const axiosGet = async (url: string, params = {}) => {
    try {
        if (axios.defaults.baseURL !== process.env.API_URL) {
            axios.defaults.baseURL = process.env.API_URL
        }
        const response = await axios.get(url, { params });
        const data = response.data;
        return { data }
    } catch (error) {
        throw error;
    }
}

export const axiosPost = async (url: string, body: {}) => {
    try {
        if (axios.defaults.baseURL !== process.env.API_URL) {
            axios.defaults.baseURL = process.env.API_URL
        }
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const axiosPut = async (url: string, body: {}) => {
    try {
        if (axios.defaults.baseURL !== process.env.API_URL) {
            axios.defaults.baseURL = process.env.API_URL
        }
        const response = await axios.put(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const axiosDelete = async (url:string) => {
    try {
        if (axios.defaults.baseURL !== process.env.API_URL) {
            axios.defaults.baseURL = process.env.API_URL
        }
        const response = await axios.delete(url);
        const data = response.data
        return {data}
    } catch (error) {
        throw error;
    }
}