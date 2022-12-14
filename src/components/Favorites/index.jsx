import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { characterSlice } from "../../slices/characterSlice";
import { fetchcharactersList } from "../../slices/characterSlice";
import { addLike, removeLike } from "../../slices/likeSlice";
import Characters from "../Characters";

import Like from "../Like";

const Favorites = (props) => {
  const dispatch = useDispatch();
  let [charactersList, setCharacterList] = useState([]);
  let [search, setSearch] = useState("");
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
      {favorites.length === 0 ? (
        <>
          <h1 className="text-xs m-4">Empty List you need to select a fav</h1>
          <hr className="solid m-8 " />
          <div className="opacity-80">
            <Characters />
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md p-2 m-4 bg-gray-900 text-white p-2 text-xs w-5/6"
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="text-xs">
            {favorites
              .filter((favorite) =>
                favorite.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((character, index) => (
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
        </>
      )}
    </div>
  );
};

export default Favorites;
