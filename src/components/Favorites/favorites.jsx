import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../Card/Card";
import {
  removeFav,
  addFav,
  filterCards,
  orderCards,
} from "../../Redux/actions";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {myFavorites &&
        myFavorites.map((it) => {
          return (
            <Card
              id={it.id}
              name={it.name}
              species={it.species}
              gender={it.gender}
              status={it.status}
              origin={it.origin.name}
              image={it.image}
              onClose={it.onClose}
              ></Card>
          );
        })}
    </div>
  );
}
