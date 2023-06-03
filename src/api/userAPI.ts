import axios from "axios";

export const userAPI = axios.create({
  baseURL: "tecnical.bewe.co/auth",
});
