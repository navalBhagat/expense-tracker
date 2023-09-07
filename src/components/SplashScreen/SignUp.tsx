// react imports
import React from "react";

// components
import { Title } from "./Title";
import { AccountForm } from "./Form";

export const SignUp = () => {
  return (
    <div className="intro">
      <div>
        <Title />
        <AccountForm />
      </div>
      <img
        src={"/assets/illustration.jpg"}
        alt="Person with money"
        width={600}
      />
    </div>
  );
};
