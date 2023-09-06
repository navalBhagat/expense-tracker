// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helper";

// components
import { Nav } from "../components/Nav/Nav";
import React from "react";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

type MainProps = {
  userName: string;
};

export const Main = () => {
  const { userName } = useLoaderData() as MainProps;
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={"/assets/wave.svg"} alt="" />
    </div>
  );
};
