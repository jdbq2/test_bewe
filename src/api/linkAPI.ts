import axios from "axios";

export const linkAPI = axios.create({
  baseURL: "http://tecnical.bewe.co/links",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
  },
});

linkAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
