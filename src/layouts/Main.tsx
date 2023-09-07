// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// components
import { Nav } from "../components/Nav/Nav";
import React from "react";
import { User } from "../types";

// loader
export function mainLoader() {
  const user = fetchData("user");
  return { user };
}

type MainProps = {
  user: User;
};

export const Main = () => {
  const { user } = useLoaderData() as MainProps;
  return (
    <div className="layout">
      <Nav userName={user?.userName} />
      <main>
        <Outlet />
      </main>
      <img src={"/assets/wave.svg"} alt="" />
    </div>
  );
};
