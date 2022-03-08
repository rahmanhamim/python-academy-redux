import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseCards from "../../Shared/CourseCards/CourseCards";

const RelatedCourse = () => {
 const [courses, setCourses] = useState([]);
 useEffect(
  () =>
   fetch("/courses.json")
    .then((res) => res.json())
    .then((data) => setCourses(data)),
  []
 );

 return (
  <Container sx={{ my: 10 }}>
   <Typography variant="h4" sx={{ color: "#10375C", fontWeight: "bold", m: 2 }}>
    Few Related Courses
   </Typography>
   <Typography sx={{ color: "#292C44", m: 2 }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> amet
    volutpat urna, mauris, adipiscing in dignissim vulputate.
   </Typography>
   <Grid container spacing={2} sx={{ mt: 3 }}>
    {courses.slice(0, 3).map((course) => (
     <CourseCards key={course.id} course={course}></CourseCards>
    ))}
   </Grid>
  </Container>
 );
};

export default RelatedCourse;
