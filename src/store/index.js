import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../slices/characterSlice";
import likesReducer from "../slices/likeSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    likes: likesReducer,
  },
});
