import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoginFrom from "../../Home/LoginForm/LoginFrom";
import Navigation from "../../Shared/Navigation/Navigation";
import CourseDetailsHero from "../CourseDetailsHero/CourseDetailsHero";
import CourseDetailsLearn from "../CourseDetailsLearn/CourseDetailsLearn";
import Footer from "../../Shared/Footer/Footer";
import CourseDetailsCertification from "../CourseDetailsCertification/CourseDetailsCertification";
import RelatedCourse from "../RelatedCourse/RelatedCourse";

const CourseDetailsMain = () => {
 const { id } = useParams();
 const [courseData, setCourseData] = useState({});

 useEffect(() => {
  fetch("/courses.json")
   .then((res) => res.json())
   .then((courses) => {
    const course = courses.find((course) => course.id === id);
    setCourseData(course);
   });
 }, [id]);
 // ----------------------------------
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // -------------------------------------

 const useStyle = makeStyles({
  courseContainer: {
   background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
   minHeight: "100vh",
   paddingBottom: "3em",
  },
 });

 const { courseContainer } = useStyle();

 return (
  <>
   <Box component="div" className={courseContainer}>
    <Navigation handleOpen={handleOpen} />
    <CourseDetailsHero courseData={courseData} />
   </Box>
   <CourseDetailsLearn courseData={courseData} />
   <CourseDetailsCertification />
   <RelatedCourse />
   <Footer></Footer>

   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </>
 );
};

export default CourseDetailsMain;
