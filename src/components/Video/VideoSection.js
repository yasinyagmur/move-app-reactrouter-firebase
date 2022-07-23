import { Box } from "@mui/material";
import * as React from "react";

const VideoSection = ({ videoKey }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </Box>
  );
};
export default VideoSection;