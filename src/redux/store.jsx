import UserReducer from './UserSlice'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    user: UserReducer,
})
const store = configureStore({
  reducer,
})

export default store;