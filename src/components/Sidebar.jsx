import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIconSettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chart from "./Chart";
import Card from "./Card";
import { IoCartOutline } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";
import {Link} from 'react-router-dom'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MiniDrawer() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    {},
    {},
    { text: "Chart", icon: <BarChartIcon /> },
    { text: "Adding", icon: <AddBoxOutlinedIcon /> },
    { text: "User", icon: <PersonOutlineOutlinedIcon /> },
    { text: "Event", icon: <EventAvailableIcon /> },
    { text: "Dasboard", icon: <DashboardIcon /> },
    { text: "Cart", icon: <ShoppingCartOutlinedIcon /> },
    { text: "Beaker", icon: <ScienceOutlinedIcon /> },
    { text: "Menu", icon: <ListOutlinedIcon /> },
    {},
    { text: "Download", icon: <InputOutlinedIcon /> },
    { text: "Setting", icon: <SettingsOutlinedIconSettingsOutlinedIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }} className="top-bar">
      <CssBaseline />
      <AppBar position="fixed" open={open} className="w-full">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            <div className="flex justify-between items-center w-full">
              {/* Left section */}
              <div className="flex space-x-4 heading">
                <Link to="/"><span>💮</span></Link>
               <Link to="/info"><h1 className="font-extrabold text-xl">
                  Hi, Kaushik,{" "}
                  <span className="font-light text-lg">welcome back</span>
                </h1>
                </Link> 
              </div>

              {/* Right section */}
              <div className="flex items-center space-x-4">
                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                  <InputLabel id="demo-select-small-label" className="text-black">Daily</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    sx={{
                      borderRadius: "0.8rem",
                      backgroundColor: "white",
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <Chip label="19-05-2023" color="success" variant="filled" />
                <Chip label="19-05-2023" color="success" variant="filled" />
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  { minHeight: 48, px: 2.5 },
                  open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    { minWidth: 0, justifyContent: "center" },
                    open ? { mr: 3 } : { mr: "auto" },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6">
                    <Chart
                      fill="#009E60"
                      title="Production Trend"
                      titleClass="text-center text-sm bg-teal-100 rounded-md py-1 mb-4 ms-auto"
                      titleStyle={{ width: "38%", color: "green" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <Chart
                      fill="#EE4B2B"
                      title="Redo Report"
                      titleClass="text-center text-sm bg-red-100 rounded-md py-1 mb-4 ms-auto"
                      titleStyle={{ width: "28%", color: "#EE4B2B" }}
                    />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                  <div className="col-md-4 ps-0">
                    <Card />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="border border-gray-500 rounded">
                  <div className="d-flex align-items-center justify-between bg-teal-100 rounded m-2 py-1 px-2">
                    <p className="text-lg text-green-700 font-bold ps-2">
                      Actions Needed
                    </p>
                    <p className="bg-green-500 pb-2 px-1 text-white font-bold text-2xl rounded">
                      12
                    </p>
                  </div>
                  <div>
                    <table class="table table-borderless text-center">
                      <tbody>
                        <tr>
                          <th scope="row">
                            <IoCartOutline
                              color="green"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-md">
                            Order Created by@@drName for @@Patient
                          </td>
                          <td></td>
                          <td className="text-secondary font-sans">19:00</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <IoCartOutline
                              color="green"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-md">
                            Order Created by@@drName for @@Patient
                          </td>
                          <td></td>
                          <td className="text-secondary font-sans">19:00</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <IoNotificationsCircle
                              color="red"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-lg text-start font-semibold ">
                            Tarun Vashisth
                          </td>
                          <td className="text-secondary font-sans fs-small">
                            Status updated
                          </td>
                          <td className="text-secondary font-sans">19:00</td>
                        </tr>
                         <tr>
                          <th scope="row">
                            <IoCartOutline
                              color="green"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-md">
                            Order Created by@@drName for @@Patient
                          </td>
                          <td></td>
                          <td className="text-secondary font-sans">19:00</td>
                        </tr>
                         <tr>
                          <th scope="row">
                            <IoNotificationsCircle
                              color="red"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-lg text-start font-semibold ">
                            Tarun Vashisth
                          </td>
                          <td className="text-secondary font-sans fs-small">
                            Status updated
                          </td>
                          <td className="font-sans text-secondary">19:00</td>
                        </tr>
                         <tr>
                          <th scope="row">
                            <IoCartOutline
                              color="green"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-md">
                            Order Created by@@drName for @@Patient
                          </td>
                          <td></td>
                          <td className="text-secondary font-sans">19:00</td>
                        </tr>
                         <tr>
                          <th scope="row">
                            <IoCartOutline
                              color="green"
                              className="ms-3"
                              size={25}
                            />
                          </th>
                          <td className="font-sans text-md">
                            Order Created by@@drName for @@Patient
                          </td>
                          <td></td>
                          <td className="text-secondary font-sans">19:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
}
