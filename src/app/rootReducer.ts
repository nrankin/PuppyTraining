import { combineReducers } from '@reduxjs/toolkit'
import { puppyReducer } from '../store/dog'

const RootReducer = combineReducers({
  puppy: puppyReducer,
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer
