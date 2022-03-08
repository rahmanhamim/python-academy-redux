import axios from "axios";
import {
 FETCH_BLOGS_FAILURE,
 FETCH_BLOGS_REQUEST,
 FETCH_BLOGS_SUCCESS,
} from "./blogsTypes";

export const fetchBlogsRequest = () => {
 return {
  type: FETCH_BLOGS_REQUEST,
 };
};
export const fetchBlogsSuccess = (courses) => {
 return {
  type: FETCH_BLOGS_SUCCESS,
  payload: courses,
 };
};

export const fetchBlogsFailure = (error) => {
 return {
  type: FETCH_BLOGS_FAILURE,
  payload: error,
 };
};

export const fetchBlogs = () => {
 return (dispatch) => {
  dispatch(fetchBlogsRequest);
  axios
   .get(
    "https://raw.githubusercontent.com/rahmanhamim/python-academy-data/main/blogs.json"
   )
   .then((res) => {
    const courses = res.data;
    dispatch(fetchBlogsSuccess(courses));
   })
   .catch((err) => {
    const errorMsg = err.message;
    dispatch(fetchBlogsFailure(errorMsg));
   });
 };
};
