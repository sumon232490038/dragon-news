import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1 className="text-7xl">404</h1>,
  },
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
        element: <CategoryNews></CategoryNews>,
      },
    ],
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
