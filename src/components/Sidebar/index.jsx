import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";

import { HomeOutlined, MenuOutlined } from "@mui/icons-material";

import NavList from "./NavList";
import UserImg from "../../assets/me.jpg";
import { NavLink } from "react-router-dom";

const Sidebar = ({ toggled, toggleSidebar }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ProSidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          maxHeight: "100dvh",
          backgroundColor: "var(--bg-alt)",
        },
      }}
      collapsed={isCollapsed}
      customBreakPoint="800px" // Topbar component also uses this value
      toggled={toggled}
      onBackdropClick={toggleSidebar}
    >
      <Menu
        menuItemStyles={{
          button: {
            color: "var(--c-neutral-light)",

            "&:hover": {
              backgroundColor: "inherit",
              color: "#868dfb",
            },
            [`&.active`]: {
              color: "#6870fa",
            },
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed((prev) => !prev)}
          icon={
            <IconButton color="inherit">
              <MenuOutlined />
            </IconButton>
          }
          style={{
            margin: "10px 0 20px 0",
            color: "var(--c-neutral-light)",
            flexDirection: "row-reverse",
          }}
        >
          {!isCollapsed && (
            <Typography variant="h3" color={"var(--c-neutral-light)"}>
              ADMINIS
            </Typography>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={UserImg}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={"var(--c-neutral-light)"}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                El BSHAT
              </Typography>
              <Typography variant="h5" color={"var(--c-secondary-main)"}>
                Mahmoud Elsayed
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <MenuItem icon={<HomeOutlined />} component={<NavLink to="/" />}>
            <Typography>Dashboard</Typography>
          </MenuItem>

          <NavList variant="grid" />

          <NavList variant="pages" />

          <NavList variant="charts" />
        </Box>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
