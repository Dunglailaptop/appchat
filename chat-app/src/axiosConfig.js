import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // gắn token vào header
        // console.log(localStorage);
        const token = window.localStorage.getItem("token");
        console.log(token);
        config.headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
        console.log(token);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // refresh token
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;