import { useContext } from "react";
import { AppContext } from "../App";

export const Contact = () => {
  const { username } = useContext(AppContext);
  return <h1> This is Contact Page of {username} </h1>;
};
