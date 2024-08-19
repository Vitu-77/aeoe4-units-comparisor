import React from "react";
import { RouteObject } from "react-router-dom";

import { Home } from "@core/pages/home";
import { ComparisorProvider } from "@core/contexts/comparisor-context";

const routesStack: RouteObject[] = [
  {
    path: "/",
    element: (
      <ComparisorProvider>
        <Home />
      </ComparisorProvider>
    ),
  },
];

export { routesStack };
