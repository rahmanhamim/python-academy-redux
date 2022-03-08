import {
 Box,
 Button,
 Card,
 CardContent,
 CardMedia,
 Container,
 Grid,
 Typography,
} from "@mui/material";
import React, { useContext } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import VideoModal from "../../Shared/VideoModal/VideoModal";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import checkIcon from "../../../img/check-logo.png";
import { CartContext } from "../../../contexts/CartProvider/CartProvider";
import { Link } from "react-router-dom";
import { NewCartContext } from "../../../contexts/NewCartProvider/NewCartProvider";

const CourseDetailsHero = ({ courseData }) => {
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // const [cartItems, setCartItems] = useContext(CartContext);

 // const handleAddToCart = (courseItem) => {
 //  const added = cartItems.find((item) => item.id === courseItem.id);
 //  if (added) {
 //   added.quantity = added.quantity + 1;
 //   added.totalPrice = added.quantity * added.price;
 //  } else {
 //   courseItem = {
 //    ...courseItem,
 //    quantity: 1,
 //    totalPrice: courseItem.price,
 //   };
 //   const newCart = [...cartItems, courseItem];
 //   setCartItems(newCart);
 //  }
 // };
 // console.log(cartItems);

 const [newCartItems, setNewCartItems, addToCartBtn] =
  useContext(NewCartContext);

 return (
  <Container sx={{ color: "#fff", mt: 8, mb: 5 }}>
   <Typography
    variant="h3"
    sx={{
     maxWidth: "70%",
     fontWeight: "bold",
     fontSize: "2.8rem",
     lineHeight: "1.3",
    }}
   >
    {courseData.title}
   </Typography>
   <Grid container spacing={0} sx={{ pt: 5 }}>
    <Grid item xs={12} md={5}>
     <Card
      sx={{ p: 3, boxShadow: "none", bgcolor: "#f9f9f9", borderRadius: "12px" }}
     >
      <Box sx={{ position: "relative" }}>
       <CardMedia
        component="img"
        height="290"
        width="468"
        image={`${courseData?.img}`}
        alt="image"
        sx={{ borderRadius: "12px" }}
       />
       <Button
        onClick={handleOpen}
        sx={{
         position: "absolute",
         top: "50%",
         left: "50%",
         transform: "translateX(-50%) translateY(-50%)",
         padding: 0,
         bgcolor: "rgba(255, 255, 255, .7)",
         borderRadius: "50%",
         zIndex: "20",
         "&:before": {
          content: "''",
          zIndex: "-2",
          position: "absolute",
          height: "150%",
          width: "150%",
          bgcolor: "rgba(255, 255, 255, .5)",
          borderRadius: "50%",
         },
         "&:after": {
          content: "''",
          zIndex: "-2",
          position: "absolute",
          height: "200%",
          width: "200%",
          bgcolor: "rgba(255, 255, 255, .2)",
          borderRadius: "50%",
         },
        }}
       >
        <ArrowRightIcon sx={{ fontSize: "4rem", color: "#FF4958" }} />
       </Button>
       <VideoModal
        url={courseData?.videoURL}
        open={open}
        handleClose={handleClose}
       />
      </Box>
      <CardContent>
       <Grid
        container
        spacing={2}
        sx={{ mt: 1, display: "flex", alignItems: "center" }}
       >
        <Grid
         item
         xs={6}
         sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
         }}
        >
         <Typography
          gutterBottom
          variant="h4"
          sx={{
           fontWeight: "bold",
           color: "#10375C",
           fontSize: { xs: "1.5rem", md: "2rem" },
          }}
          component="div"
         >
          £{courseData?.price - courseData?.price / 10}
         </Typography>
         <Typography
          gutterBottom
          variant="h5"
          sx={{
           fontWeight: "bold",
           fontSize: { xs: "1rem", md: "1.5rem" },
           color: "rgba(15, 45, 74, 0.5)",
           textDecoration: "line-through",
           mr: 1,
          }}
          component="div"
         >
          {" "}
          £ {courseData.price}
         </Typography>
        </Grid>
        <Grid
         item
         xs={6}
         sx={{
          textAlign: "right",
         }}
        >
         <Link to="/newcart" style={{ textDecoration: "none" }}>
          <Button
           sx={{
            background: "#FF4958",
            color: "#fff",
            fontSize: { xs: ".8em", md: "1em", lg: "1.2em" },
            px: "1.4em",
            py: ".8em",
            "&:hover": {
             bgcolor: "#F8B233",
            },
           }}
           onClick={() => addToCartBtn(courseData)}
          >
           Add to cart
          </Button>
         </Link>
        </Grid>
        <hr
         style={{
          width: "100%",
          border: "1px solid rgba(15, 45, 74, 0.2)",
          marginTop: "1.3em",
         }}
        />
       </Grid>
       <Typography
        sx={{
         color: "#706060",
         display: "flex",
         alignItems: "center",
         fontSize: "1.4rem",
         fontWeight: "light",
        }}
       >
        <VideocamOutlinedIcon sx={{ mr: 3, my: 1 }} /> {courseData?.duration}
       </Typography>
       <Typography
        sx={{
         color: "#706060",
         display: "flex",
         alignItems: "center",
         fontSize: "1.4rem",
         fontWeight: "light",
        }}
       >
        <InsertChartOutlinedIcon sx={{ mr: 3, my: 1 }} /> {courseData?.resource}
       </Typography>
       <Typography
        sx={{
         color: "#706060",
         display: "flex",
         alignItems: "center",
         fontSize: "1.4rem",
         fontWeight: "light",
        }}
       >
        <DateRangeOutlinedIcon sx={{ mr: 3, my: 1 }} /> {courseData?.access}
       </Typography>
       <Typography
        sx={{
         color: "#706060",
         display: "flex",
         alignItems: "center",
         fontSize: "1.4rem",
         fontWeight: "light",
        }}
       >
        <DevicesOutlinedIcon sx={{ mr: 3, my: 1 }} /> {courseData?.platform}
       </Typography>
       <Typography
        sx={{
         color: "#706060",
         display: "flex",
         alignItems: "center",
         fontSize: "1.4rem",
         fontWeight: "light",
        }}
       >
        <CardMembershipIcon sx={{ mr: 3, my: 1 }} /> {courseData?.certification}
       </Typography>
      </CardContent>
     </Card>
    </Grid>
    <Grid item xs={12} md={6} sx={{ ml: { xs: 0, md: 5 } }}>
     <Typography variant="h4" sx={{ mt: { xs: 6, md: 0 } }}>
      Course Overview
     </Typography>
     <Typography sx={{ fontSize: "1.2rem", lineHeight: "1.6", mt: 2 }}>
      {courseData?.overview1}
     </Typography>
     <Typography sx={{ fontSize: "1.2rem", lineHeight: "1.6", mt: 2, mb: 5 }}>
      {courseData?.overview2}
     </Typography>
     {courseData?.feature?.map((item, index) => (
      <Typography
       key={index}
       sx={{ display: "flex", alignItems: "center", my: 2 }}
      >
       <img style={{ marginRight: "1em" }} src={checkIcon} alt="" />
       {item}
      </Typography>
     ))}
    </Grid>
   </Grid>
  </Container>
 );
};

export default CourseDetailsHero;
