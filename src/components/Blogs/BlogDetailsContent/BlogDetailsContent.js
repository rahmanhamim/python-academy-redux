import {
 Box,
 Container,
 Divider,
 Grid,
 IconButton,
 Paper,
 Typography,
 InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import blogHeroBanner from "../../../img/section-banner.png";
import Footer from "../../Shared/Footer/Footer";
import BlogsDetailsContentMain from "../BlogsDetailsContentMain/BlogsDetailsContentMain";

const BlogDetailsHero = ({ blogsData }) => {
 console.log(blogsData);
 const useStyle = makeStyles({
  containerStyle: {
   background: `url(${blogHeroBanner})`,
   minHeight: "400px",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   py: 5,
  },
 });

 const { containerStyle } = useStyle();
 // --------------------------

 const [latestCourses, setLatestCourses] = useState([]);

 return (
  <>
   <Box className={containerStyle}>
    <Container>
     <Box sx={{ color: "#fff", pt: "3em" }}>
      <Typography>Home/Blogs</Typography>
      <Typography variant="h4" sx={{ width: "450px", maxWidth: "95vw", pt: 1 }}>
       {blogsData.title}
      </Typography>
     </Box>
    </Container>
   </Box>
   <Container sx={{ mb: 10, color: "#515B61", fontFamily: "Lato" }}>
    <Grid container spacing={4} sx={{ mt: { xs: "-10em", md: "-14em" } }}>
     {/* blog main section
     --------------------------------------- */}
     <BlogsDetailsContentMain blogsData={blogsData}></BlogsDetailsContentMain>

     {/* blogs side section 
     ---------------------------------------- */}
     <Grid item md={4}>
      <Box sx={{ bgcolor: "#115E97", color: "#fff", padding: "1.5em 2em" }}>
       <Typography
        variant="h5"
        sx={{ fontWeight: "bold", borderRadius: "5px", mb: 2 }}
       >
        Search Topic
       </Typography>
       <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
       >
        <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
        <InputBase
         sx={{ ml: 1, flex: 1 }}
         placeholder="Search"
         inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
         onClick={(e) => {
          alert("Search on progress");
          e.preventDefault();
         }}
         type="submit"
         sx={{ p: "10px" }}
         aria-label="search"
        >
         <SearchIcon />
        </IconButton>
       </Paper>
      </Box>
      <Box
       sx={{
        bgcolor: "#115E97",
        color: "#fff",
        padding: "1.5em 2em",
        mt: 10,
        borderRadius: "4px 4px 0px 0px",
       }}
      >
       <Typography>Popular Blogs</Typography>
      </Box>
      {}
     </Grid>
    </Grid>
   </Container>
   <Footer></Footer>
  </>
 );
};

export default BlogDetailsHero;
