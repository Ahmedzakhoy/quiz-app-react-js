import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quiz";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
