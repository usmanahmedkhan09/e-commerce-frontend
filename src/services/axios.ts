import axios from 'axios';

const baseURL = '/api'
const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance