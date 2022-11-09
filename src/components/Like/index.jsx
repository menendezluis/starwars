import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

export default function Like(props) {
  const { isLiked, onLike, character } = props;
  const [like, setLike] = React.useState(isLiked);

  const addLocalStorageSaving = () => {
    const validate = localStorage.getItem("favorites");
    if (validate) {
      const favorites = JSON.parse(validate);
      favorites.push(character);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      localStorage.setItem("favorites", JSON.stringify([character]));
    }
  };

  const removeLocalStorageSaving = () => {
    const validate = localStorage.getItem("favorites");
    if (validate) {
      const favorites = JSON.parse(validate);
      const newFavorites = favorites.filter(
        (favorite) => favorite.name !== character.name
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };
  const handleClick = () => {
    setLike(!like);
    onLike(character, like ? "remove" : "add");
    like ? removeLocalStorageSaving() : addLocalStorageSaving();
  };

  return (
    <div className="rounded-full hover:bg-sky-700 p-2" onClick={handleClick}>
      {like ? (
        <HeartSolid className="h-3 w-3" />
      ) : (
        <HeartIcon className="h-3 w-3" />
      )}
    </div>
  );
}
