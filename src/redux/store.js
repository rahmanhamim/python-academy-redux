import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogsReducer from "./blogs/blogsReducer";
import coursesReducer from "./courses/coursesReducer";

const rootReducer = combineReducers({
 coursesData: coursesReducer,
 blogsData: blogsReducer,
});

const store = createStore(
 rootReducer,
 composeWithDevTools(applyMiddleware(thunk))
);

export default store;
