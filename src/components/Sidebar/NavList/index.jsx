import {
  MapOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  BarChartOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  PeopleOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

const data = {
  charts: [
    {
      title: "Geography Chart",
      to: "/geography",
      icon: <MapOutlined />,
    },
    {
      title: "Pie Chart",
      to: "/pie",
      icon: <PieChartOutlineOutlined />,
    },
    {
      title: "Bar Chart",
      to: "/bar",
      icon: <BarChartOutlined />,
    },
    {
      title: "Line Chart",
      to: "/line",
      icon: <TimelineOutlined />,
    },
  ],
  pages: [
    {
      title: "Profile Form",
      to: "/form",
      icon: <PersonOutlined />,
    },
    {
      title: "Calendar",
      to: "/calendar",
      icon: <CalendarTodayOutlined />,
    },
    {
      title: "FAQ Page",
      to: "/faq",
      icon: <HelpOutlineOutlined />,
    },
  ],
  grid: [
    {
      title: "Manage Team",
      to: "/team",
      icon: <PeopleOutlined />,
    },
  ],
};

const NavList = ({ variant }) => {
  return (
    <>
      <Typography
        variant="h6"
        color={"var(--c-gray-300)"}
        sx={{ m: "15px 0 5px 20px" }}
      >
        {variant}
      </Typography>
      {data[variant].map(({ title, to, icon }) => (
        <MenuItem key={to} icon={icon} component={<NavLink to={to} />}>
          <Typography>{title}</Typography>
        </MenuItem>
      ))}
    </>
  );
};

export default NavList;
