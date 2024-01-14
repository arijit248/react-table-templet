import PropTypes from "prop-types";

import Box from "@mui/material/Box";

// import { useResponsive } from "./hooks/use-responsive";
import { useResponsive } from "../../hooks/use-responsive";

import { NAV, HEADER } from "./config-layout";

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, openNav, ...other }) {
  // const lgUp = useResponsive("up", "lg");

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        py: `${HEADER.H_MOBILE + SPACING}px`,
        // ...(lgUp && {
        //   px: 2,
        //   py: `${HEADER.H_DESKTOP + SPACING}px`,
        //   width: `calc(100% - ${NAV.WIDTH}px)`,
        // }),

        // padding: (theme) => theme.spacing(9, 0),
        transition: (theme) =>
          theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        marginLeft: `-${NAV.WIDTH}px`,
        ...(openNav && {
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          marginLeft: 0,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  openNav: PropTypes.bool,
};
