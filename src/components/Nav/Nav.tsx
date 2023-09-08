// react imports
import React from "react";

// components
import { GoHome } from "./GoHome";
import { LogoutButton } from "./LogoutButton";
import { DeleteButton } from "./DeleteButton";

type NavProps = {
  userName: string;
};

export const Nav: React.FC<NavProps> = ({ userName }) => {
  return (
    <nav>
      <GoHome />
      {userName && (
        <div className="buttons">
          {" "}
          <LogoutButton /> <DeleteButton />{" "}
        </div>
      )}
    </nav>
  );
};
