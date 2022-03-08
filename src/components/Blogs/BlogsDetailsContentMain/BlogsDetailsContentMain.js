import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DateRangeIcon from "@mui/icons-material/DateRange";
import blogHeroImage from "../../../img/blogsHeroImg.png";

const BlogsDetailsContentMain = ({ blogsData }) => {
 return (
  <Grid item xs={12} md={8}>
   <Box>
    <img src={blogHeroImage} style={{ maxWidth: "100%" }} alt="" />
   </Box>
   <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
     <DateRangeIcon /> <Typography component="span">18-02-21</Typography>
    </Box>
    <Box
     sx={{
      "*": {
       ml: "0.5em",
      },
     }}
    >
     <FacebookIcon />
     <TwitterIcon />
     <LinkedInIcon />
     <WhatsAppIcon />
    </Box>
   </Box>
   <Box sx={{ mt: 5, textAlign: "justify" }}>{blogsData?.startingSection}</Box>

   {/* Second Section */}
   <Box>
    <Box
     sx={{ mt: 5, fontSize: "1.8em", fontWeight: "bold", color: "#10375C" }}
    >
     {blogsData?.secondSection?.title}
    </Box>
    <Box sx={{ mt: 1 }}>{blogsData?.secondSection?.summary}</Box>
    <Box
     sx={{ mt: 5, fontSize: "1.8em", fontWeight: "bold", color: "#10375C" }}
    >
     {blogsData?.secondSection?.point1}
    </Box>
    <Box sx={{ mt: 1 }}>{blogsData?.secondSection?.point1Content}</Box>
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
     <img
      style={{ maxWidth: "100%" }}
      src={blogsData?.secondSection?.point1Img1}
      alt=""
     />
     <img
      style={{ maxWidth: "100%" }}
      src={blogsData?.secondSection?.point1Img2}
      alt=""
     />
     <img
      style={{ maxWidth: "100%" }}
      src={blogsData?.secondSection?.point1Img3}
      alt=""
     />
    </Box>
    <Box>
     <Typography
      sx={{ mt: 6, fontSize: "1.8em", fontWeight: "bold", color: "#10375C" }}
     >
      {blogsData?.secondSection?.point2}
     </Typography>
     <Typography sx={{ my: 2, textAlign: "justify" }}>
      {blogsData?.secondSection?.point2Content}
     </Typography>
     <img
      style={{ width: "100%", marginTop: "1em" }}
      src={blogsData?.secondSection?.point2Img1}
      alt=""
     />
    </Box>
    <Box>
     <Typography
      sx={{ mt: 5, fontSize: "1.8em", fontWeight: "bold", color: "#10375C" }}
     >
      {blogsData?.secondSection?.point3}
     </Typography>
     <Typography sx={{ mt: 2, textAlign: "justify" }}>
      {blogsData?.secondSection?.point3Content}
     </Typography>
    </Box>
   </Box>
  </Grid>
 );
};

export default BlogsDetailsContentMain;
