import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="Enter your name here..."
      />
      <br />
    </div>
  );
};
