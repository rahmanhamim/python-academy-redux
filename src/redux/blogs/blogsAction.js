import axios from "axios";
import {
 FETCH_BLOGS_FAILURE,
 FETCH_BLOGS_REQUEST,
 FETCH_BLOGS_SUCCESS,
} from "./blogsTypes";

export const fetchCoursesRequest = () => {
 return {
  type: FETCH_BLOGS_REQUEST,
 };
};
export const fetchCoursesSuccess = (courses) => {
 return {
  type: FETCH_BLOGS_SUCCESS,
  payload: courses,
 };
};

export const fetchCoursesFailure = (error) => {
 return {
  type: FETCH_BLOGS_FAILURE,
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
