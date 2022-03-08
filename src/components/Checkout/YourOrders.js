import {
 Box,
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

const YourOrders = () => {
 const useStyle = makeStyles({
  titleFontStyle: {
   fontWeight: "bold",
   color: "#10375C",
  },
  checkoutBoxStyle: {
   background: "#fff",
   padding: "2em",
   borderRadius: "10px",
  },
 });
 const { titleFontStyle, checkoutBoxStyle } = useStyle();

 return (
  <Box className={checkoutBoxStyle} sx={{ mt: 10 }}>
   <Typography variant="h4" className={titleFontStyle}>
    Your Orders
   </Typography>
   <TableContainer>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
     <TableHead>
      <TableRow>
       <TableCell sx={{ fontWeight: "bold" }}>Course Name</TableCell>
       <TableCell sx={{ fontWeight: "bold" }} align="right">
        Subtotal
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {[1, 2, 3].map((row, index) => (
       <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
       >
        <TableCell component="th" scope="row">
         {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </Box>
 );
};

export default YourOrders;
