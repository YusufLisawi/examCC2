import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
	const response = await axios.get("https://dummyjson.com/posts");
	return response.data;
});

const PostsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getPosts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.posts = action.payload;
		});
		builder.addCase(getPosts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});
	},
});

export default PostsSlice.reducer;
