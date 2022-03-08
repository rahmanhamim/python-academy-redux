import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../../../img/icon.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
 const useStyle = makeStyles({
  footerLinks: {
   color: "#FFF",
   textDecoration: "none",
   fontSize: ".9rem",
   display: "block",
   marginBottom: "1em",
  },
 });

 const { footerLinks } = useStyle();

 return (
  <footer
   style={{
    backgroundColor: "#0F2D4A",
    color: "#fff",
    paddingTop: "4em",
    paddingBottom: "1em",
   }}
  >
   <Container sx={{ mt: 5 }}>
    <Grid container spacing={2}>
     <Grid item xs={6} md={4}>
      <img style={{ maxWidth: "100%" }} src={logo} alt="" />
      <Typography sx={{ mt: 3 }}>
       Urna posuere dapibus hac turpis euismod rutrum massa non id. Et ornare
       urna placerat purus pharetra dolor.
      </Typography>
     </Grid>
     <Grid item xs={6} md={2}>
      <Link className={footerLinks} to="/">
       Affiliate program
      </Link>
      <Link className={footerLinks} to="/">
       Groups
      </Link>
      <Link className={footerLinks} to="/">
       Certificates
      </Link>
      <Link className={footerLinks} to="/">
       Explore
      </Link>
      <Link className={footerLinks} to="/">
       Groups
      </Link>
     </Grid>
     <Grid item xs={6} md={2}>
      <Link className={footerLinks} to="/">
       About
      </Link>
      <Link className={footerLinks} to="/">
       Career
      </Link>
      <Link className={footerLinks} to="/">
       Privacy policy
      </Link>
      <Link className={footerLinks} to="/">
       Blogs
      </Link>
      <Link className={footerLinks} to="/">
       Contacts
      </Link>
     </Grid>
     <Grid item xs={6} md={2}>
      <Typography
       variant="h4"
       sx={{ fontFamily: "Lato", fontWeight: "200", mb: 2, fontSize: "1.8rem" }}
      >
       Contact us
      </Typography>
      <Link className={footerLinks} to="/">
       <Box
        sx={{
         display: "flex",
         alignItems: "center",
        }}
       >
        <MailOutlineRoundedIcon />

        <Typography variant="body" sx={{ ml: 1 }}>
         info@pacademy.net
        </Typography>
       </Box>
      </Link>
      <Link className={footerLinks} to="/">
       <Box
        sx={{
         display: "flex",
         alignItems: "center",
        }}
       >
        <PhoneInTalkOutlinedIcon />
        <Typography variant="body" sx={{ ml: 1 }}>
         020 3314 8120
        </Typography>
       </Box>
      </Link>
     </Grid>
     <Grid item xs={6} md={2}>
      <Typography
       variant="h4"
       sx={{
        fontFamily: "Lato",
        fontWeight: "200",
        mb: 2,
        fontSize: "1.8rem",
       }}
      >
       Follow us
      </Typography>
      <Box>
       <FacebookIcon sx={{ mr: 1 }} />
       <TwitterIcon sx={{ mr: 1 }} />
       <InstagramIcon sx={{ mr: 1 }} />
       <YouTubeIcon />
      </Box>
     </Grid>
    </Grid>
    <Box
     style={{
      backgroundColor: "#868080",
      width: "100%",
      height: "1px",
      marginTop: "3em",
     }}
    />
    <Typography sx={{ textAlign: "center", mt: 2, textTransform: "uppercase" }}>
     Copyright 2022
    </Typography>
   </Container>
  </footer>
 );
};

export default Footer;
