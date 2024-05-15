import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Register } from "../pages/Auth/Register";
import HomeScreen from "../pages/Home/HomeScreen";
import Speech from "../pages/Home/Speech";
import { Login } from "../pages/Auth/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      //   <PrivateRouter>
      <HomeScreen />
      //   </PrivateRouter>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  //   {
  //     path: "*",
  //     element: <PrivateRouter />,
  //   },
  {
    path: "/speech",
    element: <Speech />,
  },
]);
