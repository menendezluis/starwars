import React, { useEffect, useState } from "react";
import { HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

import { useDispatch, useSelector } from "react-redux";
import { characterSlice } from "../../slices/characterSlice";
import { fetchcharactersList } from "../../slices/characterSlice";

const Characters = (props) => {
  const dispatch = useDispatch();
  let [charactersList, setCharacterList] = useState([]);
  const { list: characters } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchcharactersList());
  }, []);

  useEffect(() => {
    console.log("characters", characters);
    setCharacterList(characters);
  }, [characters]);

  //map over charactersList and render each character
  return (
    <div>
      <h1>Characters</h1>
      <ul className="text-xs">
        {charactersList.map((character) => (
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
                  <HeartIcon className="h-3 w-3" />
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

export default Characters;
