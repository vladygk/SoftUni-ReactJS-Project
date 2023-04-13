import { useEffect, useState, useContext } from "react";
import { getOne, remove } from "../services/cardServices";
import { Link, useNavigate, useParams, Routes, Route } from "react-router-dom";
import { AuthContext } from "../contexts/authContext.jsx";
import { add, getAllFavorites } from "../services/favoritesService";
export const DetailsPage = () => {
  const [value, setValue] = useState({});

  const { cardId } = useParams();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getOne(cardId).then((v) => setValue(v));
  }, [cardId]);

  const removeHandler = async () => {
    await remove(cardId, token.token);
    navigate("/");
  };

  const isCreator = value._ownerId === token?.id;

  const addToFavoritesHandler = async () => {
    //Add current cardId to favorite array fro current user
    const oldFavorites = await getAllFavorites(token.id);
    const oldFavoritesForUser = {...(oldFavorites.filter(
      (x) => x.userId === token.id
    ))};
    
    const newFavorites = {...oldFavoritesForUser[0], favorites:[...oldFavoritesForUser[0].favorites,cardId]}
    
    await add(
      oldFavoritesForUser[0]._id,
      token.token,
      newFavorites
    );
  };
  return (
    <>
      <div className=" w-1/2 h-3/4 border-2 absolute left-1/4 text-white mt-4 bg-no-repeat bg-cover bg-[url('/details-bg.jpg')] border-gray-300 flex flex-col rounded-3xl overflow-hidden ">
        <div className="flex text-2xl p-2 justify-around border-b-2 border-gray-300 ">
          <h3 className="text-4xl text-center">{value.name}</h3>
          <h3 className="text-4xl text-center">Attribute: {value.attribute}</h3>
        </div>
        <div className="flex p-2 h-4/6 justify-center text-2xl">
          <img className="" src={value.url} alt="" />
        </div>
        <div className="h-2/6 bg-[url('/details-bg.jpg')] bg-no-repeat bg-cover text-center border-t-2 relative text-2xl ">
          <p>{value.description}</p>
        </div>
      </div>
      <div className=" flex flex-col absolute left-80 bottom-1/2 ">
        <Link
          to="/"
          className="text-center p-1 border-2 border-gray-300 w-32 h-12 rounded-xl text-2xl hover:bg-orange-900 hover:text-white bg-orange-500"
        >
          Back 🔙
        </Link>
        {token && (
          <button
            onClick={addToFavoritesHandler}
            className="text-center p-1 border-2 border-gray-300 w-32 h-12 rounded-xl text-2xl hover:bg-orange-900 hover:text-white bg-orange-500"
          >
            Add ❤️
          </button>
        )}
        {token && isCreator && (
          <Link
            to="edit"
            className="p-1 text-center border-2 border-gray-300 w-32 h-12 rounded-xl text-2xl hover:bg-orange-900 hover:text-white bg-orange-500"
          >
            Edit 🔧
          </Link>
        )}
        {token && isCreator && (
          <button
            onClick={removeHandler}
            className="p-1 border-2 border-gray-300 w-32 h-12 rounded-xl text-2xl hover:bg-orange-900 hover:text-white bg-orange-500"
          >
            Delete ❌
          </button>
        )}
      </div>
    </>
  );
};
