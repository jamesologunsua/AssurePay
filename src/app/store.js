import { configureStore } from "@reduxjs/toolkit"

const authReducer = (state = {}) => state

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
