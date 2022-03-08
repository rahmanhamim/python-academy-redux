import {
 FETCH_BLOGS_FAILURE,
 FETCH_BLOGS_REQUEST,
 FETCH_BLOGS_SUCCESS,
} from "./blogsTypes";

const initialState = {
 loading: false,
 courses: [],
 error: "",
};

const blogsReducer = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_BLOGS_REQUEST:
   return {
    ...state,
    loading: true,
   };

  case FETCH_BLOGS_SUCCESS:
   return {
    loading: false,
    courses: action.payload,
    error: "",
   };

  case FETCH_BLOGS_FAILURE:
   return {
    loading: false,
    courses: [],
    error: action.payload,
   };

  default:
   return state;
 }
};

export default blogsReducer;
