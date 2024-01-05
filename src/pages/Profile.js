import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div className="profile">
      {" "}
      <h1>Profile, user is: <strong>{username}</strong></h1>
      <ChangeProfile />
    </div>
  );
};
