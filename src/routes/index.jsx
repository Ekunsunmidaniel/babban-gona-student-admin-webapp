import { lazy } from "react";
import MainLayout from "../layout/MainLayout/index";
import { Navigate } from "react-router-dom";
import dashboardRoutes from "../pages/dashboard/dashboardRoutes";
import Loadable from "../components/loadable";
import authRoutes from "../pages/auth/authRoutes";
import studentRoutes from "../pages/student/studentRoutes";
import { ProtectedRoute } from "../components/protected-route";

const NotFound = Loadable(lazy(() => import("../pages/404")));

const AllPages = () => {
  const allRoutes = [
    {
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [...dashboardRoutes, ...studentRoutes],
    },
    {
      path: "/",
      element: <Navigate to="dashboard" />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    ...authRoutes,
  ];

  return allRoutes;
};
export default AllPages;
