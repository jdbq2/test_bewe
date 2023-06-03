import { create } from "zustand";
import { User } from "../interfaces/user";
import { Link } from "../interfaces/link";
import { linkAPI } from "../api/linkAPI";
import { userAPI } from "../api/userAPI";

interface StoreProps {
  user: User | null;
  links: Link[];
  address: string;
  login: (data: User, token: string) => void;
  logout: () => void;
  signin: (userData: { email: string; password: string }) => void;
  getLinks: () => void;
  addLink: (data: Link) => void;
  deleteLink: (linkId: number) => void;
  setAddress: (data: string) => void;
}

export const useStore = create<StoreProps>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null,
  address: localStorage.getItem("address") ?? "",
  links: localStorage.getItem("links")
    ? JSON.parse(localStorage.getItem("links") || "{}")
    : [],
  login: (data, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(data));
    set((state) => {
      state.getLinks();
      return {
        ...state,
        user: data,
      };
    });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("links");
    set((state) => ({
      ...state,
      user: null,
      links: [],
    }));
  },
  signin: async (userData) => {
    try {
      const { data } = await userAPI.post("/login", userData);
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("token", data.token);
      set((state) => {
        state.getLinks();
        return {
          ...state,
          user: data.data,
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  getLinks: async () => {
    try {
      const { data } = await linkAPI.get("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  addLink: (data: Link) => {
    console.log(data);
  },
  deleteLink: (linkId: number) => {
    console.log(linkId);
  },
  setAddress: (data: string) => {
    localStorage.setItem("address", data);
    set((state) => ({ ...state, address: data }));
  },
}));
