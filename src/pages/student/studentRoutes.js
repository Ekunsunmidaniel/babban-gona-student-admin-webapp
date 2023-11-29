import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../../components/loadable";

const StudentListTable = Loadable(lazy(() => import("./StudentListTable")));
const Register = Loadable(lazy(() => import("./RegistrationForm")));

const studentRoutes = [
  {
    path: "student",
    element: <Navigate to='student/list' />,
  },
  {
    path: "student",
    children: [
      {
        path: "list",
        element: <StudentListTable />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default studentRoutes;
