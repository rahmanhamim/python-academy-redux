import { Box, Checkbox, Container, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleQuestion from "./SingleQuestion";

const QuizQuestions = () => {
 const questionLineStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  my: 2,
  bgcolor: "#f4f4f4",
  color: "rgba(0,0,0, 0.7)",
  py: 1,
  borderRadius: "5px",
 };
 const buttonStyles = {
  bgcolor: "#FF4958",
  color: "#fff",
  padding: ".5em 2em",
  border: "1px solid #FF4958",
  borderRadius: "3px",
  fontFamily: "Manrope",
  "&:hover": {
   bgcolor: "#F9B233",
   border: "1px solid #F9B233",
  },
 };

 const [questions, setQuestions] = useState([]);
 const [showFinalResults, setFinalResults] = useState(false);
 const [score, setScore] = useState(0);

 const [currentQuestion, setCurrentQuestion] = useState(0);

 useEffect(() => {
  fetch("quizContent.json")
   .then((res) => res.json())
   .then((data) => setQuestions(data));
 }, []);

 console.log(questions);

 const handleNextQuestion = () => {
  if (currentQuestion + 1 < questions.length) {
   setCurrentQuestion(currentQuestion + 1);
  } else {
   alert("final question reached");
  }
 };

 useEffect(() => {}, []);

 const handleQuestionCheking = (id) => {
  if (questions[currentQuestion].right_answer == id) {
   setScore(score + 1);
  }
 };

 return (
  <Container sx={{ fontFamily: "Lato" }}>
   <Box sx={{ bgcolor: "#fff", p: 5, borderRadius: "10px" }}>
    <Typography
     sx={{
      fontWeight: "bold",
      fontSize: "1.5rem",
      fontFamily: "Lato",
      color: "#10375C",
     }}
    >
     <Typography
      component="span"
      sx={{
       bgcolor: "#FF4958",
       color: "#fff",
       padding: "0.2em 0.5em",
       borderRadius: "5px",
       mr: 2,
       fontSize: "1.5rem",
      }}
     >
      {currentQuestion + 1}
     </Typography>
     {questions[currentQuestion]?.question}
    </Typography>

    <Box>
     {/* Question Container */}
     {questions[currentQuestion]?.options?.map((option, index) => (
      <SingleQuestion
       key={option.id}
       option={option}
       questionLineStyle={questionLineStyle}
       handleQuestionCheking={handleQuestionCheking}
      ></SingleQuestion>
     ))}
    </Box>
    {/* Question card footer */}
    <Box
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
     }}
    >
     <Typography
      sx={{ fontWeight: "bold", fontSize: "2rem", color: "#10375C" }}
     >
      Question {currentQuestion + 1}/10{" "}
     </Typography>
     <Button sx={buttonStyles} onClick={handleNextQuestion}>
      NEXT
     </Button>
    </Box>

    {/* Final Results */}
    <Box>
     THis is final results
     <Typography variant="h2">score: {score}</Typography>
    </Box>
   </Box>
  </Container>
 );
};

export default QuizQuestions;
