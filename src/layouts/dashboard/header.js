import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

// import { useResponsive } from "./hooks/use-responsive";
import { useResponsive } from "../../hooks/use-responsive";

// import { bgBlur } from "./theme/css";
import { bgBlur } from "../../theme/css";

import Iconify from "../../components/iconify";

import Searchbar from "./common/searchbar";
import { NAV, HEADER } from "./config-layout";
import AccountPopover from "./common/account-popover";
import LanguagePopover from "./common/language-popover";
import NotificationsPopover from "./common/notifications-popover";

// ----------------------------------------------------------------------

export default function Header({ openNav, onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");
  const lgdown = useResponsive("down", "lg");

  const renderContent = (
    <>
      {/* {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {!lgdown && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )} */}

      <IconButton
        onClick={onOpenNav}
        sx={{ mr: 2, ...(openNav && { display: "none" }) }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Searchbar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <LanguagePopover />
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      position="fixed"
      open={openNav}
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        // transition: theme.transitions.create(["height"], {
        //   duration: theme.transitions.duration.shorter,
        // }),
        // ...(lgUp && {
        //   width: `calc(100% - ${NAV.WIDTH}px)`,
        //   height: HEADER.H_DESKTOP,
        // }),

        transition: (theme) =>
          theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        ...(openNav && {
          width: `calc(100% - ${NAV.WIDTH}px)`,
          marginLeft: `${NAV.WIDTH}px`,
          transition: (theme) =>
            theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  openNav: PropTypes.bool,
  onOpenNav: PropTypes.func,
};
