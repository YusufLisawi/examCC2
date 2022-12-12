import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	loading: false,
	error: null,
}

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
    const response = await axios.get('https://dummyjson.com/todos')
    return response.data
  })
  
const TodoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTodos.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getTodos.fulfilled, (state, action) => {
			state.loading = false
			state.todos = action.payload
		})
		builder.addCase(getTodos.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message
		})
	},
})

export default TodoSlice.reducer