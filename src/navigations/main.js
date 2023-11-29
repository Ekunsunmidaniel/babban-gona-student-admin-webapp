import { Person } from "@mui/icons-material";

const icons = { Person };

export const main = {
  id: "main",
  title: "Main",
  type: "group",
  children: [
    {
      id: "students",
      title: "Students",
      type: "item",
      url: "/student/list",
      icon: icons.Person,
    },
  ],
};
