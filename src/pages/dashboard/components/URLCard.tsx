import { FC } from "react";
import { Link } from "../../../interfaces/link";

interface Props {
  link: Link;
}

export const URLCard: FC<Props> = ({ link }) => {
  return <div>{JSON.stringify(link)}</div>;
};
