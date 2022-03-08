import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg1 from "../../../img/homecoursebg1.png";
import bg3 from "../../../img/homecoursebg3.png";
import bg2 from "../../../img/homecoursebg2.png";
import CourseCards from "../../Shared/CourseCards/CourseCards";
import iconImage from "../../../img/homecourseicon.png";

const HomeCourses = () => {
 const [courses, setCourses] = useState([]);
 useEffect(() => {
  fetch("./courses.json")
   .then((res) => res.json())
   .then((data) => setCourses(data));
 }, []);

 return (
  <Container sx={{ mt: "10em" }}>
   <Box
    sx={{
     position: "relative",
     "&:before": {
      content: "''",
      position: "absolute",
      background: `url(${bg1})`,
      width: { xs: "200px", md: "600px" },
      height: "600px",
      opacity: ".1",
      top: "-250px",
      zIndex: "-10",
      left: { xs: "20px", md: "-200px" },
     },
     "&:after": {
      content: "''",
      position: "absolute",
      background: `url(${bg3})`,
      width: { xs: "200px", md: "600px" },
      height: "600px",
      opacity: ".1",
      zIndex: "-10",
      top: "-100px",
      left: { xs: "10px", md: "-200px" },
     },
    }}
   >
    <Box
     sx={{
      position: "absolute",
      display: { xs: "none", md: "block" },
      "&:before": {
       content: "''",
       position: "absolute",
       background: `linear-gradient(to top left, transparent, white), url(${bg2})`,
       backgroundRepeat: "space",
       width: { xs: "0px", md: "600px" },
       height: "200px",
       opacity: "0.1",
       top: "-250px",
       margin: "9em",
       padding: "9em",
       left: { xs: "20px", md: "-100px" },
      },
      "&:after": {
       content: "''",
       position: "absolute",
       background: `linear-gradient(to top right, transparent, white) , url(${bg2})`,
       backgroundRepeat: "space",
       width: { xs: "0px", md: "600px" },
       height: "200px",
       opacity: "0.1",
       top: "-50px",
       margin: "9em",
       padding: "9em",
       left: { xs: "20px", md: "-280px" },
      },
     }}
    >
     {/* bg image */}
    </Box>
    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#10375C" }}>
     We Provide Worldclass <br />
     Courses
    </Typography>
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mx: "1em",
     }}
    >
     <Typography sx={{ color: "#515B61", my: 2 }}>
      Urna posuere dapibus hac turpis euismod rutrum massa non id. Et ornare
      <br /> urna placerat purus pharetra dolor.
     </Typography>
     <img
      style={{ display: "block", width: "110px", height: "19px" }}
      src={iconImage}
      alt=""
     />
    </Box>
   </Box>
   <Grid container spacing={2}>
    {courses.slice(0, 6).map((course) => (
     <CourseCards key={course.id} course={course}></CourseCards>
    ))}
   </Grid>
  </Container>
 );
};

export default HomeCourses;
