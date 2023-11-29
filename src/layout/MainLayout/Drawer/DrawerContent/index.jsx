// project import
import Navigation from "./Navigation/index";
import SimpleBar from "../../../../components/third-party/SimpleBar";

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      "& .simplebar-content": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    }}
  >
    <Navigation />
    {/*<NavCard />*/}
  </SimpleBar>
);

export default DrawerContent;
