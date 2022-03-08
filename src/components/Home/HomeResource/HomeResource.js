import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bookIcon from "../../../img/book-icon.png";
import cvIcon from "../../../img/cv-icon.png";
import resourceImg from "../../../img/resource-img.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import resourceCardBgIcon from "../../../img/cardhoverbg.png";

const HomeResource = () => {
 return (
  <Box
   component="div"
   sx={{ mt: 10, mb: 10, bgcolor: "#0F2D4A", pt: 8, color: "#fff" }}
  >
   <Container>
    <Typography
     variant="h3"
     sx={{ fontWeight: "bold", textAlign: "center", fontSize: "2.5rem" }}
    >
     Grab this Exciting Opportunity <br /> to get Free Resources
    </Typography>
    <Typography sx={{ textAlign: "center", mt: 3, mb: 4 }}>
     Urna posuere dapibus hac turpis euismod rutrum massa non id. Et ornare urna{" "}
     <br />
     placerat purus pharetra dolor.
    </Typography>
    <Grid container spacing={2}>
     <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <img src={bookIcon} alt="" />
      <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
       Get Free Courses
      </Typography>
      <Typography>
       We offer the latest knowledge formulated by the mentors <br /> who stand
       out for being empathetic professionals.
      </Typography>
      <Button
       sx={{
        bgcolor: "",
        color: "#fff",
        maxWidth: "200px",
        padding: "1em 3.5em",
        border: "2px solid #FFF",
        borderRadius: "3px",
        fontFamily: "Manrope",
        fontWeight: "bold",
        mt: 2,
        "&:hover": {
         bgcolor: "#FF4958",
         border: "2px solid #FF4958",
        },
       }}
      >
       Get Now
      </Button>
     </Grid>
     <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <img src={cvIcon} alt="" />
      <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
       Get Free CV
      </Typography>
      <Typography>
       We offer the latest knowledge formulated by the mentors <br /> who stand
       out for being empathetic professionals.
      </Typography>
      <Button
       sx={{
        bgcolor: "",
        color: "#fff",
        maxWidth: "200px",
        padding: "1em 3.5em",
        border: "2px solid #FFF",
        borderRadius: "3px",
        fontFamily: "Manrope",
        fontWeight: "bold",
        mt: 2,
        "&:hover": {
         bgcolor: "#FF4958",
         border: "2px solid #FF4958",
        },
       }}
      >
       Get Now
      </Button>
     </Grid>
    </Grid>
    <Grid
     container
     spacing={0}
     sx={{
      bgcolor: "#F9F9F9",
      borderRadius: "120px 120px 0 0",
      mt: "3rem",
      display: "flex",
      alignItems: "center",
     }}
    >
     <Grid item xs={12} md={6} sx={{ px: 8 }}>
      <Typography
       variant="h4"
       sx={{ color: "#10375C", fontSize: "2.5rem", fontWeight: "bold", mt: 4 }}
      >
       Get Free Quizzes
      </Typography>
      <Typography sx={{ color: "rgba(15, 45, 74, 0.5)", mt: 1, mb: 4 }}>
       We offer the latest knowledge formulated by the mentors who stand out for
       being empathetic professionals.
      </Typography>
      <Box
       sx={{
        bgcolor: "#262674",
        p: { xs: 2, md: 6 },
        mb: 2,
        textAlign: "center",
        borderRadius: "15px",
        position: "relative",
        "&:before": {
         content: "''",
         position: "absolute",
         top: "0px",
         right: "0px",
         height: "80px",
         width: "80px",
         background: `url(${resourceCardBgIcon})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
        },
        "&:after": {
         content: "''",
         position: "absolute",
         bottom: "0px",
         zIndex: "1",
         left: "0px",
         height: { xs: "50px", md: "80px" },
         width: { xs: "50px", md: "80px" },
         background: `url(${resourceCardBgIcon})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
        },
       }}
      >
       <Typography
        variant="h4"
        sx={{ fontWeight: "bold", fontFamily: "Manrope", fontSize: "2.5rem" }}
       >
        100+
       </Typography>
       <Typography sx={{ fontSize: "1.6rem" }}>Quiz Available</Typography>
       <Typography sx={{ my: 2 }}>
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Eros
        morbi fermentum.
       </Typography>

       <Button
        sx={{
         bgcolor: "#FF4958",
         color: "#fff",
         padding: "1.2em 2.5em",
         border: "1px solid #FF4958",
         borderRadius: "3px",
         fontFamily: "Manrope",
         fontSize: { xs: ".8rem", md: "1rem" },
         "&:hover": {
          bgcolor: "#F9B233",
          border: "1px solid #F9B233",
         },
        }}
       >
        Participate Now{" "}
        <ArrowForwardIosIcon sx={{ fontSize: "1rem", ml: ".5em" }} />
       </Button>
      </Box>
     </Grid>
     <Grid
      item
      xs={12}
      md={6}
      sx={{
       background: `url(${resourceImg})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       height: "602px",
       borderRadius: { xs: "0", md: "0 120px 0 0" },
      }}
     ></Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default HomeResource;
