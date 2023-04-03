import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialMedia from "./primitives/social-media";

const SubmitButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  fontFamily: "PP Mori",
  lineHeight: 1,
  whiteSpace: "nowrap",
  padding: "20px 32px 20px 32px",
  justifyContent: "center",
  backgroundColor: "#FF661F",
  margin: "20px 0 0 10px",
  borderRadius: "32px",
  transition: "0.3s",
  textTransform: "none",
  "&.MuiButton-text": {
    color: "white",
    "&:hover": {
      color: "#FF661F",
    },
  },
  "&:hover": {
    backgroundColor: "white",
    transition: "0.3s",
  },
});

export default function MobileNavbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        display: "block",
        width: 270,
        background: "#29133f",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="#home">
              <ListItemText />
              <span
                style={{
                  color: "white",
                  fontFamily: "PP Mori",
                  fontSize: "25px",
                }}
              >
                Home
              </span>
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <a href="#features">
              <ListItemText />
              <span
                style={{
                  color: "white",
                  fontFamily: "PP Mori",
                  fontSize: "25px",
                }}
              >
                Features
              </span>
            </a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <SubmitButton>
            <a href="#home">
              <span style={{ fontSize: "20px" }}>Get Started</span>
            </a>
          </SubmitButton>
        </ListItem>
      </List>
      <Divider sx={{ marginTop: "10px" }} />
      <List>
        <ListItem>
          <Typography
            sx={{
              color: "#FF661F",
              fontFamily: "PP Mori",
              fontWeight: "600",
              fontSize: "18px",
              fontStyle: "normal",
            }}
          >
            Follow us
          </Typography>
        </ListItem>
        <ListItem>
          <SocialMedia />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button sx={{ ml: "-11px" }} onClick={toggleDrawer("right", true)}>
        <MenuIcon sx={{ fill: "#FF661F" }} />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
