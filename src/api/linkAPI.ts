import axios from "axios";

export const linkAPI = axios.create({
  baseURL: "tecnical.bewe.co/links",
});

linkAPI.interceptors.request.use((config) => {
  const token = "TU_TOKEN_BEARER_AQUI";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
