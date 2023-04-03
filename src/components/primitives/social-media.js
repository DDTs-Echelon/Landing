import React from "react";
import { styled, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const InstaIcon = styled(InstagramIcon)({
  marginRight: "10px",
  fill: "white",
  transition: "0.3s",
  "&:hover": {
    fill: "#FF661F",
    transition: "0.3s",
  },
});

const YouIcon = styled(YouTubeIcon)({
  fill: "white",
  transition: "0.3s",
  "&:hover": {
    fill: "#FF661F",
    transition: "0.3s",
  },
});

const FbIcon = styled(FacebookIcon)({
  marginRight: "10px",
  fill: "white",
  transition: "0.3s",
  "&:hover": {
    fill: "#FF661F",
    transition: "0.3s",
  },
});

const SocialMedia = () => {
  return (
    <Box>
      <a
        href="https://www.facebook.com/ddts.echelon/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FbIcon />
      </a>
      <a
        href="https://www.instagram.com/ddts_echelon/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <InstaIcon />
      </a>
      <a
        href="https://www.youtube.com/@leanerport"
        target="_blank"
        rel="noreferrer noopener"
      >
        <YouIcon />
      </a>
    </Box>
  );
};

export default SocialMedia;
