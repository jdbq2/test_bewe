import { create } from "zustand";
import { User } from "../interfaces/user";
import { Link } from "../interfaces/link";

interface StoreProps {
  user: User | null;
  links: Link[];
  address: string;
  login: (data: User) => void;
  logout: () => void;
  signin: (data: User) => void;
  getLinks: () => void;
  addLink: (data: Link) => void;
  deleteLink: (linkId: number) => void;
  setAddress: (data: string) => void;
}

export const useStore = create<StoreProps>((set) => ({
  user: {
    name: "Jeff Brown",
    email: "jeff.brown@example.com",
    image: "",
  },
  address: localStorage.getItem("address") ?? " ",
  links: [],
  login: (data: User) => {
    console.log(data);
  },
  logout: () => {
    console.log("logout");
  },
  signin: (data: User) => {
    console.log(data);
  },
  getLinks: () => {
    console.log("Links");
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
