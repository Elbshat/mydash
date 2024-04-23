import { Outlet } from "react-router-dom";
// import Demo from "../components/Demo";
import Sidebar from "../components/Sidebar";
import { styled } from "@mui/material/styles";
import Topbar from "../components/Topbar";
import { useState } from "react";

const StyledAppLayout = styled("div")({
  display: "flex",
  maxHeight: "100dvh",
});

const StyledMain = styled("main")({
  overflowY: "scroll",
  padding: "1rem",
  flex: 1,
});

function AppLayout() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const toggleSidebar = () => setIsSidebarToggled((prev) => !prev);
  return (
    <StyledAppLayout>
      <Sidebar toggled={isSidebarToggled} toggleSidebar={toggleSidebar} />
      <StyledMain>
        <Topbar toggleSidebar={toggleSidebar} />

        <Outlet />
      </StyledMain>
    </StyledAppLayout>
  );
}

export default AppLayout;
