import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { characterSlice } from "../../slices/characterSlice";
import { fetchcharactersList } from "../../slices/characterSlice";
import { addLike, removeLike } from "../../slices/likeSlice";

import Like from "../Like";

const Favorites = (props) => {
  const dispatch = useDispatch();
  let [charactersList, setCharacterList] = useState([]);
  let [likesList, setLikesList] = useState([]);
  const { list: favorites } = useSelector((state) => state.likes);

  //map over charactersList and render each character
  const likeList = charactersList.map((character, index) => {
    return index % 2 === 0;
  });

  const onLike = (character, action) => {
    if (action === "add") {
      dispatch(addLike(character));
    } else {
      dispatch(removeLike(character));
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      <ul className="text-xs">
        {favorites.map((character, index) => (
          <div>
            <li key={character.id}>
              <div className="flex flex-row justify-between my-2 mx-6">
                <div>
                  <p>{character.name} </p>
                  <span className="font-thin">
                    {character.gender} | {character.birth_year}
                  </span>
                  <div className="flex flex-row bg-slate-700 rounded items-center align-center justify-center">
                    <MapPinIcon className="h-3 w-3" />
                    <span> {character.homeworld}</span>
                  </div>
                </div>
                <div>
                  <Like
                    isLiked={
                      favorites.filter(
                        (favorite) => favorite.id === character.id
                      ).length > 0
                        ? true
                        : false
                    }
                    character={character}
                    onLike={onLike}
                  />
                </div>
              </div>
              <hr className="solid" />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
