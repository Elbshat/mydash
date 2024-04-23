import { Box, IconButton, InputBase, useMediaQuery } from "@mui/material";
import {
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
  MenuOutlined,
} from "@mui/icons-material";
import ThemeButton from "../ui/ThemeButton";

const Topbar = ({ toggleSidebar }) => {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {isMobile && (
        <IconButton onClick={toggleSidebar}>
          <MenuOutlined />
        </IconButton>
      )}

      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={"var(--bg-alt)"} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <ThemeButton />
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
