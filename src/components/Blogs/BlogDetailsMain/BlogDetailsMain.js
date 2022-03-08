import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoginFrom from "../../Home/LoginForm/LoginFrom";
import Navigation from "../../Shared/Navigation/Navigation";
import BlogDetailsHero from "../BlogDetailsContent/BlogDetailsContent";

const BlogDetailsMain = () => {
 // ----------------------------------
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 // -------------------------------------

 const { id } = useParams();
 const [blogsData, setBlogsData] = useState({});

 useEffect(() => {
  fetch("/blogs.json")
   .then((res) => res.json())
   .then((blogs) => {
    const blog = blogs.find((blog) => blog.id === id);
    setBlogsData(blog);
   });
 }, [id]);

 console.log(blogsData);

 return (
  <>
   <Box
    component="div"
    sx={{
     background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
    }}
   >
    <Navigation handleOpen={handleOpen} />
   </Box>
   <BlogDetailsHero blogsData={blogsData}></BlogDetailsHero>
   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </>
 );
};

export default BlogDetailsMain;
