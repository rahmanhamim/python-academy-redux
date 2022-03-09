import {
 Grid,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cartActions";

const ShoppingCartItems = () => {
 const cart = useSelector((state) => state.cartData.cart);
 const dispatch = useDispatch();

 const addToCartBtn = (course) => {
  const exist = cart.find((x) => x.id === course.id);
  if (exist) {
   const newCart = cart.map((x) =>
    x.id === course.id ? { ...exist, qty: exist.qty + 1 } : x
   );

   dispatch(addToCart(newCart));
  } else {
   const newCart = [...cart, { ...course, qty: 1 }];

   dispatch(addToCart(newCart));
  }
 };

 const onRemoveBtn = (product) => {
  const exist = cart.find((x) => x.id === product.id);
  if (exist.qty === 1) {
   const newCart = cart.filter((x) => x.id !== product.id);
   dispatch(removeFromCart(newCart));
  } else {
   const newCart = cart.map((x) =>
    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
   );
   dispatch(removeFromCart(newCart));
  }
 };

 // ----------------------------------------------

 const useStyle = makeStyles({
  cartTitleStyle: {
   fontWeight: "bold",
   fontSize: "1.2rem",
   pt: 4,
  },
  addRemoveBtnStyle: {
   border: "1px solid #10375C",
   borderRadius: "3px",
   margin: "0 .4em",
   padding: "0 .4em .1em .4em",
   cursor: "pointer",
  },
 });

 const { cartTitleStyle, addRemoveBtnStyle } = useStyle();

 return (
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
       <TableCell className={cartTitleStyle}>Course Name</TableCell>
       <TableCell className={cartTitleStyle}>Price</TableCell>
       <TableCell
        className={cartTitleStyle}
        sx={{ paddingRight: "1em" }}
        align="right"
       >
        Quantity
       </TableCell>
       <TableCell className={cartTitleStyle} align="right">
        Total
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {/* ------------------------------- */}
      {cart?.map((item, index) => (
       <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell
         component="th"
         scope="row"
         sx={{ display: "flex", alignItems: "center" }}
        >
         <img style={{ maxWidth: "60px" }} src={item.img} alt="" />
         <Typography sx={{ maxWidth: "200px", ml: 2 }}>{item.title}</Typography>
        </TableCell>
        <TableCell align="center">{item.price}</TableCell>
        <TableCell align="right" sx={{ fontSize: "1.1rem" }}>
         <Typography
          className={addRemoveBtnStyle}
          component="span"
          onClick={() => onRemoveBtn(item)}
         >
          -
         </Typography>
         {item.qty}
         <Typography
          className={addRemoveBtnStyle}
          component="span"
          onClick={() => addToCartBtn(item)}
         >
          +
         </Typography>
        </TableCell>
        <TableCell align="right">{item.price * item.qty}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </Grid>
 );
};

export default ShoppingCartItems;
