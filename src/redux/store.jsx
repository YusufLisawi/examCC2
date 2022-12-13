import UserReducer from "./UserSlice";
import PostsReducer from "./PostsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducer = combineReducers({
	users: UserReducer,
	posts: PostsReducer,
});
const store = configureStore({
	reducer,
});

export default store;
