import {
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Container,
 Grid,
 Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const HomeBlogs = () => {
 const [blogsData, setBlogsData] = useState([]);
 useEffect(() => {
  fetch("./homeBlogs.json")
   .then((res) => res.json())
   .then((data) => setBlogsData(data));
 }, []);

 return (
  <Container sx={{ mt: 10, mb: 5, marginBottom: "6em" }}>
   <Typography
    variant="h3"
    sx={{ color: "#10375C", fontWeight: "bold", textAlign: "center" }}
   >
    Lorem ipsum dolor sit amet, <br /> adipiscing elit.
   </Typography>
   <Typography sx={{ color: "#9A9A9A", textAlign: "center", mt: 2 }}>
    Urna posuere dapibus hac turpis euismod rutrum massa non id. Et <br />
    ornare urna placerat purus pharetra dolor.
   </Typography>

   <Grid container spacing={2} sx={{ my: 4 }}>
    {blogsData.map((data) => (
     <Grid key={data.id} item xs={12} md={4}>
      <Card
       sx={{
        maxWidth: 325,
        padding: "0px 20px 0px 20px",

        "&:hover": { boxShadow: "1px 40px 30px #EEEEFD" },
       }}
      >
       <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image={data.img}
        sx={{
         borderRadius: "6px",
         objectFit: "contain",
        }}
       />
       <CardContent sx={{ p: 0 }}>
        <Typography
         gutterBottom
         variant="h5"
         component="div"
         sx={{ color: "#515B61", fontWeight: "bold" }}
        >
         {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.subtitle}
        </Typography>
       </CardContent>
       <CardActions sx={{ px: 0, py: 2 }}>
        <Button
         size="small"
         sx={{ border: "1px solid #515B61", color: "#515B61", px: 3, py: 1 }}
        >
         Read More
        </Button>
       </CardActions>
      </Card>
     </Grid>
    ))}
   </Grid>
  </Container>
 );
};

export default HomeBlogs;
