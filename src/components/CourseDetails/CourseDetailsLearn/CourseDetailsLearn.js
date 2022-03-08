import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import circleCheck from "../../../img/circle-point-icon.png";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const CourseDetailsLearn = ({ courseData }) => {
 const [menuControl, setMenuControl] = useState("learn");

 return (
  <Box sx={{ bgcolor: "rgba(71, 68, 228, 0.1)", pb: 10 }}>
   <Container>
    <Grid container spacing={0} sx={{ mt: "-35px" }}>
     <Grid item xs={3}>
      <Typography
       onClick={() => setMenuControl("learn")}
       sx={{
        bgcolor: menuControl === "learn" ? "#FF4958" : "#fff",
        color: menuControl === "learn" ? "#fff" : "#061748",
        textAlign: "center",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        py: 3,
        borderRadius: "6px 0px 0px 6px",
        borderRight: "1.5px solid #D0D5DA",
        cursor: "pointer",
        fontSize: { xs: ".6rem", md: "1rem" },
       }}
      >
       What you'll learn
      </Typography>
     </Grid>
     <Grid item xs={3}>
      <Typography
       onClick={() => setMenuControl("sneak")}
       sx={{
        bgcolor: menuControl === "sneak" ? "#FF4958" : "#fff",
        color: menuControl === "sneak" ? "#fff" : "#061748",
        textAlign: "center",
        py: 3,
        borderRight: "1.5px solid #D0D5DA",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        fontSize: { xs: ".6rem", md: "1rem" },
       }}
      >
       Sneak Peek
      </Typography>
     </Grid>
     <Grid item xs={3}>
      <Typography
       onClick={() => setMenuControl("outline")}
       sx={{
        bgcolor: menuControl === "outline" ? "#FF4958" : "#fff",
        color: menuControl === "outline" ? "#fff" : "#061748",
        textAlign: "center",
        py: 3,
        borderRight: "1.5px solid #D0D5DA",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        fontSize: { xs: ".6rem", md: "1rem" },
       }}
      >
       Course outline
      </Typography>
     </Grid>
     <Grid item xs={3}>
      <Typography
       onClick={() => setMenuControl("certificate")}
       sx={{
        bgcolor: menuControl === "certificate" ? "#FF4958" : "#fff",
        color: menuControl === "certificate" ? "#fff" : "#061748",
        textAlign: "center",
        py: 3,
        borderRadius: "0px 6px 6px 0px",
        borderRight: "1.5px solid #D0D5DA",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        fontSize: { xs: ".6rem", md: "1rem" },
       }}
      >
       Certificate
      </Typography>
     </Grid>
    </Grid>
    {/* what to learn section */}
    <Box
     sx={{
      color: "#515B61",
      bgcolor: "#fff",
      my: 8,
      py: 8,
      px: 5,
      borderRadius: "20px",
     }}
    >
     <Typography variant="h3" sx={{ color: "#10375C", fontWeight: "bold" }}>
      What you'll Learn
     </Typography>
     <Typography sx={{ my: 2, fontSize: "1.2rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> amet
      volutpat urna, mauris, adipiscing in dignissim vulputate.
     </Typography>
     <hr style={{ border: "1px solid rgba(15, 45, 74, 0.2)" }} />
     <Grid
      container
      spacing={2}
      sx={{ justifyContent: "space-between", mt: 2 }}
     >
      {courseData?.syllabusPoints?.map((point, index) => (
       <Grid
        item
        key={index}
        xs={12}
        md={5}
        sx={{ display: "flex", alignItems: "flex-start", mr: 5, my: 1 }}
       >
        <img
         src={circleCheck}
         alt=""
         style={{ marginRight: "10px", marginTop: "6px" }}
        />
        <Typography sx={{ fontSize: "1.2rem" }}>{point}</Typography>
       </Grid>
      ))}
     </Grid>
    </Box>
    {/* Sneak Peak section */}
    <Box>
     <Typography
      id="sneek"
      variant="h3"
      sx={{ color: "#10375C", fontWeight: "bold" }}
     >
      Course Sneak Peek
     </Typography>
     <Typography sx={{ my: 2, fontSize: "1.2rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> amet
      volutpat urna, mauris, adipiscing in dignissim vulputate.
     </Typography>
     <Grid container spacing={2} sx={{ my: 2 }}>
      {courseData?.sneakImg?.map((img, index) => (
       <Grid key={index} item xs={6} md={3}>
        <img src={img} alt="" style={{ maxWidth: "100%" }} />
       </Grid>
      ))}
     </Grid>
    </Box>
    {/* Course Outline */}
    <Box sx={{ mt: 8, mb: { xs: 60, sm: 70, md: 50, lg: 40 } }}>
     <Typography
      variant="h4"
      sx={{ color: "#10375C", fontWeight: "bold", mb: 4 }}
     >
      Course Outline
     </Typography>
     <Grid container spacing={2}>
      {courseData?.courseOutline?.map((outline, index) => (
       <Grid key={index} item xs={12}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
         <Grid
          item
          xs={8}
          sx={{ display: "flex", alignItems: "center", my: "6px" }}
         >
          <PlayCircleRoundedIcon
           sx={{ color: "#FF4958", mr: 2, fontSize: "2.8rem" }}
          />
          <Box>
           <Typography
            sx={{ color: "#10375C", fontWeight: "bold", fontSize: "1.2rem" }}
           >
            {outline?.title}
           </Typography>
           <Typography sx={{ color: "#515B61", fontSize: ".9rem", mt: 1 }}>
            {" "}
            {outline?.subtitle}
           </Typography>
          </Box>
         </Grid>
         <Grid item xs={3}>
          <Box
           sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           }}
          >
           <Box
            sx={{
             border: "0.8px dashed rgba(0, 0, 0, 0.4)",
             width: "60%",
             height: "1px",
            }}
           ></Box>
           <LockOutlinedIcon
            sx={{ width: "20%", color: "rgba(15, 45, 74, 0.5)" }}
           />
          </Box>
          <Typography sx={{ textAlign: "center", color: "#515B61" }}>
           {outline?.duration} mins
          </Typography>
         </Grid>
        </Grid>
       </Grid>
      ))}
     </Grid>
    </Box>
   </Container>
  </Box>
 );
};

export default CourseDetailsLearn;
