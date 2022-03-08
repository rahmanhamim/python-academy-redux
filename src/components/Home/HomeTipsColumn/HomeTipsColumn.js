import {
 Box,
 Button,
 Card,
 CardContent,
 CardMedia,
 Typography,
} from "@mui/material";
import React from "react";
import VideoModal from "../../Shared/VideoModal/VideoModal";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HomeTipsColumn = ({ handleClose, open, handleOpen, blogData }) => {
 return (
  <Card
   sx={{
    px: 4,
    boxShadow: "none",
    bgcolor: "#f9f9f9",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
   }}
  >
   <Box sx={{ position: "relative", width: "38%" }}>
    <CardMedia
     component="img"
     image={`${blogData?.img}`}
     alt="image"
     sx={{ borderRadius: "12px", height: "100%", display: "block" }}
    />
    <Button
     onClick={handleOpen}
     sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      padding: 1,
      bgcolor: "rgba(255, 255, 255, .7)",
      borderRadius: "50%",
      zIndex: "20",
      "&:before": {
       content: "''",
       zIndex: "-2",
       position: "absolute",
       height: "120%",
       width: "120%",
       bgcolor: "rgba(255, 255, 255, .5)",
       borderRadius: "50%",
      },
     }}
    >
     <ArrowRightIcon sx={{ fontSize: "3rem", color: "#FF4958" }} />
    </Button>
    <VideoModal url={blogData.videoURL} open={open} handleClose={handleClose} />
   </Box>
   <CardContent sx={{ width: "58%" }}>
    <Typography
     gutterBottom
     variant="h6"
     sx={{ fontWeight: "bold", color: "#10375C" }}
     component="div"
    >
     {blogData?.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
     {blogData?.subtitle.slice(0, 100)}
    </Typography>
   </CardContent>
  </Card>
 );
};

export default HomeTipsColumn;
