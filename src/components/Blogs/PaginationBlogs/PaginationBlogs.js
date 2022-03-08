import { Box, Typography } from "@mui/material";
import React from "react";

const PaginationBlogs = ({ postsPerPage, totalPosts, paginate }) => {
 const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i);
 }
 console.log(pageNumbers);
 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    pt: 5,
   }}
  >
   {pageNumbers.map((number) => (
    <Typography key={number}>
     <Typography
      component="span"
      sx={{
       margin: "1em",
       padding: ".5em .8em",
       color: "#fff",
       background: "#10375C",
       borderRadius: "50%",
       textDecoration: "none",
       cursor: "pointer",
      }}
      onClick={() => paginate(number)}
     >
      {number}
     </Typography>
    </Typography>
   ))}
  </Box>
 );
};

export default PaginationBlogs;
