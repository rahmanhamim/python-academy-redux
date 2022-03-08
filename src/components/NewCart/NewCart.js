import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { NewCartContext } from "../../contexts/NewCartProvider/NewCartProvider";
import Navigation from "../Shared/Navigation/Navigation";
import BusketCart from "./BusketCart";
import ShoppingCartItems from "./ShoppingCartItems";
import Footer from "../Shared/Footer/Footer";
import LoginFrom from "../Home/LoginForm/LoginFrom";
import CourseCards from "../Shared/CourseCards/CourseCards";

const NewCart = () => {
 //  Login Form handler
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // course suggestion data
 const [coursesSuggestion, setCoursesSuggestion] = useState([]);
 useEffect(
  () =>
   fetch("/courses.json")
    .then((res) => res.json())
    .then((data) => setCoursesSuggestion(data)),
  []
 );
 // ----------------------------------

 const [
  newCartItems,
  setNewCartItems,
  addToCartBtn,
  onRemoveBtn,
  itemsPrice,
  vatPrice,
  varTotal,
  totalPrice,
  setTotalPrice,
 ] = useContext(NewCartContext);

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
     bgcolor: "rgba(71, 68, 228, 0.1)",
     pt: "3em",
     pb: "6em",
     minHeight: "60vh",
    }}
   >
    <Container>
     <Grid container spacing={0} sx={{ mt: 5, justifyContent: "space-around" }}>
      <ShoppingCartItems
       newCartItems={newCartItems}
       addToCartBtn={addToCartBtn}
       onRemoveBtn={onRemoveBtn}
      ></ShoppingCartItems>
      {/* Busket side */}
      <BusketCart
       itemsPrice={itemsPrice}
       vatPrice={vatPrice}
       totalPrice={totalPrice}
       setTotalPrice={setTotalPrice}
      ></BusketCart>
     </Grid>
    </Container>
   </Box>
   <Container>
    <Box sx={{ my: 10 }}>
     <Typography
      variant="h4"
      sx={{ color: "#10375C", fontWeight: "bold", m: 2 }}
     >
      People Are Also Learning
     </Typography>
     <Typography sx={{ color: "#292C44", m: 2 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> amet
      volutpat urna, mauris, adipiscing in dignissim vulputate.
     </Typography>
     <Grid container spacing={2} sx={{ mt: 3 }}>
      {coursesSuggestion.slice(0, 3).map((course) => (
       <CourseCards key={course.id} course={course}></CourseCards>
      ))}
     </Grid>
    </Box>
   </Container>
   <Footer></Footer>
   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </>
 );
};

export default NewCart;
