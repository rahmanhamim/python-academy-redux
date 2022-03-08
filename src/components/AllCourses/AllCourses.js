import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import sectionBgImg from "../../img/section-banner.png";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import CourseCards from "../Shared/CourseCards/CourseCards";
import LoginFrom from "../Home/LoginForm/LoginFrom";

const AllCourses = () => {
 // ----------------------------------
 //  Login Form handler
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // -------------------------------------
 const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "500px",
  maxWidth: "90vw",
  margin: "0 auto",
 };
 const searchInputStyle = {
  fontSize: "1.2rem",
  padding: "5px .5em",
  borderRadius: "3px",
  border: "none",
  width: "70%",
 };
 const submitBtnStyle = {
  background: "#FF4958 ",
  color: "#fff",
  border: "none",
  fontSize: "1.2rem",
  padding: ".2em 1em",
  margin: "10px 5px",
  borderRadius: "3px",
  cursor: "pointer",
 };

 const { register, handleSubmit, reset } = useForm();

 //  Handle Serach Functionality

 const [searchResultData, setSearchResultData] = useState(null);

 let searchResult = [];
 const onSubmit = (data) => {
  console.log(data.searchText);
  for (const course of courses) {
   if (
    course.title
     .toString()
     .toLowerCase()
     .includes(data.searchText.toString().toLowerCase())
   ) {
    searchResult.push(course);
   }
  }
  setSearchResultData(searchResult);
  reset();
 };

 const [courses, setCourses] = useState([]);

 useEffect(() => {
  fetch("/courses.json")
   .then((res) => res.json())
   .then((data) => setCourses(data));
 }, []);

 return (
  <>
   <Box
    sx={{
     background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
    }}
   >
    <Navigation handleOpen={handleOpen} />
   </Box>
   <Box
    sx={{
     minHeight: "350px",
     background: `url(${sectionBgImg})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
    }}
   >
    <Box
     sx={{
      height: "350px",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
     }}
    >
     <form onSubmit={handleSubmit(onSubmit)} style={formContainerStyle}>
      <input
       style={searchInputStyle}
       {...register("searchText")}
       placeholder="Search Course"
      />
      <input style={submitBtnStyle} type="submit" value="Search" />
     </form>
    </Box>
   </Box>

   {/* courses data on ui*/}
   <Box sx={{ minHeight: "50vh", py: "6em" }}>
    <Container>
     {searchResultData?.length === 0 && (
      <Box
       sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
       }}
      >
       <Typography
        variant="h2"
        sx={{
         fontFamily: "Lato",
         fontWeight: "bold",
         color: "#10375C",
         textAlign: "center",
        }}
       >
        No Result Found
       </Typography>
       <Button
        sx={{
         bgcolor: "#FF4958",
         color: "#fff",
         padding: "1em 2em",
         border: "1px solid #FF4958",
         borderRadius: "3px",
         fontFamily: "Manrope",
         textAlign: "center",
         mt: 2,
         "&:hover": {
          bgcolor: "#F9B233",
          border: "1px solid #F9B233",
         },
        }}
        onClick={() => setSearchResultData(null)}
       >
        Show All Courses
       </Button>
      </Box>
     )}
     <Grid container>
      {searchResultData ? (
       <>
        {searchResultData?.map((course) => (
         <CourseCards key={course.id} course={course}></CourseCards>
        ))}
       </>
      ) : (
       <>
        {courses?.map((course) => (
         <CourseCards key={course.id} course={course}></CourseCards>
        ))}
       </>
      )}
     </Grid>
    </Container>
   </Box>
   <Footer></Footer>
   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </>
 );
};

export default AllCourses;
