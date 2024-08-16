import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { routesStack } from "@infra/routes/stack";

export function Routes() {
  const router = createBrowserRouter(routesStack);
  return <RouterProvider router={router} />;
}
