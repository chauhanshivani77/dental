import React, {useState} from "react";
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
import { Link } from "react-router-dom";

import { IoMdDownload } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import { MdCall } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";

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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Info() {
  const [age, setAge] = React.useState("");
  const [openRow, setOpenRow] = useState(null);

   const data = [
    {
      id: 1,
      name: "Kaushik Khandelwal",
      phone: "+91 96726 00152",
      clinic: "32 Intact Complete",
      treatment: "Teeth Whitening | Pin...",
    },
    {
         id: 2,
      name: "Tarun Vashisht",
      phone: "+91 96726 00152",
      clinic: "Clinic Viva",
      treatment: "Teeth Whitening | Pin...",
    },
    {
         id: 3,
      name: "Kaushkey",
      phone: "+91 96726 00152",
      clinic: "Garg Dentoria",
      treatment: "Teeth Whitening | Pin...",
    },
     {
         id: 4,
      name: "Kaushkey",
      phone: "+91 96726 00152",
      clinic: "Garg Dentoria",
      treatment: "Teeth Whitening | Pin...",
    },
     {
         id: 5,
      name: "Kaushkey",
      phone: "+91 96726 00152",
      clinic: "Garg Dentoria",
      treatment: "Teeth Whitening | Pin...",
    },
     {
         id: 6,
      name: "Kaushkey",
      phone: "+91 96726 00152",
      clinic: "Garg Dentoria",
      treatment: "Teeth Whitening | Pin...",
    },
  ];


  const handleChange = (event, newValue) => {
    setAge(event.target.value);
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      backgroundColor: "lightGray",
      borderRadius: "1.3rem",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    borderRadius: "1.3rem",
    pointerEvents: "none",
    backgroundColor: "lightGray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
                <Link to="/">
                  <span>💮</span>
                </Link>
                <Link to="/info">
                  <h1 className="font-extrabold text-xl">
                    Hi, Kaushik,{" "}
                    <span className="font-light text-lg">welcome back</span>
                  </h1>
                </Link>
              </div>

              {/* Right section */}
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
            <div className="d-flex align-items-center justify-between">
              <div className="flex items-center space-x-4">
                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                  <InputLabel
                    id="demo-select-small-label"
                    className="text-black"
                  >
                    Daily
                  </InputLabel>
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
              <div className="flex items-center">
                <div className="border border-gray-400 py-1 px-3 rounded d-flex align-items-center gap-2 me-3">
                  <p className="text-blue-500 font-sans text-lg font-medium">
                    Download{" "}
                  </p>
                  <IoMdDownload color="blue" />
                </div>
                <div className="bg-gray-200 py-1 ps-2 pe-3 rounded d-flex align-items-center gap-2">
                  <MdWifiCalling3 color="gray" size={25} />
                  <p className="text-gray-400 text-lg font-semibold font-sans">
                    Call logs
                  </p>
                </div>
                <div>
                  <Search className="bg-gray-100">
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-end mx-auto gap-3 mt-2">
              <TfiMenuAlt />
              <RxDashboard />
            </div>
            <div>
              <Box sx={{ width: "100%" }}>
                <Box>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="New Leads" {...a11yProps(0)} />
                    <Tab label="No Contact" {...a11yProps(1)} />
                    <Tab label="Call Later" {...a11yProps(2)} />
                    <Tab label="In Comm." {...a11yProps(3)} />
                    <Tab label="Appointment" {...a11yProps(4)} />
                    <Tab label="Appt. Drop" {...a11yProps(5)} />
                    <Tab label="Tx Present." {...a11yProps(6)} />
                    <Tab label="Tx Accept." {...a11yProps(7)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <div className="border-4 rounded">
                    <div className="flex">
                      <input
                        type="text"
                        className="bg-gray-100 ps-3 pe-5 py-2 m-4 rounded placeholder-black font-medium font-sans"
                        aria-label="Full Name"
                        placeholder="Name"
                      ></input>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="bg-gray-100 px-3 py-2 rounded my-4 placeholder-black font-medium font-sans"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="Phone Number"
                        required
                      />
                      <input
                        type="text"
                        className="bg-gray-100 ps-3 pe-4 rounded py-2 m-4 placeholder-black font-medium font-sans"
                        aria-label="Full Name"
                        placeholder="Clinic Assigned"
                      ></input>
                      <input
                        type="text"
                        className="bg-gray-100 ps-3 pe-4 rounded py-2 my-4 placeholder-black font-medium font-sans"
                        aria-label="Full Name"
                        placeholder="Campaign"
                      ></input>
                      <button className="bg-gray-100 ps-3 pe-4 rounded py-2 w-full my-4 ms-3 me-2 font-medium font-sans">
                        Action
                      </button>
                    </div>
                    <div class="flex items-center gap-2 mx-auto my-1 mx-5 w-25 ">
                      <div class="flex-1 border-t border-gray-300 ms-5 ps-5"></div>
                      <span class="text-gray-600 text-sm font-sans">
                        15 August, 2025
                      </span>
                      <div class="flex-1 border-t border-gray-300 me-5 pe-5"></div>
                    </div>
                    <div>
                      <table class="table table-borderless">
                        <tbody>
                              {data.map((row) => (
                                <>
                          <tr >
                            <td className="font-sans text-lg font-medium" style={{minWidth: '16rem', maxWidth: '16rem', paddingLeft: '2rem'}}>
                             {row.name}
                            </td>
                            <td className="font-sans font-medium" style={{minWidth: '10rem', maxWidth: '10rem'}}>{row.phone}</td>
                            <td className="font-sans font-medium" style={{minWidth: '11rem', maxWidth: '11rem'}}>{row.clinic}</td>
                            <td className="font-sans font-medium" style={{minWidth: '13rem', maxWidth: '13rem'}}>{row.treatment}</td>
                            <td>
                              <MdCall color="green" size={20} />
                            </td>
                            <td style={{minWidth: '4rem', maxWidth: '4rem'}}>
                              <HiMenuAlt2 color="#FDDA0D" size={25} />
                            </td>
                            <td>
                                  <button
                    className={`ps-2 pe-3 py-1 rounded text-green font-sans text-start transition w-full
                      ${
                        openRow === row.id
                          ? "bg-teal-50 hover:bg-teal-100" // active state
                          : "bg-green-500 hover:bg-green-600" // default state
                      }`}
                    onClick={() =>
                      setOpenRow(openRow === row.id ? null : row.id)
                    }
                  >
                    {openRow === row.id ? "Schedule Appoinment" : "Select an option"}
                  </button>
                            </td>
                            <td className="flex align-center gap-3">
                              <TbCircleLetterCFilled color="blue" size={25} />
                              <FaCaretDown />
                            </td>
                          </tr>
                         
                         


              {/* Expandable yellow row */}
              {openRow === row.id && (
                <tr className="bg-yellow-100">
                  <td colSpan={7} className="bg-yellow-100 p-2">
                    <div className="flex justify-between items-center ms-4">
                        <div className="flex gap-3">
                            <select className="py-2 px-3 rounded bg-yellow-400 text-white">
                        <option>Select doctor</option>
                        <option>Dr. A</option>
                        <option>Dr. B</option>
                      </select>
                      <input type="date" className="p-2 rounded bg-yellow-400 text-white" />
                      <input type="time" className="p-2 rounded bg-yellow-400 text-white" />
                        </div>
                      <div>
                        <button className="px-4 py-1 bg-yellow-400 text-lg font-medium rounded hover:bg-yellow-300 text-white font-sans">
                        Create appointment
                      </button>
                      </div>
                      
                    </div>
                  </td>
                </tr>
              )}
</>
                              ))}


                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  Item Three
                </CustomTabPanel>
              </Box>
            </div>
          </div>
        </Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
}
