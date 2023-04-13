import { useContext, useEffect, useState } from "react";
import { getAllFavorites } from "../services/favoritesService";
import { AuthContext } from "../contexts/authContext";
import { CardComponent } from "./CardComponent";
import { getOne } from "../services/cardServices";

export const FavoriteCardsPage = () => {
  const [favIds, setFavId] = useState([]);
  const [favCards, setFavCards] = useState([]);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    getAllFavorites()
      .then((favs) => favs.filter((x) => x._ownerId === token.id))
      .then((favs) => favs[0])
      .then(favs=>favs.favorites)
      .then(favs=>favs.favorites)
      .then(favs=>console.log(favs))
      .then(x=>getOne(x).then((v) => setFavCards((state) => [...state, v])))
  }, []);



  return <div className="flex">{favCards.map((c) =><CardComponent key={c._id} url={c.url} id ={c._id} />)}</div>;
};
