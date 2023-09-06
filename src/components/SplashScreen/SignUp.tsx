// react imports
import React from "react";

// components
import { Title } from "./Title";
import { CreateAccountForm } from "./Form";

export const SignUp = () => {
  return (
    <div className="intro">
      <div>
        <Title />
        <CreateAccountForm />
      </div>
      <img
        src={"/assets/illustration.jpg"}
        alt="Person with money"
        width={600}
      />
    </div>
  );
};
