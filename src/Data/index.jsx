import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcharactersList } from "../slices/characterSlice";
import { setFavorites } from "../slices/likeSlice";

export default function Data({ children }) {
  const dispatch = useDispatch();

  const { list: characters } = useSelector((state) => state.characters);
  const { list: favorites } = useSelector((state) => state.likes);

  //take from local storage favorites
  const localFavorites = JSON.parse(localStorage.getItem("favorites"));

  useEffect(() => {
    dispatch(fetchcharactersList());
    dispatch(setFavorites(localFavorites ? localFavorites : []));
  }, []);

  return <>{children}</>;
}
