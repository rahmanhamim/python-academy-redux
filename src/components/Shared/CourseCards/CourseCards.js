import {
 Box,
 Card,
 CardContent,
 CardMedia,
 Grid,
 Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import RegularButton from "../RegularButton/RegularButton";
import cardBgIcon from "../../../img/cardhoverbg.png";

const CourseCards = ({ course }) => {
 const [btnOver, setBtnOver] = useState(false);

 const useStyle = makeStyles({
  viewCourseBtn: {
   position: "absolute",
   bottom: "0px",
   color: "#fff",
   backgroundColor: "rgba(71, 68, 228, 0.6)",
   textDecoration: "none",
   fontSize: "1.2rem",
   fontWeight: "500",
   padding: "1em",
   display: "flex",
   alignItems: "center",
   transition: "all 300ms",
   "&:hover": {
    backgroundColor: "#FF4958",
   },
  },
  courseCardImg: {
   // transition: ".5s ease",
  },
  overlayImg: {
   position: "absolute",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   color: "#fff",
   width: "100%",
   height: "100%",
   backgroundColor: "#262674",
   opacity: "0",
   transition: "all 300ms ease",
   "&:hover": {
    opacity: "1",
    transform: "scale(2)",
   },
   "&:before": {
    content: "''",
    position: "absolute",
    top: "85px",
    right: "86px",
    height: "50px",
    width: "50px",
    background: `url(${cardBgIcon})`,
   },
   "&:after": {
    content: "''",
    position: "absolute",
    bottom: "34px",
    left: "90px",
    height: "50px",
    width: "50px",
    background: `url(${cardBgIcon})`,
   },
  },
 });

 const { viewCourseBtn, courseCardImg, overlayImg } = useStyle();

 return (
  <Grid
   item
   xs={12}
   md={6}
   lg={4}
   sx={{ display: "flex", justifyContent: "center" }}
  >
   <Card sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }}>
    <Box component="div" sx={{ position: "relative" }}>
     <Box
      className={overlayImg}
      onMouseEnter={() => setBtnOver(true)}
      onMouseLeave={() => setBtnOver(false)}
     >
      <Typography
       sx={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: "2em" }}
      >
       100+
      </Typography>
      <Typography>Courses Available</Typography>
      <Typography
       sx={{
        textAlign: "center",
        fontSize: "8px",
        lineHeight: "1",
        my: "1em",
       }}
      >
       Lorem ipsum dolor sit amet, <br /> consectetur adipisicing <br /> elit.
       Eos veritatis
      </Typography>
      <Link to={`/course/${course.id}`} style={{ textDecoration: "none" }}>
       <RegularButton
        content="Check Availability"
        fontSize="8px"
        icon={true}
       ></RegularButton>
      </Link>
      {/* overlay */}
     </Box>
     <CardMedia
      component="img"
      image={course.img}
      alt="green iguana"
      className={courseCardImg}
     />
     {!btnOver && (
      <Link to={`/course/${course.id}`} className={viewCourseBtn}>
       <span>View Course</span>
       <ArrowForwardIosIcon sx={{ ml: 1, mt: "2px" }} />
      </Link>
     )}
    </Box>
    <CardContent sx={{ px: 0 }}>
     <Typography variant="h5" component="div" sx={{ color: "#485055" }}>
      {course.title}
     </Typography>
    </CardContent>
   </Card>
  </Grid>
 );
};

export default CourseCards;
