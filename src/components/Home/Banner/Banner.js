import { makeStyles } from "@mui/styles";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import bgImg from "../../../img/banner-img.png";
import { Box, Button, Container, Typography } from "@mui/material";
import LoginFrom from "../LoginForm/LoginFrom";
import { Link } from "react-router-dom";

const Banner = () => {
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 const useStyle = makeStyles({
  bannerContainer: {
   background: `url(${bgImg})`,
   minHeight: "85vh",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   maxWidth: "100%",
  },
  bannerTextContainer: {
   color: "#fff",
   minHeight: "60vh",
   display: "flex",
   justifyContent: "center",
   alignItems: "start",
   flexDirection: "column",
  },
  bannerTitle: {
   fontSize: "2.4rem",
   fontWeight: "bold",
  },
 });

 const { bannerContainer, bannerTextContainer, bannerTitle } = useStyle();

 return (
  <div className={bannerContainer}>
   <Navigation handleOpen={handleOpen} />
   <Container>
    <Box className={bannerTextContainer}>
     <Typography className={bannerTitle}>
      Every sufficiently advanced LISP <br /> application will eventually <br />
      reimplement Python.
     </Typography>
     <Typography sx={{ my: 4, fontSize: "1.2rem" }}>
      With a decade of insights and expertise, we're decided to <br /> reimagine
      co-working space.
     </Typography>
     <Link
      to="/allcourses"
      style={{
       textDecoration: "none",
      }}
     >
      <Button
       sx={{
        bgcolor: "#FF4958",
        color: "#fff",
        maxWidth: "200px",
        padding: "1.5em 2em",
        border: "1px solid #FF4958",
        borderRadius: "3px",
        fontFamily: "Manrope",
        mb: { xs: 10, md: 0 },
        "&:hover": {
         bgcolor: "#F9B233",
         border: "1px solid #F9B233",
        },
       }}
      >
       Start Learning
      </Button>
     </Link>
    </Box>
    <LoginFrom open={open} handleClose={handleClose}></LoginFrom>
   </Container>
  </div>
 );
};

export default Banner;
