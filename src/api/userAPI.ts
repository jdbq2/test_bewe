import axios from "axios";

export const userAPI = axios.create({
  baseURL: "https://tecnical.bewe.co/auth",
});
