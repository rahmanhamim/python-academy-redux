import { Box } from "@mui/material";
import React from "react";
import LoginFrom from "../../Home/LoginForm/LoginFrom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import QuizQuestions from "../QuizQuestions.js/QuizQuestions";

const QuizHome = () => {
 // ----------------------------------
 //  Login Form handler
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 // -------------------------------------
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
    sx={{ background: "rgba(71, 68, 228, 0.1)", minHeight: "80vh", pt: 10 }}
   >
    <QuizQuestions />
   </Box>
   <Footer />
   <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
  </>
 );
};

export default QuizHome;
