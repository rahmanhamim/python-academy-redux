import {
 Box,
 Button,
 Container,
 Grid,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartProvider/CartProvider";
import LoginFrom from "../Home/LoginForm/LoginFrom";
import CourseCards from "../Shared/CourseCards/CourseCards";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import CartProducts from "./CartProducts";

const Cart = () => {
 // ----------------------------------
 //  Login Form handler
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 // -------------------------------------
 const [cartItems, setCartItems] = useContext(CartContext);

 let subtotal = cartItems.reduce(function (accumulator, item) {
  return accumulator + item.totalPrice;
 }, 0);
 const VAT = subtotal * 0.15;

 const [grossTotal, setGrossTotal] = useState(subtotal + VAT);
 const [codeValue, setCodeValue] = useState("");

 const handleCouponBtn = () => {
  if (codeValue === "10PER") {
   let grossCalutatedTotal = subtotal - (subtotal * 15) / 100;
   setGrossTotal(grossCalutatedTotal);
  } else {
   alert("Code Not Valid");
  }
 };

 console.log(cartItems);

 const [coursesSuggestion, setCoursesSuggestion] = useState([]);
 useEffect(
  () =>
   fetch("/courses.json")
    .then((res) => res.json())
    .then((data) => setCoursesSuggestion(data)),
  []
 );

 return (
  <>
   <Box
    sx={{
     background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
    }}
   >
    <Navigation handleOpen={handleOpen} />
   </Box>
   <Box sx={{ background: "rgba(71, 68, 228, 0.1)" }}>
    <Container sx={{ py: 10 }}>
     <Box>
      <Grid container spacing={0} sx={{ justifyContent: "space-around" }}>
       <Grid
        item
        xs={12}
        md={8}
        sx={{ bgcolor: "#fff", borderRadius: "10px", p: 3 }}
       >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#10375C" }}>
         Shopping Cart
        </Typography>
        {/* ----------------------- */}
        <TableContainer component="div">
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
           <TableRow>
            <TableCell
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              px: 0,
              pt: 4,
             }}
            >
             Course Name
            </TableCell>
            <TableCell
             align="right"
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              px: 0,
              pt: 4,
             }}
            >
             Price
            </TableCell>
            <TableCell
             align="right"
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              px: 0,
              pt: 4,
             }}
            >
             Quantity
            </TableCell>
            <TableCell
             align="right"
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              pt: 4,
             }}
            >
             Total
            </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {/* ------------------------------- */}
           {cartItems?.map((item) => (
            <CartProducts key={item.id} item={item}></CartProducts>
           ))}
          </TableBody>
         </Table>
        </TableContainer>
       </Grid>
       <Grid
        item
        xs={12}
        md={3}
        sx={{
         background:
          "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
         borderRadius: "10px",
         py: 9,
         px: 2,
         color: "#fff",
        }}
       >
        <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
         Busket Totals
        </Typography>
        <Box sx={{ display: "flex" }}>
         <input
          onChange={(e) => setCodeValue(e.target.value)}
          style={{
           padding: "1em",
           width: "60%",
           borderRadius: "5px",
           border: "none",
          }}
          placeholder="Coupon Code"
         ></input>
         <Button
          onClick={handleCouponBtn}
          sx={{
           bgcolor: "#FF4958",
           color: "#fff",
           width: "40%",
           "&:hover": {
            bgcolor: "#0F588D",
           },
          }}
         >
          Apply
         </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>subtotal</Typography>
         <Typography>£{subtotal}</Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>VAT 15%</Typography>
         <Typography>£ {VAT} </Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>Total</Typography>
         <Typography>£{grossTotal}</Typography>
        </Box>
        <Button
         sx={{
          bgcolor: "#FF4958",
          color: "#fff",
          width: "100%",
          mt: 2,
          "&:hover": {
           bgcolor: "#0F588D",
          },
         }}
        >
         Proceed to Checkout
        </Button>
       </Grid>
      </Grid>
     </Box>
     {/* -------------------------------- */}
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

export default Cart;
