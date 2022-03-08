import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bgCertImg from "../../../img/certificate-section-img.png";
import certMockup from "../../../img/certficate-mockup.png";

const CourseDetailsCertification = () => {
 return (
  <Box
   sx={{
    background: "linear-gradient(137.85deg, #17145A -13.3%, #2B2C7E 97.34%)",
    color: "#fff",
   }}
  >
   <Container sx={{ py: 8 }}>
    <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
     <Grid
      item
      xs={12}
      md={6}
      sx={{ alignSelf: "flex-end", py: 5, position: "relative" }}
     >
      <Box
       sx={{
        position: "absolute",
        top: { xs: "-130%", sm: "-250%", md: "-200%", lg: "-210%" },
       }}
      >
       <img
        src={certMockup}
        style={{ borderRadius: "31px", maxWidth: "100%" }}
        alt=""
       />
       {/* certificate mockup img */}
      </Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
       Get Certified
      </Typography>
      <Typography sx={{ color: "rgba(255, 255, 255, 0.8)", mt: 1 }}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, cursus
       imperdiet viverra sit. At libero iaculis nibh viverra nec porttitor
       tellus quam habitasse. Vestibulum posuere aliquet suspendisse sagittis
       dictumst ut libero in tellus. Ut sed scelerisque sed augue pretium.
       Pretium, ultrices id augue ut adipiscing. Ultricies elit pharetra
       tincidunt duis a integer non velit. Mauris, faucibus id congue non vel in
       sed scelerisque. Id ultrices mauris in quisque. Nunc, lectus blandit
       lobortis mauris pellentesque non.
      </Typography>
     </Grid>
     <Grid item xs={12} md={5}>
      <img style={{ maxWidth: "100%" }} src={bgCertImg} alt="" />
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default CourseDetailsCertification;
