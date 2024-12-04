import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1 className="text-7xl">404</h1>,
  },
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <h1>news</h1>,
  },
  {
    path: "/auth",
    element: <h1>news</h1>,
  },
]);

export default router;
