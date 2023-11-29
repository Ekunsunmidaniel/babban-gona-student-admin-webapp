import PropTypes from "prop-types";
import { Stack, Typography, useTheme } from "@mui/material";
import DrawerHeaderStyled from "./DrawerHeaderStyled";
import { Logo } from "../../../../assets/Svg";

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ my: 2 }}
      >
        <Logo />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
