import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const RegularButton = ({ content, fontSize, icon }) => {
 return (
  <Button
   sx={{
    fontSize: `${fontSize || "1rem"}`,
    bgcolor: "#FF4958",
    color: "#fff",

    padding: "1.2em 2em",
    border: "1px solid #FF4958",
    borderRadius: "3px",
    fontFamily: "Manrope",
    "&:hover": {
     bgcolor: "#F9B233",
     border: "1px solid #F9B233",
    },
   }}
  >
   {content}{" "}
   {icon === true && (
    <ArrowForwardIosIcon
     sx={{ fontSize: `${fontSize || "1rem"}`, ml: "3px" }}
    />
   )}
  </Button>
 );
};

export default RegularButton;
