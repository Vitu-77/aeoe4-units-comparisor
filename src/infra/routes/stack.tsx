import React from "react";
import { RouteObject } from "react-router-dom";

import { Home } from "@core/pages/home";

const routesStack: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { routesStack };
