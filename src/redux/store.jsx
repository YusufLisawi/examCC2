import UserReducer from './UserSlice'
import TodoReducer from './TodoSlice'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    users: UserReducer,
    todos: TodoReducer,
})
const store = configureStore({
  reducer,
})

export default store;