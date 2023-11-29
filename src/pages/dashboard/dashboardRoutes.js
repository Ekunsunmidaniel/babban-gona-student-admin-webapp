import React, { lazy } from "react";
import Loadable from "../../components/loadable/index";

const Dashboard = Loadable(lazy(() => import("./index")));

const dashboardRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];
export default dashboardRoutes;
