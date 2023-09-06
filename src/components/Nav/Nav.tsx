// react imports
import React from "react";

// components
import { GoHome } from "./GoHome";
import { DeleteButton } from "./DeleteButton";

type NavProps = {
  userName: string;
};

export const Nav: React.FC<NavProps> = ({ userName }) => {
  return (
    <nav>
      <GoHome />
      {userName && <DeleteButton />}
    </nav>
  );
};
