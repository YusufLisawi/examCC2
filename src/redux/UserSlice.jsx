import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
      users: [],
      loading: false,
      error: null,
    }

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get('https://dummyjson.com/users')
    return response.data
  })
  
const UserSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUsers.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.loading = false
			state.users = action.payload
		})
		builder.addCase(getUsers.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message
		})
	},
})

export default UserSlice.reducer