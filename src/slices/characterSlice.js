import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";
export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    list: [],
  },
  reducers: {
    setcharacterList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setcharacterList } = characterSlice.actions;
export default characterSlice.reducer;

export const fetchcharactersList = () => (dispatch) => {
  axios
    .get(`${API_URL}/?page=1`)
    .then((res) => {
      const characters = res.data.results;
      const charactersWithHomeworld = characters.map((character) => {
        return axios.get(character.homeworld).then((res) => {
          return {
            ...character,
            homeworld: res.data.name,
          };
        });
      });
      Promise.all(charactersWithHomeworld).then((characters) => {
        dispatch(setcharacterList(characters));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
