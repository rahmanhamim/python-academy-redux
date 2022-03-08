import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import bgReview from "../../../img/reviewBg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import person1 from "../../../img/review-person-1.png";

const HomeReview = () => {
 const sliderRef = useRef(null);

 return (
  <Grid container spacing={0}>
   <Grid
    item
    xs={12}
    md={6}
    sx={{
     background: `url(${bgReview})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     height: "491px",
     borderRadius: "0 80px 80px 0",
     color: "#fff",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    }}
   >
    <Box sx={{ p: 2 }}>
     <Typography variant="h3" sx={{ fontWeight: "bold" }}>
      What our students <br /> are saying
     </Typography>
     <Typography variant="h6" sx={{ my: 4 }}>
      With a decade of insights and expertise, we're decided to <br /> reimagine
      co-working space, designed to help.
     </Typography>
    </Box>
   </Grid>
   <Grid
    item
    xs={12}
    md={6}
    sx={{
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     position: "relative",
     minHeight: "400px",
    }}
   >
    <Box
     sx={{
      width: "100%",
      maxWidth: { xs: "330px", md: "400px" },
     }}
    >
     <Box
      sx={{
       position: "absolute",
       top: { xs: "80%", md: "70%" },
       left: { xs: "50%", md: "0px" },
       backgroundColor: "#eee",
       padding: ".2em 2em .1em 2em",
       borderRadius: "0px 8px 8px 0px",
       cursor: "pointer",
      }}
      onClick={() => sliderRef.current.slickNext()}
     >
      <ArrowRightAltIcon
       sx={{
        color: "#9A9A9A",
        fontSize: "3rem",
       }}
      />
     </Box>
     <Box
      sx={{
       position: "absolute",
       top: { xs: "80%", md: "70%" },
       left: { xs: "80px", md: "-112px" },

       backgroundColor: { xs: "#eee", md: "#fff" },
       padding: ".2em 2em .1em 2em",
       borderRadius: "8px 0px 0px 8px",
       cursor: "pointer",
      }}
      onClick={() => sliderRef.current.slickPrev()}
     >
      <ArrowRightAltIcon
       sx={{
        transform: "rotate(180deg)",
        color: "#9A9A9A",
        fontSize: "3rem",
       }}
      />
     </Box>
     <Slider ref={sliderRef}>
      <Box sx={{ textAlign: "center" }}>
       <Typography sx={{ textAlign: "center", color: "#515B61" }}>
        Our team has been working at frispes for almost 2 months because our
        office still closed. During working at frispes, we feel a new
        experience, we can feel working with a beautiful.
       </Typography>
       <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <img src={person1} alt="" />
        <Box sx={{ textAlign: "left", ml: 2 }}>
         <Typography sx={{ color: "#262674", fontWeight: "bold" }}>
          Pedro Ibanez
         </Typography>
         <Typography sx={{ color: "#515B61" }}>
          UI Designer at Google
         </Typography>
        </Box>
       </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
       <Typography sx={{ textAlign: "center", color: "#515B61" }}>
        Our team has been working at frispes for almost 2 months because our
        office still closed. During working at frispes, we feel a new
        experience, we can feel working with a beautiful.
       </Typography>
       <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <img src={person1} alt="" />
        <Box sx={{ textAlign: "left", ml: 2 }}>
         <Typography sx={{ color: "#262674", fontWeight: "bold" }}>
          Pedro Ibanez
         </Typography>
         <Typography sx={{ color: "#515B61" }}>
          UI Designer at Google
         </Typography>
        </Box>
       </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
       <Typography sx={{ textAlign: "center", color: "#515B61" }}>
        Our team has been working at frispes for almost 2 months because our
        office still closed. During working at frispes, we feel a new
        experience, we can feel working with a beautiful.
       </Typography>
       <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <img src={person1} alt="" />
        <Box sx={{ textAlign: "left", ml: 2 }}>
         <Typography sx={{ color: "#262674", fontWeight: "bold" }}>
          Pedro Ibanez
         </Typography>
         <Typography sx={{ color: "#515B61" }}>
          UI Designer at Google
         </Typography>
        </Box>
       </Box>
      </Box>
     </Slider>
    </Box>
   </Grid>
  </Grid>
 );
};

export default HomeReview;
