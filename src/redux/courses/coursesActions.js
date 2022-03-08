import axios from "axios";
import {
 FETCH_COURSES_FAILURE,
 FETCH_COURSES_REQUEST,
 FETCH_COURSES_SUCCESS,
} from "./coursesTypes";

export const fetchCoursesRequest = () => {
 return {
  type: FETCH_COURSES_REQUEST,
 };
};
export const fetchCoursesSuccess = (courses) => {
 return {
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
 };
};

export const fetchCoursesFailure = (error) => {
 return {
  type: FETCH_COURSES_FAILURE,
  payload: error,
 };
};

export const fetchCourses = () => {
 return (dispatch) => {
  dispatch(fetchCoursesRequest);
  axios
   .get(
    "https://raw.githubusercontent.com/rahmanhamim/python-academy-data/main/courses.json"
   )
   .then((res) => {
    const courses = res.data;
    dispatch(fetchCoursesSuccess(courses));
   })
   .catch((err) => {
    const errorMsg = err.message;
    dispatch(fetchCoursesFailure(errorMsg));
   });
 };
};
