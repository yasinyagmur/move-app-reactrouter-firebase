import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, height: "3rem" }}
      >
        <Toolbar>
          <Typography sx={{ display: "flex", marginLeft: "1rem" }}>
          <Link href="https://github.com/yasinyagmur/move-app-reactrouter-firebase" sx={{color:"white",fontSize:"0.8rem"}} underline="none"><GitHubIcon/>GitHub Project</Link>
          </Typography>
          <Typography sx={{ display: "flex", marginLeft: "1rem" }}>
          <Link href="https://www.linkedin.com/in/yasinyagmur/" sx={{color:"white",fontSize:"0.8rem"}} underline="none"><LinkedInIcon/>Linkedin Profile</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
