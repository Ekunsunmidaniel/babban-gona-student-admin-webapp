import { Dashboard } from "@mui/icons-material";

const icons = { Dashboard };

const dashboard = {
  id: "group-dashboard",
  title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.Dashboard,
      breadcrumbs: false,
    },
  ],
};
export default dashboard;
