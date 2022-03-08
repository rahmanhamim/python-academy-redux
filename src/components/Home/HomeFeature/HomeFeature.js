import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import featureImage1 from "../../../img/feature-image.png";
import featureImage2 from "../../../img/feature-2.jpg";
import featureImage3 from "../../../img/feature-3.jpg";
import featureImage4 from "../../../img/feature-4.jpg";
import featureImage5 from "../../../img/feature-5.jpg";
import featureImage6 from "../../../img/feature-6.jpg";

const HomeFeature = () => {
 const [imgControl, setImgControl] = useState("img1");

 const useStyle = makeStyles({
  featureTitle: {
   color: "#10375C",
   fontWeight: "bold",
  },
  imgFeature: {
   display: "block",
   position: "relative",
   "&:before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(77, 57, 224, 0.4)",
    top: "0px",
    right: "0px",
    borderRadius: "10px",
   },
  },
  FeatureBtnContainer: {
   marginLeft: "1em",
   "& > *": {
    textAlign: "left",
    color: "#515B61",
    textTransform: "none",
    fontSize: "1rem",
    lineHeight: "1.2em",
    margin: "0em 0",
    padding: ".8em 1em",
   },
  },
 });

 const { featureTitle, imgFeature, FeatureBtnContainer } = useStyle();

 const bar1Style = {
  height: "280px",
  width: "5px",
  bgcolor: "#dfdfdf",
  position: "relative",
  borderRadius: "4px",
  "&:before": {
   content: "''",
   position: "absolute",
   backgroundColor: "#FF4958",
   height: "40px",
   width: "5px",
   top: "0px",
   right: "0px",
   borderRadius: "4px",
  },
  "&:after": {
   content: "'01/06'",
   position: "absolute",
   bottom: "-45px",
   right: "-18px",
   transform: "rotate(-90deg)",
   color: "#10375C",
  },
 };

 const bar2Style = {
  height: "280px",
  width: "5px",
  bgcolor: "#dfdfdf",
  position: "relative",
  borderRadius: "4px",
  "&:before": {
   content: "''",
   position: "absolute",
   backgroundColor: "#FF4958",
   height: "50px",
   width: "5px",
   top: "40px",
   right: "0px",
   borderRadius: "4px",
  },
  "&:after": {
   content: "'02/06'",
   position: "absolute",
   bottom: "-45px",
   right: "-18px",
   transform: "rotate(-90deg)",
   color: "#10375C",
  },
 };
 const bar3Style = {
  height: "280px",
  width: "5px",
  bgcolor: "#dfdfdf",
  position: "relative",
  borderRadius: "4px",
  "&:before": {
   content: "''",
   position: "absolute",
   backgroundColor: "#FF4958",
   height: "50px",
   width: "5px",
   top: "90px",
   right: "0px",
   borderRadius: "4px",
  },
  "&:after": {
   content: "'03/06'",
   position: "absolute",
   bottom: "-45px",
   right: "-18px",
   transform: "rotate(-90deg)",
   color: "#10375C",
  },
 };
 const bar4Style = {
  height: "280px",
  width: "5px",
  bgcolor: "#dfdfdf",
  position: "relative",
  borderRadius: "4px",
  "&:before": {
   content: "''",
   position: "absolute",
   backgroundColor: "#FF4958",
   height: "50px",
   width: "5px",
   top: "140px",
   right: "0px",
   borderRadius: "4px",
  },
  "&:after": {
   content: "'04/06'",
   position: "absolute",
   bottom: "-45px",
   right: "-18px",
   transform: "rotate(-90deg)",
   color: "#10375C",
  },
 };
 const bar5Style = {
  height: "280px",
  width: "5px",
  bgcolor: "#dfdfdf",
  position: "relative",
  borderRadius: "4px",
  "&:before": {
   content: "''",
   position: "absolute",
   backgroundColor: "#FF4958",
   height: "50px",
   width: "5px",
   top: "190px",
   right: "0px",
   borderRadius: "4px",
  },
  "&:after": {
   content: "'05/06'",
   position: "absolute",
   bottom: "-45px",
   right: "-18px",
   transform: "rotate(-90deg)",
   color: "#10375C",
  },
 };
 const bar6Style = {
  height: "280px",
  width: "5px",
  bgcolor: "#dfdfdf",
  position: "relative",
  borderRadius: "4px",
  "&:before": {
   content: "''",
   position: "absolute",
   backgroundColor: "#FF4958",
   height: "50px",
   width: "5px",
   top: "229px",
   right: "0px",
   borderRadius: "4px",
  },
  "&:after": {
   content: "'06/06'",
   position: "absolute",
   bottom: "-45px",
   right: "-18px",
   transform: "rotate(-90deg)",
   color: "#10375C",
  },
 };

 return (
  <Container sx={{ my: 8 }}>
   <Typography variant="h3" className={featureTitle}>
    We aim to serve all are to <br /> meet your needs
   </Typography>
   <Grid sx={{ display: "flex", alignItems: "center" }} container spacing={2}>
    <Grid
     item
     xs={12}
     md={5}
     sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      my: 3,
     }}
    >
     <Box sx={{ alignSelf: "flex-start" }}>
      {/* bar content */}

      {imgControl === "img1" && <Box sx={bar1Style}></Box>}
      {imgControl === "img2" && <Box sx={bar2Style}></Box>}
      {imgControl === "img3" && <Box sx={bar3Style}></Box>}
      {imgControl === "img4" && <Box sx={bar4Style}></Box>}
      {imgControl === "img5" && <Box sx={bar5Style}></Box>}
      {imgControl === "img6" && <Box sx={bar6Style}></Box>}
     </Box>
     <Box className={FeatureBtnContainer}>
      <Button
       onClick={() => setImgControl("img1")}
       style={
        imgControl === "img1"
         ? { backgroundColor: "#FF4958", color: "#fff" }
         : {}
       }
      >
       Learner and Enthusiast in search of a new career.
      </Button>
      <Button
       onClick={() => setImgControl("img2")}
       style={
        imgControl === "img2"
         ? { backgroundColor: "#FF4958", color: "#fff" }
         : {}
       }
      >
       Students and Professionals from any field who want to learn to develop
       and manage digital technology.
      </Button>
      <Button
       onClick={() => setImgControl("img3")}
       style={
        imgControl === "img3"
         ? { backgroundColor: "#FF4958", color: "#fff" }
         : {}
       }
      >
       Entrepreneurs who are looking to carry out their ideas.
      </Button>
      <Button
       onClick={() => setImgControl("img4")}
       style={
        imgControl === "img4"
         ? { backgroundColor: "#FF4958", color: "#fff" }
         : {}
       }
      >
       Professionals without technical knowledge seeking to innovate their work
       areas.
      </Button>
      <Button
       onClick={() => setImgControl("img5")}
       style={
        imgControl === "img5"
         ? { backgroundColor: "#FF4958", color: "#fff" }
         : {}
       }
      >
       Students and Professionals from any field who want to learn to develop
       and manage digital technology.
      </Button>
      <Button
       onClick={() => setImgControl("img6")}
       style={
        imgControl === "img6"
         ? { backgroundColor: "#FF4958", color: "#fff" }
         : {}
       }
      >
       Entrepreneurs who are looking to carry out their ideas.
      </Button>
     </Box>
    </Grid>
    <Grid sx={{ ml: "auto" }} item xs={12} md={6}>
     <Box className={imgFeature}>
      {imgControl === "img1" && (
       <img
        style={{
         width: "100%",
         height: "420px",
         display: "block",
         borderRadius: "10px",
         objectFit: "cover",
        }}
        src={featureImage1}
        alt=""
       />
      )}
      {imgControl === "img2" && (
       <img
        style={{
         width: "100%",
         height: "420px",
         display: "block",
         borderRadius: "10px",
         objectFit: "cover",
        }}
        src={featureImage2}
        alt=""
       />
      )}
      {imgControl === "img3" && (
       <img
        style={{
         width: "100%",
         height: "420px",
         display: "block",
         borderRadius: "10px",
         objectFit: "cover",
        }}
        src={featureImage3}
        alt=""
       />
      )}
      {imgControl === "img4" && (
       <img
        style={{
         width: "100%",
         height: "420px",
         display: "block",
         borderRadius: "10px",
         objectFit: "cover",
        }}
        src={featureImage4}
        alt=""
       />
      )}
      {imgControl === "img5" && (
       <img
        style={{
         width: "100%",
         height: "420px",
         display: "block",
         borderRadius: "10px",
         objectFit: "cover",
        }}
        src={featureImage5}
        alt=""
       />
      )}
      {imgControl === "img6" && (
       <img
        style={{
         width: "100%",
         height: "420px",
         display: "block",
         borderRadius: "10px",
         objectFit: "cover",
        }}
        src={featureImage6}
        alt=""
       />
      )}
     </Box>
    </Grid>
   </Grid>
  </Container>
 );
};

export default HomeFeature;
