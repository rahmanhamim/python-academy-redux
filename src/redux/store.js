import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogsReducer from "./blogs/blogsReducer";
import { cartReducer } from "./cart/cartReducer";
import coursesReducer from "./courses/coursesReducer";

const rootReducer = combineReducers({
 coursesData: coursesReducer,
 blogsData: blogsReducer,
 cartData: cartReducer,
});

const store = createStore(
 rootReducer,
 composeWithDevTools(applyMiddleware(thunk))
);

export default store;
