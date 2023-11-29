import React from "react";
import { useRoutes } from "react-router-dom";
import AllPages from "./routes/index";

const App = () => {
  const all_pages = useRoutes(AllPages());
  return <>{all_pages}</>;
};

export default App;
