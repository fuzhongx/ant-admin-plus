import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const service = axios.create({
    baseURL: process.env.VUE_APP_FLAG,
    timeout: 5000
})

service.interceptors.request.use((config) => {
    if (localStorage.getItem('token')) {
        config.headers['token'] = localStorage.getItem('token');
        config.headers['timestamp'] = Date.parse(new Date())
    }
    return config;
}),
    (error) => {
        return Promise.reject(error);
    },
    service.interceptors.response.use((response) => {
        return response;
    }),
    (error) => {
        return Promise.reject(error);
    }

export default service