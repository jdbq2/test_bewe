import axios from "axios";

export const userAPI = axios.create({
  baseURL: "http://tecnical.bewe.co/auth",
});
