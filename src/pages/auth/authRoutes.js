import React, { lazy } from "react";
import MinimalLayout from "../../layout/MinimalLayout/index";
import Loadable from "../../components/loadable";

const AuthLogin = Loadable(lazy(() => import("../auth/signIn/index")));
const AuthRegister = Loadable(lazy(() => import("../auth/signup/index")));

const authRoutes = [
  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      {
        path: "/signin",
        element: <AuthLogin />,
      },
      {
        path: "/session/signup",
        element: <AuthRegister />,
      },
    ],
  },
];
export default authRoutes;
