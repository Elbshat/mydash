import { IconButton } from "@mui/material";
import {DarkModeOutlined,LightModeOutlined} from "@mui/icons-material";

import useDarkMode from "../../hooks/useDarkMode";

function ThemeButton() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  return <IconButton onClick={toggleDarkMode}>
    {isDarkMode ? <LightModeOutlined/>:<DarkModeOutlined/>}
  </IconButton>;
}

export default ThemeButton;
