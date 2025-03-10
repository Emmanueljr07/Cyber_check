import React, { useEffect, useMemo, useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
  Typography,
  //   useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  Dashboard,
  Logout,
  Assessment,
} from "@mui/icons-material";
import { useValue } from "../context/AuthContext";
import Main from "@/components/Main";
import Activity from "@/components/Activity";
import { useRouter } from "next/navigation";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Main from "../main/Main";
// import TeacherExamBoard from "../exam/Exams";
// import { tokens } from "../../theme";
// import StudentCard from "../exam/StudentCard";

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideList = ({ open, setOpen }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  });

  //   const theme = useTheme();
  // //   const colors = tokens(theme.palette.mode);

  const [selectedLink, setSelectedLink] = useState("");

  const list = useMemo(
    () => [
      {
        title: "Main",
        icon: <Dashboard />,
        link: "",
        component: <Main />,
      },
      {
        title: "Exam",
        icon: <Assessment />,
        link: "exam",
        component: <Activity />,
      },
    ],
    []
  );

  const router = useRouter();
  const handleLogout = () => {
    dispatch({ type: "UPDATE_USER", payload: null });
    router.push("/");
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        color="primary"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "white",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => router.push(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
          <Tooltip title={currentUser?.user?.displayName || ""}>
            <Avatar
              src={currentUser?.user?.photoURL}
              {...(open && { sx: { width: 100, height: 100 } })}
            />
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {open && <Typography>{currentUser?.user?.displayName}</Typography>}
          <Typography variant="body2">
            {" "}
            {currentUser?.role || "role"}{" "}
          </Typography>
          {open && (
            <Typography variant="body2">
              {" "}
              {currentUser?.user?.email}{" "}
            </Typography>
          )}
          <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.link} element={item.component} />
          ))}
          <Route exact path="/exam/student" element={<StudentCard />} />
        </Routes> */}
      </Box>
    </>
  );
};

export default SideList;
