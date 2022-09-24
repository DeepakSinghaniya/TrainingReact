import axios from "axios";

import { logout } from "../util";

export const http = axios.create({
  baseURL: "http://localhost:2000",
});

http.interceptors.request.use(
  function (config) {
    config.headers = { "x-access-token": localStorage.getItem("token") };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);
