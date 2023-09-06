import React from "react";

type TitleProps = {
  name: string;
};

export const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <h1 className="h2">
      <span className="accent">{name}</span> Overview
    </h1>
  );
};
