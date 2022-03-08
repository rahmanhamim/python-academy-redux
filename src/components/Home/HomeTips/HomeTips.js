import {
 Box,
 Button,
 Card,
 CardContent,
 CardMedia,
 Container,
 Grid,
 Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import VideoModal from "../../Shared/VideoModal/VideoModal";
import HomeTipsColumn from "../HomeTipsColumn/HomeTipsColumn";

const HomeTips = () => {
 const [blogsData, setBlogsData] = useState([]);
 useEffect(() => {
  fetch("./blogs.json")
   .then((res) => res.json())
   .then((data) => setBlogsData(data));
 }, []);

 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 return (
  <Container sx={{ my: 10 }}>
   <Typography variant="h3" sx={{ color: "#10375C", fontWeight: "bold" }}>
    Useful Tips Videos
   </Typography>
   <Typography sx={{ my: 2, color: "#515B61" }}>
    Urna posuere dapibus hac turpis euismod rutrum massa non id. Et ornare
    <br /> urna placerat purus pharetra dolor.
   </Typography>
   <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
     <Card
      sx={{ p: 4, boxShadow: "none", bgcolor: "#f9f9f9", borderRadius: "12px" }}
     >
      <Box sx={{ position: "relative" }}>
       <CardMedia
        component="img"
        height="366"
        width="521"
        image={`${blogsData[0]?.img}`}
        alt="image"
        sx={{ borderRadius: "12px" }}
       />
       <Button
        onClick={handleOpen}
        sx={{
         position: "absolute",
         top: "50%",
         left: "50%",
         transform: "translateX(-50%) translateY(-50%)",
         padding: 0,
         bgcolor: "rgba(255, 255, 255, .7)",
         borderRadius: "50%",
         zIndex: "20",
         "&:before": {
          content: "''",
          zIndex: "-2",
          position: "absolute",
          height: "150%",
          width: "150%",
          bgcolor: "rgba(255, 255, 255, .5)",
          borderRadius: "50%",
         },
         "&:after": {
          content: "''",
          zIndex: "-2",
          position: "absolute",
          height: "200%",
          width: "200%",
          bgcolor: "rgba(255, 255, 255, .2)",
          borderRadius: "50%",
         },
        }}
       >
        <ArrowRightIcon sx={{ fontSize: "4rem", color: "#FF4958" }} />
       </Button>
       <VideoModal
        url={blogsData[0]?.videoURL}
        open={open}
        handleClose={handleClose}
       />
      </Box>
      <CardContent>
       <Typography
        gutterBottom
        variant="h4"
        sx={{ fontWeight: "bold", color: "#10375C" }}
        component="div"
       >
        {blogsData[0]?.title}
       </Typography>
       <Typography variant="body2" color="text.secondary">
        {blogsData[0]?.subtitle}
       </Typography>
      </CardContent>
     </Card>
    </Grid>
    <Grid
     item
     xs={12}
     md={6}
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
     }}
    >
     {blogsData.slice(1, 4).map((blogData) => (
      <HomeTipsColumn
       handleClose={handleClose}
       open={open}
       handleOpen={handleOpen}
       blogData={blogData}
       key={blogData.id}
      ></HomeTipsColumn>
     ))}
    </Grid>
   </Grid>
  </Container>
 );
};

export default HomeTips;
