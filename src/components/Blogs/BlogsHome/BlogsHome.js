import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import blogBannerImg from "../../../img/section-banner.png";
import Footer from "../../Shared/Footer/Footer";
import BlogPosts from "../BlogPosts/BlogPosts";
import PaginationBlogs from "../PaginationBlogs/PaginationBlogs";
import LoginFrom from "../../Home/LoginForm/LoginFrom";

const BlogsHome = () => {
 // ----------------------------------
 //  Login Form handler
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // -------------------------------------

 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(6);

 useEffect(() => {
  setLoading(true);
  fetch("/blogs.json")
   .then((res) => res.json())
   .then((data) => {
    setPosts(data);
    setLoading(false);
   });
 }, []);

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

 const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
  pageNumbers.push(i);
 }

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

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
     background: `url(${blogBannerImg})`,
     minHeight: "350px",
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
     <Typography sx={{ fontWeight: "bold" }}>Python Academy</Typography>
     <Typography variant="h3" sx={{ my: 1, fontWeight: "bold" }}>
      Blogs
     </Typography>
    </Box>
   </Box>
   <Box sx={{ minHeight: "50vh", bgcolor: "rgba(71, 68, 228, 0.1)", py: 8 }}>
    {/* posts container */}
    <Container>
     <Grid container spacing={5}>
      {currentPosts?.map((post) => (
       <BlogPosts key={post.id} post={post} loading={loading}></BlogPosts>
      ))}
     </Grid>
    </Container>
    {/* posts container end */}
    {/* MUI pagination */}
    <Pagination
     sx={{ display: "flex", justifyContent: "center", pt: 5 }}
     count={pageNumbers.length}
     variant="outlined"
     onChange={(e, value) => paginate(value)}
    />

    {/* Custom Pagination */}
    {/* <PaginationBlogs
     postsPerPage={postsPerPage}
     totalPosts={posts.length}
     paginate={paginate}
    ></PaginationBlogs> */}
   </Box>
   <Footer></Footer>
   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </>
 );
};

export default BlogsHome;
