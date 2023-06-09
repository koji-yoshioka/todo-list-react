import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },

  {
    path: "sign-up",
    element: <SignUp />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
