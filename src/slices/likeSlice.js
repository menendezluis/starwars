import { createSlice } from "@reduxjs/toolkit";
//likeSlice.js
export const likeSlice = createSlice({
  name: "likes",
  initialState: {
    list: [],
  },
  reducers: {
    setFavorites: (state, action) => {
      state.list = action.payload;
    },

    //add character to like list
    addLike: (state, action) => {
      state.list.push(action.payload);
    },
    //remove character from like list
    removeLike: (state, action) => {
      state.list = state.list.filter(
        (character) => character.name !== action.payload.name
      );
    },
  },
});
export const { addLike, removeLike, setFavorites } = likeSlice.actions;
export default likeSlice.reducer;

//get likes list
export const getLikesList = (state) => state.likes.list;
