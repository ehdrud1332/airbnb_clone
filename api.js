// import Axios from 'axios';
//
// const callApi = async (method, path, data, jwt) => {
//     const headers = {
//         Authorization: jwt,
//         "Content-Type" : "application/json"
//     };
//
//     const baseUrl = "https://192.168.0.1/2323";
//     const fullUrl = `${baseUrl}${path}`;
//     if(method === "get" || method === "delete") {
//         return Axios[method](fullUrl, {headers});
//     } else {
//         return Axios[method](fullUrl, data, {headers});
//     }
//
// };
//
// export const createAccount = form => callApi("post", "/user/signup", form);
//
// export const loginAccount = form => callApi("post", "user/logiun", form);
//
import axios from "axios";

const callApi = async (method, path, data, jwt) => {
    const headers = {
        Authorization: jwt,
        "Content-Type": "application/json"
    };
    const baseUrl = "http://localhost:2323";
    const fullUrl = `${baseUrl}${path}`;
    if (method === "get" || method === "delete") {
        return axios[method](fullUrl, { headers });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};

export default {
    createAccount: form => callApi("post", "/user/signup", form),
    login: form => callApi("post", "/user/login", form),
    rooms: () => callApi("get", `/rooms/total`)
};


