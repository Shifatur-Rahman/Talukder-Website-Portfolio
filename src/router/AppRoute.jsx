import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute";

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoute />
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
