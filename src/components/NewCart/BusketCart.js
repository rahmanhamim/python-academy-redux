import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BusketCart = ({ itemsPrice, vatPrice, totalPrice, setTotalPrice }) => {
 const [couponText, setCouponText] = useState("");

 const handleCouponBtn = () => {
  if (couponText === "10PER") {
   setTotalPrice((totalPrice = (itemsPrice + vatPrice) * 0.9));
  } else {
   alert("coupon not valid");
  }
 };

 const useStyle = makeStyles({
  busketContainerStyle: {
   background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
   color: "#fff",
   borderRadius: "10px",
   padding: "2em 1em",
   alignSelf: "start",
  },
  busketTitleStyle: {
   fontWeight: "bold",
   marginBottom: ".5em",
  },
  priceContainerStyle: {
   display: "flex",
   justifyContent: "space-between",
   marginTop: "1em",
  },
  couponContainerStyle: {
   display: "flex",
   justifyContent: "space-between",
   width: "100%",
  },
  couponBtnStyle: {
   backgroundColor: "#FF4A58",
   color: "#fff",
   width: "35%",
   "&:hover": {
    backgroundColor: "#F9B233",
   },
  },
  checkoutBtnStyle: {
   backgroundColor: "#FF4A58",
   color: "#fff",
   display: "block",
   margin: "auto",
   marginTop: "1.5em",
   padding: ".5em 2em",
   "&:hover": {
    backgroundColor: "#F9B233",
   },
  },
 });

 const {
  busketContainerStyle,
  busketTitleStyle,
  priceContainerStyle,
  couponContainerStyle,
  couponBtnStyle,
  checkoutBtnStyle,
 } = useStyle();

 return (
  <Grid className={busketContainerStyle} item xs={12} md={3}>
   <Typography className={busketTitleStyle} variant="h4">
    Busket Totals
   </Typography>
   <Box className={couponContainerStyle}>
    <input
     style={{
      width: "64%",
      borderRadius: "5px",
      border: "none",
      padding: "0 .5em",
     }}
     onBlur={(e) => setCouponText(e.target.value)}
     placeholder="Coupon Code"
    ></input>
    <Button className={couponBtnStyle} onClick={handleCouponBtn}>
     Apply
    </Button>
   </Box>
   <Box className={priceContainerStyle}>
    <Typography>subtotal</Typography>
    <Typography>£{itemsPrice}</Typography>
   </Box>
   <hr />
   <Box className={priceContainerStyle}>
    <Typography>VAT 15%</Typography>
    <Typography>£ {vatPrice} </Typography>
   </Box>
   <hr />
   <Box className={priceContainerStyle}>
    <Typography>Total</Typography>
    <Typography sx={{ fontWeight: "bold" }}>£{totalPrice}</Typography>
   </Box>
   <Link style={{ textDecoration: "none" }} to="/checkout">
    <Button className={checkoutBtnStyle}>Proceed to Checkout</Button>
   </Link>
  </Grid>
 );
};

export default BusketCart;
