import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/counter/auth/authSlice"
import goalReducer from "../features/counter/goals/goalSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
