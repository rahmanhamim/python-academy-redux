import { Box, Checkbox, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const SingleQuestion = ({
 option,
 handleQuestionCheking,
 questionLineStyle,
}) => {
 const [isChecked, setIsChecked] = useState(null);
 const onHandleIsChecked = () => {
  handleQuestionCheking(option.id);
  setIsChecked(option.id);
 };
 useEffect(() => {
  setIsChecked(null);
 }, []);

 return (
  <Box sx={questionLineStyle}>
   <RadioGroup>
    <Radio
     checked={option.id === isChecked}
     onClick={onHandleIsChecked}
     onChange={() => setIsChecked(option.id)}
    />
   </RadioGroup>
   <Typography sx={{ fontSize: "1.2rem" }}>{option?.option}</Typography>
  </Box>
 );
};

export default SingleQuestion;
